import { FC, useMemo } from "react";
import { useWindowManager } from "context";
import { Window } from "../window";
import { Terminal, Calculator, Settings, Notes, Mail } from "apps";
import { AppId } from "models";
import styled from "styled-components";

interface Props {
  theme?: "dark" | "light";
  toggleTheme?: () => void;
  currentLang?: string;
  setLang?: (lang: "en" | "es") => void;
}

const StyledWindowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;

  & > * {
    pointer-events: auto;
  }
`;

const PlaceholderApp: FC<{ name: string }> = ({ name }) => (
  <div
    style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
      textAlign: "center",
    }}
  >
    <div style={{ fontSize: "48px", marginBottom: "16px" }}>🚧</div>
    <h3 style={{ margin: "0 0 8px 0", fontSize: "18px" }}>{name}</h3>
    <p style={{ margin: 0, opacity: 0.6, fontSize: "14px" }}>
      Coming soon! This app is under construction.
    </p>
  </div>
);

export const WindowRenderer: FC<Props> = ({
  theme,
  toggleTheme,
  currentLang,
  setLang,
}) => {
  const {
    windows,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    focusWindow,
    moveWindow,
  } = useWindowManager();

  const appComponents: Record<AppId, FC<{ theme?: "dark" | "light"; toggleTheme?: () => void; currentLang?: string; setLang?: (lang: "en" | "es") => void }>> = useMemo(
    () => ({
      terminal: Terminal,
      calculator: Calculator,
      settings: (props) => (
        <Settings
          theme={props.theme}
          toggleTheme={props.toggleTheme}
          currentLang={props.currentLang}
          setLang={props.setLang}
        />
      ),
      notes: Notes,
      mail: Mail,
      finder: () => <PlaceholderApp name="Finder" />,
      safari: () => <PlaceholderApp name="Safari" />,
      calendar: () => <PlaceholderApp name="Calendar" />,
      photos: () => <PlaceholderApp name="Photos" />,
      music: () => <PlaceholderApp name="Music" />,
      messages: () => <PlaceholderApp name="Messages" />,
      maps: () => <PlaceholderApp name="Maps" />,
      appstore: () => <PlaceholderApp name="App Store" />,
      reminders: () => <PlaceholderApp name="Reminders" />,
      trash: () => <PlaceholderApp name="Trash" />,
      about: () => <PlaceholderApp name="About This Mac" />,
      siri: () => <PlaceholderApp name="Siri" />,
      contacts: () => <PlaceholderApp name="Contacts" />,
    }),
    []
  );

  if (windows.length === 0) return null;

  return (
    <StyledWindowContainer>
      {windows.map((win) => {
        const AppComponent = appComponents[win.appId];
        return (
          <Window
            key={win.id}
            window={win}
            onClose={() => closeWindow(win.id)}
            onMinimize={() => minimizeWindow(win.id)}
            onMaximize={() => maximizeWindow(win.id)}
            onRestore={() => restoreWindow(win.id)}
            onFocus={() => focusWindow(win.id)}
            onMove={(position) => moveWindow(win.id, position)}
          >
            <AppComponent
              theme={theme}
              toggleTheme={toggleTheme}
              currentLang={currentLang}
              setLang={setLang}
            />
          </Window>
        );
      })}
    </StyledWindowContainer>
  );
};
