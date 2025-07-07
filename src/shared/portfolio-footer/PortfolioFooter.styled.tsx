import styled from 'styled-components';

export const StyledFooterText = styled.div<{ $color?: string }>`
  font-size: 10px;
  color: ${({ $color, theme }) => $color || theme.secondary || '#666'};
  line-height: 1.4;
  
  @media (max-width: 740px) {
    font-size: 9px;
  }
`;