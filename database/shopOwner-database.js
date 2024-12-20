const BaseDatabase = require("./base-database");
const ShopOwner = require("../models/shopOwner");

class ShopOwnerDatabase extends BaseDatabase {
  // async findByName(name) {
  //   const objects = await this.load();

  //   return objects.find((o) => o.name == name);
  // }
}

module.exports = new ShopOwnerDatabase(ShopOwner);
