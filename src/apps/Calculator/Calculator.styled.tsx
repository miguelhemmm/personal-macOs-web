import styled from "styled-components";

export const StyledCalculator = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #1c1c1c;
  padding: 0;
  outline: none;
`;

export const StyledDisplay = styled.div`
  background-color: #1c1c1c;
  color: #fff;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 48px;
  font-weight: 300;
  text-align: right;
  padding: 20px 24px;
  min-height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  overflow: hidden;
  word-break: break-all;
`;

export const StyledButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  padding: 1px;
  flex: 1;
`;

interface ButtonProps {
  $type: "number" | "operator" | "function";
  $wide?: boolean;
  $isActive?: boolean;
}

const getBackgroundColor = (type: string, isActive?: boolean) => {
  if (isActive) return "#fff";
  switch (type) {
    case "operator":
      return "#ff9f0a";
    case "function":
      return "#a5a5a5";
    default:
      return "#333333";
  }
};

const getTextColor = (type: string, isActive?: boolean) => {
  if (isActive) return "#ff9f0a";
  switch (type) {
    case "function":
      return "#1c1c1c";
    default:
      return "#fff";
  }
};

const getHoverColor = (type: string) => {
  switch (type) {
    case "operator":
      return "#ffb340";
    case "function":
      return "#d4d4d4";
    default:
      return "#737373";
  }
};

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ $type, $isActive }) =>
    getBackgroundColor($type, $isActive)};
  color: ${({ $type, $isActive }) => getTextColor($type, $isActive)};
  border: none;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  grid-column: ${({ $wide }) => ($wide ? "span 2" : "span 1")};

  &:hover {
    background-color: ${({ $type, $isActive }) =>
      $isActive ? "#fff" : getHoverColor($type)};
  }

  &:active {
    opacity: 0.8;
  }
`;
