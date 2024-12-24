const BaseDatabase = require("./base-database");
const Shelter = require("../models/shelter");

class ShelterDatabase extends BaseDatabase {}

module.exports = new ShelterDatabase(Shelter);
