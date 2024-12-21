const express = require("express");
const bodyParser = require("body-parser");
const clientsRouter = require("./routes/clients");
const indexRouter = require("./routes/index");

const app = express();
app.use(bodyParser.json());

app.set("view engine", "pug");

app.use("/clients", clientsRouter);
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("started listening on 3000");
});
