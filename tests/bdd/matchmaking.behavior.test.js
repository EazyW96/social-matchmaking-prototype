const request = require("supertest");
const app = require("../../src/app");

/**
 * Given / When / Then scenarios that complement POST /match integration tests
 * (happy path and validation errors are asserted in `match.api.test.js`).
 */
describe("Matchmaking behavior (BDD-style names)", () => {
  test("given two players with a large skill gap and opposite attitudes, when POST /match, then they are incompatible", async () => {
    const res = await request(app)
      .post("/match")
      .send({
        playerA: { name: "Alpha", skill: 1, attitude: "Positive" },
        playerB: { name: "Beta", skill: 20, attitude: "Negative" },
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({
      compatible: false,
      score: 0,
      attitudeMatch: false,
      skillDifference: 19,
    });
  });
});
