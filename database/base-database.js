const fs = require("fs");

class BaseDatabase {
  constructor(model) {
    this.model = model;
    this.filename = model.name.toLowerCase();
  }

  save(data) {
    fs.writeFileSync(`./${this.filename}.json`, JSON.stringify(data));
  }

  load() {
    const objects = JSON.parse(
      fs.readFileSync(`./${this.filename}.json`, "utf-8")
    );

    return objects.map((o) => this.model.create(o));
  }

  insert(object) {
    const objects = this.load();

    this.save(objects.concat(object));
  }

  remove(index) {
    const objects = this.load();

    objects.splice(index, 1);

    this.save(objects);
  }

  update(object) {
    const objects = this.load();

    const index = objects.findIndex((o) => o.id == object.id);

    if (index == -1)
      throw new Error(
        `Cannot find ${this.model.name} instance with id ${object.id}`
      );

    objects.splice(index, 1, object);

    this.save(objects);
  }
}

module.exports = BaseDatabase;
