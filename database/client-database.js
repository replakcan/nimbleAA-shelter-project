const BaseDatabase = require("./base-database");
const Client = require("../models/client");

class ClientDatabase extends BaseDatabase {
  // async findByName(name) {
  //   const objects = await this.load();

  //   return objects.find((o) => o.name == name);
  // }
}

module.exports = new ClientDatabase(Client);
