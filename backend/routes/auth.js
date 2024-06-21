const express = require("express");

const router = express.Router();

const { login, signup, logout } = require("../controller/auth");

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/logout").post(logout);

module.exports = router;
