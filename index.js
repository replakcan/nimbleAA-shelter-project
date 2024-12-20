const express = require("express");
const { clientDatabase } = require("./database");
const flatted = require("flatted");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/clients", async (req, res) => {
  const clients = await clientDatabase.load();
  //   res.send(flatted.stringify(clients));
  res.render("clients", { clients });
});

app.get("/clients/:clientId", async (req, res) => {
  const client = await clientDatabase.findBy("id", req.params.clientId);

  if (!client) return res.status(404).send("There is no client with given id");

  res.render("client", { client });
});

app.post("/clients", async (req, res) => {
  // const client = Client.create(req.body);

  const client = await clientDatabase.insert(req.body);

  res.send(client);
});

app.delete("/clients/:clientId", async (req, res) => {

  const client = await clientDatabase.removeBy("id", req.params.clientId);
  
  res.send(client);

})

app.listen(3000, () => {
  console.log("started listening on 3000");
});
