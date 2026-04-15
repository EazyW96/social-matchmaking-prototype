const matchmaker = require("../services/matchmaker");

function createMatch(req, res, next) {
  const { playerA, playerB } = req.body;

  if (!playerA || !playerB) {
    return res.status(400).json({
      error: "Both playerA and playerB must be provided",
    });
  }

  if (typeof playerA.skill !== "number" || typeof playerB.skill !== "number") {
    return res.status(400).json({
      error: "Both playerA.skill and playerB.skill must be numbers",
    });
  }

  if (
    typeof playerA.attitude !== "string" ||
    typeof playerB.attitude !== "string"
  ) {
    return res.status(400).json({
      error: "Both playerA.attitude and playerB.attitude must be strings",
    });
  }

  try {
    const result = matchmaker.evaluateMatchStability(playerA, playerB);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMatch,
};
