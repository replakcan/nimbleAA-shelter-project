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

// const loadedClients = db.load("clients");
// const loadedManagers = db.load("shelter-managers");

// const meco = ShelterManager.create(loadedManagers[0]);

// console.log(meco);

const product1 = new Product("Yem", "Kus Yemi", 15, 4.2);
const ShopeLisa = new PetShop(
  new ContactInfo(538753, "melisa@shop.com", "Marmaris"),
  [product1]
);

const melisa = new ShopOwner("Melisa", 52, ShopeLisa);


db.save("shop-owners", [melisa]);
const loadedShopOwners = db.load("shop-owners");

const melis = ShopOwner.create(loadedShopOwners[0]);




