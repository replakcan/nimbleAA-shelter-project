const Reservation = require("../models/reservation");
const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  pets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Animal",
    autopopulate: 2,
  }],
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
