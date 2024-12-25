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

// TODO [Alper] client-database'e tasi methodu, daha sonra database'i service'e cevir.
ClientSchema.methods.reserveMeeting = async function (manager) {
  const reservation = await Reservation.create({
    name: this.name + "/" + manager.name,
  });
  await this.reservationList.push(reservation);
  await manager.shelter.reservationList.push(reservation);
  await this.save();
  await manager.shelter.save();
  await manager.save();

  return reservation;
};

ClientSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Client", ClientSchema);