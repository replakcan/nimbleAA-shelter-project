const BaseService = require("./base-service");
const Shelter = require("../models/shelter");

class ShelterService extends BaseService {
  async find(id) {
    return this.model.findById(id).populate("animalList");
  }

  async findShelterByAnimalId(animalId) {
    const shelter = await this.model.findOne({ animalList: animalId });
    
    return shelter;
  }
}

module.exports = new ShelterService(Shelter);
