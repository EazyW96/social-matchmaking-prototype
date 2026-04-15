function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).json({
    error: "Matchmaking failed",
    details: err.message
  });
}

module.exports = errorHandler;