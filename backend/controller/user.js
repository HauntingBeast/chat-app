const StatusCodes = require("http-status-codes");
const User = require("../model/user");

const getUserForSidebar = async (req, res) => {
  const loggedInUser = req.user._id;

  const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select(
    "-password"
  );

  res.status(StatusCodes.OK).json(allUsers);
};

module.exports = { getUserForSidebar };
