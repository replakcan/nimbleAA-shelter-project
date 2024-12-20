const fs = require("fs");
const flatted = require("flatted");

class BaseDatabase {
  constructor(model) {
    this.model = model;
    this.filename = model.name.toLowerCase();
  }

  /* save(data) {
    fs.writeFileSync(`./${this.filename}.json`, JSON.stringify(data));
  } */

  save(objects) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        `./${this.filename}.json`,
        flatted.stringify(objects, null, 2),
        "utf-8",
        (err) => {
          if (err) return reject(err);
          resolve();
        }
      );
    });
  }

  /* load() {
    const objects = JSON.parse(
      fs.readFileSync(`./${this.filename}.json`, "utf-8")
    );

    return objects.map((o) => this.model.create(o));
  } */

  load() {
    return new Promise((resolve, reject) => {
      fs.readFile(`./${this.filename}.json`, "utf-8", (err, data) => {
        if (err) {
          return reject(err);
        }

        const objects = flatted.parse(data);

        resolve(objects.map(this.model.create));
      });
    });
  }

  /* insert(object) {
    const objects = this.load();

    this.save(objects.concat(object));
  } */

  async insert(object) {
    // return this.load().then((objects) => this.save(objects.concat(object)));

    const objects = await this.load();
    return this.save(objects.concat(object)); // disarida kullanirken await diyecegimiz icin son satir'a await dememe gerek yok, direkt return de edebilirim
  }

  async remove(index) {
    const objects = await this.load();

    objects.splice(index, 1);

    return this.save(objects);
  }

  async update(object) {
    const objects = await this.load();

    const index = objects.findIndex((o) => o.id == object.id);

    if (index == -1)
      throw new Error(
        `Cannot find ${this.model.name} instance with id ${object.id}`
      );

    objects.splice(index, 1, object);

    return this.save(objects);
  }

  async findBy(prop, value) {
    const objects = await this.load();

    return objects.find((object) => object[prop] == value);
  }
}

module.exports = BaseDatabase;
