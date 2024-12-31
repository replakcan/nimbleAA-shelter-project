const BaseService = require("./base-service");
const Animal = require("../models/animal");

class AnimalService extends BaseService {}
module.exports = new AnimalService(Animal);
