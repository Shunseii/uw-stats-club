const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: String,
  body: String,
  date: String,
  time: String
});

module.exports = model("Event", eventSchema);
