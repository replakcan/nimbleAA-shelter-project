const { contactInfoService } = require("../services");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const contactInfos = await contactInfoService.load();
  res.render("contactInfos", { contactInfos });
});

router.get("/:contactInfoId", async (req, res) => {
  const contactInfo = await contactInfoService.findBy(
    "_id",
    req.params.contactInfoId
  );

  if (!contactInfo)
    return res.status(404).send("There is no contactInfo with given id");

  res.render("contactInfo", { contactInfo });
});

router.post("/", async (req, res) => {
  const contactInfo = await contactInfoService.insert(req.body);

  res.send(contactInfo);
});

module.exports = router;
