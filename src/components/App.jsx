import { Routes, Route, useLocation } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout";

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));

export const App = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<SharedLayout/>}>
          <Route index  element={<Home/>}/>
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="movies" element={<Movies/>}/>
        </Route>
      </Routes>
    </div>
  );
};
