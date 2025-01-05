const { managerService } = require("../services");
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

  const addsAnimal = await managerService.addAnimal(managerId, breed, age);

  res.send(addsAnimal);
});

router.get("/:managerId", async (req, res) => {
  const { managerId } = req.params;
  try {
    const manager = await managerService.find(managerId);
    res.render("manager", { manager });
  } catch (error) {
    return res.status(404).send("There is no manager with given id");
  }
});

router.patch("/:managerId", async (req, res) => {
  const { name } = req.body;
  const { managerId } = req.params;

  const updatedManager = await managerService.update(managerId, { name });

  res.send(updatedManager);
});

router.delete("/:managerId", async (req, res) => {
  const manager = await managerService.removeBy("_id", req.params.managerId);

  console.log(manager);
  res.send(manager);
});

module.exports = router;
