const User = require("./user");
const Shelter = require("./shelter");
const Animal = require("./animal");
const uuid = require("uuid");

module.exports = class ShelterManager extends User {
  constructor(id = uuid.v4(), name, age, Shelter) {
    super(name, age);
    this.id = id;
    this.Shelter = Shelter;
  }

  addAnimal(animal) {
    const newAnimal = Animal.create(animal);
    this.Shelter.animalList.push(newAnimal);

    console.log("bir heyvan listeye eklendi");
  }

  static create({ id, name, age, Shelter: shltr }) {
    return new ShelterManager(id, name, age, Shelter.create(shltr));
  }
};
