const mongoose = require("mongoose");
const MovieClubSchema = new mongoose.Schema({
  name: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  discussions: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, message: String }]
});
module.exports = mongoose.model("MovieClub", MovieClubSchema);
