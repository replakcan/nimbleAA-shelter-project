const db = require("./database");
const Role = require("./models/role");
const Client = require("./models/client");
const ShopOwner = require("./models/shopOwner");
const ShelterManager = require("./models/shelterManager");
const PetShop = require("./models/petShop");
const Shelter = require("./models/shelter");
const ContactInfo = require("./models/contactInfo");
const Animal = require("./models/animal");
const Breed = require("./models/breed");
const Reservation = require("./models/reservation");
const Product = require("./models/product");
const Injury = require("./models/injury");

// const alper = new Client("Alper", 28, Role.CLIENT);
const mehmut = new ShopOwner(
  "Mehmut",
  31,
  Role.SHOP_OWNER,
  new PetShop(new ContactInfo(+90531, "replakcan@repla.com", "Istanbul"))
);

/* const mecit = new ShelterManager(
  "Mecit",
  38,
  Role.SHELTER_MANAGER,
  new Shelter(
    "shelterOMG",
    29,
    new ContactInfo(12345, "shelter@sumida.com", "Kapalicarsi")
  )
); */

// const susaInjury = new Injury("wet eyes");
// const susa = new Animal(Breed.CAT, 5);

// susa.injuries.push(susaInjury);

// mecit.Shelter.reservationList.push(alperReserve);
// mecit.Shelter.animalList.push(susa);

// console.log("MECIT: ", loadedFile);

// db.save("shelter-owners", [mecit]);

// db.save("clients", [alper]);

const loadedManagers = db.load("shelter-owners");
const loadedClients = db.load("clients");
const alper = loadedClients[0];
const mecit = loadedManagers[0];
// const mecit = loadedManagers[0];

const alpo = Client.create(loadedClients[0]);
// console.log(mecit);

const meco = ShelterManager.create(loadedManagers[0]);
console.log(meco);

// alper.reserveMeeting(mecit);

// console.log("LOADED_CLIENTS: ", loadedClients[0])
// console.log("LOADED_SHELTER_OWNERS: ", loadedManagers);
