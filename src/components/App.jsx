import { Route, Routes } from "react-router-dom";
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/movies' element = {<Movies/>} />
    <Route path='/movies/:movieId' element = {<MovieDetails/>} />
    <Route path='/movies/:movieId/cast' element = {<Cast/>} />
    <Route path='/movies/:movieId/reviews' element = {<Reviews/>} />

  </Routes>
};
