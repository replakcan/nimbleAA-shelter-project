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
const {
  clientDatabase,
  shelterManagerDatabase,
  shopOwnerDatabase,
} = require("./database");

const alper = new Client(undefined, "Alper", 28);
const mutlu = new Client(undefined, "Mutlu", 28);

// const murat = new ShopOwner(
//   undefined,
//   "Murat",
//   49,
//   new PetShop(new ContactInfo(531923, "murat@abi.com", "Istanbul"), [
//     new Product("Oyuncak", "Titreyen Top", 14, 4.2),
//   ])
// );

// const yasemince = new ShelterManager(
//   undefined,
//   "Yasemin",
//   33,
//   new Shelter(
//     "Yuvacik",
//     49,
//     new ContactInfo(842752, "yasmin@shelter.com", "Izmir"),
//     [
//       new Animal(undefined, "Dog", 5, [
//         new Injury("soguk-alginligi"),
//         new Injury("sol-on-ayak-hafif-topalliyor"),
//       ]),
//     ]
//   )
// );

main = async () => {
  /* const clients = await clientDatabase
    .save([alper])
    .then(() => clientDatabase)
    .then(() => clientDatabase.insert(mutlu))
    .then(() => clientDatabase.load()); */
  try {
    await clientDatabase.save([alper]);
    await clientDatabase.insert(mutlu);
    await clientDatabase.remove(1);
    await clientDatabase.update(alper);
    const clients = await clientDatabase.load();
    // const alpo = await clientDatabase.findByName("Alper");

    // console.log(alpo);
    console.log(clients);
  } catch (e) {
    return console.log(e);
  }
};

main();

// console.log(murat, yasemince);

// clientDatabase.save([alper, mutlu]);
// shopOwnerDatabase.save([murat]);
// shelterManagerDatabase.save([yasemince]);

// const clients = clientDatabase.load();
// const managers = shelterManagerDatabase.load();
// const shopOwners = shopOwnerDatabase.load();

// console.log(clients, managers, shopOwners);

/* console.log(1);

console.log(2); */
