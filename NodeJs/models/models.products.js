const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema
const ProSchema = new Schema({
  pro_Id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
});

module.exports = ProductSchema = mongoose.model("products", ProSchema);
