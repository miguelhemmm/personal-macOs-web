import { FC } from 'react';
import { StyledFooterText } from './PortfolioFooter.styled';

interface PortfolioFooterProps {
  children: React.ReactNode;
  color?: string;
}

export const PortfolioFooter: FC<PortfolioFooterProps> = ({ children, color }) => {
  return (
    <StyledFooterText $color={color}>
      {children}
    </StyledFooterText>
  );
};