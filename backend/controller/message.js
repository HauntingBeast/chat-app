const sendMessage = async (req, res) => {
  const { message } = req.body;
  const { id } = req.params;

  const senderId = req.user._id;
  res.json({ id: id, senderId: senderId });
};

module.exports = { sendMessage };
