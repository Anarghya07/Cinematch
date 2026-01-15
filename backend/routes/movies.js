const express = require("express");
const router = express.Router();
const { getMoodMovies } = require("../controllers/moviesController");

router.get("/mood/:mood", getMoodMovies);

module.exports = router;
