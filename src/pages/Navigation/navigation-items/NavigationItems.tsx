import { TFunction } from "i18next";
import { FC, useMemo } from "react";
import { StyledButton, StyledImg, StyledItemContainer, StyledNavItem } from "../Navigation.styled";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { useBattery } from "react-use";
import { BatteryIcon } from "./Battery";
import { Lang } from "models";

interface Props {
  translate: TFunction;
  lang: string;
  toggleLang: (lang: Lang) => void;
}
export const NavigationItems: FC<Props> = ({ translate, lang, toggleLang }) => {
  const battery = useBattery() as { level: number; charging: boolean };
  const { level, charging } = battery;

  const locale = useMemo(() => {
    return lang === "en" ? enUS : es;
  }, [lang]);

  return (
    <StyledItemContainer>
      <StyledNavItem $position='flex-start'>
        <li>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1010px-Apple_logo_white.svg.png' />
        </li>
        <li>
          <a href='/about'>{translate("Navigation.finder")}</a>
        </li>
        <li>
          <a href='/contact'>{translate("Navigation.file")}</a>
        </li>
        <li>
          <a href='/contact'>{translate("Navigation.edit")}</a>
        </li>
        <li>
          <a href='/contact'>{translate("Navigation.view")}</a>
        </li>
        <li>
          <a href='/contact'>{translate("Navigation.go")}</a>
        </li>
        <li>
          <a href='/contact'>{translate("Navigation.window")}</a>
        </li>
        <li>
          <a href='/contact'>{translate("Navigation.help")}</a>
        </li>
      </StyledNavItem>
      <StyledNavItem $position='flex-end'>
        <li>
          <StyledButton onClick={() => toggleLang(lang === "en" ? "es" : "en")}>{lang === "es" ? "ES" : "EN"}</StyledButton>
        </li>
        <li>
          <BatteryIcon level={level * 100} isCharging={charging} />
        </li>
        <li>
          <StyledImg src='https://eshop.macsales.com/blog/wp-content/uploads/2021/03/control-center-icon.png' />
        </li>
        <li>
          <a href='/contact'>
            {format(new Date(), "EEE dd MMMM h:mm aaaa", {
              locale,
            })}
          </a>
        </li>
      </StyledNavItem>
    </StyledItemContainer>
  );
};
