import styled from "@emotion/styled";

export const StyledDiv = styled("div", {
  shouldForwardProp: (propName: string) => !propName.startsWith("$"),
})(({ $isDarkMode }: { $isDarkMode?: boolean }) => ({
  backgroundColor: $isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color)",
  minHeight: "100dvh",
}));

export const StyledContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 32px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 740px) {
    padding: 0;
    overflow-x: hidden;
    gap: 10px;
    flex-direction: column;
  }
`;

export const StyledPixelArt = styled.span<{ $hasAnimated?: boolean }>`
  cursor: pointer;
  animation: ${({ $hasAnimated }) =>
    $hasAnimated
      ? "none"
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
      transform: translateX(100%);
    }
    60% {
      transform: translateX(0%);
    }
    75% {
      transform: translateX(10%);
    }
    90% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
