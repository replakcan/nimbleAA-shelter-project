const Injury = require("./injury");

module.exports = class Animal {
  constructor(breed, age, injuries = []) {
    this.breed = breed;
    this.age = age;
    this.injuries = injuries;
  }

  static create({ breed, age, injuries: injries }) {
    const newAnimal = new Animal(breed, age);
    
    newAnimal.injuries = injries?.map((injury) => Injury.create(injury));

    return newAnimal;
  }
};
