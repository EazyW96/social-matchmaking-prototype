const validatePlayerProfile = require("../src/utils/validatePlayerProfile")

test("valid player profile", () => {


    const player = {
      username: "AcePlayer",
      age: 22,
      behaviorScore: 8,
      preferredGameModes: ["Ranked"]
    }

    expect(validatePlayerProfile(player)).toBe(true)

})

test("invalid player profile", () => {

  const player = {
    usernaem: "",
    age: 10,
    behaviorScore: 20,
    preferredGameModes: "Ranked"
  }

  expect(validatePlayerProfile(player)).toBe(false)
})
