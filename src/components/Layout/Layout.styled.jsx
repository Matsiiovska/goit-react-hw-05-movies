import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Header = styled.header`
  border-bottom: solid 2px orange;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  margin-bottom: 25px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  margin-left: 20px;
  font-weight: 700;
  font-size: 25px;
  color: black;

  &:hover {
    color: orange;
  }
`;