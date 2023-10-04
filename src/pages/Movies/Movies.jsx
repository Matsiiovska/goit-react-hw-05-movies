import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import EdList from 'components/EdList/EdList';
import FormaIn from 'components/FormaIn/FormaIn';
import { fetchSearchByKeyword } from 'Api/Api';
import { useSearchParams, useNavigate } from 'react-router-dom'; // Изменено на useNavigate

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate(); 

    const query = searchParams.get('query') || '';

  const handleSubmit = value => {

    // Оновлюємо параметр 'query' в адресній строці
    setSearchParams({ query: value });

    navigate(`?query=${value}`);
  };

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetchSearchByKeyword(query)
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
    }
  }, [query]);

  return (
    <main>
      <FormaIn shMovies={handleSubmit} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>За цим запитом фільми не знайдено. Будь ласка, спробуйте ще раз.</p>
      )}
      {searchFilms && <EdList films={searchFilms} />}
    </main>
  );
};

export default Movies;