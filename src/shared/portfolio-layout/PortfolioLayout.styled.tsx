import styled from "@emotion/styled";

export const StyledPortfolioContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: calc(100dvh - 120px);
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scroll */
  max-width: 100vw;
  box-sizing: border-box;
  margin-top: 16px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 740px) {
    padding: 0;
    gap: 10px;
    flex-direction: column;
    max-width: 100vw;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    padding: 0;
    gap: 8px;
  }
`;

export const StyledPixelArt = styled.span<{
  $minimize?: boolean;
  $isClose?: boolean;
}>`
  cursor: pointer;
  animation: ${({ $minimize, $isClose }) =>
    $minimize || $isClose
      ? "bounceFromRight 1.5s cubic-bezier(0.28, 0.84, 0.42, 1) forwards"
      : "bounceFromRight 1.5s cubic-bezier(0.28, 0.84, 0.42, 1) forwards"};

  & img {
    width: 350px;
  }

  @media (max-width: 740px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

    & img {
      width: 180px;
      height: auto;
    }
  }

  @media (max-width: 600px) {
    & img {
      width: 150px;
    }
  }

  @keyframes bounceFromRight {
    0% {
      /* Start fully off to the right */
      transform: translateX(100%);
    }
    60% {
      /* Move to the center */
      transform: translateX(0%);
    }
    75% {
      /* Bounce slightly past center */
      transform: translateX(10%);
    }
    90% {
      /* Bounce back towards center */
      transform: translateX(0%);
    }
    100% {
      /* End in the center */
      transform: translateX(0%);
    }
  }
`;
