class BaseService {
  constructor(model) {
    this.model = model;
    this.filename = model.name;
  }

  save(objects) {
    return this.model.insertMany(objects);
  }

  load() {
    return this.model.find();
  }

  async insert(object) {
    return await this.model.create(object);
  }

  async removeBy(prop, value) {
    return this.model.deleteOne({ [prop]: value });
  }

  async update(id, object) {
    return this.model.findByIdAndUpdate(id, object, { new: true });
  }

  async find(id) {
    return this.model.findById(id);
  }

  async query(obj) {
    return this.model.find(obj);
  }

  async findBy(prop, value) {
    return this.model.find({ [prop]: value });
  }
}

module.exports = BaseService;
