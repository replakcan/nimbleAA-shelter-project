const BaseService = require("./base-service");
const Client = require("../models/client");
const meetingService = require("./meeting-service");

class ClientService extends BaseService {
  constructor(model, managerService) {
    super(model);
    this.managerService = managerService;
  }

  async reserveMeeting(clientId, managerId) {
    const client = await this.find(clientId);
    const manager = await this.managerService.find(managerId);

    const reservation = await meetingService.insert({
      client: client,
      shelter: manager.shelter,
    });
    await client.reservationList.push(reservation);
    await manager.shelter.reservationList.push(reservation);
    await client.save();
    await manager.shelter.save();
    await manager.save();

    return reservation;
  }
}

module.exports = (managerService) => new ClientService(Client, managerService);
