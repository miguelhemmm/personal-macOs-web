import { TFunction } from "i18next";
import { FC, MouseEvent, useState } from "react";
import { StyledButton, StyledImg, StyledItemContainer, StyledNavItem } from "../Navigation.styled";
import { useBattery } from "react-use";
import { BatteryIcon } from "./Battery";
import { Lang } from "models";
import { Divider } from "@mui/material";
import { StyledMenu, StyledMenuItem } from "shared";

interface Props {
  translate: TFunction;
  lang: string;
  toggleLang: (lang: Lang) => void;
  currentTime: string;
}
export const NavigationItems: FC<Props> = ({ currentTime, translate, lang, toggleLang }) => {
  const battery = useBattery() as { level: number; charging: boolean };
  const { level, charging } = battery;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledItemContainer>
      <StyledNavItem $position='flex-start'>
        <li>
          <img onClick={handleClick} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1010px-Apple_logo_white.svg.png' />
          <StyledMenu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <StyledMenuItem onClick={handleClose}>{translate("About.about")}</StyledMenuItem>
            <Divider />
            <StyledMenuItem onClick={handleClose}>{translate("About.sleep")}</StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>{translate("About.restart")}</StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>{translate("About.shutdown")}</StyledMenuItem>
          </StyledMenu>
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
          <BatteryIcon level={level && typeof level === "number" ? level * 100 : 1 * 100} isCharging={charging} />
        </li>
        <li>
          <StyledImg src='https://eshop.macsales.com/blog/wp-content/uploads/2021/03/control-center-icon.png' />
        </li>
        <li>
          <a href='/contact'>{currentTime}</a>
        </li>
      </StyledNavItem>
    </StyledItemContainer>
  );
};
