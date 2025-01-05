const app = require("../index");
const request = require("supertest")(app);

test("creates a new contact info", async () => {
  const contactInfoToCreate = {
    phone: "123-456-7890",
    email: "test@email.com",
    location: "123 Test St",
  };

  const response = await request
    .post("/contact-infos")
    .send(contactInfoToCreate)
    .expect(200);

  expect(response.body).toMatchObject(contactInfoToCreate);
});

test("gets all contact infos", async () => {
  const response = await request.get("/contact-infos").expect(200);

  expect(response.body).toBeInstanceOf(Object);
});

test("gets a contact info by id", async () => {
  const contactInfoToCreate = {
    phone: "123-456-7890",
    email: "test@email.com",
    location: "123 Test St",
  };

  const contactInfoResponse = await request
    .post("/contact-infos")
    .send(contactInfoToCreate)
    .expect(200);

  const contactInfoByIdResponse = await request
    .get(`/contact-infos/${contactInfoResponse.body._id}`)
    .expect(200);

  const wrongIdResponse = await request.get(`/contact-infos/123`).expect(404);

  expect(wrongIdResponse.text).toBe("There is no contactInfo with given id");
});
