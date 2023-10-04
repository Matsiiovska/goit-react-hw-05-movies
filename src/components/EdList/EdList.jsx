import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListFilm, ItemLi, MovLink } from './EdList.styled';

const EdList = ({ films }) => {
  const location = useLocation();

  return (
    <ListFilm>
      {films.map(film => (
        <ItemLi key={film.id}>
          <MovLink to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </MovLink>
        </ItemLi>
      ))}
    </ListFilm>
  );
};

EdList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default EdList;