const BaseService = require("./base-service");
const Shelter = require("../models/shelter");

class ShelterService extends BaseService {
  async find(id) {
    return this.model.findById(id).populate("animalList");
  }
}

module.exports = new ShelterService(Shelter);
