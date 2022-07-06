const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: String,
  username: String,
  fullname: String,
  password: String,
  role: String,
});

// tạo model
const User = mongoose.model("User", UserSchema);

module.exports = User;
