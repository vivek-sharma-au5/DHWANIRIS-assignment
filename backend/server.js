const express = require("express");
const app = express();
const loginRoute = require("./Routes/login");
const allRoute = require("./Routes/Routes");
const bodyParser = require("body-parser");
const path = require("path");
const main = require("./Routes/main");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require("mongoose");
mongoose.connect(
  process.env.ATLAS,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Database connected");
  }
);
mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.use("/main/", main);
app.use("/auth/", loginRoute);
app.use("/api", allRoute);


app.listen(process.env.PORT || 5000, console.log("Server started at 5000"));