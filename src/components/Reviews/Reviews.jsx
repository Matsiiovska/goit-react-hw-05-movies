import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import { ListUl } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviewsFilms = () => {
      setLoading(true);

      fetchReviews(movieId)
        .then(reviews => {
          setReviews(reviews);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchReviewsFilms();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <ListUl>
            {reviews.map(rev => (
              <li key={rev.id}>
                <h2>Author: {rev.author}</h2>
                <p>{rev.content}</p>
              </li>
            ))}
          </ListUl>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;