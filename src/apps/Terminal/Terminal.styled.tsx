import styled from "styled-components";

export const StyledTerminal = styled.div`
  background-color: #1e1e1e;
  color: #00ff00;
  font-family: "SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono",
    "Source Code Pro", monospace;
  font-size: 13px;
  height: 100%;
  width: 100%;
  padding: 0;
  cursor: text;
  overflow: hidden;
`;

export const StyledOutput = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 16px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #2d2d2d;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;

    &:hover {
      background: #666;
    }
  }
`;

export const StyledWelcome = styled.div`
  margin-bottom: 16px;
  color: #00ff00;

  pre {
    margin: 0;
    color: #00cc00;
    font-size: 11px;
    line-height: 1.2;
  }

  p {
    margin: 4px 0;
    color: #888;
  }
`;

export const StyledInputLine = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.5;
`;

export const StyledPrompt = styled.span`
  color: #00ff00;
  white-space: nowrap;
`;

export const StyledInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  caret-color: #00ff00;

  &::selection {
    background: rgba(0, 255, 0, 0.3);
  }
`;

export const StyledCommandOutput = styled.div<{ $isError?: boolean }>`
  margin-bottom: 12px;

  .output {
    color: ${({ $isError }) => ($isError ? "#ff6b6b" : "#e0e0e0")};
    margin-top: 4px;
    white-space: pre-wrap;
    line-height: 1.4;
  }
`;
