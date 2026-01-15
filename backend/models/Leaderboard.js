const mongoose = require("mongoose");
const LeaderboardSchema = new mongoose.Schema({
  circleName: String,
  trendingMovies: [{ movieId: String, title: String, count: Number }]
});
module.exports = mongoose.model("Leaderboard", LeaderboardSchema);
