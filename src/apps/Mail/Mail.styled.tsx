import styled from "styled-components";

export const StyledMail = styled.div`
  height: 100%;
  padding: 24px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.card};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;

export const StyledHeader = styled.div`
  margin-bottom: 24px;
  text-align: center;

  h2 {
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    margin: 0 0 8px 0;
  }

  p {
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.text};
    opacity: 0.7;
    margin: 0;
  }
`;

export const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .error {
    font-size: 12px;
    color: #ff6b6b;
  }
`;

export const StyledLabel = styled.label`
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const StyledInput = styled.input<{ $hasError?: boolean }>`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? "#ff6b6b" : theme.border || "rgba(0,0,0,0.15)"};
  background-color: ${({ theme }) => theme.nav};
  color: ${({ theme }) => theme.text};
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-color: ${({ $hasError, theme }) =>
      $hasError ? "#ff6b6b" : theme.accent || "#007ACC"};
    box-shadow: 0 0 0 3px
      ${({ $hasError, theme }) =>
        $hasError ? "rgba(255,107,107,0.2)" : `${theme.accent || "#007ACC"}22`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.4;
  }
`;

export const StyledTextarea = styled.textarea<{ $hasError?: boolean }>`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? "#ff6b6b" : theme.border || "rgba(0,0,0,0.15)"};
  background-color: ${({ theme }) => theme.nav};
  color: ${({ theme }) => theme.text};
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-color: ${({ $hasError, theme }) =>
      $hasError ? "#ff6b6b" : theme.accent || "#007ACC"};
    box-shadow: 0 0 0 3px
      ${({ $hasError, theme }) =>
        $hasError ? "rgba(255,107,107,0.2)" : `${theme.accent || "#007ACC"}22`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.4;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  background-color: ${({ theme }) => theme.accent || "#007ACC"};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.1s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.accent || "#007ACC"}dd;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    font-size: 20px;
  }
`;

export const StyledStatus = styled.div<{ $type: "success" | "error" }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 40px;

  svg {
    font-size: 64px;
    color: ${({ $type }) => ($type === "success" ? "#34c759" : "#ff6b6b")};
    margin-bottom: 16px;
  }

  h3 {
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    margin: 0 0 12px 0;
  }

  p {
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.text};
    opacity: 0.7;
    margin: 0 0 24px 0;
    max-width: 400px;
  }

  button {
    padding: 12px 24px;
    background-color: ${({ theme }) => theme.accent || "#007ACC"};
    color: #fff;
    border: none;
    border-radius: 8px;
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.15s ease;

    &:hover {
      background-color: ${({ theme }) => theme.accent || "#007ACC"}dd;
    }
  }
`;
