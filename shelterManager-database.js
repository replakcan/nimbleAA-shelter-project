const BaseDatabase = require("./base-database");
const ShelterManager = require("./models/shelterManager");

class ShelterManagerDatabase extends BaseDatabase {
    findByName(name) {
        const objects = this.load();
    
        return objects.find((o) => o.name == name);
      }
}

module.exports = new ShelterManagerDatabase(ShelterManager);
