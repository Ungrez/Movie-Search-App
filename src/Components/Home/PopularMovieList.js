import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import apiConfig from "../../Components/apiConfig";
import DetailMovie from "../DetailMovie";

const PopularMovieList = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [movieProp, setMovieProp] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular/?api_key=${apiConfig.apiKey}&language=en-US&page=1`
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
      {popUp ? <DetailMovie props={movieProp} /> : null}
      <div className="popularMovies">
        <h3>Trending movies</h3>
        <Swiper slidesPerView={6} loop={true}>
          {popularMovies.map((popularMovie, index) => (
            <SwiperSlide key={index}>
              <img
                src={apiConfig.smallImage(popularMovie.poster_path)}
                alt={popularMovie.title}
                onClick={() => {
                  setPopUp(true);
                  setMovieProp(popularMovie);
                  window.scroll({ top: 600, behavior: "smooth" });
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PopularMovieList;
