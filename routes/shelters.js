const { shelterDatabase } = require("../database");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const shelters = await shelterDatabase.load();
  res.render("shelters", { shelters });
});

//abstraction-leak
router.get("/:shelterId", async (req, res) => {
  const { shelterId } = req.params;
  const shelter = await shelterDatabase.find(shelterId);

  if (!shelter)
    return res.status(404).send("There is no shelter with given id");

  res.render("shelter", { shelter });
});

router.get("/:shelterId/animal-list", async (req, res) => {
  const { shelterId } = req.params;
  const shelter = await shelterDatabase.find(shelterId);

  const animalList = shelter.animalList;

  res.render("manager-animal-list", { animalList });
});

router.post("/", async (req, res) => {
  const shelter = await shelterDatabase.insert(req.body);

  res.send(shelter);
});

module.exports = router;
