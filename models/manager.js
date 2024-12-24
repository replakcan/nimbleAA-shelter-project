/* const User = require("./user");
const Shelter = require("./shelter");
const Animal = require("./animal");
const uuid = require("uuid");

module.exports = class Manager extends User {
  constructor(id = uuid.v4(), name, age, Shelter) {
    super(name, age);
    this.id = id;
    this.Shelter = Shelter;
    }
    
    addAnimal(animal) {
      const newAnimal = Animal.create(animal);
      this.Shelter.animalList.push(newAnimal);
      
      console.log("bir heyvan listeye eklendi");
      }
      
      static create({ id, name, age, Shelter: shltr }) {
        return new Manager(id, name, age, Shelter.create(shltr));
        }
        }; */

const mongoose = require("mongoose");
const Shelter = require("./shelter");

const ManagerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  shelter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shelter",
    autopopulate: 2,
  },
});

ManagerSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Manager", ManagerSchema);
