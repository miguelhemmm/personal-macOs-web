import { FC, useMemo, useState } from "react";
import { StyledButton, StyledItemContainer, StyledNavItem } from "../Navigation.styled";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { useBattery } from "react-use";
import { BatteryIcon } from "./Battery";
import { HamburgerMenu, MobileDrawer } from "shared";
import { Lang } from "models";

interface Props {
  lang: string;
  toggleLang: (lang: Lang) => void;
}
export const MobileNavigation: FC<Props> = ({ lang, toggleLang }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const battery = useBattery() as { level: number; charging: boolean };
  const { level, charging } = battery;

  const locale = useMemo(() => {
    return lang === "en" ? enUS : es;
  }, [lang]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <StyledItemContainer>
        <StyledNavItem $position='flex-start'>
          <li>
            <span style={{ 
              color: 'inherit',
              fontSize: '12px',
              fontFamily: 'inherit',
              cursor: 'default'
            }}>
              {format(new Date(), "EEE dd h:mm a", { locale })}
            </span>
          </li>
        </StyledNavItem>
        
        <StyledNavItem $position='center'>
          <li>
            <HamburgerMenu 
              isOpen={isDrawerOpen}
              onClick={toggleDrawer}
              size={18}
              color="#ffffff"
            />
          </li>
        </StyledNavItem>
        
        <StyledNavItem $position='flex-end'>
          <li>
            <StyledButton onClick={() => toggleLang(lang === "en" ? "es" : "en")}>
              {lang === "es" ? "ES" : "EN"}
            </StyledButton>
          </li>
          <li>
            <BatteryIcon 
              level={level && typeof level === "number" ? level * 100 : 1 * 100} 
              isCharging={charging} 
            />
          </li>
        </StyledNavItem>
      </StyledItemContainer>
      
      <MobileDrawer 
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
      />
    </>
  );
};
