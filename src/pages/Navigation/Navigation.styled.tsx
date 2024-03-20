import styled from "styled-components";

import { keyframes } from "@emotion/react";

// Define keyframes for the fade-in effect
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StyledNav = styled.nav`
  background-color: var(--dark-nav);
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  & li a {
    font-size: 14px;
    font-weight: bold;
    color: var(--dark-text);
    text-decoration: none;
  }

  & img {
    height: 16px;
  }
`;

export const StyledDiv = styled.div`
  background: transparent;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 0 20px;
  align-items: center;
`;

export const StyledNavItem = styled.ul<{ $position: "flex-start" | "flex-end" }>`
  padding: 10px 20px;
  display: flex;
  gap: 20px;
  justify-content: ${({ $position }) => $position};
  align-items: center;

  & li {
    display: flex;
    align-items: center;
  }
`;

export const StyledImg = styled.img`
  -webkit-filter: invert(100%);
  filter: invert(100%);
  width: 16px;
`;

export const StyledItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledButton = styled.button<{ $isActive?: boolean }>`
  background-color: var(--white);
  border: none;
  border-radius: 3px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: var(--light-text);
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  animation: ${({ $isActive }) => ($isActive ? `${fadeIn} 0.3s ease-in-out` : "none")};
  transition: background-color 0.5s ease-in-out;
`;
