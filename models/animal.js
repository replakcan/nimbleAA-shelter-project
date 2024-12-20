const Injury = require("./injury");
const uuid = require("uuid");

module.exports = class Animal {
  constructor(id = uuid.v4(), breed, age, injuries = []) {
    this.id = id;
    this.breed = breed;
    this.age = age;
    this.injuries = injuries;
  }

  static create({ id, breed, age, injuries: injries }) {
    const newAnimal = new Animal(id, breed, age);

    newAnimal.injuries = injries?.map((injury) => Injury.create(injury));

    return newAnimal;
  }
};
