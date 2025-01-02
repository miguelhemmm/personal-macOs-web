import { FC, useEffect, useMemo, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTranslation } from "react-i18next";
import { StyledDiv, StyledNav } from "./Navigation.styled";
import { Lang, Theme } from "models";
import { MobileNavigation, NavigationItems } from "./navigation-items";
import sunIcon from "../../assets/svg/sun.svg";
import moonIcon from "../../assets/svg/moon.svg";
import { format } from "date-fns";
import { enUS, es } from "date-fns/locale";

interface Props {
  toggleLang: (lang: Lang) => void;
  toggleTheme: () => void;
  theme: Theme;
}

export const Navigation: FC<Props> = ({ theme, toggleLang, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const matches = useMediaQuery("(max-width:740px)");
  const [currentTime, setCurrentTime] = useState("");
  const imageSrc = useMemo(() => {
    return theme === "light" ? sunIcon : moonIcon;
  }, [theme]);

  const currentLang: Lang = useMemo(() => {
    return i18n.language as Lang;
  }, [i18n.language]);

  const locale = useMemo(() => {
    return currentLang === "en" ? enUS : es;
  }, [currentLang]);

  useEffect(() => {
    const updateCurrentTime = () => {
      const time = format(new Date(), "EEE dd MMMM h:mm aaaa", { locale });
      setCurrentTime(time);
    };

    updateCurrentTime();

    const intervalId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(intervalId);
  }, [locale]);

  return (
    <>
      <StyledNav $isDarkTheme={theme === "dark"}>
        {matches ? (
          <MobileNavigation lang={currentLang} toggleLang={toggleLang} />
        ) : (
          <NavigationItems translate={t} lang={currentLang} toggleLang={toggleLang} currentTime={currentTime} />
        )}
      </StyledNav>
      <StyledDiv>
        <span style={{ cursor: "pointer" }} onClick={toggleTheme}>
          <img src={imageSrc} />
        </span>
      </StyledDiv>
    </>
  );
};
