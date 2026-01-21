import styled from "styled-components";

interface WindowProps {
  $isMaximized: boolean;
  $isFocused: boolean;
  $isDragging: boolean;
  $zIndex: number;
  $position: { x: number; y: number };
  $size: { width: number; height: number };
}

export const StyledWindow = styled.div<WindowProps>`
  position: ${({ $isMaximized }) => ($isMaximized ? "fixed" : "absolute")};
  top: ${({ $isMaximized, $position }) => ($isMaximized ? "30px" : `${$position.y}px`)};
  left: ${({ $isMaximized, $position }) => ($isMaximized ? "0" : `${$position.x}px`)};
  width: ${({ $isMaximized, $size }) => ($isMaximized ? "100vw" : `${$size.width}px`)};
  height: ${({ $isMaximized, $size }) => ($isMaximized ? "calc(100vh - 30px - 80px)" : `${$size.height}px`)};
  background-color: ${({ theme }) => theme.card};
  border-radius: ${({ $isMaximized }) => ($isMaximized ? "0" : "10px")};
  box-shadow: ${({ $isFocused, $isMaximized }) =>
    $isMaximized
      ? "none"
      : $isFocused
      ? "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.1)"
      : "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.1)"};
  z-index: ${({ $zIndex }) => $zIndex};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: ${({ $isDragging }) =>
    $isDragging ? "none" : "box-shadow 0.2s ease, border-radius 0.3s ease"};
  cursor: ${({ $isDragging }) => ($isDragging ? "grabbing" : "default")};

  @media (max-width: 740px) {
    position: fixed;
    top: 30px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 30px);
    border-radius: 0;
  }
`;

export const StyledWindowHeader = styled.div`
  background-color: ${({ theme }) => theme.nav};
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: grab;
  user-select: none;
  border-radius: 10px 10px 0 0;
  min-height: 20px;

  &:active {
    cursor: grabbing;
  }
`;

export const StyledWindowTitle = styled.span`
  flex: 1;
  text-align: center;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  padding-right: 70px;
`;

export const StyledDotContainer = styled.div`
  display: flex;
  gap: 8px;
`;

interface DotProps {
  $color: "close" | "minimize" | "maximize";
}

const dotColors = {
  close: "rgb(255, 105, 97)",
  minimize: "rgb(255, 212, 64)",
  maximize: "rgb(52, 199, 89)",
};

export const StyledDot = styled.span<DotProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ $color }) => dotColors[$color]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: filter 0.15s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const StyledWindowContent = styled.div<{ $isMaximized: boolean }>`
  flex: 1;
  overflow: auto;
  padding: 0;
  background-color: ${({ theme }) => theme.card};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.nav || "rgba(0,0,0,0.1)"};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent || "#007ACC"}44;
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.accent || "#007ACC"}66;
    }
  }
`;
