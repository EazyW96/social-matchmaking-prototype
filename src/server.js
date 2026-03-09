const express = require("express");
const fs = require("fs");
const path = require("path");

const matchmaker = require("./services/matchmaker");

const app = express();
const PORT = 3000;

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
    description: "Sprint 1 prototype matchmaking service",
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

  const result = matchmaker.evaluateMatch(playerA, playerB);

  res.json(result);
});

/* -------------------- */
/* Start server */
/* -------------------- */

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
