const express = require("express");

const router = express.Router();
const auth = require("../middleware/authentication");
const { sendMessage } = require("../controller/message");

router.route("/send/:id").post(auth, sendMessage);

module.exports = router;
