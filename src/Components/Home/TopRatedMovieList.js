import React, { useState, useEffect } from "react";
import apiConfig from "../../Components/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import DetailMovie from "../DetailMovie";
import "../../Styles/TopRatedMovieList.css";
const TopRatedMovieList = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [movieProp, setMovieProp] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated/?api_key=${apiConfig.apiKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setPopularMovies(response.results);
      })
      .catch((error) => {
        throw new Error("ooops");
      });
  });
  return (
    <>
      <div className="topRatedMovies">
        <h3>Top Rated Movies</h3>
        <Swiper slidesPerView={6} loop={true}>
          {popularMovies.map((popularMovie, index) => (
            <SwiperSlide key={index}>
              <img
                src={apiConfig.smallImage(popularMovie.poster_path)}
                alt={popularMovie.title}
                onClick={() => {
                  setPopUp(true);
                  setMovieProp(popularMovie);
                  window.scroll({ top: 1500, behavior: "smooth" });
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {popUp ? <DetailMovie props={movieProp} /> : null}
    </>
  );
};

export default TopRatedMovieList;
