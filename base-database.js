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
}

module.exports = BaseDatabase;
