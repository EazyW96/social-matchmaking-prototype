class PlayerProfile {
    constructor({
      id,
      username,
      age,
      skillLevel,
      behaviorScore,
      preferredGameModes,
      availability,
      region,
      platform,
      bio
    }) {
      this.id = id
      this.username = username
      this.age = age
      this.skillLevel = skillLevel
      this.behaviorScore = behaviorScore
      this.preferredGameModes = preferredGameModes
      this.availability = availability
      this.region = region
      this.platform = platform
      this.bio = bio
    }
}

module.exports = PlayerProfile
