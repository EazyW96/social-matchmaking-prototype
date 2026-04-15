const { evaluateMatchStability } = require("../../src/services/matchmaker");

test("should detect attitude mismatch even if skill is perfect", () => {
  const player1 = { name: "Pro_Jacob", skill: 50, attitude: "Positive" };
  const toxicPlayer = { name: "Toxic_User", skill: 50, attitude: "Volatile" };

  const report = evaluateMatchStability(player1, toxicPlayer);

  expect(report.attitudeMatch).toBe(false);
  expect(report.skillDifference).toBe(0);
  expect(report.score).toBe(1);
  expect(report.compatible).toBe(true);
});

test("should return true when skill is close and attitude matches", () => {
  const player1 = { name: "PlayerA", skill: 10, attitude: "Positive" };
  const player2 = { name: "PlayerB", skill: 11, attitude: "Positive" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.attitudeMatch).toBe(true);
  expect(report.skillDifference).toBe(1);
  expect(report.score).toBe(2);
  expect(report.compatible).toBe(true);
});

test("should return skill difference of 0 for equal skill", () => {
  const player1 = { name: "PlayerA", skill: 25, attitude: "Calm" };
  const player2 = { name: "PlayerB", skill: 25, attitude: "Calm" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.skillDifference).toBe(0);
});

test("should return skill difference of 2 when players differ by 2", () => {
  const player1 = { name: "PlayerA", skill: 12, attitude: "Positive" };
  const player2 = { name: "PlayerB", skill: 14, attitude: "Positive" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.skillDifference).toBe(2);
  expect(report.compatible).toBe(true);
});

test("should return score 1 when only skill matches", () => {
  const player1 = { name: "PlayerA", skill: 30, attitude: "Positive" };
  const player2 = { name: "PlayerB", skill: 31, attitude: "Negative" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.attitudeMatch).toBe(false);
  expect(report.score).toBe(1);
  expect(report.compatible).toBe(true);
});

test("should return score 1 when only attitude matches", () => {
  const player1 = { name: "PlayerA", skill: 5, attitude: "Calm" };
  const player2 = { name: "PlayerB", skill: 12, attitude: "Calm" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.attitudeMatch).toBe(true);
  expect(report.skillDifference).toBe(7);
  expect(report.score).toBe(1);
  expect(report.compatible).toBe(true);
});

test("should return score 0 when neither skill nor attitude matches", () => {
  const player1 = { name: "PlayerA", skill: 1, attitude: "Positive" };
  const player2 = { name: "PlayerB", skill: 10, attitude: "Negative" };

  const report = evaluateMatchStability(player1, player2);

  expect(report.attitudeMatch).toBe(false);
  expect(report.skillDifference).toBe(9);
  expect(report.score).toBe(0);
  expect(report.compatible).toBe(false);
});

test("should return false for attitudeMatch when attitudes are different", () => {
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

test("should treat skill difference greater than 2 as no skill match", () => {
  const player1 = { name: "A", skill: 1, attitude: "Positive" };
  const player2 = { name: "B", skill: 4, attitude: "Positive" };

  const result = evaluateMatchStability(player1, player2);

  expect(result.skillDifference).toBe(3);
  expect(result.score).toBe(1);
});

test("should work with zero skill values", () => {
  const player1 = { name: "A", skill: 0, attitude: "Calm" };
  const player2 = { name: "B", skill: 0, attitude: "Calm" };

  const result = evaluateMatchStability(player1, player2);

  expect(result.skillDifference).toBe(0);
  expect(result.score).toBe(2);
});

test("should return compatible false when score is zero", () => {
  const player1 = { name: "A", skill: 2, attitude: "Positive" };
  const player2 = { name: "B", skill: 10, attitude: "Negative" };

  const result = evaluateMatchStability(player1, player2);

  expect(result.compatible).toBe(false);
});

test("should return compatible true when score is one", () => {
  const player1 = { name: "A", skill: 10, attitude: "Positive" };
  const player2 = { name: "B", skill: 11, attitude: "Negative" };

  const result = evaluateMatchStability(player1, player2);

  expect(result.compatible).toBe(true);
});
