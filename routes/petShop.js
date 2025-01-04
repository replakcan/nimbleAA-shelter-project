const { petShopService } = require("../services");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const petShops = await petShopService.load();
  res.send(petShops);
});

router.get("/:petShopId", async (req, res) => {
  const { petShopId } = req.params;
  try {
    const petShop = await petShopService.find(petShopId);
    
    res.send(petShop)  
  } catch (error) {
    return res.status(404).send("There is no petShop with given id");
  }
});

router.get("/:petShopId/product-list", async (req, res) => {
  const { petShopId } = req.params;
  const petShop = await petShopService.find(petShopId);

  const productList = petShop.productList;

  res.send(productList);
});

router.post("/", async (req, res) => {
  const petShop = await petShopService.insert(req.body);

  res.send(petShop);
});

module.exports = router;
