const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  shelter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shelter",
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
