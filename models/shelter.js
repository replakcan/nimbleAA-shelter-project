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
  animalList: [],
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

//TODO [alper] Shelter'in id'si olmali mi?
/* module.exports = class Shelter {
  constructor(
    name,
    animalCapacity,
    ContactInfo,
    animalList = [],
    reservationList = []
  ) {
    this.name = name;
    this.animalCapacity = animalCapacity;
    this.ContactInfo = ContactInfo;
    this.animalList = animalList;
    this.reservationList = reservationList;
  }

  static create({
    name,
    animalCapacity,
    ContactInfo: cntctInfo,
    animalList: anmlList,
    reservationList: rsrvtnList,
  }) {
    const newShelter = new Shelter(
      name,
      animalCapacity,
      ContactInfo.create(cntctInfo)
    );

    newShelter.animalList = anmlList.map((animal) => Animal.create(animal));
    newShelter.reservationList = rsrvtnList.map((reservation) =>
      Reservation.create(reservation)
    );

    return newShelter;
  }
}; */
