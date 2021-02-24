const stateModel = require("../Model/state");
const childModel = require("../Model/child");
const districtModel = require("../Model/district");
const controller = {};

controller.getState = async (req, res) => {
  const data = await stateModel.signup
    .find({})
    .exec((err, result) => {
      if (err) console.log(err);
      console.log(result);
      res.json(result);
    });
};

controller.postState = async (req, res) => {
  let { name } = req.body;
  const data = await new stateModel.signup({
    name,
    
  });
  try {
    let stateSaved = await data.save();
    res.send(stateSaved);
  } catch (error) {
    console.log(error);
  }
};

controller.getDistrict = async (req, res) => {
  const data = await districtModel.signup
    .find({})
    .exec((err, result) => {
      if (err) console.log(err);
      console.log(result);
      res.json(result);
    });
};

controller.postDistrict = async (req, res) => {
  let { name,stateName } = req.body;
  const data = await new districtModel.signup({
    name,
    stateName
  });
  try {
    let districtSaved = await data.save();
    res.send(districtSaved);
  } catch (error) {
    console.log(error);
  }
};

controller.getChild = async (req, res) => {
  const data = await childModel.signup
    .find({})
    .exec((err, result) => {
      if (err) console.log(err);
      console.log(result);
      res.json(result);
    });
};

controller.postChild = async (req, res) => {
  let { name, sex, dob, fatherName, motherName, state, district } = req.body;
  const data = await new childModel.signup({
    name,
    sex,
    dob,
    fatherName,
    motherName,
    state,
    district,
  });
  try {
    let childSaved = await data.save();
    res.send(childSaved);
  } catch (error) {
    console.log(error);
  }
};

module.exports = controller;