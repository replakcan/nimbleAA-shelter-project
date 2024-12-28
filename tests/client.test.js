const app = require("../index");
const request = require("supertest")(app);

test("test all client operations: create, read, update, delete", async () => {
  const clientToCreate = {
    name: "John Doe",
    age: 31,
  };

  const clientResponse = await request
    .post("/clients")
    .send(clientToCreate)
    .expect(200)
    .expect((res) => {
      expect(res.body).toMatchObject(clientToCreate);
    });

  await request.get("/clients").expect(200);

  await request.get(`/clients/${clientResponse.body._id}`).expect(200);

  await request
    .get("/clients/123")
    .expect(404)
    .expect((res) => {
      expect(res.text).toBe("There is no client with given id");
    });

  await request
    .patch(`/clients/${clientResponse.body._id}`)
    .send({ name: "Updated Name" })
    .expect(200)
    .expect((res) => {
      expect(res.body.name).toBe("Updated Name");
    });

  const clientDeleteResponse = await request
    .delete(`/clients/${clientResponse.body._id}`)
    .expect(200);

  expect(clientDeleteResponse.body).toMatchObject({
    acknowledged: true,
    deletedCount: 1,
  });
});
