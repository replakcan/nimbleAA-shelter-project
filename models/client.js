const User = require("./user");
const Reservation = require("./reservation");

module.exports = class Client extends User {
  constructor(name, age, Role) {
    super(name, age, Role);
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

  static create({ name, age, role }) {
    return new Client(name, age, role);
  }
};
