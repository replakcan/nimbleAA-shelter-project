const Injury = require("./injury");
const uuid = require("uuid");

module.exports = class Animal {
  constructor(id = uuid.v4(), age, injuries = []) {
    this.id = id;
    this.age = age;
    this.injuries = injuries;
  }

  static create({ id, age, injuries: injries }) {
    const newAnimal = new Animal(id, age);

    newAnimal.injuries = injries?.map((injury) => Injury.create(injury));

    return newAnimal;
  }
};
