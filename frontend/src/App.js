import React, { useState } from "react";
import axios from "axios";
import MoodSelector from "./components/MoodSelector";
import MovieGrid from "./components/MovieGrid";
import './App.css';

function App() {
  
  const [movies, setMovies] = useState([]);

  const fetchMoodMovies = async (mood) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/movies/mood/${mood}`);
      setMovies(data.movies); // ✅ matches backend response
    } catch (err) {
      console.error("Error fetching movies:", err.message);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <h1 className="text-neonPink text-4xl p-4">🎬 Cinematch</h1>
      <MoodSelector onSelect={fetchMoodMovies} />
      <MovieGrid movies={movies} />
    </div>
  );
}

export default App;
