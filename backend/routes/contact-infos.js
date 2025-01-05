const { contactInfoService } = require("../services");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const contactInfos = await contactInfoService.load();
  res.render("contactInfos", { contactInfos });
});

router.get("/:contactInfoId", async (req, res) => {
  try {
    const contactInfo = await contactInfoService.findBy(
      "_id",
      req.params.contactInfoId
    );
    res.render("contactInfo", { contactInfo });
  } catch (error) {
    console.log(error);
    return res.status(404).send("There is no contactInfo with given id");
  }
});

router.post("/", async (req, res) => {
  const contactInfo = await contactInfoService.insert(req.body);

  res.send(contactInfo);
});

module.exports = router;
