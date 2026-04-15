const request = require("supertest");
const app = require("../../src/app");

test("POST /match should return a compatibility report", async () => {
  const res = await request(app)
    .post("/match")
    .send({
      playerA: { name: "Alpha", skill: 10, attitude: "Positive" },
      playerB: { name: "Beta", skill: 11, attitude: "Positive" },
    });

  expect(res.statusCode).toBe(200);
  expect(res.body.compatible).toBe(true);
  expect(res.body.score).toBe(2);
});

test("POST /match should return 400 when players are missing", async () => {
  const res = await request(app).post("/match").send({});

  expect(res.statusCode).toBe(400);
  expect(res.body.error).toBe("Both playerA and playerB must be provided");
});

test("POST /match should return 400 when skill is invalid", async () => {
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

test("POST /match should return 400 when attitude is invalid", async () => {
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
