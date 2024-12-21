const { clientDatabase, shelterManagerDatabase } = require("../database");
const flatted = require("flatted");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const clients = await clientDatabase.load();
  //   res.send(flatted.stringify(clients));
  res.render("clients", { clients });
});

//abstraction-leak
router.get("/:clientId", async (req, res) => {
  const client = await clientDatabase.findBy("_id", req.params.clientId);

  if (!client) return res.status(404).send("There is no client with given id");

  res.render("client", { client });
});

router.post("/", async (req, res) => {
  // const client = Client.create(req.body);

  const client = await clientDatabase.insert(req.body);

  res.send(client);
});

router.post("/:clientId/reservations", async (req, res) => {
  const { clientId } = req.params;
  const { shelterManagerId } = req.body;

  const client = await clientDatabase.findBy("_id", clientId);
  const shelterManager = await shelterManagerDatabase.findBy(
    "_id",
    shelterManagerId
  );

  client.reserveMeeting(shelterManager);

  await clientDatabase.update(client);

  res.send(flatted.stringify(client));
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
