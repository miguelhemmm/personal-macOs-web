import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
  flex-wrap: wrap-reverse;

  @media only screen and (max-width: 740px) {
    padding: 0;
  }
`;

export const StyledImg = styled.img`
  width: 300px;
  position: absolute;
  left: 20%;
  object-fit: cover;
`;
export const StyledSpan = styled.span<{
  $minimize?: boolean;
  $isClose?: boolean;
}>`
  cursor: pointer;
  animation: ${({ $minimize, $isClose }) =>
    $minimize || $isClose
      ? "animationRight 1s ease-in-out"
      : "animationLeft 1s ease-in-out"};

  & img {
    width: 350px;
  }

  @keyframes animationLeft {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(80%); /* Gentle move towards the right */
    }
    100% {
      transform: translateX(0%); /* Completes the move to the right */
    }
  }

  @keyframes animationRight {
    0% {
      transform: translateX(-0%);
      padding-left: 500px;
    }
    50% {
      transform: translateX(-30%); /* Gentle move towards the left */
      padding-left: 200px;
    }
    100% {
      transform: translateX(-20%); /* Completes the move back to the left */
      padding-left: 100px;
    }
  }
`;
