module.exports = class Reservation {
  constructor(name) {
    this.name = name;
    this.date = new Date();
  }

  static create({ name, time, date }) {
    return new Reservation(name, time, date);
  }
};
