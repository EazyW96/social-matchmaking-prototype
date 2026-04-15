const request = require("supertest");
const app = require("../../src/app");

describe("Matchmaking behavior", () => {
  test("given two players with similar skill and matching attitudes, when /match is called, then the players should be compatible", async () => {
    const res = await request(app)
      .post("/match")
      .send({
        playerA: { name: "Alpha", skill: 10, attitude: "Positive" },
        playerB: { name: "Beta", skill: 11, attitude: "Positive" }
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.compatible).toBe(true);
    expect(res.body.score).toBe(2);
  });
});
