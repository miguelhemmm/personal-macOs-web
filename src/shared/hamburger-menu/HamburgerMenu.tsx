import { FC } from 'react';
import { StyledHamburgerButton, StyledLine } from './HamburgerMenu.styled';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
  size?: number;
  color?: string;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({
  isOpen,
  onClick,
  size = 20,
  color = '#ffffff'
}) => {
  return (
    <StyledHamburgerButton 
      onClick={onClick}
      $size={size}
      aria-label="Toggle menu"
      role="button"
    >
      <StyledLine $isOpen={isOpen} $color={color} $position="top" />
      <StyledLine $isOpen={isOpen} $color={color} $position="middle" />
      <StyledLine $isOpen={isOpen} $color={color} $position="bottom" />
    </StyledHamburgerButton>
  );
};