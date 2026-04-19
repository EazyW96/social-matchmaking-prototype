const request = require("supertest");
const app = require("../../src/app");

describe("POST /match", () => {
  describe("200 responses", () => {
    test("returns full compatibility report when players are a good match", async () => {
      const res = await request(app)
        .post("/match")
        .send({
          playerA: { name: "Alpha", skill: 10, attitude: "Positive" },
          playerB: { name: "Beta", skill: 11, attitude: "Positive" },
        });

      expect(res.statusCode).toBe(200);
      expect(res.body).toMatchObject({
        compatible: true,
        score: 2,
        skillDifference: 1,
        attitudeMatch: true,
      });
    });

    test("returns full report when compatible with score 1 (skill match only)", async () => {
      const res = await request(app)
        .post("/match")
        .send({
          playerA: { name: "Alpha", skill: 10, attitude: "Positive" },
          playerB: { name: "Beta", skill: 11, attitude: "Negative" },
        });

      expect(res.statusCode).toBe(200);
      expect(res.body).toMatchObject({
        compatible: true,
        score: 1,
        skillDifference: 1,
        attitudeMatch: false,
      });
    });

    test("returns full report when incompatible (score 0)", async () => {
      const res = await request(app)
        .post("/match")
        .send({
          playerA: { name: "Alpha", skill: 1, attitude: "Positive" },
          playerB: { name: "Beta", skill: 10, attitude: "Negative" },
        });

      expect(res.statusCode).toBe(200);
      expect(res.body).toMatchObject({
        compatible: false,
        score: 0,
        skillDifference: 9,
        attitudeMatch: false,
      });
    });
  });

  describe("400 responses", () => {
    test("returns 400 when both players are missing", async () => {
      const res = await request(app).post("/match").send({});

      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBe(
        "Both playerA and playerB must be provided",
      );
    });

    test("returns 400 when skill is not a number", async () => {
      const res = await request(app)
        .post("/match")
        .send({
          playerA: { name: "Alpha", skill: "bad", attitude: "Positive" },
          playerB: { name: "Beta", skill: 11, attitude: "Positive" },
        });

      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBe(
        "Both playerA.skill and playerB.skill must be numbers",
      );
    });

    test("returns 400 when attitude is not a string", async () => {
      const res = await request(app)
        .post("/match")
        .send({
          playerA: { name: "Alpha", skill: 10, attitude: 123 },
          playerB: { name: "Beta", skill: 11, attitude: "Positive" },
        });

      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBe(
        "Both playerA.attitude and playerB.attitude must be strings",
      );
    });
  });
});
