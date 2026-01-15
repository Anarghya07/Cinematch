const axios = require("axios");
const TMDB_API = "https://api.themoviedb.org/3";
const TMDB_KEY = process.env.TMDB_KEY;

const moodMap = {
  chill: "35",      // Comedy
  thriller: "53",   // Thriller
  romantic: "10749" // Romance
};

exports.getMoodMovies = async (req, res) => {
  try {
    const mood = req.params.mood;
    const genre = moodMap[mood] || "28"; // fallback Action

    const response = await axios.get(
      `${TMDB_API}/discover/movie?api_key=${TMDB_KEY}&language=en-US&with_genres=${genre}`
    );

    const movies = await Promise.all(
      (response.data.results || []).map(async (m) => {
        // Fetch OTT providers
        const providersRes = await axios.get(
          `${TMDB_API}/movie/${m.id}/watch/providers?api_key=${TMDB_KEY}`
        );

        let providers = [];
        if (
          providersRes.data &&
          providersRes.data.results &&
          providersRes.data.results.IN &&
          providersRes.data.results.IN.flatrate &&
          providersRes.data.results.IN.flatrate.length > 0
        ) {
          providers = providersRes.data.results.IN.flatrate.map(p => p.provider_name);
        } else {
          providers = ["YouTube"]; // ✅ guaranteed fallback
        }

        return {
          movieId: m.id,
          title: m.title,
          posterPath: m.poster_path
            ? `https://image.tmdb.org/t/p/w200${m.poster_path}`
            : "https://via.placeholder.com/200x300?text=No+Image",
          overview: m.overview,
          releaseDate: m.release_date,
          rating: m.vote_average,
          votes: m.vote_count,
          ott: providers
        };
      })
    );

    res.json({ movies });
  } catch (err) {
    console.error("Error fetching mood movies:", err.message);
    res.status(500).json({ error: err.message });
  }
};
