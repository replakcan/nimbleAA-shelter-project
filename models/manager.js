const mongoose = require("mongoose");
const Animal = require("./animal");
const { shelterService } = require("../services");

const ManagerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  shelter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shelter",
    autopopulate: 2,
  },
});

ManagerSchema.methods.addAnimal = async function (shelter, breed, age) {
  const newAnimal = await Animal.create({ breed, age });

  shelter.animalList.push(newAnimal);

  await shelter.save();
  await this.save();

  return newAnimal;
};

ManagerSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Manager", ManagerSchema);
