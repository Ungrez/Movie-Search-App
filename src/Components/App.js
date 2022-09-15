import "../Styles/App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "../Components/Home/HomePage";
import MoviePage from "./MoviePage";
import TvSeriesPage from "./TvSeriesPage";
import "swiper/css/bundle";
import Footer from "./Footer";
// import fetchApi from "./fetchApi";

function App() {
  return (
    <Router>
      <nav className="nav-bar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search Movie</NavLink>
          </li>
          <li>
            <NavLink to="/tvseries">Tv Series</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/search" element={<MoviePage />}></Route>
          <Route path="/tvseries" element={<TvSeriesPage />}></Route>
        </Routes>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
