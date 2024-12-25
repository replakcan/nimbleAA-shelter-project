const Animal = require("./animal");
const ContactInfo = require("./contactInfo");
const Reservation = require("./reservation");
const mongoose = require("mongoose");


const ShelterSchema = new mongoose.Schema({
  name: String,
  animalCapacity: Number,
  contactInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ContactInfo",
    autopopulate: 2,
  },
  animalList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Animal",
      autopopulate: 3,
    },
  ],
  reservationList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservation",
      autopopulate: 3,
    },
  ],
});

ShelterSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Shelter", ShelterSchema);
