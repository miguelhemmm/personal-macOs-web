import { FC, useMemo, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Navigation } from "./pages/Navigation";
import i18n from "i18n/i18n";
import { Lang } from "models";
import { ThemeContext, darkTheme, lightTheme, useTheme } from "theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global";
import { ContentComponent } from "./pages/content";
import { Toolbar } from "./pages/toolbar";
import { StyledContentWrapper, StyledPixelArt } from "./App.styled";
import pixelArtImage from "./assets/pixel-art-48.png";

// AppLayout component defined outside App to prevent recreation on re-renders
const AppLayout: FC = () => {
  const { theme, themeToggler } = useTheme();
  const [minimize, setMinimize] = useState<boolean>(false);
  const [maximize, setMaximize] = useState<boolean>(false);
  const [isClose, setIsClose] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [isMinimizeAnimating, setIsMinimizeAnimating] = useState<boolean>(false);

  // Wrapper to trigger animation only when going from not-minimized to minimized
  const handleMinimize = (value: boolean) => {
    if (value && !minimize) {
      setIsMinimizeAnimating(true);
    }
    setMinimize(value);
  };

  const toggleLang = (lang: Lang) => {
    i18n.changeLanguage(lang);
  };

  const themeMode = useMemo(() => {
    return theme === "dark" ? darkTheme : lightTheme;
  }, [theme]);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Navigation
        toggleLang={toggleLang}
        toggleTheme={themeToggler}
        theme={theme}
      />
      <StyledContentWrapper>
        <ContentComponent
          setMinimize={handleMinimize}
          setMaximize={setMaximize}
          maximize={maximize}
          minimize={minimize}
          themeMode={themeMode}
          isClose={isClose}
          setIsClose={setIsClose}
          isMinimizeAnimating={isMinimizeAnimating}
          setIsMinimizeAnimating={setIsMinimizeAnimating}
        />
        <StyledPixelArt
          $hasAnimated={hasAnimated}
          onAnimationEnd={() => setHasAnimated(true)}
          onClick={() => setIsClose(false)}
        >
          <img src={pixelArtImage} alt="Pixel Art Character" />
        </StyledPixelArt>
      </StyledContentWrapper>
      <Toolbar setMinimize={setMinimize} minimize={minimize} />
    </ThemeProvider>
  );
};

// Router created at module level to prevent recreation
const router = createBrowserRouter([
  {
    path: "*",
    element: <AppLayout />,
  },
]);

export const App: FC = () => {
  return (
    <ThemeContext>
      <RouterProvider router={router} />
    </ThemeContext>
  );
};
