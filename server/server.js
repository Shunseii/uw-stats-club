const express = require("express");
// const path = require('path');
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// TODO: Move value to .env file and switch to MongoDB Atlas
const MONGODB_URI = "mongodb://localhost:27018/uw_stats_club_backend";
const port = 3000;
const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// MongoDB setup
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
mongoose.connection.once("open", function () {
  console.log("Connected to the Database.");
});
mongoose.connection.on("error", function (error) {
  console.log("Mongoose Connection Error : " + error);
});

app.get("/", function (request, response) {
  response.send("Hello World!");
});

// TODO: Set up GraphQL

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
