const mongoose = require("mongoose");

const ContactInfoSchema = new mongoose.Schema({
  phone: String,
  email: String,
  location: String,
});

module.exports = mongoose.model("ContactInfo", ContactInfoSchema);
