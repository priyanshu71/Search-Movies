import React, { useState } from "react";
import MovieCard from "./movieCardComponent";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (event) => {
    event.preventDefault();
    console.log("submitting request");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=706218bbc9df3f5629981b452b120310&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      /* console.log(data.results); */
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          <span>&#128071;</span> Search for Movies Here <span>&#128071;</span>
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Eg. Titanic "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>

      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}