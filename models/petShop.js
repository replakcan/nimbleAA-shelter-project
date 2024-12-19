const ContactInfo = require("./contactInfo");
const Product = require("./product");

//TODO [alper] petShop'un id'si olmali mi?
module.exports = class PetShop {
  constructor(ContactInfo, productList = []) {
    this.ContactInfo = ContactInfo;
    this.productList = productList;
  }

  static create({ ContactInfo: cntctInfo, productList: prdctlst }) {
    const newPetShop = new PetShop(ContactInfo.create(cntctInfo));
    newPetShop.productList = prdctlst.map((product) => Product.create(product));

    return newPetShop;
  }
};
