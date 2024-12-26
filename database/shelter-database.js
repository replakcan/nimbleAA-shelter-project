const BaseDatabase = require("./base-database");
const Shelter = require("../models/shelter");

class ShelterDatabase extends BaseDatabase {
  async find(id) {
    return this.model.findById(id).populate("animalList");
  }
}

module.exports = new ShelterDatabase(Shelter);
