const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const User = require("../model/user");

const login = async (req, res) => {
  res.status(StatusCodes.OK).send("login page");
};

const signup = async (req, res) => {
  const { fullName, userName, password, confirmPassword, gender } = req.body;
  if (password != confirmPassword) {
    throw new BadRequestError("password doesn't match");
  }
  const user = await User.find({ userName });
  if (user) {
    throw new BadRequestError("userName already in use");
  }
};

const logout = async (req, res) => {
  res.status(StatusCodes.OK).send("logout page");
};

module.exports = { login, signup, logout };
