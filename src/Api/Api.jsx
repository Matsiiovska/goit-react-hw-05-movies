

//https://api.themoviedb.org/3/trending/all/day?language=en-US' \найпоп фільми
//https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' \пошук фільмів за ключовим словом
//https://api.themoviedb.org/3/movie/movie_id?language=en-US' \запит повної інформації про фільм
//https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US' \запит про акторський склад
//https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1' \запит оглядів
import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


const API_KEY = '992758a4802a699e8df27d4d6efc34fb';

export const fetchTrend = async () => {//список найпопулярніших фільмів
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchSearchByKeyword = async keyword => {//пошук фільмів за ключовим словом
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );
  return response.data.results;
};
//https://api.themoviedb.org/3/movie/movie_id?language=en-US' \запит повної інформації про фільм

export const fetchMovieDetails = async movieId => {//отримуємо деталі про фільм
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchActors = async movieId => {//список акторів за ід
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchReviews = async movieId => {//Список відгуків про фільм
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};