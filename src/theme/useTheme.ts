import { Theme } from "models";
import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const setMode = (mode: Theme) => {
    setTheme(mode);
  };

  const themeToggler = () => (theme === "dark" ? setMode("light") : setMode("dark"));

  return { theme, themeToggler };
};
