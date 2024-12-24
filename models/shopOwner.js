const mongoose = require("mongoose");

const PetShopOwnerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  petShop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PetShop",
    autopopulate: true,
  },
});

PetShopOwnerSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("PetShopOwner", PetShopOwnerSchema);
