const { shopOwnerService, petShopService } = require("../services");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const shopOwners = await shopOwnerService.load();
  res.send(shopOwners);
});

router.post("/", async (req, res) => {
  const shopOwner = await shopOwnerService.insert(req.body);

  res.send(shopOwner);
});

router.get("/:shopOwnerId/:shopId/product-list", async (req, res) => {
  const { shopId } = req.params;
  const petShop = await petShopService.find(shopId);

  const productList = petShop.productList;

  res.send(productList);
});

router.post("/:shopOwnerId/:shopId/product-list", async (req, res) => {
  const { shopId } = req.params;
  const { category, title, price, rating } = req.body;

  const addsproduct = await shopOwnerService.addProduct(
    shopId,
    category,
    title,
    price,
    rating
  );
  res.send(addsproduct);
});

router.get("/:shopOwnerId", async (req, res) => {
  const { shopOwnerId } = req.params;
  try {
    const shopOwner = await shopOwnerService.find(shopOwnerId);
    res.send(shopOwner);
  } catch (error) {
    return res.status(404).send("There is no shopOwner with given id");
  }
});

router.patch("/:shopOwnerId", async (req, res) => {
  const { name } = req.body;
  const { shopOwnerId } = req.params;

  const updatedshopOwner = await shopOwnerService.update(shopOwnerId, { name });

  res.send(updatedshopOwner);
});

router.delete("/:shopOwnerId", async (req, res) => {
  const shopOwner = await shopOwnerService.removeBy(
    "_id",
    req.params.shopOwnerId
  );

  res.send(shopOwner);
});

module.exports = router;
