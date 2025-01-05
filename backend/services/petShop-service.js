const BaseService = require("./base-service");
const PetShop = require("../models/petShop");

class PetShopService extends BaseService {
  async find(id) {
    return this.model.findById(id).populate("productList");
  }

}

module.exports = new PetShopService(PetShop);
