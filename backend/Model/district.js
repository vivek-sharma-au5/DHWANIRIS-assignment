const mongoose = require("mongoose");
var district = {};

const districtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
   stateName: {
    type: String,
    required: true,
  },
});
district.signup = mongoose.model("district", districtSchema);
module.exports = district;