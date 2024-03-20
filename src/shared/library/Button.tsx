import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 5px;
  width: 120px;
  padding: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & a {
    text-decoration: none;
    color: #fff;
  }
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
