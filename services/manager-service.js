const BaseService = require("./base-service");
const Manager = require("../models/manager");
const Animal = require("../models/animal");
const shelterService = require("./shelter-service");

class ManagerService extends BaseService {
  async find(id) {
    return this.model.findById(id).populate("shelter");
  }

  async addAnimal(managerId, breed, age) {
    const newAnimal = await Animal.create({ breed, age });

    const manager = await this.find(managerId);
    const shelter = await shelterService.find(manager.shelter);

    shelter.animalList.push(newAnimal);

    await shelter.save();
    await manager.save();

    return newAnimal;
  }
}

module.exports = new ManagerService(Manager);
