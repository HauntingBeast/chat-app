const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide name"],
    },
    userName: {
      type: String,
      required: [true, "Please provide username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: [6, "Password length must be greater then 6"],
    },
    gender: {
      type: String,
      required: [true, `Please provide gender`],
      enum: {
        values: ["male", "female", "others"],
        message: "Gender must be either male, female, or others",
      },
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", UserSchema);
