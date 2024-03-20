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
