const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/week-5", {serverSelectionTimeoutMS: 30000 });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we are connected to mongodb!");
});
