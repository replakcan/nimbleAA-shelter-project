// const User = require("./user");
// const Reservation = require("./reservation");
// const Animal = require("./animal");
// const uuid = require("uuid");
const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  pets: [],
  reservationList: []

});

module.exports = mongoose.model("Client", ClientSchema);

// module.exports = class Client extends User {
//   constructor(id = uuid.v4(), name, age, pets = [], reservationList = []) {
//     super(name, age);
//     this.id = id;
//     this.pets = pets;
//     this.reservationList = reservationList;
//   }

//   findShelter() {}

//   reserveMeeting(shelterOwner) {
//     const newDate = new Date();
//     const newReserv = new Reservation(
//       "ReservedBy " + this.name,
//       newDate,
//       newDate.getTime()
//     );

//     this.reservationList.push(newReserv);
//     shelterOwner.Shelter.reservationList.push(newReserv);
//   }

//   adoptAnimal() {}

//   buyStuff() {}

//   static create({ id, name, age, pets, reservationList }) {
//     const newClient = new Client(id, name, age, pets, reservationList);

//     newClient.pets.map((pet) => Animal.create(pet));
//     newClient.reservationList.map((reservation) =>
//       Reservation.create(reservation)
//     );
//     return newClient;
//   }
// };
