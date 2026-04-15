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

test("should fail if username is missing", () => {
  const player = {
    age: 22,
    behaviorScore: 5,
    preferredGameModes: ["Ranked"]
  }

  expect(validatePlayerProfile(player)).toBe(false)
})

test("should fail if age is too low", () => {
  const player = {
    username: "Test",
    age: 5,
    behaviorScore: 5,
    preferredGameModes: ["Ranked"]
  }

  expect(validatePlayerProfile(player)).toBe(false)
})

test("should fail if behaviorScore is too high", () => {
  const player = {
    username: "Test",
    age: 22,
    behaviorScore: 100,
    preferredGameModes: ["Ranked"]
  }

  expect(validatePlayerProfile(player)).toBe(false)
})

test("should fail if preferredGameModes is not an array", () => {
  const player = {
    username: "Test",
    age: 22,
    behaviorScore: 5,
    preferredGameModes: "Ranked"
  }

  expect(validatePlayerProfile(player)).toBe(false)
})

test("should pass with minimal valid player", () => {
  const player = {
    username: "ValidUser",
    age: 18,
    behaviorScore: 5,
    preferredGameModes: ["Casual"]
  }

  expect(validatePlayerProfile(player)).toBe(true)
})