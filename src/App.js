import "./App.css";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=cf79b36e";

  const getMovies = async (title) => {
    const res = await fetch(`${api_url}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    getMovies("Batman");
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getMovies(searchTerm);
    }
  };

  return (
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <AiOutlineSearch
          onClick={() => {
            getMovies(searchTerm);
          }}
          size={"3rem"}
          color={"white"}
        />
      </div>
      {movies?.length > 0 ? (
        <MovieCard movies={movies}></MovieCard>
      ) : (
        <div className="empty">
          <h2>no movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
