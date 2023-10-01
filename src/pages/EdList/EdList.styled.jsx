import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListFilm = styled.ul`
  list-style-type: none;
`;

export const ItemLi = styled.li`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 12px;
`;

export const MovLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: orange;
  }
`;