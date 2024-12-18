const PetShop = require("./petShop");
const User = require("./user");

module.exports = class ShopOwner extends User {
  constructor(name, age, PetShop) {
    super(name, age);
    this.PetShop = PetShop;
  }

  static create({ name, age, PetShop: ptshp }) {
    return new ShopOwner(name, age, PetShop.create(ptshp));
  }
};
