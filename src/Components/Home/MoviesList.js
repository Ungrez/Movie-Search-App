import React from "react";
import "../../Styles/MovieList.css";
import PopularMovieList from "./PopularMovieList";
import TopRatedMovieList from "./TopRatedMovieList";

const MovieList = () => {
  return (
    <div className="movieList">
      <PopularMovieList />
      <TopRatedMovieList />
    </div>
  );
};

export default MovieList;
