module.exports = class Animal {
  constructor(breed, age, injuries = []) {
    this.breed = breed;
    this.age = age;
    this.injuries = injuries;
  }
}
