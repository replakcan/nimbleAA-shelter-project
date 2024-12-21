const { clientDatabase, shelterManagerDatabase } = require("../database");
const flatted = require("flatted");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const clients = await clientDatabase.load();
  //   res.send(flatted.stringify(clients));
  res.render("clients", { clients });
});

router.get("/:clientId", async (req, res) => {
  const client = await clientDatabase.findBy("id", req.params.clientId);

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

  const client = await clientDatabase.findBy("id", clientId);
  const shelterManager = await shelterManagerDatabase.findBy(
    "id",
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

//ABSTRACTION_LEAK örneği: normalde parametre ismim "id"'ydi sadece, kendi yazdığım veri tabanından mongoDB'ye geçerken parametre ismini "_id" yapmam gerekti çünkü mongoDB böyle saklıyor id'leri. Database ile route dosyalarım yeterince iyi tasarlansaydı birbirlerinden haberleri olmasına gerek olmayacaktı ama şu an mongoDB'ye ayak uydurabilmek için istemediğim bir sebepten route'umu güncellemek durumunda kaldım.
router.delete("/:clientId", async (req, res) => {
  const client = await clientDatabase.removeBy("_id", req.params.clientId);

  res.send(client);
});

module.exports = router;
