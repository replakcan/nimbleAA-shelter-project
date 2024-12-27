const Reservation = require("../models/reservation");
const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  pets: [],
  reservationList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservation",
      autopopulate: 2,
    },
  ],
});

ClientSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Client", ClientSchema);
