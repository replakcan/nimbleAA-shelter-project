const User = require("./user");
const Shelter = require("./shelter");
const Animal = require("./animal");

module.exports = class ShelterManager extends User {
  constructor(name, age, Shelter) {
    super(name, age);
    this.Shelter = Shelter;
  }

  addAnimal(animal) {
    const newAnimal = Animal.create(animal);
    this.Shelter.animalList.push(newAnimal);

    console.log("bir heyvan listeye eklendi");
  }

  static create({ name, age, Shelter: shltr }) {
    return new ShelterManager(name, age, Shelter.create(shltr));
  }
};
