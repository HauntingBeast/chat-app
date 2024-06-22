const express = require("express");

const router = express.Router();
const auth = require("../middleware/authentication");

const { sendMessage, getMessages } = require("../controller/message");

router.route("/:id").get(auth, getMessages);
router.route("/send/:id").post(auth, sendMessage);

module.exports = router;
