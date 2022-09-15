import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import apiConfig from "../../Components/apiConfig";
import "../../Styles/HomePage.css";
import "swiper/css/autoplay";
import MoviesList from "./MoviesList";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular/?api_key=${apiConfig.apiKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results.slice(0, 5));
      })
      .catch((error) => {
        throw new Error("ooops");
      });
  }, [movies]);
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div
              className="movie"
              style={{
                backgroundImage: `url(${apiConfig.bigImage(
                  movie.backdrop_path
                )})`,
              }}
            >
              <div id="movieTitle">
                <h2 style={{ animation: `1s fadeIn` }}>{movie.title}</h2>
                <p>{movie.overview}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <MoviesList />
    </>
  );
};

export default HomePage;
