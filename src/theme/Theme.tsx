import { ThemeProps } from "models";

export const darkTheme: ThemeProps = {
  primary: "var(--primary-color)",
  background: "var(--dark-background)",
  text: "var(--dark-text)",
  card: "var(--dark-card)",
  nav: "var(--dark-nav)",
  red: "var(--red-dark)",
  green: "var(--green-dark)",
  yellow: "var(--yellow-dark)",
  githubIcon: "var(--light-nav)",
  linkedinIcon: "var(--light-nav)",
  whatsappIcon: "var(--light-nav)",
  secondary: "#888",
  accent: "#007ACC",
  cardSecondary: "rgba(255, 255, 255, 0.05)",
  border: "rgba(255, 255, 255, 0.1)",
};

export const lightTheme: ThemeProps = {
  primary: "var(--primary-color)",
  background: "var(--light-background)",
  text: "var(--light-text)",
  card: "var(--light-card)",
  nav: "var(--light-nav)",
  red: "var(--red-light)",
  green: "var(--green-light)",
  yellow: "var(--yellow-light)",
  githubIcon: "var(--github-dark)",
  linkedinIcon: "var(--linkedin-dark)",
  whatsappIcon: "var(--whatsapp-dark)",
  secondary: "#666",
  accent: "#007ACC",
  cardSecondary: "rgba(0, 0, 0, 0.05)",
  border: "rgba(0, 0, 0, 0.1)",
};
