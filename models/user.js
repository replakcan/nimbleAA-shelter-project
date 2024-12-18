class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static create({ name, age }) {
    return new User(name, age);
  }
}

module.exports = User;
