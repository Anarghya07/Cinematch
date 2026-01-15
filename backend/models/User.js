const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  likedGenres: [String],
  watchlist: [{ movieId: String, title: String, posterPath: String }],
  history: [{ movieId: String, title: String, watchedAt: { type: Date, default: Date.now } }]
});
module.exports = mongoose.model("User", UserSchema);
