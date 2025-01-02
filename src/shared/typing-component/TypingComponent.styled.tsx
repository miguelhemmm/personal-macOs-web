import styled, { keyframes } from "styled-components";

// Define the typing and cursor animations using keyframes
export const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const blinkCaret = keyframes`
  50% {
    border-color: black;
  }
`;

// Styled components for the animation effect
export const StyledTypingComponent = styled.span`
  border-right: 3px solid black; // Cursor
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  padding-right: 5px; // Cursor spacing
`;
