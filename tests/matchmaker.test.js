const { evaluateMatchStability } = require("../src/services/matchmaker");

test("Should detect attitude mismatch even if skill is perfect", () => {
  const player1 = { name: "Pro_Jacob", skill: 50, attitude: "Positive" };
  const toxicPlayer = { name: "Toxic_User", skill: 50, attitude: "Volatile" };

  const report = evaluateMatchStability(player1, toxicPlayer);

  expect(report.attitudeMatch).toBe(false);
  expect(report.skillDifference).toBe(0);
  expect(report.score).toBe(1);
  expect(report.compatible).toBe(true);
});

test("Should return true when skill is close and attitude matches", () => {
  const player1 = { name: "PlayerA", skill: 10, attitude: "Positive" };
  const player2 = { name: "PlayerB", skill: 11, attitude: "Positive" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.attitudeMatch).toBe(true);
  expect(report.skillDifference).toBe(1);
  expect(report.score).toBe(2);
  expect(report.compatible).toBe(true);
});

test("Should return skill difference of 0 for equal skill", () => {
  const player1 = { name: "PlayerA", skill: 25, attitude: "Calm" };
  const player2 = { name: "PlayerB", skill: 25, attitude: "Calm" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.skillDifference).toBe(0);
});

test("Should return skill difference of 2 when players differ by 2", () => {
  const player1 = { name: "PlayerA", skill: 12, attitude: "Positive" };
  const player2 = { name: "PlayerB", skill: 14, attitude: "Positive" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.skillDifference).toBe(2);
  expect(report.compatible).toBe(true);
});

test("Should return score 1 when only skill matches", () => {
  const player1 = { name: "PlayerA", skill: 30, attitude: "Positive" };
  const player2 = { name: "PlayerB", skill: 31, attitude: "Negative" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.attitudeMatch).toBe(false);
  expect(report.score).toBe(1);
  expect(report.compatible).toBe(true);
});

test("Should return score 1 when only attitude matches", () => {
  const player1 = { name: "PlayerA", skill: 5, attitude: "Calm" };
  const player2 = { name: "PlayerB", skill: 12, attitude: "Calm" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.attitudeMatch).toBe(true);
  expect(report.skillDifference).toBe(7);
  expect(report.score).toBe(1);
  expect(report.compatible).toBe(true);
});

test("Should return score 0 when neither skill nor attitude matches", () => {
  const player1 = { name: "PlayerA", skill: 1, attitude: "Positive" };
  const player2 = { name: "PlayerB", skill: 10, attitude: "Negative" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.attitudeMatch).toBe(false);
  expect(report.skillDifference).toBe(9);
  expect(report.score).toBe(0);
  expect(report.compatible).toBe(false);
});

test("Should return false for attitudeMatch when attitudes are different", () => {
  const player1 = { name: "PlayerA", skill: 18, attitude: "Focused" };
  const player2 = { name: "PlayerB", skill: 18, attitude: "Toxic" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.attitudeMatch).toBe(false);
});

test("should handle large skill gap correctly", () => {
  const p1 = { name: "A", skill: 1, attitude: "Positive" };
  const p2 = { name: "B", skill: 50, attitude: "Positive" };

  const result = evaluateMatchStability(p1, p2);

  expect(result.skillDifference).toBe(49);
  expect(result.score).toBe(1);
});

test("should mark incompatible when both skill and attitude differ", () => {
  const p1 = { name: "A", skill: 1, attitude: "Positive" };
  const p2 = { name: "B", skill: 20, attitude: "Negative" };

  const result = evaluateMatchStability(p1, p2);

  expect(result.compatible).toBe(false);
});

test("should handle identical players", () => {
  const p = { name: "Same", skill: 10, attitude: "Calm" };

  const result = evaluateMatchStability(p, p);

  expect(result.skillDifference).toBe(0);
  expect(result.attitudeMatch).toBe(true);
  expect(result.score).toBe(2);
});

test("should handle large skill gap correctly", () => {
  const p1 = { name: "A", skill: 1, attitude: "Positive" };
  const p2 = { name: "B", skill: 50, attitude: "Positive" };

  const result = evaluateMatchStability(p1, p2);

  expect(result.skillDifference).toBe(49);
  expect(result.score).toBe(1);
});

test("should mark incompatible when both skill and attitude differ", () => {
  const p1 = { name: "A", skill: 1, attitude: "Positive" };
  const p2 = { name: "B", skill: 20, attitude: "Negative" };

  const result = evaluateMatchStability(p1, p2);

  expect(result.compatible).toBe(false);
});

test("should handle identical players", () => {
  const p = { name: "Same", skill: 10, attitude: "Calm" };

  const result = evaluateMatchStability(p, p);

  expect(result.skillDifference).toBe(0);
  expect(result.attitudeMatch).toBe(true);
  expect(result.score).toBe(2);
});

