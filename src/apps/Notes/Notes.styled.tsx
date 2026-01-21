import styled from "styled-components";

export const StyledNotes = styled.div`
  display: flex;
  height: 100%;
  background-color: ${({ theme }) => theme.card};
`;

export const StyledSidebar = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.nav};
  border-right: 1px solid ${({ theme }) => theme.border || "rgba(0,0,0,0.1)"};
  display: flex;
  flex-direction: column;
`;

export const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.border || "rgba(0,0,0,0.1)"};
`;

export const StyledIconButton = styled.button`
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  transition: all 0.15s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 1;
  }

  svg {
    font-size: 20px;
  }
`;

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  margin: 8px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border || "rgba(0,0,0,0.1)"};

  svg {
    font-size: 18px;
    color: ${({ theme }) => theme.text};
    opacity: 0.5;
  }

  input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 13px;
    color: ${({ theme }) => theme.text};

    &::placeholder {
      color: ${({ theme }) => theme.text};
      opacity: 0.5;
    }
  }
`;

export const StyledNotesList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;

export const StyledNoteItem = styled.div<{ $isSelected: boolean }>`
  padding: 12px;
  margin-bottom: 4px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.accent || "#007ACC" : "transparent"};
  color: ${({ $isSelected, theme }) => ($isSelected ? "#fff" : theme.text)};
  position: relative;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({ $isSelected, theme }) =>
      $isSelected ? theme.accent || "#007ACC" : "rgba(0,0,0,0.05)"};

    .delete-btn {
      opacity: 1;
    }
  }

  .note-title {
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .note-preview {
    display: flex;
    gap: 8px;
    font-size: 12px;
    opacity: ${({ $isSelected }) => ($isSelected ? 0.9 : 0.6)};

    .note-date {
      white-space: nowrap;
    }

    .note-excerpt {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .delete-btn {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    padding: 4px;
    cursor: pointer;
    opacity: 0;
    color: inherit;
    transition: opacity 0.15s ease;

    svg {
      font-size: 18px;
    }

    &:hover {
      color: #ff6b6b;
    }
  }
`;

export const StyledContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledEditor = styled.textarea`
  flex: 1;
  padding: 20px;
  background: none;
  border: none;
  outline: none;
  resize: none;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.4;
  }

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

export const StyledEmptyState = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;

  p {
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 15px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
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

    svg {
      font-size: 18px;
    }
  }
`;
