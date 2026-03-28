const express = require("express");
const fs = require("fs");
const path = require("path");

const matchmaker = require("./services/matchmaker");

const app = express();

/* -------------------- */
/* Middleware */
/* -------------------- */

app.use(express.json());

/* -------------------- */
/* Load players JSON */
/* -------------------- */

const players = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "./data/samplePlayers.json"),
    "utf-8"
  )
);

/* -------------------- */
/* Home route */
/* -------------------- */

app.get("/", (req, res) => {
  res.json({
    message: "Social Matchmaking API",
    description: "Sprint 2 matchmaking service with CI/CD",
    endpoints: {
      getPlayers: "GET /players",
      createMatch: "POST /match"
    }
  });
});

/* -------------------- */
/* GET /players */
/* -------------------- */

app.get("/players", (req, res) => {
  res.json(players);
});

/* -------------------- */
/* POST /match */
/* -------------------- */

app.post("/match", (req, res) => {
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
    res.status(500).json({
      error: "Matchmaking failed",
      details: error.message
    });
  }
});

/* -------------------- */
/* Start server */
/* -------------------- */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});