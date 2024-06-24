const jwt = require("jsonwebtoken");
const { UnauthenticatedError, NotFoundError } = require("../errors");
const User = require("../model/user");
const auth = async (req, res, next) => {
  try {
    // console.log(req.cookies);

    const token = req.cookies.jwt;
    // console.log(token);
    if (!token) {
      throw new UnauthenticatedError("No token provided");
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (!payload) {
      throw new UnauthenticatedError("Authentication invalid");
    }
    // console.log(payload);
    // attach the user to the job routes
    const user = await User.findOne({ userName: payload.userID }).select(
      `-password`
    );
    // console.log(user);
    if (!user) {
      throw new NotFoundError("user not found");
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
