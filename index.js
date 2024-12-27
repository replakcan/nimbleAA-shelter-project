const express = require("express");
const bodyParser = require("body-parser");
const clientsRouter = require("./routes/clients");
const managersRouter = require("./routes/managers");
const sheltersRouter = require("./routes/shelters");
const contactInfosRouter = require("./routes/contact-infos");
const meetingRouter = require("./routes/meetings");

const indexRouter = require("./routes/index");
require("./mongo-connection");

const app = express();
app.use(bodyParser.json());

app.set("view engine", "pug");

app.use("/", indexRouter);
app.use("/clients", clientsRouter);
app.use("/meetings", meetingRouter);
app.use("/managers", managersRouter);
app.use("/shelters", sheltersRouter);
app.use("/contact-infos", contactInfosRouter);

app.listen(3000, () => {
  console.log("started listening on 3000");
});
