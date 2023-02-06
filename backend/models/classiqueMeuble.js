const mongoose = require("mongoose");

const classiqueMeubleSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  imgUrl: {
    required: true,
    type: String,
  },
});

const classiqueMeuble = mongoose.model("classiqueMeuble", classiqueMeubleSchema);

module.exports = classiqueMeuble;
