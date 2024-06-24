const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const { generateTokenAndCookie } = require("../middleware/generateJWT");
const User = require("../model/user");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    throw new BadRequestError("provide userName and password");
  }
  const user = await User.findOne({ userName });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const comp = await bcrypt.compare(password, user.password);
  if (!comp) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  generateTokenAndCookie(userName, res);
  res.status(StatusCodes.OK).json({
    _id: user._id,
    fullName: user.fullName,
    username: user.username,
    profilePic: user.profilePic,
  });
};

const signup = async (req, res) => {
  const { fullName, userName, password, confirmPassword, gender } = req.body;
  if (password != confirmPassword) {
    throw new BadRequestError("password doesn't match");
  }
  let profilePic;
  if (gender === "male") {
    profilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
  } else if (gender === "female") {
    profilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
  } else {
    profilePic = `https://avatar.iran.liara.run/public?username=${userName}`;
  }

  const newUser = await User.create({
    fullName,
    userName,
    password,
    gender,
    profilePic,
  });

  generateTokenAndCookie(userName, res);

  res.status(StatusCodes.CREATED).json({
    _id: newUser._id,
    fullName: newUser.fullName,
    userName: newUser.userName,
    profilePic: newUser.profilePic,
  });
};

const logout = async (req, res) => {
  res.clearCookie("jwt");
  res.status(StatusCodes.OK).json("msg:logged out successfully");
};

module.exports = { login, signup, logout };
