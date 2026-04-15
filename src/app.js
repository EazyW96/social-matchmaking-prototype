const express = require("express");
const playersRoutes = require("./routes/players.routes");
const matchRoutes = require("./routes/match.routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

/* -------------------- */
/* Middleware */
/* -------------------- */
app.use(express.json());

/* -------------------- */
/* Home route */
/* -------------------- */
app.get("/", (req, res) => {
  res.json({
    message: "Social Matchmaking API",
    description:
      "Social Matchmaking API with live matchmaking, testing, and CI/CD",
    endpoints: {
      getPlayers: "GET /players",
      getPlayerById: "GET /players/:id",
      createMatch: "POST /match",
    },
  });
});

/* -------------------- */
/* Routes */
/* -------------------- */
app.use("/players", playersRoutes);
app.use("/match", matchRoutes);

/* -------------------- */
/* Error handler */
/* -------------------- */
app.use(errorHandler);

module.exports = app;
