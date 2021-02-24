const express = require("express");
const route = express.Router();
const userValid = require("./jwt");
const controller = require("../Controllers/main");
route.get("/home", userValid, controller.main);
module.exports = route;