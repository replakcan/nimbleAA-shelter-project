module.exports = class Product {
  constructor(category, title, price, rating) {
    this.category = category;
    this.title = title;
    this.price = price;
    this.rating = rating;
  }

  static create({ category, title, price, rating }) {
    return new Product(category, title, price, rating);
  }
};
