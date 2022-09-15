import React, { useEffect, useState } from "react";
import "../Styles/DetailMovie.css";
import apiConfig from "./apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";

const DetailMovie = (props) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetch(
      `${apiConfig.baseUrl}movie/${props.props.id}/credits?api_key=${apiConfig.apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((response) => {
        setCast(response.cast.slice(0, 5));
      })
      .catch((error) => {
        throw new Error("Nie ma takiego filmu");
      });
  });
  return (
    <div
      style={{
        backgroundImage: `url(${apiConfig.bigImage(
          props.props.backdrop_path
        )})`,
      }}
      className="detailMovie"
    >
      <div className="detailContainer">
        <img
          className="short"
          src={apiConfig.smallImage(props.props.poster_path)}
          alt={props.props.title}
        ></img>
        <div className="aboutDetail">
          <h1>{props.props.title}</h1>
          <h3>{props.props.overview}</h3>
          <h2>Casts</h2>
          {cast.map((item, index) => (
            <img
              className="castshort"
              key={index}
              src={apiConfig.smallImage(item.profile_path)}
              alt={item.name}
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
