import styled from "@emotion/styled";
import { Menu, MenuItem, MenuItemProps, MenuProps, menuClasses } from "@mui/material";

export const StyledMenu = styled(({ className, ...props }: MenuProps) => <Menu {...props} classes={{ paper: className }} />)({
  [`& .${menuClasses.list}`]: {
    background: "var(--dark-card)",
    fontSize: "12px !important",
  },
  minWidth: "400px",
});

export const StyledMenuItem = styled(({ className, ...props }: MenuItemProps) => <MenuItem {...props} classes={{ root: className }} />)({
  fontSize: "14px",
  height: "15px",
  margin: "12px 5px",
  padding: "12px 10px",

  "&:hover": {
    background: "var(--primary-color) !important",
    borderRadius: "5px",
  },
});
