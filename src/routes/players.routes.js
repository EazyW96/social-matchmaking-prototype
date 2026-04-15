const express = require("express");
const router = express.Router();
const {
  getAllPlayers,
  getPlayerById
} = require("../controllers/players.controller");

router.get("/", getAllPlayers);
router.get("/:id", getPlayerById);

module.exports = router;