const jwt = require("jsonwebtoken");

const generateTokenAndCookie = (userID, res) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: true,
    secure: process.env.NODE_ENV !== "development",
  });
};

module.exports = { generateTokenAndCookie };
