import { FC, useMemo } from "react";
import { StyledButton, StyledItemContainer, StyledNavItem } from "../Navigation.styled";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { useBattery } from "react-use";
import { BatteryIcon } from "./Battery";
import { Lang } from "models";

interface Props {
  lang: string;
  toggleLang: (lang: Lang) => void;
}
export const MobileNavigation: FC<Props> = ({ lang, toggleLang }) => {
  const battery = useBattery() as { level: number; charging: boolean };
  const { level, charging } = battery;

  const locale = useMemo(() => {
    return lang === "en" ? enUS : es;
  }, [lang]);

  return (
    <StyledItemContainer>
      <StyledNavItem $position='flex-start'>
        <li>
          <a href='/contact'>
            {format(new Date(), "EEE dd MMMM h:mm aaaa", {
              locale,
            })}
          </a>
        </li>
      </StyledNavItem>
      <StyledNavItem $position='flex-end'>
        <li>
          <StyledButton onClick={() => toggleLang(lang === "en" ? "es" : "en")}>{lang === "es" ? "ES" : "EN"}</StyledButton>
        </li>
        <li>
          <BatteryIcon level={level && typeof level === "number" ? level * 100 : 1 * 100} isCharging={charging} />
        </li>
      </StyledNavItem>
    </StyledItemContainer>
  );
};
