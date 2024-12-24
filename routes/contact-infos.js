const { contactInfoDatabase } = require("../database");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const contactInfos = await contactInfoDatabase.load();
  res.render("contactInfos", { contactInfos });
});

//abstraction-leak
router.get("/:contactInfoId", async (req, res) => {
  const contactInfo = await contactInfoDatabase.findBy(
    "_id",
    req.params.contactInfoId
  );

  if (!contactInfo)
    return res.status(404).send("There is no contactInfo with given id");

  res.render("contactInfo", { contactInfo });
});

router.post("/", async (req, res) => {
  const contactInfo = await contactInfoDatabase.insert(req.body);

  res.send(contactInfo);
});

module.exports = router;
