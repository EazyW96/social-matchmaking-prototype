const request = require("supertest");
const app = require("../../src/app");
const {
  SEED_PLAYER_ID,
  MISSING_PLAYER_ID,
  expectedPlayerCount,
} = require("../fixtures/players");

describe("GET /players", () => {
  test("returns an array of all seeded players", async () => {
    const res = await request(app).get("/players");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(expectedPlayerCount);
  });
});

describe("GET /players/:id", () => {
  test("returns one player when id exists in seed data", async () => {
    const res = await request(app).get(`/players/${SEED_PLAYER_ID}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({
      id: SEED_PLAYER_ID,
      username: expect.any(String),
    });
  });

  test("returns 404 when id is not in seed data", async () => {
    const res = await request(app).get(`/players/${MISSING_PLAYER_ID}`);

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe("Player not found");
  });
});
