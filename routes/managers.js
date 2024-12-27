const { managerService, shelterService } = require("../services");
const flatted = require("flatted");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const managers = await managerService.load();
  res.render("managers", { managers });
});

router.post("/", async (req, res) => {
  const manager = await managerService.insert(req.body);

  res.send(manager);
});

router.get("/:managerId/animal-list", async (req, res) => {
  const manager = await managerService.find(req.params.managerId);

  const animalList = manager.shelter.animalList;

  res.render("manager-animal-list", { animalList });
});

router.post("/:managerId/animal-list", async (req, res) => {
  const { managerId } = req.params;
  const { breed, age } = req.body;

  const manager = await managerService.find(managerId);
  const shelter = await shelterService.find(manager.shelter);
  const addsAnimal = await manager.addAnimal(shelter, breed, age);

  // console.log(manager, shelter)

  await managerService.update(manager);
  await shelterService.update(shelter);
  res.send(addsAnimal);
});

//abstraction-leak
router.get("/:managerId", async (req, res) => {
  const { managerId } = req.params;
  const manager = await managerService.find(managerId);

  if (!manager)
    return res.status(404).send("There is no manager with given id");

  res.render("manager", { manager });
});

router.patch("/:managerId", async (req, res) => {
  const { name } = req.body;
  const { managerId } = req.params;

  await managerService.update(managerId, { name });
});

router.delete("/:managerId", async (req, res) => {
  const manager = await managerService.removeBy("_id", req.params.managerId);

  res.send(manager);
});

module.exports = router;
