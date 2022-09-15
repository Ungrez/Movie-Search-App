import React, { useState, useEffect } from "react";
import apiConfig from "./apiConfig";
import "../Styles/MoviePage.css";
import DetailMovie from "./DetailMovie";
const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [movieProp, setMovieProp] = useState([]);
  useEffect(() => {
    if (movies !== []) {
      fetch(
        `https://api.themoviedb.org/3/movie/popular/?api_key=${apiConfig.apiKey}&language=en-US&page=2`
      )
        .then((response) => response.json())
        .then((response) => {
          setMovies(response.results);
        })
        .catch((error) => {
          throw new Error("ooops");
        });
    }
  }, []);

  const handleSearch = () => {
    if (input.length > 0) {
      fetch(
        `${apiConfig.baseUrl}search/movie?api_key=${apiConfig.apiKey}&query=${input}`
      )
        .then((response) => response.json())
        .then((response) => {
          setMovies(response.results);
        })
        .catch((error) => {
          throw new Error("Nie ma takiego filmu");
        });
      setInput("");
    }
  };
  return (
    <>
      <section className="container">
        {popUp ? <DetailMovie props={movieProp} /> : null}
        <div className="searchBar">
          <h3>Search your movie</h3>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <section className="moviesHolder">
          {movies !== []
            ? movies.map((movie, index) => (
                <img
                  onClick={(e) => {
                    setPopUp(true);
                    setMovieProp(movie);
                    window.scroll({ top: 0, behavior: "smooth" });
                  }}
                  key={index}
                  src={apiConfig.smallImage(movie.poster_path)}
                  alt={movie.title}
                ></img>
              ))
            : null}
        </section>
      </section>
    </>
  );
};

export default MoviePage;
