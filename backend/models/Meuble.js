const mongoose = require("mongoose");

const MeubleSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
  inspiration : {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  imgUrl: {
    //required: true,
    type: String,
  },
});

const Meuble = mongoose.model("Meuble", MeubleSchema);

module.exports = Meuble;
