const BaseService = require("./base-service");
const Client = require("../models/client");
const meetingService = require("./meeting-service");
const shelterService = require("./shelter-service");

class ClientService extends BaseService {
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

  async adoptAnimal(clientId, animalId) {
    const client = await this.find(clientId);
    const shelter = await shelterService.findShelterByAnimalId(animalId);
    
    await client.pets.push(animalId);
    await shelter.animalList.pull(animalId);
    
    await client.save();
    await shelter.save();

    return { client, shelter };
  }
}

module.exports = new ClientService(Client);
