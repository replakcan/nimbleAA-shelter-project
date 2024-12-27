const shelterService = require("./shelter-service");
const managerServiceFactory = require("./manager-service");
const clientServiceFactory = require("./client-service");

const managerService = managerServiceFactory(shelterService);
const clientService = clientServiceFactory(managerService);

const contactInfoService = require("./contact-info-service");
const shopOwnerService = require("./shopOwner-service");
const meetingService = require("./meeting-service");

module.exports = {
  clientService,
  managerService,
  shopOwnerService,
  shelterService,
  contactInfoService,
  meetingService,
};
