import { FC, ReactNode, useState, useRef, useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import {
  StyledWindow,
  StyledWindowHeader,
  StyledWindowTitle,
  StyledDotContainer,
  StyledDot,
  StyledWindowContent,
} from "./Window.styled";
import { WindowState } from "models";

interface Props {
  window: WindowState;
  children: ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onRestore: () => void;
  onFocus: () => void;
  onMove: (position: { x: number; y: number }) => void;
}

export const Window: FC<Props> = ({
  window: windowState,
  children,
  onClose,
  onMinimize,
  onMaximize,
  onRestore,
  onFocus,
  onMove,
}) => {
  const [showIcons, setShowIcons] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (windowState.isMaximized) return;

      onFocus();
      setIsDragging(true);
      dragOffset.current = {
        x: e.clientX - windowState.position.x,
        y: e.clientY - windowState.position.y,
      };

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const newX = moveEvent.clientX - dragOffset.current.x;
        const newY = moveEvent.clientY - dragOffset.current.y;

        const boundedX = Math.max(0, Math.min(newX, window.innerWidth - 100));
        const boundedY = Math.max(30, Math.min(newY, window.innerHeight - 100));

        onMove({ x: boundedX, y: boundedY });
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [windowState.isMaximized, windowState.position, onFocus, onMove]
  );

  const handleDoubleClick = () => {
    if (windowState.isMaximized) {
      onRestore();
    } else {
      onMaximize();
    }
  };

  if (windowState.isMinimized) {
    return null;
  }

  return (
    <StyledWindow
      ref={windowRef}
      $isMaximized={windowState.isMaximized}
      $isFocused={windowState.isFocused}
      $isDragging={isDragging}
      $zIndex={windowState.zIndex}
      $position={windowState.position}
      $size={windowState.size}
      onClick={onFocus}
    >
      <StyledWindowHeader
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
      >
        <StyledDotContainer
          onMouseEnter={() => setShowIcons(true)}
          onMouseLeave={() => setShowIcons(false)}
        >
          <StyledDot $color="close" onClick={onClose}>
            {showIcons && (
              <CloseIcon sx={{ fontSize: "10px", color: "var(--dark-nav)" }} />
            )}
          </StyledDot>
          <StyledDot $color="minimize" onClick={onMinimize}>
            {showIcons && (
              <RemoveOutlinedIcon
                sx={{ fontSize: "10px", color: "var(--dark-nav)" }}
              />
            )}
          </StyledDot>
          <StyledDot
            $color="maximize"
            onClick={windowState.isMaximized ? onRestore : onMaximize}
          >
            {showIcons &&
              (windowState.isMaximized ? (
                <CloseFullscreenIcon
                  sx={{ fontSize: "10px", color: "var(--dark-nav)" }}
                />
              ) : (
                <OpenInFullOutlinedIcon
                  sx={{ fontSize: "10px", color: "var(--dark-nav)" }}
                />
              ))}
          </StyledDot>
        </StyledDotContainer>
        <StyledWindowTitle>{windowState.title}</StyledWindowTitle>
      </StyledWindowHeader>
      <StyledWindowContent $isMaximized={windowState.isMaximized}>
        {children}
      </StyledWindowContent>
    </StyledWindow>
  );
};
