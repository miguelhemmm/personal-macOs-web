import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { StyledDiv, StyledNav } from "./Navigation.styled";
import { Lang, Theme } from "models";
import { NavigationItems } from "./navigation-items";

interface Props {
  toggleLang: (lang: Lang) => void;
  toggleTheme: () => void;
  theme: Theme;
}

export const Navigation: FC<Props> = ({ theme, toggleLang, toggleTheme }) => {
  const { t, i18n } = useTranslation();

  const imageSrc = useMemo(() => {
    return theme === "light" ? "/src/assets/svg/moon.svg" : "/src/assets/svg/sun.svg";
  }, [theme]);

  const currentLang: Lang = useMemo(() => {
    return i18n.language as Lang;
  }, [i18n.language]);

  return (
    <>
      <StyledNav>
        <NavigationItems translate={t} lang={currentLang} toggleLang={toggleLang} />
      </StyledNav>
      <StyledDiv>
        <span style={{ cursor: "pointer" }} onClick={toggleTheme}>
          <img src={imageSrc} />
        </span>
      </StyledDiv>
    </>
  );
};
