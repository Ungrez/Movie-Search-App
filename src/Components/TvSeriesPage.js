import React, { useEffect, useState } from "react";
import apiConfig from "./apiConfig";
import DetailMovie from "./DetailMovie";
import "../Styles/TvSeriesPage.css";
const TvSeriesPage = () => {
  const [tvs, setTvs] = useState([]);

  useEffect(() => {
    fetch(`${apiConfig.baseUrl}discover/tv?api_key=${apiConfig.apiKey}`)
      .then((response) => response.json())
      .then((response) => setTvs(response.results))
      .catch((error) => {
        throw new Error("ooops");
      });
  });
  return (
    <>
      <div className="tvContainer">
        {tvs.map((tv, index) => (
          <img
            key={index}
            src={apiConfig.smallImage(tv.poster_path)}
            alt={tv.title}
          ></img>
        ))}
      </div>
    </>
  );
};

export default TvSeriesPage;
