const mongoose = require("mongoose");

const ManagerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  shelter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shelter",
    autopopulate: 2,
  },
});

ManagerSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Manager", ManagerSchema);
