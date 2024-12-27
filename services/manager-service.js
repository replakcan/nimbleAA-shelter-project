const BaseService = require("./base-service");
const Manager = require("../models/manager");

class ManagerService extends BaseService {
  async find(id) {
    return this.model.findById(id).populate("shelter");
  }
}

module.exports = new ManagerService(Manager);
