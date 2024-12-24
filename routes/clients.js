const { clientDatabase, managerDatabase } = require("../database");
const flatted = require("flatted");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const clients = await clientDatabase.load();
  res.render("clients", { clients });
});

//abstraction-leak
router.get("/:clientId", async (req, res) => {
  const client = await clientDatabase.findBy("_id", req.params.clientId);

  if (!client) return res.status(404).send("There is no client with given id");

  res.render("client", { client });
});

router.post("/", async (req, res) => {
  const client = await clientDatabase.insert(req.body);

  res.send(client);
});

router.post("/:clientId/reservations", async (req, res) => {
  const { clientId } = req.params;
  const { managerId } = req.body;

  const client = await clientDatabase.find(clientId);
  const manager = await managerDatabase.find(managerId);

  const meeting = await client.reserveMeeting(manager);

  await clientDatabase.update(client);
  await managerDatabase.update(manager);


  res.send(meeting);
});

router.patch("/:clientId", async (req, res) => {
  const { name } = req.body;
  const { clientId } = req.params;

  await clientDatabase.update(clientId, { name });
});

router.delete("/:clientId", async (req, res) => {
  const client = await clientDatabase.removeBy("_id", req.params.clientId);

  res.send(client);
});

module.exports = router;
