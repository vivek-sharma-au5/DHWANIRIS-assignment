const express = require("express");
const route = express.Router();
const controller = require("../Controllers/login");


route.post("/signup", controller.signup);
route.post("/login", controller.login);
//route.post("/logout", controller.logout);

module.exports = route;
