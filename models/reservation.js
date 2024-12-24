/* module.exports = class Reservation {
  constructor(name) {
    this.name = name;
    this.date = new Date();
  }

  static create({ name, time, date }) {
    return new Reservation(name, time, date);
  }
};
 */

const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Reservation", ReservationSchema);
