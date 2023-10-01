import { useState } from 'react';
import PropTypes from 'prop-types';
import { ShForm, Input, Button } from './FormaIn.styled';

const FormaIn = ({ shMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    shMovies(query.toLowerCase());
  };

  return (
    <ShForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </ShForm>
  );
};

FormaIn.propTypes = {
  shMovies: PropTypes.func.isRequired,
};

export default FormaIn;