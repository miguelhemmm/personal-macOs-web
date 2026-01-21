import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageIcon from "@mui/icons-material/Language";
import InfoIcon from "@mui/icons-material/Info";
import PaletteIcon from "@mui/icons-material/Palette";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  StyledSettings,
  StyledSidebar,
  StyledSidebarItem,
  StyledContent,
  StyledSection,
  StyledSectionTitle,
  StyledOption,
  StyledOptionLabel,
  StyledOptionValue,
  StyledToggle,
  StyledSelect,
  StyledAboutSection,
} from "./Settings.styled";

type SettingsTab = "general" | "appearance" | "language" | "about";

interface Props {
  theme?: "dark" | "light";
  toggleTheme?: () => void;
  currentLang?: string;
  setLang?: (lang: "en" | "es") => void;
}

export const Settings: FC<Props> = ({
  theme = "dark",
  toggleTheme,
  currentLang = "en",
  setLang,
}) => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<SettingsTab>("general");

  const handleLanguageChange = (lang: "en" | "es") => {
    i18n.changeLanguage(lang);
    setLang?.(lang);
  };

  const sidebarItems = [
    { id: "general" as const, label: t("Settings.general", "General"), icon: SettingsIcon },
    { id: "appearance" as const, label: t("Settings.appearance", "Appearance"), icon: PaletteIcon },
    { id: "language" as const, label: t("Settings.language", "Language"), icon: LanguageIcon },
    { id: "about" as const, label: t("Settings.about", "About"), icon: InfoIcon },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <StyledSection>
            <StyledSectionTitle>{t("Settings.general", "General")}</StyledSectionTitle>
            <StyledOption>
              <StyledOptionLabel>
                {t("Settings.version", "Version")}
              </StyledOptionLabel>
              <StyledOptionValue>1.0.0</StyledOptionValue>
            </StyledOption>
            <StyledOption>
              <StyledOptionLabel>
                {t("Settings.developer", "Developer")}
              </StyledOptionLabel>
              <StyledOptionValue>Miguel Hernández</StyledOptionValue>
            </StyledOption>
            <StyledOption>
              <StyledOptionLabel>
                {t("Settings.framework", "Framework")}
              </StyledOptionLabel>
              <StyledOptionValue>React 18 + TypeScript</StyledOptionValue>
            </StyledOption>
            <StyledOption>
              <StyledOptionLabel>
                {t("Settings.buildTool", "Build Tool")}
              </StyledOptionLabel>
              <StyledOptionValue>Vite 5</StyledOptionValue>
            </StyledOption>
          </StyledSection>
        );

      case "appearance":
        return (
          <StyledSection>
            <StyledSectionTitle>
              {t("Settings.appearance", "Appearance")}
            </StyledSectionTitle>
            <StyledOption>
              <StyledOptionLabel>
                {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
                {t("Settings.darkMode", "Dark Mode")}
              </StyledOptionLabel>
              <StyledToggle
                $isActive={theme === "dark"}
                onClick={toggleTheme}
              >
                <div className="toggle-thumb" />
              </StyledToggle>
            </StyledOption>
            <p style={{ color: "#888", fontSize: "12px", marginTop: "8px" }}>
              {t(
                "Settings.appearanceDesc",
                "Switch between light and dark themes. Dark mode is easier on the eyes in low-light environments."
              )}
            </p>
          </StyledSection>
        );

      case "language":
        return (
          <StyledSection>
            <StyledSectionTitle>
              {t("Settings.language", "Language")}
            </StyledSectionTitle>
            <StyledOption>
              <StyledOptionLabel>
                <LanguageIcon />
                {t("Settings.selectLanguage", "Select Language")}
              </StyledOptionLabel>
              <StyledSelect
                value={currentLang || i18n.language}
                onChange={(e) =>
                  handleLanguageChange(e.target.value as "en" | "es")
                }
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </StyledSelect>
            </StyledOption>
            <p style={{ color: "#888", fontSize: "12px", marginTop: "8px" }}>
              {t(
                "Settings.languageDesc",
                "The interface will be displayed in the selected language."
              )}
            </p>
          </StyledSection>
        );

      case "about":
        return (
          <StyledAboutSection>
            <div className="about-header">
              <div className="logo">🍎</div>
              <h2>Portfolio macOS</h2>
              <p className="version">Version 1.0.0</p>
            </div>
            <div className="about-content">
              <p>
                {t(
                  "Settings.aboutDesc",
                  "A macOS-inspired personal portfolio website built with React, TypeScript, and modern web technologies."
                )}
              </p>
              <div className="tech-stack">
                <h4>{t("Settings.techStack", "Technology Stack")}</h4>
                <ul>
                  <li>React 18 + TypeScript</li>
                  <li>Vite + Emotion + styled-components</li>
                  <li>Material-UI Icons</li>
                  <li>react-i18next</li>
                  <li>React Router v7</li>
                </ul>
              </div>
              <p className="credits">
                {t("Settings.createdBy", "Created by")} Miguel Hernández
              </p>
              <p className="credits">© 2024. {t("Settings.rights", "All rights reserved.")}</p>
            </div>
          </StyledAboutSection>
        );

      default:
        return null;
    }
  };

  return (
    <StyledSettings>
      <StyledSidebar>
        {sidebarItems.map((item) => (
          <StyledSidebarItem
            key={item.id}
            $isActive={activeTab === item.id}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon />
            <span>{item.label}</span>
          </StyledSidebarItem>
        ))}
      </StyledSidebar>
      <StyledContent>{renderContent()}</StyledContent>
    </StyledSettings>
  );
};
