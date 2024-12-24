const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Reservation", ReservationSchema);
