const PetShop = require("./petShop");
const User = require("./user");
const uuid = require("uuid");

module.exports = class ShopOwner extends User {
  constructor(id = uuid.v4(), name, age, PetShop) {
    super(name, age);
    this.id = id;
    this.PetShop = PetShop;
  }

  static create({ id, name, age, PetShop: ptshp }) {
    return new ShopOwner(id, name, age, PetShop.create(ptshp));
  }
};
