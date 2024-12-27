const BaseService = require("./base-service");
const Client = require("../models/client");
const meetingService = require("./meeting-service");
const managerService = require("./manager-service");

class ClientService extends BaseService {
  async reserveMeeting(clientId, managerId) {
    const client = await this.find(clientId);
    const manager = await managerService.find(managerId);

    const reservation = await meetingService.insert({
      client: client,
      shelter: manager.shelter,
    });
    await client.reservationList.push(reservation);
    await manager.shelter.reservationList.push(reservation);
    await client.save();
    await manager.shelter.save();
    await manager.save();

    return manager;
  }
}

module.exports = new ClientService(Client);
