import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 30px;
  gap: 30px;
`;

export const ListUl = styled.ul`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListIn = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const LinkIn = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  color: black;

  &:hover {
    color: orange;
  }
`;

export const Button = styled.button`
  padding: 8px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid gray;
  color: black;
  font-weight: 700;
  font-size: 20px;
  border-radius: 5px 10px;

  &:hover {
    color: orange;
    border: 1px solid orange;
  }
`;