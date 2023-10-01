import { Route, Routes } from "react-router-dom";
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import { Layout } from './Layout/Layout';


export const App = () => {
  return <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element = {<Home/>} />
    <Route path='/movies' element = {<Movies/>} />
      <Route path='/movies/:movieId' element={<MovieDetails />} >
       <Route path='/movies/:movieId/cast' element = {<Cast/>} />
    <Route path='/movies/:movieId/reviews' element = {<Reviews/>} />  
    </Route>
    </Route>
  </Routes>
};
