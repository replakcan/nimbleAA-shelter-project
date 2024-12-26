const BaseDatabase = require("./base-database");
const Manager = require("../models/manager");

class ManagerDatabase extends BaseDatabase {
  async find(id) {
    return this.model.findById(id).populate("shelter");
  }
}

module.exports = new ManagerDatabase(Manager);
