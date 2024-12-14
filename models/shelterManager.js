const User = require("./user");
const Shelter = require("./shelter");
const ContactInfo = require("./contactInfo");

module.exports = class ShelterManager extends User {
  constructor(name, age, Role, Shelter) {
    super(name, age, Role);
    this.Shelter = Shelter;
  }

  updateShelterAnimalList() {}

  static create(owner) {
    const newShelter = new Shelter(
      owner.Shelter.name,
      owner.Shelter.animalCapacity,
      new ContactInfo(
        owner.Shelter.ContactInfo.phone,
        owner.Shelter.ContactInfo.email,
        owner.Shelter.ContactInfo.location
      ),
      owner.Shelter.animalList
    );
    const newManager = new ShelterManager(owner.name, owner.age);
    newManager.Shelter = newShelter;

    return newManager;
  }
};
