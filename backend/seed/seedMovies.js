const mongoose = require("mongoose");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

// Connect to Mongo Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.error(err));

// Define Movie Schema (lightweight for demo)
const MovieSchema = new mongoose.Schema({
  movieId: String,
  title: String,
  posterPath: String,
  overview: String,
  releaseDate: String,
  genres: [String]
});

const Movie = mongoose.model("Movie", MovieSchema);

async function seedMovies() {
  try {
    // Fetch popular movies from TMDB
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    const movies = data.results.map(m => ({
      movieId: m.id,
      title: m.title,
      posterPath: m.poster_path,
      overview: m.overview,
      releaseDate: m.release_date,
      genres: m.genre_ids.map(String)
    }));

    await Movie.insertMany(movies);
    console.log(`Inserted ${movies.length} movies 🎬`);
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
}

seedMovies();
