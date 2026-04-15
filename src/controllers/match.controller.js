const matchmaker = require("../services/matchmaker");

function createMatch(req, res, next) {
  const { playerA, playerB } = req.body;

  if (!playerA || !playerB) {
    return res.status(400).json({
      error: "Both playerA and playerB must be provided"
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
  createMatch
};