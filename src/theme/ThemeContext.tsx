import { FC, ReactNode, } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Theme';
import { useTheme } from './useTheme';



type Props = {
  children: ReactNode;
};

export const ThemeContext: FC<Props> = ({ children }) => {
  const { theme } = useTheme();

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

