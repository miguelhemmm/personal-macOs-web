import { FC, useMemo, useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
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

export const App: FC = () => {
  const { theme, themeToggler } = useTheme();
  const [minimize, setMinimize] = useState<boolean>(false);
  const [maximize, setMaximize] = useState<boolean>(false);

  const toggleLang = (lang: Lang) => {
    i18n.changeLanguage(lang);
  };

  const themeMode = useMemo(() => {
    return theme === "dark" ? darkTheme : lightTheme;
  }, [theme]);

  const AppShell = () => {
    return (
      <>
        <Navigation
          toggleLang={toggleLang}
          toggleTheme={themeToggler}
          theme={theme}
        />
        <ContentComponent
          setMinimize={setMinimize}
          setMaximize={setMaximize}
          maximize={maximize}
          minimize={minimize}
          themeMode={themeMode}
        />
        <Toolbar setMinimize={setMinimize} minimize={minimize} />
      </>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppShell />}>
        <Route index element={<AppShell />} />
      </Route>
    )
  );

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContext>
  );
};
