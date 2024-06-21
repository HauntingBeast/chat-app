const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const { generateTokenAndCookie } = require("../middleware/generateJWT");
const User = require("../model/user");

const login = async (req, res) => {
  res.status(StatusCodes.OK).send("login page");
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

  res.status(StatusCodes.CREATED).json(newUser);
};

const logout = async (req, res) => {
  res.status(StatusCodes.OK).send("logout page");
};

module.exports = { login, signup, logout };
