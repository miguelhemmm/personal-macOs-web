import styled from "styled-components";

export const StyledSettings = styled.div`
  display: flex;
  height: 100%;
  background-color: ${({ theme }) => theme.card};
`;

export const StyledSidebar = styled.div`
  width: 200px;
  background-color: ${({ theme }) => theme.nav};
  border-right: 1px solid ${({ theme }) => theme.border || "rgba(0,0,0,0.1)"};
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledSidebarItem = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.accent || "#007ACC" : "transparent"};
  color: ${({ $isActive, theme }) => ($isActive ? "#fff" : theme.text)};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  text-align: left;
  transition: background-color 0.15s ease;

  svg {
    font-size: 18px;
  }

  &:hover {
    background-color: ${({ $isActive, theme }) =>
      $isActive ? theme.accent || "#007ACC" : "rgba(0,0,0,0.1)"};
  }
`;

export const StyledContent = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
`;

export const StyledSection = styled.div`
  max-width: 500px;
`;

export const StyledSectionTitle = styled.h3`
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin: 0 0 20px 0;
`;

export const StyledOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border || "rgba(0,0,0,0.1)"};
`;

export const StyledOptionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.text};

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.text};
    opacity: 0.7;
  }
`;

export const StyledOptionValue = styled.span`
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
`;

export const StyledToggle = styled.button<{ $isActive: boolean }>`
  width: 50px;
  height: 30px;
  border-radius: 15px;
  border: none;
  padding: 2px;
  cursor: pointer;
  background-color: ${({ $isActive }) => ($isActive ? "#34c759" : "#767577")};
  transition: background-color 0.2s ease;
  position: relative;

  .toggle-thumb {
    width: 26px;
    height: 26px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.2s ease;
    transform: ${({ $isActive }) =>
      $isActive ? "translateX(20px)" : "translateX(0)"};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledSelect = styled.select`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border || "rgba(0,0,0,0.2)"};
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.accent || "#007ACC"};
  }
`;

export const StyledAboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  .about-header {
    margin-bottom: 24px;

    .logo {
      font-size: 64px;
      margin-bottom: 12px;
    }

    h2 {
      font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 24px;
      font-weight: 600;
      color: ${({ theme }) => theme.text};
      margin: 0;
    }

    .version {
      font-size: 13px;
      color: ${({ theme }) => theme.text};
      opacity: 0.6;
      margin-top: 4px;
    }
  }

  .about-content {
    max-width: 400px;

    p {
      font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 14px;
      color: ${({ theme }) => theme.text};
      line-height: 1.6;
      margin: 0 0 16px 0;
    }

    .tech-stack {
      text-align: left;
      margin: 20px 0;
      padding: 16px;
      background-color: ${({ theme }) => theme.nav};
      border-radius: 8px;

      h4 {
        font-size: 14px;
        font-weight: 600;
        color: ${({ theme }) => theme.text};
        margin: 0 0 12px 0;
      }

      ul {
        margin: 0;
        padding-left: 20px;

        li {
          font-size: 13px;
          color: ${({ theme }) => theme.text};
          opacity: 0.8;
          margin-bottom: 6px;
        }
      }
    }

    .credits {
      font-size: 12px;
      opacity: 0.6;
      margin-bottom: 4px;
    }
  }
`;
