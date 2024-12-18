const Animal = require("./animal");
const ContactInfo = require("./contactInfo");
const Reservation = require("./reservation");

module.exports = class Shelter {
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
};
