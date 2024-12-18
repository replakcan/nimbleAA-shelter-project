const User = require("./user");
const Reservation = require("./reservation");
const Animal = require("./animal");

module.exports = class Client extends User {
  constructor(name, age, pets = []) {
    super(name, age);
    this.pets = pets;
  }

  findShelter() {}

  reserveMeeting(shelterOwner) {
    const newDate = new Date();
    const newReserv = new Reservation(
      "ReservedBy " + this.name,
      newDate,
      newDate.getTime()
    );

    shelterOwner.Shelter.reservationList.push(newReserv);
  }

  adoptAnimal() {}

  buyStuff() {}

  static create({ name, age, pets }) {
    const newClient = new Client(name, age, pets);

    newClient.pets.map((pet) => Animal.create(pet));

    return newClient;
  }
};
