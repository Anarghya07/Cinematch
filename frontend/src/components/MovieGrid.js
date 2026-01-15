import React from "react";

export default function MovieGrid({ movies }) {
  if (!movies || movies.length === 0) {
    return <p className="text-neonBlue p-4">No movies yet — pick a mood!</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <div key={movie.movieId} className="movie-card">
          <img src={movie.posterPath} alt={movie.title} />
          <p className="text-neonBlue mt-2 text-lg">{movie.title}</p>
          <p className="text-neonPink text-sm">{movie.releaseDate}</p>

          {/* ⭐ Ratings */}
          <p className="text-yellow-400">
            {"⭐".repeat(Math.round(movie.rating / 2))}
            <span className="ml-2">({movie.rating.toFixed(1)} / 10)</span>
          </p>
          <p className="text-gray-400 text-xs">{movie.votes} votes</p>

          {/* OTT Platforms */}
          <p className="text-green-400 text-sm">
            Available on: {movie.ott && movie.ott.length > 0 ? movie.ott.join(", ") : "YouTube"}
          </p>
        </div>
      ))}
    </div>
  );
}
