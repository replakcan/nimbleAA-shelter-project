const { clientService } = require("../services");
const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send(await clientService.load());
});

router.get("/:clientId", async (req, res) => {
  const { clientId } = req.params;

  try {
    const client = await clientService.find(clientId);
    res.send(client);
  } catch (error) {
    console.log(error);
    return res.status(404).send("There is no client with given id");
  }
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

  const updatedClient = await clientService.update(clientId, { name });

  res.send(updatedClient);
});

router.delete("/:clientId", async (req, res) => {
  const client = await clientService.removeBy("_id", req.params.clientId);

  res.send(client);
});

module.exports = router;
