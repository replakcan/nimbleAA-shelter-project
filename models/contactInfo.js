/* module.exports = class ContactInfo {
  constructor(phone, email, location) {
    this.phone = phone;
    this.email = email;
    this.location = location;
  }

  static create({ phone, email, location }) {
    return new ContactInfo(phone, email, location);
  }
};
 */
const mongoose = require("mongoose");

const ContactInfoSchema = new mongoose.Schema({
  phone: String,
  email: String,
  location: String,
});

module.exports = mongoose.model("ContactInfo", ContactInfoSchema);
