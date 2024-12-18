module.exports = class ContactInfo {
  constructor(phone, email, location) {
    this.phone = phone;
    this.email = email;
    this.location = location;
  }

  static create({ phone, email, location }) {
    return new ContactInfo(phone, email, location);
  }
};
