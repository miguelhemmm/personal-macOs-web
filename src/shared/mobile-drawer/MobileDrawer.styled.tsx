import styled from 'styled-components';

export const StyledDrawer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
`;

export const StyledDrawerOverlay = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const StyledDrawerContent = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: ${({ theme }) => theme.nav || 'rgba(30, 30, 30, 0.95)'};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid ${({ theme }) => theme.accent || 'rgba(255, 255, 255, 0.1)'};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
  transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  box-shadow: ${({ $isOpen }) => 
    $isOpen ? '0 0 30px rgba(0, 0, 0, 0.3)' : 'none'};
  
  /* iOS-style curved corners */
  border-radius: 0 20px 20px 0;
  
  /* Add top padding for status bar */
  padding-top: 60px;
`;

export const StyledNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const StyledNavItem = styled.li<{ $isActive: boolean }>`
  padding: 16px 24px;
  color: ${({ theme, $isActive }) => 
    $isActive ? (theme.accent || '#007ACC') : (theme.text || '#ffffff')};
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $isActive, theme }) => 
    $isActive ? (theme.accent ? `${theme.accent}20` : 'rgba(0, 122, 204, 0.2)') : 'transparent'};
  border-left: ${({ $isActive, theme }) => 
    $isActive ? `3px solid ${theme.accent || '#007ACC'}` : '3px solid transparent'};

  &:hover {
    background: ${({ theme }) => theme.accent ? `${theme.accent}10` : 'rgba(0, 122, 204, 0.1)'};
    transform: translateX(4px);
  }

  &:active {
    transform: translateX(2px);
    background: ${({ theme }) => theme.accent ? `${theme.accent}30` : 'rgba(0, 122, 204, 0.3)'};
  }
`;