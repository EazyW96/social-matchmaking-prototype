const request = require("supertest");
const app = require("../../src/app");

test("GET /players should return all players", async () => {
  const res = await request(app).get("/players");

  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
  expect(res.body.length).toBeGreaterThan(0);
});

test("GET /players/:id should return one player", async () => {
  const res = await request(app).get("/players/1");

  expect(res.statusCode).toBe(200);
  expect(res.body.id).toBe(1);
});

test("GET /players/:id should return 404 for missing player", async () => {
  const res = await request(app).get("/players/999");

  expect(res.statusCode).toBe(404);
  expect(res.body.error).toBe("Player not found");
});