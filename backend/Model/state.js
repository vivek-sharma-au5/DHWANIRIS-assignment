const mongoose = require("mongoose");
var state = {};

const stateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
state.signup = mongoose.model("state", stateSchema);
module.exports = state;