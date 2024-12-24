const BaseDatabase = require("./base-database");
const Client = require("../models/client");

class ClientDatabase extends BaseDatabase {}

module.exports = new ClientDatabase(Client);
