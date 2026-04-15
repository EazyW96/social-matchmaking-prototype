const fs = require("fs");
const path = require("path");

function getAllPlayers() {
  return JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "../data/samplePlayers.json"),
      "utf-8"
    )
  );
}

function getPlayerById(id) {
  const players = getAllPlayers();
  return players.find((player) => player.id === id);
}

module.exports = {
  getAllPlayers,
  getPlayerById
};