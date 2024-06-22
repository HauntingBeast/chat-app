const express = require("express");

const auth = require("../middleware/authentication");

const { getUserForSidebar } = require("../controller/user");
const router = express.Router();

router.route("/").get(auth, getUserForSidebar);

module.exports = router;
