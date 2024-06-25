const Conversation = require("../model/conversation");
const Message = require("../model/message");
const { StatusCodes } = require("http-status-codes");
const { getReceiverSocketId, io } = require("../socket/socket");

const sendMessage = async (req, res) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;

  const senderId = req.user._id;
  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = new Message({
    senderId,
    receiverId,
    message,
  });

  if (newMessage) {
    conversation.message.push(newMessage._id);
  }

  await Promise.all([conversation.save(), newMessage.save()]);

  const receiverSocketId = getReceiverSocketId(receiverId);

  if (receiverSocketId) {
    io.to(receiverSocketId).emit("newMessage", newMessage);
  }

  res.status(StatusCodes.CREATED).json(newMessage);
};

const getMessages = async (req, res) => {
  const { id: userToChatId } = req.params;
  const senderId = req.user._id;

  const conversation = await Conversation.findOne({
    participants: { $all: [senderId, userToChatId] },
  }).populate("message");

  if (!conversation) {
    res.status(StatusCodes.OK).json([]);
  }

  res.status(StatusCodes.OK).json(conversation.message);
};

module.exports = { sendMessage, getMessages };
