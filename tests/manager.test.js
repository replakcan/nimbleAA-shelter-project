const app = require("../index");
const mongoose = require("mongoose");
const request = require("supertest")(app);
const Manager = require("../models/manager");
const Shelter = require("../models/shelter");
const ContactInfo = require("../models/contactInfo");

let createdManagerIds = [];
let createdShelterIds = [];
let createdContactInfoIds = [];

test("creates a new manager and adds an animal to the shelter then checks manager's animal-list", async () => {
  const shelterToCreate = {
    name: "Shelter Name",
    animalCapacity: 100,
  };

  const shelterResponse = await request
    .post("/shelters")
    .send(shelterToCreate)
    .expect(200);

  createdShelterIds.push(shelterResponse.body._id);

  const managerToCreate = {
    name: "Manager Name",
    age: 30,
    shelter: shelterResponse.body._id,
  };

  const managerResponse = await request
    .post("/managers")
    .send(managerToCreate)
    .expect(200);

  createdManagerIds.push(managerResponse.body._id);

  const animalToCreate = {
    breed: "Dog",
    age: 2,
  };

  const animalResponse = await request
    .post(`/managers/${managerResponse.body._id}/animal-list`)
    .send(animalToCreate)
    .expect(200);

  const animalCreated = animalResponse.body;

  const managerAnimalListResponse = await request
    .get(`/managers/${managerResponse.body._id}/animal-list`)
    .expect(200);
  expect(animalCreated).toMatchObject(animalToCreate);
});

test("gets all managers", async () => {
  const response = await request.get("/managers").expect(200);

  expect(response.body).toBeInstanceOf(Object);
});

test("gets a manager by id", async () => {
  const contactInfoToCreate = {
    phone: "123-456-7890",
    email: "emamail@shelter.com",
    location: "123 Shelter St",
  };

  const contactInfoResponse = await request
    .post("/contact-infos")
    .send(contactInfoToCreate)
    .expect(200);

  createdContactInfoIds.push(contactInfoResponse.body._id);

  const shelterToCreate = {
    name: "Shelter Name",
    animalCapacity: 100,
    contactInfo: contactInfoResponse.body._id,
  };

  const shelterResponse = await request
    .post("/shelters")
    .send(shelterToCreate)
    .expect(200);

  createdShelterIds.push(shelterResponse.body._id);

  const managerToCreate = {
    name: "Manager Name",
    age: 30,
    shelter: shelterResponse.body._id,
  };

  const managerResponse = await request
    .post("/managers")
    .send(managerToCreate)
    .expect(200);

  createdManagerIds.push(managerResponse.body._id);

  const managerByIdResponse = await request
    .get(`/managers/${managerResponse.body._id}`)
    .expect(200);

  expect(managerByIdResponse.body).toBeInstanceOf(Object);

  const wrongIdResponse = await request.get(`/managers/123`).expect(404);

  expect(wrongIdResponse.text).toBe("There is no manager with given id");
});

test("updates a manager by id", async () => {
  const contactInfoToCreate = {
    phone: "123-456-7890",
    email: "emamail@shelter.com",
    location: "123 Shelter St",
  };

  const contactInfoResponse = await request
    .post("/contact-infos")
    .send(contactInfoToCreate)
    .expect(200);

  createdContactInfoIds.push(contactInfoResponse.body._id);

  const shelterToCreate = {
    name: "Shelter Name",
    animalCapacity: 100,
    contactInfo: contactInfoResponse.body._id,
  };

  const shelterResponse = await request
    .post("/shelters")
    .send(shelterToCreate)
    .expect(200);

  createdShelterIds.push(shelterResponse.body._id);

  const managerToCreate = {
    name: "Manager Name",
    age: 30,
    shelter: shelterResponse.body._id,
  };

  const managerResponse = await request
    .post("/managers")
    .send(managerToCreate)
    .expect(200);

  createdManagerIds.push(managerResponse.body._id);

  const updatedName = "Updated Manager Name";

  const updatedManagerResponse = await request
    .patch(`/managers/${managerResponse.body._id}`)
    .send({ name: updatedName })
    .expect(200);

  await request
    .patch(`/managers/${updatedManagerResponse.body._id}`)
    .send({ name: updatedName })
    .expect(200)
    .expect((res) => {
      expect(res.body.name).toBe(updatedName);
    });
});

test("deletes a manager by id", async () => {
  const contactInfoToCreate = {
    phone: "123-456-7890",
    email: "salami@selami.com",
    location: "123 Shelter St",
  };

  const contactInfoResponse = await request
    .post("/contact-infos")
    .send(contactInfoToCreate)
    .expect(200);

  createdContactInfoIds.push(contactInfoResponse.body._id);

  const shelterToCreate = {
    name: "Shelter Name",
    animalCapacity: 100,
    contactInfo: contactInfoResponse.body._id,
  };

  const shelterResponse = await request
    .post("/shelters")
    .send(shelterToCreate)
    .expect(200);

  createdShelterIds.push(shelterResponse.body._id);

  const managerToCreate = {
    name: "Manager Name",
    age: 30,
    shelter: shelterResponse.body._id,
  };

  const managerResponse = await request
    .post("/managers")
    .send(managerToCreate)
    .expect(200);

  createdManagerIds.push(managerResponse.body._id);

  const deletedManagerResponse = await request
    .delete(`/managers/${managerResponse.body._id}`)
    .expect(200);
});

afterEach(async () => {
  await Manager.deleteMany({ _id: { $in: createdManagerIds } });
  await Shelter.deleteMany({ _id: { $in: createdShelterIds } });
  await ContactInfo.deleteMany({ _id: { $in: createdContactInfoIds } });

  createdManagerIds = [];
  createdShelterIds = [];
  createdContactInfoIds = [];
});

afterAll(async () => {
  await mongoose.connection.close();
});
