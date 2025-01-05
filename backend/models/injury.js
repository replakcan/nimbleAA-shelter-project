const mongoose = require("mongoose");

const InjurySchema = new mongoose.Schema({
  description: String,
});

module.exports = mongoose.model("Injury", InjurySchema);
