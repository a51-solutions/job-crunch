require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

// use body parser to get data from POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use API routes from the api folder
const apis = require("./api");
app.use("/api", apis);

// Connect to Mongo
/**
 * TODO - SETUP
 * Add DB=<Mongo Connection String>
 * https://wookenstein.medium.com/mern-full-stack-tutorial-2020-part-1-backend-server-side-73e38125b04f#:~:text=the%20list%20underneath-,Database%20Access,-%E2%80%94%20this%20will%20allow
 */

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Listening on port ${port}`));
