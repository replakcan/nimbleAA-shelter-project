const { shelterService } = require("../services");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const shelters = await shelterService.load();
  res.render("shelters", { shelters });
});

router.get("/:shelterId", async (req, res) => {
  const { shelterId } = req.params;
  try {
    const shelter = await shelterService.find(shelterId);
    
    res.send(shelter)  
  } catch (error) {
    return res.status(404).send("There is no shelter with given id");
  }
});

router.get("/:shelterId/animal-list", async (req, res) => {
  const { shelterId } = req.params;
  const shelter = await shelterService.find(shelterId);

  const animalList = shelter.animalList;

  res.render("manager-animal-list", { animalList });
});

router.post("/", async (req, res) => {
  const shelter = await shelterService.insert(req.body);

  res.send(shelter);
});

module.exports = router;
