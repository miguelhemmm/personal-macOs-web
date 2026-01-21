// Toolbar.tsx
import { FC, Fragment, useRef, useState, useEffect } from "react";
import "./toolbar.scss";
import { StyledDivider, StyledTooltip, StyledDockIndicator } from "./Toolbar.styled";
import { useMediaQuery } from "@mui/material";
import { useWindowManager } from "context";
import { AppId } from "models";
import finderIcon from "../../assets/finder-icon.png";
import siriIcon from "../../assets/siri-icon.png";
import contactsIcon from "../../assets/contacts-icon.png";
import messagesIcon from "../../assets/messages-icon.png";
import notesIcon from "../../assets/notes-icon.png";
import musicIcon from "../../assets/music-icon.png";
import trashIcon from "../../assets/trash-icon.png";

interface DockIcon {
  name: string;
  src: string;
  appId: AppId;
  emoji?: string;
}

const icons: DockIcon[] = [
  {
    name: "Finder",
    src: finderIcon,
    appId: "finder",
  },
  {
    name: "Terminal",
    src: "",
    appId: "terminal",
    emoji: "💻",
  },
  {
    name: "Calculator",
    src: "",
    appId: "calculator",
    emoji: "🧮",
  },
  {
    name: "Notes",
    src: notesIcon,
    appId: "notes",
  },
  {
    name: "Mail",
    src: "",
    appId: "mail",
    emoji: "✉️",
  },
  {
    name: "Settings",
    src: "",
    appId: "settings",
    emoji: "⚙️",
  },
  {
    name: "Messages",
    src: messagesIcon,
    appId: "messages",
  },
  {
    name: "Contacts",
    src: contactsIcon,
    appId: "contacts",
  },
  {
    name: "Music",
    src: musicIcon,
    appId: "music",
  },
  {
    name: "Siri",
    src: siriIcon,
    appId: "siri",
  },
  {
    name: "Trash",
    src: trashIcon,
    appId: "trash",
  },
];

interface Props {
  minimize?: boolean;
  setMinimize?: (minimize: boolean) => void;
}

export const Toolbar: FC<Props> = () => {
  const matches = useMediaQuery("(max-width:740px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { openWindow, isAppOpen } = useWindowManager();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const calculateScale = (index: number) => {
    if (!isHovering) return 1;
    
    const itemWidth = 58; // 50px + 8px gap
    const itemCenter = index * itemWidth + itemWidth / 2;
    const distance = Math.abs(mousePosition.x - itemCenter);
    const maxDistance = 120; // Influence radius
    
    if (distance > maxDistance) return 1;
    
    const influence = 1 - (distance / maxDistance);
    const maxScale = 1.6;
    return 1 + (maxScale - 1) * influence;
  };

  const calculateTranslateY = (scale: number) => {
    return -(scale - 1) * 25; // Move up based on scale
  };

  const handleIconClick = (appId: AppId) => {
    openWindow(appId);
  };

  return (
    <>
      {!matches && (
        <div className="container" ref={containerRef}>
          {icons.map((icon, index) => {
            const scale = calculateScale(index);
            const translateY = calculateTranslateY(scale);
            const appOpen = isAppOpen(icon.appId);

            return (
              <Fragment key={icon.name}>
                {icon.name === "Trash" && <StyledDivider />}
                <StyledTooltip
                  arrow
                  title={icon.name}
                  placement="top"
                  key={icon.name}
                >
                  <div
                    className="box"
                    style={{
                      transform: `scale(${scale}) translateY(${translateY}px)`,
                      transition: isHovering ? 'transform 0.2s cubic-bezier(0.2, 0.0, 0.2, 1)' : 'transform 0.3s ease-out',
                      willChange: isHovering ? 'transform' : 'auto'
                    }}
                    onClick={() => handleIconClick(icon.appId)}
                  >
                    <span
                      className={icon.name === "Trash" ? "item item-bin" : "item"}
                      key={icon.name}
                    >
                      {icon.src ? (
                        <img src={icon.src} alt={icon.name} />
                      ) : (
                        <span className="emoji-icon">{icon.emoji}</span>
                      )}
                    </span>
                    {appOpen && <StyledDockIndicator />}
                  </div>
                </StyledTooltip>
              </Fragment>
            );
          })}
        </div>
      )}
    </>
  );
};
