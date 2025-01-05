const mongoose = require("mongoose");
const ContactInfo = require("./contactInfo");
const Product = require("./product");

const PetShopSchema = new mongoose.Schema({
  contactInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ContactInfo",
    autopopulate: 2,
  },
  productList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      autopopulate: 2,
    },
  ],
});

PetShopSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("PetShop", PetShopSchema);
