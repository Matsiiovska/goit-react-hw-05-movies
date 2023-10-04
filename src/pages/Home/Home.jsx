import React, { useEffect, useState } from 'react';
import EdList from 'components/EdList/EdList';
import { fetchTrend } from 'Api/Api';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendFilms = () => {
      setLoading(true);

      fetchTrend()
        .then(trendFilms => {
          setFilms(trendFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <EdList films={films} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;