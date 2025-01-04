const mongoose = require("mongoose");
const PetShop = require("./petShop");

const PetShopOwnerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  petShop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PetShop",
    autopopulate: 2,
  },
});

PetShopOwnerSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("PetShopOwner", PetShopOwnerSchema);
