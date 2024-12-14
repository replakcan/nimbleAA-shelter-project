const User = require("./user")

module.exports = class ShopOwner extends User {
  constructor(name, age, Role, PetShop) {
    super(name, age, Role);
    this.PetShop = PetShop;
  }
}
