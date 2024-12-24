const { managerDatabase } = require("../database");
const flatted = require("flatted");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const managers = await managerDatabase.load();
  res.render("managers", { managers });
});

//abstraction-leak
router.get("/:managerId", async (req, res) => {
  const manager = await managerDatabase.findBy(
    "_id",
    req.params.managerId
  );

  if (!manager)
    return res.status(404).send("There is no manager with given id");

  res.render("manager", { manager });
});

router.post("/", async (req, res) => {
  const manager = await managerDatabase.insert(req.body);

  res.send(manager);
});

router.patch("/:managerId", async (req, res) => {
  const { name } = req.body;
  const { managerId } = req.params;

  await managerDatabase.update(managerId, { name });
});

router.delete("/:managerId", async (req, res) => {
  const manager = await managerDatabase.removeBy(
    "_id",
    req.params.managerId
  );

  res.send(manager);
});

module.exports = router;
