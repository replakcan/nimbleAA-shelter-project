const BaseDatabase = require("./base-database");
const ContactInfo = require("../models/contactInfo");

class ContactInfoDatabase extends BaseDatabase {}

module.exports = new ContactInfoDatabase(ContactInfo);
