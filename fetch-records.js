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

// const alper = new Client(undefined, "Alper", 28);
// const mutlu = new Client(undefined, "Mutlu", 28);
// const sude = new Client(undefined, "Sude", 20, [
//   new Animal(undefined, "Cat", 1),
// ]);
// const nermin = new Client(undefined, "Nermin", 20);

// const murat = new ShopOwner(
//   undefined,
//   "Murat",
//   49,
//   new PetShop(new ContactInfo(531923, "murat@abi.com", "Istanbul"), [
//     new Product("Oyuncak", "Titreyen Top", 14, 4.2),
//   ])
// );

/* const yasemince = new ShelterManager(
  undefined,
  "Yasemin",
  33,
  new Shelter(
    "Yuvacik",
    49,
    new ContactInfo(842752, "yasmin@shelter.com", "Izmir"),
    [
      new Animal(undefined, "Dog", 5, [
        new Injury("soguk-alginligi"),
        new Injury("sol-on-ayak-hafif-topalliyor"),
      ]),
    ]
  )
); */

// alper.reserveMeeting(yasemince);
main = async () => {
  try {
    const clients = await clientDatabase.load();
    const managers = await shelterManagerDatabase.load();
    // const sude = await clientDatabase.findBy("id", "8d67e67f-76f2-42c0-8ca5-ec930add93e6");

    // const yasmin = await shelterManagerDatabase.findBy("name", "Yasemin");
    // sude.reserveMeeting(yasmin);
    console.log(managers[0].id);
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
