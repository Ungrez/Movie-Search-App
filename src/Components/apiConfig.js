const apiConfig = {
  bigImage: (imgSrc) => `https://image.tmdb.org/t/p/original/${imgSrc}`,
  smallImage: (imgSrc) => `https://image.tmdb.org/t/p/w500/${imgSrc}`,
  apiKey: "ccc14c7676488fc61c3c738ad39a63d0",
  baseUrl: "https://api.themoviedb.org/3/",
  homePage:
    "https://api.themoviedb.org/3/movie/popular?api_key=ccc14c7676488fc61c3c738ad39a63d0&language=en-US&page=1",
};

export default apiConfig;
