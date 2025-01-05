const BaseService = require("./base-service");
const ShopOwner = require("../models/shopOwner");
const Product = require("../models/product");
const petShopService = require("./petShop-service");

class ShopOwnerService extends BaseService {
  async addProduct(shopId, category, title, price, rating) {
    const newProduct = await Product.create({ category, title, price, rating });

    const petShop = await petShopService.find(shopId);
    
    await petShop.productList.push(newProduct);

    await petShop.save();

    return newProduct;
  }
}

module.exports = new ShopOwnerService(ShopOwner);
