function evaluateMatchStability(playerA, playerB) {
  const skillDifference = Math.abs(playerA.skill - playerB.skill);
  const attitudeMatch = playerA.attitude === playerB.attitude;

  let score = 0;

  // Skill comparison
  if (skillDifference <= 2) {
    score += 1;
  }

  // Attitude comparison
  if (attitudeMatch) {
    score += 1;
  }

  return {
    compatible: score >= 1,
    skillDifference: skillDifference,
    attitudeMatch: attitudeMatch,
    score: score
  };
}

module.exports = { evaluateMatchStability };
