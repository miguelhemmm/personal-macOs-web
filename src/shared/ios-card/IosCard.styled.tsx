import styled from "styled-components";

export const StyledDiv = styled.div<{ $minimize?: boolean; $isIcon?: boolean }>`
  background-color: ${({ theme }) => theme.card};
  border-radius: ${({ $isIcon }) => ($isIcon ? "5px" : "10px")};
  font-size: 14px;
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 600px;
  margin: ${({ $isIcon }) => ($isIcon ? "0" : "20px")};
  animation: ${({ $minimize }) =>
    $minimize ? "genieMinimize 0.5s forwards" : "genieMaximize 0.5s forwards"};
  width: ${({ $isIcon }) => ($isIcon ? "70px" : "100%")};
  height: ${({ $isIcon }) => ($isIcon ? "50px" : "100%")};
  min-width: ${({ $isIcon }) => ($isIcon ? "50px" : "600px")};
  max-height: 350px;

  @media (max-width: 600px) {
    min-width: ${({ $isIcon }) => ($isIcon ? "50px" : "240px")};
    min-height: ${({ $isIcon }) => ($isIcon ? "50px" : "380px")};
  }

  @keyframes genieMinimize {
    0% {
      transform: scale(1);
      transform-origin: bottom right;
      opacity: 1;
    }
    70% {
      transform: scale(0.5) translate(80%, 180%); /* Adjust translate values as needed */
      transform-origin: bottom right;
      opacity: 0;
    }
    100% {
      transform: scale(1) translate(80%, 180%); /* Adjust translate values as needed */
      transform-origin: bottom right;
      opacity: 0;
      display: none;
    }
  }
  @keyframes genieMaximize {
    0% {
      transform: scale(0) translate(80%, 180%);
      transform-origin: bottom right;
      opacity: 0;
    }
    30% {
      transform: scale(0.5) translate(80%, 180%);
      transform-origin: bottom right;
      opacity: 0;
    }
    100% {
      transform: scale(1);
      transform-origin: bottom right;
      opacity: 1;
    }
  }
`;

export const StyledCardHeader = styled.div<{ $isIcon?: boolean }>`
  background-color: ${({ theme }) => theme.nav};
  border-radius: ${({ $isIcon }) =>
    $isIcon ? "5px 5px 0 0" : "10px 10px 0 0"};
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  font-size: ${({ $isIcon }) => ($isIcon ? "2px" : "inherit")};
`;

export const StyledSpan = styled.span<{ $isIcon?: boolean }>`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  padding-right: ${({ $isIcon }) => ($isIcon ? "10px" : "70px")};
  font-family: "Space Mono", monospace;
`;

export const StyledBody = styled.span<{ $isIcon?: boolean }>`
  font-family: "Space Mono", monospace;
  padding: ${({ $isIcon }) => ($isIcon ? "5px" : "20px")};
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: ${({ $isIcon }) => ($isIcon ? "2px" : "inherit")};
`;

export const StyledFooter = styled.span<{ $isIcon?: boolean }>`
  font-family: "Space Mono", monospace;
  padding: ${({ $isIcon }) => ($isIcon ? "2px" : "20px")};
  display: flex;
  flex-direction: column;
  font-size: ${({ $isIcon }) => ($isIcon ? "2px" : "inherit")};
`;

export const StyledDotContainer = styled.div<{ $isIcon?: boolean }>`
  position: sticky;
  display: flex;
  gap: ${({ $isIcon }) => ($isIcon ? "2px" : "8px")};
  top: 0;
`;

export const StyledDot = styled.span<{
  $backgroundColor: string;
  $isIcon?: boolean;
}>`
  height: ${({ $isIcon }) => ($isIcon ? "3px" : "12px")};
  width: ${({ $isIcon }) => ($isIcon ? "3px" : "12px")};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
