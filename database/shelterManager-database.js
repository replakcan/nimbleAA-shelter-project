const BaseDatabase = require("./base-database");
const ShelterManager = require("../models/shelterManager");

class ShelterManagerDatabase extends BaseDatabase {
  async findByName(name) {
    const objects = await this.load();

    return objects.find((o) => o.name == name);
  }
}

module.exports = new ShelterManagerDatabase(ShelterManager);
