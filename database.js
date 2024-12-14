const fs = require("fs");

const save = (filename, data) => {
  fs.writeFileSync(`./${filename}.json`, JSON.stringify(data));
};

const load = (filename) => {
  return JSON.parse(fs.readFileSync(`./${filename}.json`, "utf-8"));
};

module.exports = { save, load };
