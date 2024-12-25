const mongoose = require("mongoose");

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

/* ManagerSchema.methods.updateAnimalList = async function (operation, animalId) {
  const { animalList } = this.shelter;
  const index = await animalList.indexOf(animalId);

  switch (operation) {
    case "ekle":
      await animalList.push(animalId);
      break;
    case "cikar":
      await animalList.splice(index, 1);
      break;
    case "guncelle":
      await animalList.splice(index, 1, animalId);
      break;

    default:
      console.log("islem yapmak icin gerekli sartlar saglanmadi");
      break;
  }
  await this.shelter.save();
  await this.save();
}; */
