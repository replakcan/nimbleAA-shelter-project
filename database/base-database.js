const fs = require("fs");
const flatted = require("flatted");

class BaseDatabase {
  constructor(model) {
    this.model = model;
    this.filename = model.name; /* .toLowerCase(); */
  }

  save(objects) {
    return this.model.insertMany(objects);
    /* return new Promise((resolve, reject) => {
      fs.writeFile(
        `./${this.filename}.json`,
        flatted.stringify(objects, null, 2),
        "utf-8",
        (err) => {
          if (err) return reject(err);
          resolve();
        }
      );
    }); */
  }

  load() {
    return this.model.find();
    /* return new Promise((resolve, reject) => {
      fs.readFile(`./${this.filename}.json`, "utf-8", (err, data) => {
        if (err) {
          return reject(err);
        }

        const objects = flatted.parse(data);

        resolve(objects.map(this.model.create));
      });
    }); */
  }

  async insert(object) {
    return await this.model.create(object);

    /* const objects = await this.load();

    if (!(object instanceof this.model)) {
      object = this.model.create(object);
    }

    await this.save(objects.concat(object)); // disarida kullanirken await diyecegimiz icin son satir'a await dememe gerek yok, direkt return de edebilirim
    return object; */
  }

  /* async remove(index) {
    const objects = await this.load();

    objects.splice(index, 1);

    return this.save(objects);
  } */

  async removeBy(prop, value) {
    return this.model.deleteOne({ [prop]: value });
    /* const objects = await this.load();

    const object = objects.find((obj) => obj[prop] == value);

    const index = objects.findIndex((o) => o.id == object.id);

    if (index == -1)
      throw new Error(
        `Cannot find ${this.model.name} instance with id ${object.id}`
      );

    objects.splice(index, 1);

    return this.save(objects); */
  }

  async update(id, object) {
    return this.model.findByIdAndUpdate(id, object);

    /* const objects = await this.load();

    const index = objects.findIndex((o) => o.id == object.id);

    if (index == -1)
      throw new Error(
        `Cannot find ${this.model.name} instance with id ${object.id}`
      );

    objects.splice(index, 1, object);

    return this.save(objects); */
  }

  async find(id) {
    return this.model.findById(id);
    /* const objects = await this.load()

    return objects.find((obj) => obj.id == id) */
  }

  async findBy(prop, value) {
    return this.model.find({ [prop]: value });
    /* const objects = await this.load();

    return objects.find((object) => object[prop] == value); */
  }
}

module.exports = BaseDatabase;
