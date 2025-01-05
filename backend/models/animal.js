const mongoose = require("mongoose");
const Injury = require("./injury");

const AnimalSchema = new mongoose.Schema({
  breed: String,
  age: Number,
  injuries: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Injury", autopopulate: true },
  ],
});

AnimalSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Animal", AnimalSchema);
