const Client = require("./models/client");
const ShopOwner = require("./models/shopOwner");
const ShelterManager = require("./models/shelterManager");
const PetShop = require("./models/petShop");
const Shelter = require("./models/shelter");
const ContactInfo = require("./models/contactInfo");
const Animal = require("./models/animal");
const Reservation = require("./models/reservation");
const Product = require("./models/product");
const Injury = require("./models/injury");
const shelterManagerDatabase = require("./shelterManager-database");
const clientDatabase = require("./client-database");

const loadedClients = clientDatabase.load();

const alper = loadedClients[0];

console.log(alper);
