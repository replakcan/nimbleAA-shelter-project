const app = require("../index");
const { meetingService } = require("../services");
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

  // checks if all meetings can be get successfully
  expect(reservationCreated).toMatchObject({
    client: { _id: clientResponse.body._id },
    shelter: { _id: shelterResponse.body._id },
  });

  await request.get("/meetings").expect(200);

  // checks if meetings can be searched through
  const meetingSearchWithClientId = await request
    .get(`/meetings/search?clientId=${clientResponse.body._id}`)
    .expect(200)
    .expect((res) => {
      expect(res.text).toContain(`${clientResponse.body._id}`);
    });

  /* const meetingSearchWithShelterId = await request
    .get(`/meetings/search?shelterId=${shelterResponse.body._id}`)
    .expect(200)
    .expect((res) => {
      expect(res.text).toContain(`${shelterResponse.body._id}`);
    });

  console.log("WITHSHELTERID: ", meetingSearchWithShelterId.body); */

  const foundReservation = await meetingService.find(reservationCreated._id);

  // Test doğrulamaları
  expect(foundReservation).not.toBeNull();
  expect(foundReservation.client.name).toBe("John Doe");
  expect(foundReservation.shelter.name).toBe("Shelter Name");
});
