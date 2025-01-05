const express = require("express");
const bodyParser = require("body-parser");
const clientsRouter = require("./routes/clients");
const managersRouter = require("./routes/managers");
const sheltersRouter = require("./routes/shelters");
const contactInfosRouter = require("./routes/contact-infos");
const meetingRouter = require("./routes/meetings");
const petShopRouter = require("./routes/petShop");
const shopOwnerRouter = require("./routes/petShopOwner");
const cors = require("cors");

const indexRouter = require("./routes/index");
require("./mongo-connection");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.set("view engine", "pug");

app.use("/", indexRouter);
app.use("/clients", clientsRouter);
app.use("/pet-shops", petShopRouter);
app.use("/meetings", meetingRouter);
app.use("/shelters", sheltersRouter);
app.use("/managers", managersRouter);
app.use("/shop-owners", shopOwnerRouter);
app.use("/contact-infos", contactInfosRouter);

module.exports = app;