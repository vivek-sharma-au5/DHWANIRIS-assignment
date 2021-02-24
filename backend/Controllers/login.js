const userModel = require("../Model/auth");
const jwt = require("jsonwebtoken");
var controller = {};

//Login Controller
controller.login = async (req, res) => {
  let { username , password } = req.body;
  const user = await userModel.login.findOne({ username });
  if (user) {
    
    if (password !== user.password ) {
      res.status(400).send("Password not matched");
    } else {
      console.log("user loged in");
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
      res.header("auth-token", token).send({ token, user });
    }
  } else {
    res.status(401).send("Email not found");
  }
};

controller.signup = async (req, res) => {
  //Creating a User
  try {
        const found = await userModel.login.findOne({
          username: req.body.username,
        });
        if (found) return res.send("User already Exists");
        const user = await new userModel.login({
          username: req.body.username,
          password: req.body.password,
        });
        let userSaved = await user.save();
        res.send(userSaved);
        res.status(200).send("User created successfully");
    }
  catch (error) {
    console.log(error);
  }
};

module.exports = controller;