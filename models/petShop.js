module.exports = class PetShop {
  constructor(ContactInfo, productList = []) {
    this.ContactInfo = ContactInfo;
    this.productList = productList;
  }
}
