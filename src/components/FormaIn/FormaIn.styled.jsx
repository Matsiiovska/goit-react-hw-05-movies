import styled from '@emotion/styled';

export const ShForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid black;
  font-weight: 700;
  font-size: 20px;
  margin-right: 13px;
  border-radius: 5px 10px;
  outline: none;

  &:hover {
    color: orange;
    border: 1px solid orange;
  }
`;

export const Button = styled.button`
  padding: 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid black;
  color: black;
  font-weight: 700;
  font-size: 20px;
  border-radius: 5px 10px;

  &:hover {
    color: orange;
    border: 1px solid orange;
  }
`;