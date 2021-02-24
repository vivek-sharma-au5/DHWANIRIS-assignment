const mongoose = require("mongoose");
var child = {};

const childSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
  },
  sex: {
    type: String,
    required: true,
    min: 5,
  },
  dob: {
    type: Date,
   required: true,
  },
    fatherName: {
    type: String,
   required: true,
    min: 5,
  },
  motherName: {
    type: String,
    required: true,
  },
  state:{
    type: String,
   required: true,
  },
  district:{
    type: String,
    required: true,
  }
});
child.signup = mongoose.model("child", childSchema);
module.exports = child;