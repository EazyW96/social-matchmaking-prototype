function validatePlayerProfile(player) {
  if (!player.username) return false
  if (player.age < 13) return false
  if (player.behaviorScore < 1 || player.behaviorScore > 10) return false

  if (!Array.isArray(player.preferredGameModes)) return false

  return true
}

module.exports = validatePlayerProfile
