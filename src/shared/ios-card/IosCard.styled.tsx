import styled from "styled-components";

export const StyledDiv = styled.div<{ $minimize?: boolean; $maximize?: boolean; $isIcon?: boolean; $isPortfolio?: boolean }>`
  background-color: ${({ theme }) => theme.card};
  border-radius: ${({ $isIcon }) => ($isIcon ? "5px" : "10px")};
  font-size: 14px;
  display: flex;
  position: ${({ $maximize }) => ($maximize ? "fixed" : "relative")};
  flex-direction: column;
  max-width: ${({ $maximize }) => ($maximize ? "none" : "600px")};
  margin: ${({ $isIcon, $maximize }) => 
    $maximize ? "0" : ($isIcon ? "0" : "20px")};
  animation: ${({ $minimize, $maximize }) =>
    $minimize ? "genieMinimize 0.5s cubic-bezier(0.4, 0.0, 0.2, 1) forwards" : 
    $maximize ? "maximizeCard 0.4s cubic-bezier(0.2, 0.0, 0.2, 1) forwards" :
    "restoreCard 0.4s cubic-bezier(0.4, 0.0, 0.2, 1) forwards"};
  will-change: ${({ $minimize, $maximize }) => 
    ($minimize || $maximize) ? "transform, border-radius, box-shadow" : "auto"};
  width: ${({ $isIcon, $maximize }) => 
    $maximize ? "100vw" : ($isIcon ? "70px" : "100%")};
  height: ${({ $isIcon, $maximize }) => 
    $maximize ? "100vh" : ($isIcon ? "50px" : "100%")};
  min-width: ${({ $isIcon, $maximize }) => 
    $maximize ? "100vw" : ($isIcon ? "50px" : "600px")};
  max-height: ${({ $isPortfolio, $maximize }) => 
    $maximize ? "100vh" : ($isPortfolio ? "500px" : "350px")};
  top: ${({ $maximize }) => ($maximize ? "0" : "auto")};
  left: ${({ $maximize }) => ($maximize ? "0" : "auto")};
  z-index: ${({ $maximize }) => ($maximize ? "9999" : "auto")};
  border-radius: ${({ $maximize, $isIcon }) => 
    $maximize ? "0" : ($isIcon ? "5px" : "10px")};

  @media (max-width: 740px) {
    min-width: ${({ $isIcon, $maximize }) => 
      $maximize ? "100vw" : ($isIcon ? "50px" : "calc(100vw - 20px)")};
    max-width: ${({ $isIcon, $maximize }) => 
      $maximize ? "100vw" : ($isIcon ? "70px" : "calc(100vw - 20px)")};
    width: ${({ $isIcon, $maximize }) => 
      $maximize ? "100vw" : ($isIcon ? "70px" : "calc(100vw - 20px)")};
    min-height: ${({ $isIcon, $maximize }) => 
      $maximize ? "100vh" : ($isIcon ? "50px" : "auto")};
    max-height: ${({ $isPortfolio, $maximize }) => 
      $maximize ? "100vh" : ($isPortfolio ? "60vh" : "50vh")};
    margin: ${({ $isIcon, $maximize }) => 
      $maximize ? "0" : ($isIcon ? "0" : "10px")};
    border-radius: ${({ $maximize, $isIcon }) => 
      $maximize ? "0" : ($isIcon ? "5px" : "15px")};
    overflow-x: hidden;
    box-sizing: border-box;
  }

  @media (max-width: 600px) {
    min-width: ${({ $isIcon, $maximize }) => 
      $maximize ? "100vw" : ($isIcon ? "50px" : "calc(100vw - 16px)")};
    max-width: ${({ $isIcon, $maximize }) => 
      $maximize ? "100vw" : ($isIcon ? "70px" : "calc(100vw - 16px)")};
    width: ${({ $isIcon, $maximize }) => 
      $maximize ? "100vw" : ($isIcon ? "70px" : "calc(100vw - 16px)")};
    min-height: ${({ $isIcon, $maximize }) => 
      $maximize ? "100vh" : ($isIcon ? "50px" : "auto")};
    max-height: ${({ $isPortfolio, $maximize }) => 
      $maximize ? "100vh" : ($isPortfolio ? "55vh" : "45vh")};
    margin: ${({ $isIcon, $maximize }) => 
      $maximize ? "0" : ($isIcon ? "0" : "8px")};
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

  @keyframes maximizeCard {
    0% {
      transform: scale(1);
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }
    25% {
      transform: scale(1.02);
      border-radius: 8px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }
    75% {
      transform: scale(1.01);
      border-radius: 4px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
    }
    100% {
      transform: scale(1);
      border-radius: 0;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
  }

  @keyframes restoreCard {
    0% {
      transform: scale(1);
      border-radius: 0;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    25% {
      transform: scale(0.98);
      border-radius: 4px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
    75% {
      transform: scale(1.01);
      border-radius: 8px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
    }
    100% {
      transform: scale(1);
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
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

export const StyledBody = styled.span<{ $isIcon?: boolean; $maximize?: boolean }>`
  font-family: "Space Mono", monospace;
  padding: ${({ $isIcon }) => ($isIcon ? "5px" : "20px")};
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: ${({ $isIcon }) => ($isIcon ? "2px" : "inherit")};
  overflow-y: auto;
  flex: 1;
  max-height: ${({ $isIcon, $maximize }) => 
    $maximize ? "calc(100vh - 120px)" : 
    ($isIcon ? "20px" : "400px")};
  
  /* Custom scrollbar styling for macOS aesthetic */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.nav || 'rgba(0,0,0,0.1)'};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent || '#007ACC'}44;
    border-radius: 4px;
    
    &:hover {
      background: ${({ theme }) => theme.accent || '#007ACC'}66;
    }
  }
  
  /* Firefox scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.accent || '#007ACC'}44 ${({ theme }) => theme.nav || 'rgba(0,0,0,0.1)'};
  
  @media (max-width: 740px) {
    padding: 15px;
    gap: 15px;
    font-size: 14px;
    line-height: 1.5;
  }
  
  @media (max-width: 600px) {
    padding: 12px;
    gap: 12px;
    font-size: 13px;
  }
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
