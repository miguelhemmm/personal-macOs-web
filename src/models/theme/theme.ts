import { Theme } from "models";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export interface ThemeProps {
  background: string;
  primary: string;
  text: string;
  card: string;
  nav: string;
  red: string;
  yellow: string;
  green: string;
  githubIcon: string;
  linkedinIcon: string;
  whatsappIcon: string;
}
