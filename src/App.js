import React from "react";
import "./styles.css";

import SearchMovies from "./searchMovies";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Movie Search App</h1>
      <SearchMovies />
    </div>
  );
}