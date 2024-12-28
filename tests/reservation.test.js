const app = require("../index");
const contactInfo = require("../models/contactInfo");
const request = require("supertest")(app);

test("creates a new reservation", async () => {
  const clientToCreate = {
    name: "John Doe",
    age: 21,
  };

  const clientResponse = await request
    .post("/clients")
    .send(clientToCreate)
    .expect(200);

  const contactInfoToCreate = {
    phone: "123-456-7890",
    email: "emamail@shelter.com",
    location: "123 Shelter St",
  };

  const contactInfoResponse = await request
    .post("/contact-infos")
    .send(contactInfoToCreate)
    .expect(200);

  const shelterToCreate = {
    name: "Shelter Name",
    animalCapacity: 100,
    contactInfo: contactInfoResponse.body._id,
  };

  const shelterResponse = await request
    .post("/shelters")
    .send(shelterToCreate)
    .expect(200);

  const managerToCreate = {
    name: "Manager Name",
    age: 30,
    shelter: shelterResponse.body._id,
  };

  const managerResponse = await request
    .post("/managers")
    .send(managerToCreate)
    .expect(200);

  const reservationResponse = await request
    .post(`/clients/${clientResponse.body._id}/reservations`)
    .send({ managerId: managerResponse.body._id })
    .expect(200);

  const reservationCreated = reservationResponse.body;

  expect(reservationCreated).toMatchObject({
    client: { _id: clientResponse.body._id },
    shelter: { _id: shelterResponse.body._id },
  });
});
