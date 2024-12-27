const BaseService = require("./base-service");
const ContactInfo = require("../models/contactInfo");

class ContactInfoService extends BaseService {}

module.exports = new ContactInfoService(ContactInfo);
