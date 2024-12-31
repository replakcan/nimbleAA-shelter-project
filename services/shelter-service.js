const BaseService = require("./base-service");
const Shelter = require("../models/shelter");
const animalService = require("./animal-service");

class ShelterService extends BaseService {
  async find(id) {
    return this.model.findById(id).populate("animalList");
  }

  async findShelterByAnimalId(animalId) {
    const shelter = await this.model.findOne({ animalList: animalId });
    console.log("shelter:", shelter)
    return shelter;
  }
}

module.exports = new ShelterService(Shelter);
