import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " image"}
      />
      <div className="card--content">
        <h2 className="card--title">{movie.title}</h2>
        <h3 className="card--votes">RATING : {movie.vote_average}</h3>
        <p className="card--releaseDate">
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p className="card--description">{movie.overview}</p>
      </div>
    </div>
  );
}