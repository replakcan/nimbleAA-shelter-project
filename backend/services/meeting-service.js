const BaseService = require("./base-service");
const Reservation = require("../models/reservation");

class MeetingService extends BaseService {
  async find(id) {
    return this.model.findById(id).populate("client").populate("shelter");
  }

  async findByShelterId(shelterId) {
    return this.findBy("shelter", shelterId);
  }

  async findByClientId(clientId) {
    return this.findBy("client", clientId);
  }
}

module.exports = new MeetingService(Reservation);
