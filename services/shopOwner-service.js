const BaseService = require("./base-service");
const ShopOwner = require("../models/shopOwner");

class ShopOwnerService extends BaseService {}

module.exports = new ShopOwnerService(ShopOwner);
