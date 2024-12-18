module.exports = class Injury {
  constructor(description) {
    this.description = description;
  }

  static create({ description }) {
    return new Injury(description);
  }
};
