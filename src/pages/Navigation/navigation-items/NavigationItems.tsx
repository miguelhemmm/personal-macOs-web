import { TFunction } from "i18next";
import { FC, MouseEvent, useState } from "react";
import {
  StyledButton,
  StyledImg,
  StyledItemContainer,
  StyledNavItem,
} from "../Navigation.styled";
import { useBattery } from "react-use";
import { BatteryIcon } from "./Battery";
import { Lang } from "models";
import { Divider, Stack } from "@mui/material";
import { StyledMenu, StyledMenuItem } from "shared";

interface Props {
  translate: TFunction;
  lang: string;
  toggleLang: (lang: Lang) => void;
  currentTime: string;
}

export const NavigationItems: FC<Props> = ({
  currentTime,
  translate,
  lang,
  toggleLang,
}) => {
  const battery = useBattery() as {
    level: number;
    charging: boolean;
    chargingTime: number;
    isSupported: boolean;
  };
  const { level, charging, chargingTime, isSupported } = battery;

  const [appleAnchorEl, setAppleAnchorEl] = useState<HTMLElement | null>(null);
  const [batteryAnchorEl, setBatteryAnchorEl] = useState<HTMLElement | null>(
    null
  );

  const handleAppleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAppleAnchorEl(event.currentTarget);
  };
  const handleAppleMenuClose = () => {
    setAppleAnchorEl(null);
  };

  const handleBatteryMenuClick = (event: MouseEvent<HTMLElement>) => {
    setBatteryAnchorEl(event.currentTarget);
  };
  const handleBatteryMenuClose = () => {
    setBatteryAnchorEl(null);
  };

  return (
    <StyledItemContainer>
      <StyledNavItem $position="flex-start">
        <li>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1010px-Apple_logo_white.svg.png"
            onClick={handleAppleMenuClick}
          />
          <StyledMenu
            id="apple-menu"
            anchorEl={appleAnchorEl}
            open={Boolean(appleAnchorEl)}
            onClose={handleAppleMenuClose}
            MenuListProps={{
              "aria-labelledby": "apple-menu-button",
            }}
          >
            <StyledMenuItem onClick={handleAppleMenuClose}>
              {translate("About.about")}
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem onClick={handleAppleMenuClose}>
              {translate("About.sleep")}
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAppleMenuClose}>
              {translate("About.restart")}
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAppleMenuClose}>
              {translate("About.shutdown")}
            </StyledMenuItem>
          </StyledMenu>
        </li>

        <li>
          <a href="/about">{translate("Navigation.finder")}</a>
        </li>
        <li>
          <a href="/contact">{translate("Navigation.file")}</a>
        </li>
        <li>
          <a href="/contact">{translate("Navigation.edit")}</a>
        </li>
        <li>
          <a href="/contact">{translate("Navigation.view")}</a>
        </li>
        <li>
          <a href="/contact">{translate("Navigation.go")}</a>
        </li>
        <li>
          <a href="/contact">{translate("Navigation.window")}</a>
        </li>
        <li>
          <a href="/contact">{translate("Navigation.help")}</a>
        </li>
      </StyledNavItem>

      <StyledNavItem $position="flex-end">
        <li>
          <StyledButton onClick={() => toggleLang(lang === "en" ? "es" : "en")}>
            {lang === "es" ? "ES" : "EN"}
          </StyledButton>
        </li>

        <li
          onClick={(event) => {
            if (batteryAnchorEl) {
              handleBatteryMenuClose();
            } else {
              handleBatteryMenuClick(event);
            }
          }}
        >
          <BatteryIcon
            level={level && typeof level === "number" ? level * 100 : 1 * 100}
            isCharging={charging}
          />
          {isSupported ? (
            <StyledMenu
              id="battery-menu"
              anchorEl={batteryAnchorEl}
              open={Boolean(batteryAnchorEl)}
              onClose={handleBatteryMenuClose}
              MenuListProps={{
                "aria-labelledby": "battery-menu-button",
              }}
            >
              <StyledMenuItem
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                }}
                disabled
              >
                <span>{translate("Battery.battery")}</span>
                <span>{level * 100}%</span>
              </StyledMenuItem>

              <StyledMenuItem disabled>
                <Stack spacing="10px">
                  {`${translate("Battery.powerSupply")}: ${
                    charging
                      ? translate("Battery.powerAdapter")
                      : translate("Battery.battery")
                  }`}
                  {charging ? (
                    <span>
                      {level === 1
                        ? `${translate("Battery.complete")}`
                        : `${Math.floor(chargingTime / 60)} min ${translate(
                            "Battery.fully"
                          )}`}
                    </span>
                  ) : null}
                </Stack>
              </StyledMenuItem>
            </StyledMenu>
          ) : null}
        </li>

        <li>
          <StyledImg src="https://eshop.macsales.com/blog/wp-content/uploads/2021/03/control-center-icon.png" />
        </li>
        <li>
          <a href="/contact">{currentTime}</a>
        </li>
      </StyledNavItem>
    </StyledItemContainer>
  );
};
