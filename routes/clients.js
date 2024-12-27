const { clientService, managerService } = require("../services");
const flatted = require("flatted");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const clients = await clientService.load();
  res.render("clients", { clients });
});

//abstraction-leak
router.get("/:clientId", async (req, res) => {
  const { clientId } = req.params;
  const client = await clientService.find(clientId);

  if (!client) return res.status(404).send("There is no client with given id");

  res.render("client", { client });
});

router.post("/", async (req, res) => {
  const client = await clientService.insert(req.body);

  res.send(client);
});

router.post("/:clientId/reservations", async (req, res) => {
  const { clientId } = req.params;
  const { managerId } = req.body;

  const meeting = await clientService.reserveMeeting(clientId, managerId);

  res.send(meeting);
});

router.patch("/:clientId", async (req, res) => {
  const { name } = req.body;
  const { clientId } = req.params;

  await clientService.update(clientId, { name });
});

router.delete("/:clientId", async (req, res) => {
  const client = await clientService.removeBy("_id", req.params.clientId);

  res.send(client);
});

module.exports = router;
