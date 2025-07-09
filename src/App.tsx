import { FC, useMemo, useState, useEffect } from "react";
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

  // Handle GitHub Pages SPA routing
  useEffect(() => {
    const isRedirected = window.location.search.includes('/?/');
    if (isRedirected) {
      const pathname = window.location.search.split('/?/')[1];
      if (pathname) {
        const decodedPath = '/' + pathname.replace(/~/g, '&');
        window.history.replaceState({}, '', decodedPath);
      }
    }
  }, []);

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
        <Route path="/experience" element={<AppShell />} />
        <Route path="/skills" element={<AppShell />} />
        <Route path="/projects" element={<AppShell />} />
        <Route path="/about" element={<AppShell />} />
        <Route path="/leadership" element={<AppShell />} />
        <Route path="/education" element={<AppShell />} />
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
