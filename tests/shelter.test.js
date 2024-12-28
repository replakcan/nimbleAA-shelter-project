const app = require("../index");
const request = require("supertest")(app);

test("creates and gets shelter by Id", async () => {
  const contactInfoToCreate = {
    phone: "123-456-7890",
    email: "test@email.com",
    location: "123 Test St",
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

  await request.get("/shelters").expect(200);

  const shelterResponse = await request
    .post("/shelters")
    .send(shelterToCreate)
    .expect(200);

  await request.get(`/shelters/${shelterResponse.body._id}`).expect(200);

  await request
    .get("/shelters/123")
    .expect(404)
    .expect((res) => {
      expect(res.text).toBe("There is no shelter with given id");
    });

  await request
    .get(`/shelters/${shelterResponse.body._id}/animal-list`)
    .expect(200);
});
