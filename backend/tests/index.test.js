const app = require("../index");
const request = require("supertest")(app);

test("checks home page text", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect((res) => {
      expect(res.text).toContain("Welcome to pet-adoption app");
    });
});
