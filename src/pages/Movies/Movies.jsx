import { useState } from 'react';
import Loader from 'components/Loader/Loader';
import EdList from 'pages/EdList/EdList';
import FormaIn from 'components/FormaIn/FormaIn';
import { fetchSearchByKeyword } from 'Api/Api';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const shMovies = queryMovie => {
    setLoading(true);

    fetchSearchByKeyword(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setNoMoviesText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main>
      <FormaIn shMovies={shMovies} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <EdList films={searchFilms} />}
    </main>
  );
};

export default Movies;