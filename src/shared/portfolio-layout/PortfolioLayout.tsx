import { FC, ReactNode } from "react";
import { StyledContainer, StyledPixelArt } from "./PortfolioLayout.styled";
import pixelArtImage from "../../assets/pixel-art-48.png";

interface PortfolioLayoutProps {
  children: ReactNode;
  minimize?: boolean;
  isClose?: boolean;
  onPixelArtClick?: () => void;
}

export const PortfolioLayout: FC<PortfolioLayoutProps> = ({
  children,
  minimize,
  isClose,
  onPixelArtClick,
}) => {
  return (
    <StyledContainer>
      {children}
      <StyledPixelArt
        $minimize={minimize}
        $isClose={isClose}
        onClick={onPixelArtClick}
      >
        <img src={pixelArtImage} alt="Pixel Art Character" />
      </StyledPixelArt>
    </StyledContainer>
  );
};
