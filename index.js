const express = require("express");
const { clientDatabase } = require("./database");
const flatted = require("flatted");

const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/clients", async (req, res) => {
  const clients = await clientDatabase.load();
  //   res.send(flatted.stringify(clients));
  res.render("clients", { clients });
});

/* app.get("/clients/:clientId", async (req, res) => {
    const client = await clientDatabase.findByName();


}) */

app.listen(3000, () => {
  console.log("started listening on 3000");
});
