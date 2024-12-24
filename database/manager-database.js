const BaseDatabase = require("./base-database");
const Manager = require("../models/manager");

class ManagerDatabase extends BaseDatabase {}

module.exports = new ManagerDatabase(Manager);
