import styled from "styled-components";

import { keyframes } from "@emotion/react";

// Define keyframes for the fade-in effect
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StyledNav = styled.nav<{ $isDarkTheme?: boolean }>`
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

  @media only screen and (max-width: 740px) {
    background-color: var(--transparent-background);
  }
`;

export const StyledDiv = styled.div`
  background: transparent;
  position: fixed;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 5px 10px;
  align-items: center;
`;

export const StyledNavItem = styled.ul<{
  $position: "flex-start" | "flex-end" | "center";
}>`
  padding: 10px 20px;
  display: flex;
  gap: 12px;
  justify-content: ${({ $position }) =>
    $position === "center" ? "center" : $position};
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

  @media only screen and (max-width: 740px) {
    position: relative;
    align-items: center;
  }
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
  font-size: 10px;
  cursor: pointer;
  animation: ${({ $isActive }) =>
    $isActive ? `${fadeIn} 0.3s ease-in-out` : "none"};
  transition: background-color 0.5s ease-in-out;
`;

export const StyledNavButton = styled.button<{ $isActive?: boolean }>`
  background: none;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
  color: ${({ $isActive }) => ($isActive ? '#007ACC' : 'inherit')};
  transition: color 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:focus {
    outline: none;
  }
`;

export const StyledTimeDisplay = styled.span`
  color: inherit;
  font-size: 14px;
  font-family: inherit;
  cursor: default;
`;
