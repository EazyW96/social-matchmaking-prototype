const { evaluateMatchStability } = require("../../src/services/matchmaker");

describe("evaluateMatchStability", () => {
  describe("score and compatibility", () => {
    test("returns score 2 and compatible when skill within 2 and attitudes match", () => {
      const player1 = { name: "PlayerA", skill: 10, attitude: "Positive" };
      const player2 = { name: "PlayerB", skill: 11, attitude: "Positive" };

      const report = evaluateMatchStability(player1, player2);

      expect(report).toMatchObject({
        attitudeMatch: true,
        skillDifference: 1,
        score: 2,
        compatible: true,
      });
    });

    test("returns score 1 and compatible when attitudes differ but skill matches (within 2)", () => {
      const player1 = { name: "Pro_Jacob", skill: 50, attitude: "Positive" };
      const player2 = { name: "Toxic_User", skill: 50, attitude: "Volatile" };

      const report = evaluateMatchStability(player1, player2);

      expect(report).toMatchObject({
        attitudeMatch: false,
        skillDifference: 0,
        score: 1,
        compatible: true,
      });
    });

    test("returns score 1 and compatible when only skill matches (attitudes differ)", () => {
      const player1 = { name: "PlayerA", skill: 30, attitude: "Positive" };
      const player2 = { name: "PlayerB", skill: 31, attitude: "Negative" };

      const report = evaluateMatchStability(player1, player2);

      expect(report).toMatchObject({
        attitudeMatch: false,
        score: 1,
        compatible: true,
      });
    });

    test("returns score 1 and compatible when only attitude matches (skill gap > 2)", () => {
      const player1 = { name: "PlayerA", skill: 5, attitude: "Calm" };
      const player2 = { name: "PlayerB", skill: 12, attitude: "Calm" };

      const report = evaluateMatchStability(player1, player2);

      expect(report).toMatchObject({
        attitudeMatch: true,
        skillDifference: 7,
        score: 1,
        compatible: true,
      });
    });

    test("returns score 0 and incompatible when skill gap > 2 and attitudes differ", () => {
      const player1 = { name: "PlayerA", skill: 1, attitude: "Positive" };
      const player2 = { name: "PlayerB", skill: 10, attitude: "Negative" };

      const report = evaluateMatchStability(player1, player2);

      expect(report).toMatchObject({
        attitudeMatch: false,
        skillDifference: 9,
        score: 0,
        compatible: false,
      });
    });

    test("returns compatible false when score is 0 (large skill gap and attitudes differ)", () => {
      const player1 = { name: "A", skill: 2, attitude: "Positive" };
      const player2 = { name: "B", skill: 10, attitude: "Negative" };

      const result = evaluateMatchStability(player1, player2);

      expect(result.compatible).toBe(false);
    });

    test("returns compatible true when score is 1 (skill match only)", () => {
      const player1 = { name: "A", skill: 10, attitude: "Positive" };
      const player2 = { name: "B", skill: 11, attitude: "Negative" };

      const result = evaluateMatchStability(player1, player2);

      expect(result.compatible).toBe(true);
    });
  });

  describe("skill difference", () => {
    test("returns skill difference 0 for equal skill", () => {
      const player1 = { name: "PlayerA", skill: 25, attitude: "Calm" };
      const player2 = { name: "PlayerB", skill: 25, attitude: "Calm" };

      const report = evaluateMatchStability(player1, player2);

      expect(report.skillDifference).toBe(0);
    });

    test("returns absolute skill difference when players differ by 2", () => {
      const player1 = { name: "PlayerA", skill: 12, attitude: "Positive" };
      const player2 = { name: "PlayerB", skill: 14, attitude: "Positive" };

      const report = evaluateMatchStability(player1, player2);

      expect(report.skillDifference).toBe(2);
      expect(report.compatible).toBe(true);
    });

    test("returns correct difference for large skill gap", () => {
      const p1 = { name: "A", skill: 1, attitude: "Positive" };
      const p2 = { name: "B", skill: 50, attitude: "Positive" };

      const result = evaluateMatchStability(p1, p2);

      expect(result.skillDifference).toBe(49);
      expect(result.score).toBe(1);
    });

    test("treats skill difference greater than 2 as no skill match (score stays 1 if attitude matches)", () => {
      const player1 = { name: "A", skill: 1, attitude: "Positive" };
      const player2 = { name: "B", skill: 4, attitude: "Positive" };

      const result = evaluateMatchStability(player1, player2);

      expect(result.skillDifference).toBe(3);
      expect(result.score).toBe(1);
    });

    test("handles zero skill values", () => {
      const player1 = { name: "A", skill: 0, attitude: "Calm" };
      const player2 = { name: "B", skill: 0, attitude: "Calm" };

      const result = evaluateMatchStability(player1, player2);

      expect(result.skillDifference).toBe(0);
      expect(result.score).toBe(2);
    });
  });

  describe("attitude match", () => {
    test("returns false for attitudeMatch when attitudes differ", () => {
      const player1 = { name: "PlayerA", skill: 18, attitude: "Focused" };
      const player2 = { name: "PlayerB", skill: 18, attitude: "Toxic" };

      const report = evaluateMatchStability(player1, player2);

      expect(report.attitudeMatch).toBe(false);
    });
  });

  describe("edge cases", () => {
    test("identical player objects yield skill 0, attitude match, score 2", () => {
      const p = { name: "Same", skill: 10, attitude: "Calm" };

      const result = evaluateMatchStability(p, p);

      expect(result).toMatchObject({
        skillDifference: 0,
        attitudeMatch: true,
        score: 2,
      });
    });

    test("incompatible when both skill gap and attitude differ beyond score 0 rule", () => {
      const p1 = { name: "A", skill: 1, attitude: "Positive" };
      const p2 = { name: "B", skill: 20, attitude: "Negative" };

      const result = evaluateMatchStability(p1, p2);

      expect(result.compatible).toBe(false);
    });
  });
});
