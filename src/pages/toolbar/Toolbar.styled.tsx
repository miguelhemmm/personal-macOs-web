/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";

export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)({
  [`& .${tooltipClasses.tooltip}`]: {
    background: "var(--dark-card)",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "var(--dark-card)",
  },
});

export const StyledDivider = styled.div`
  border-left: 0.5px solid #fff;
  height: 50px;
`;

export const StyledDockIndicator = styled.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
`;
