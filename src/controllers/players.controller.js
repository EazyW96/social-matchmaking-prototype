const playerService = require("../services/player.service");

function getAllPlayers(req, res) {
  const players = playerService.getAllPlayers();
  res.json(players);
}

function getPlayerById(req, res) {
  const id = Number(req.params.id);
  const player = playerService.getPlayerById(id);

  if (!player) {
    return res.status(404).json({
      error: "Player not found"
    });
  }

  res.json(player);
}

module.exports = {
  getAllPlayers,
  getPlayerById
};