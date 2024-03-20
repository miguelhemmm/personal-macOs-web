import { FC, ReactElement, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import { StyledBody, StyledCardHeader, StyledDiv, StyledDot, StyledDotContainer, StyledFooter, StyledSpan } from "./IosCard.styled";

interface Props {
  title: ReactElement | string;
  body: ReactElement | string;
  footer: ReactElement | string;
  setIsClose?: (isClose: boolean) => void;
  isClose?: boolean;
  setMinimize?: (minimize: boolean) => void;
  minimize?: boolean;
  isIcon?: boolean;
}

export const IosCard: FC<Props> = ({ title, body, footer, isClose, isIcon, minimize, setMinimize, setIsClose }) => {
  const [showIcons, setShowIcons] = useState<boolean>(false);

  const onClosePopup = () => {
    setIsClose?.(true);
    setShowIcons(false);
  };

  return (
    <>
      {!isClose && (
        <StyledDiv $minimize={minimize} $isIcon={isIcon}>
          <StyledCardHeader $isIcon={isIcon}>
            <StyledDotContainer $isIcon={isIcon} onMouseEnter={() => setShowIcons(true)} onMouseLeave={() => setShowIcons(false)}>
              <StyledDot $isIcon={isIcon} $backgroundColor='rgb(255, 105, 97)' onClick={onClosePopup}>
                {showIcons && <CloseIcon sx={{ fontSize: "10px", color: "var(--dark-nav)" }} />}
              </StyledDot>
              <StyledDot $isIcon={isIcon} onClick={() => setMinimize?.(true)} $backgroundColor='rgb(255, 212, 64)'>
                {showIcons && <RemoveOutlinedIcon sx={{ fontSize: "10px", color: "var(--dark-nav)" }} />}
              </StyledDot>
              <StyledDot $isIcon={isIcon} $backgroundColor='rgb(52, 199, 89)'>
                {showIcons && <OpenInFullOutlinedIcon sx={{ fontSize: "10px", color: "var(--dark-nav)" }} />}
              </StyledDot>
            </StyledDotContainer>
            <StyledSpan $isIcon={isIcon}>{title}</StyledSpan>
          </StyledCardHeader>
          <StyledBody $isIcon={isIcon}>{body}</StyledBody>
          <StyledFooter $isIcon={isIcon}>{footer}</StyledFooter>
        </StyledDiv>
      )}
    </>
  );
};
