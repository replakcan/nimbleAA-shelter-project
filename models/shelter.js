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
}
