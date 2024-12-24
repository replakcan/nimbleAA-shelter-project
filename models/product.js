const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  category: String,
  title: String,
  price: Number,
  rating: String,
});

module.exports = mongoose.model("Product", ProductSchema);
