import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import {Container, ListUl, ListIn, LinkIn, Button} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetailsFilms = () => {
      setLoading(true);

      fetchMovieDetails(movieId)
        .then(detailMovie => {
          setInfo(detailMovie);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchMovieDetailsFilms();
  }, [movieId]);

  if (!info) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = info || {};

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <Button type="button">Go back</Button>
      </Link>
      {loading && <Loader />}

      {info && (
        <Container>
          <img
            width="400px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
            }
            alt={original_title}
          />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ListUl>
              {genres.map(gen => (
                <li key={gen.id}>{gen.name}</li>
              ))}
            </ListUl>
          </div>
        </Container>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ListIn>
          <li>
            <LinkIn to="cast">Cast</LinkIn>
          </li>
          <li>
            <LinkIn to="reviews">Reviews</LinkIn>
          </li>
        </ListIn>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;