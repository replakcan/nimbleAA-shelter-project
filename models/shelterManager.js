const User = require("./user");
const Shelter = require("./shelter");

module.exports = class ShelterManager extends User {
  constructor(name, age, Shelter) {
    super(name, age);
    this.Shelter = Shelter;
  }

  updateShelterAnimalList() {}

  static create({ name, age, Shelter: shltr }) {
    return new ShelterManager(name, age, Shelter.create(shltr));
  }
};
