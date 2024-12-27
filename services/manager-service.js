const BaseService = require("./base-service");
const Manager = require("../models/manager");
const Animal = require("../models/animal");

class ManagerService extends BaseService {
  constructor(model, shelterService) {
    super(model);
    this.shelterService = shelterService;
  }

  async find(id) {
    return this.model.findById(id).populate("shelter");
  }

  async addAnimal(managerId, breed, age) {
    const newAnimal = await Animal.create({ breed, age });

    const manager = await this.find(managerId);
    const shelter = await this.shelterService.find(manager.shelter);

    shelter.animalList.push(newAnimal);

    await shelter.save();
    await manager.save();

    return newAnimal;
  }
}

module.exports = (shelterService) => new ManagerService(Manager, shelterService);
