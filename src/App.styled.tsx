import styled from "@emotion/styled";

export const StyledDiv = styled("div", {
  shouldForwardProp: (propName: string) => !propName.startsWith("$"),
})(({ $isDarkMode }: { $isDarkMode?: boolean }) => ({
  backgroundColor: $isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color)",
  minHeight: "100dvh",
}));
