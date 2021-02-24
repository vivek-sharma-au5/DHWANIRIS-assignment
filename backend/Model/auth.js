const mongoose = require("mongoose");
var user = {};

const UserSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    min: 4,
  },
    password: {
    type: String,
    required: false,
  },
  
});
user.login = mongoose.model("user", UserSchema);
module.exports = user;