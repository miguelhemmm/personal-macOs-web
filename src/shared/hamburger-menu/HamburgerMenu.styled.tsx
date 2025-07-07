import styled from 'styled-components';

export const StyledHamburgerButton = styled.button<{ $size: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  position: relative;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledLine = styled.div<{ 
  $isOpen: boolean; 
  $color: string; 
  $position: 'top' | 'middle' | 'bottom' 
}>`
  width: 100%;
  height: 2px;
  background: ${({ $color }) => $color};
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  transform-origin: center;

  ${({ $isOpen, $position }) => {
    if ($isOpen) {
      switch ($position) {
        case 'top':
          return `
            transform: rotate(45deg) translateY(6px);
          `;
        case 'middle':
          return `
            opacity: 0;
            transform: scaleX(0);
          `;
        case 'bottom':
          return `
            transform: rotate(-45deg) translateY(-6px);
          `;
        default:
          return '';
      }
    }
    return '';
  }}
`;