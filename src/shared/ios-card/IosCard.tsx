import { FC, ReactElement, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import {
  StyledBody,
  StyledCardHeader,
  StyledDiv,
  StyledDot,
  StyledDotContainer,
  StyledFooter,
  StyledSpan,
} from "./IosCard.styled";

interface Props {
  title: ReactElement | string;
  body: ReactElement | string;
  footer: ReactElement | string;
  isClose?: boolean;
  minimize?: boolean;
  maximize?: boolean;
  isIcon?: boolean;
  isPortfolio?: boolean;
  setMaximize?: (maximize: boolean) => void;
  setMinimize?: (minimize: boolean) => void;
  setIsClose?: (isClose: boolean) => void;
}

export const IosCard: FC<Props> = ({
  title,
  body,
  footer,
  isClose,
  isIcon,
  isPortfolio,
  minimize,
  maximize,
  setMinimize,
  setMaximize,
  setIsClose,
}) => {
  const [showIcons, setShowIcons] = useState<boolean>(false);

  const onClosePopup = () => {
    setIsClose?.(true);
    setShowIcons(false);
  };

  return (
    <>
      {!isClose && (
        <StyledDiv $minimize={minimize} $maximize={maximize} $isIcon={isIcon} $isPortfolio={isPortfolio}>
          <StyledCardHeader $isIcon={isIcon}>
            <StyledDotContainer
              $isIcon={isIcon}
              onMouseEnter={() => setShowIcons(true)}
              onMouseLeave={() => setShowIcons(false)}
            >
              <StyledDot
                $isIcon={isIcon}
                $backgroundColor="rgb(255, 105, 97)"
                onClick={onClosePopup}
              >
                {showIcons && (
                  <CloseIcon
                    sx={{ fontSize: "10px", color: "var(--dark-nav)" }}
                  />
                )}
              </StyledDot>
              <StyledDot
                $isIcon={isIcon}
                onClick={() => setMinimize?.(true)}
                $backgroundColor="rgb(255, 212, 64)"
              >
                {showIcons && (
                  <RemoveOutlinedIcon
                    sx={{ fontSize: "10px", color: "var(--dark-nav)" }}
                  />
                )}
              </StyledDot>
              <StyledDot
                $isIcon={isIcon}
                $backgroundColor="rgb(52, 199, 89)"
                onClick={() => setMaximize?.(!maximize)}
              >
                {showIcons && (
                  maximize ? (
                    <CloseFullscreenIcon
                      sx={{ fontSize: "10px", color: "var(--dark-nav)" }}
                    />
                  ) : (
                    <OpenInFullOutlinedIcon
                      sx={{ fontSize: "10px", color: "var(--dark-nav)" }}
                    />
                  )
                )}
              </StyledDot>
            </StyledDotContainer>
            <StyledSpan $isIcon={isIcon}>{title}</StyledSpan>
          </StyledCardHeader>
          <StyledBody $isIcon={isIcon} $maximize={maximize}>{body}</StyledBody>
          <StyledFooter $isIcon={isIcon}>{footer}</StyledFooter>
        </StyledDiv>
      )}
    </>
  );
};
