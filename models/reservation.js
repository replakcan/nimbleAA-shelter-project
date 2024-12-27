const mongoose = require("mongoose");
const { default: mongooseAutoPopulate } = require("mongoose-autopopulate");

const ReservationSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    mongooseAutoPopulate: 3,
  },
  shelter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shelter",
    mongooseAutoPopulate: 3,
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
