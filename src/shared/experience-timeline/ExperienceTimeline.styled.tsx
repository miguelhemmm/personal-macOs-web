import styled from "styled-components";

export const StyledTimeline = styled.div`
  position: relative;
  padding: 0 20px;
  
  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.accent};
    opacity: 0.3;
  }
`;

export const StyledTimelineItem = styled.div<{ $isLast?: boolean }>`
  position: relative;
  margin-bottom: ${({ $isLast }) => $isLast ? '0' : '40px'};
  padding-left: 40px;
  
  &::before {
    content: '';
    position: absolute;
    left: 24px;
    top: 8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    border: 3px solid ${({ theme }) => theme.card};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accent}33;
  }
`;

export const StyledTimelineDate = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.accent};
  font-weight: bold;
  margin-bottom: 8px;
`;

export const StyledTimelineContent = styled.div`
  background: ${({ theme }) => theme.cardSecondary || theme.card};
  border-radius: 8px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.1)'};
`;

export const StyledCompany = styled.h3`
  font-family: "Space Mono", monospace;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 4px 0;
  color: ${({ theme }) => theme.primary};
`;

export const StyledPosition = styled.h4`
  font-family: "Space Mono", monospace;
  font-size: 14px;
  font-weight: normal;
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.secondary};
  font-style: italic;
`;

export const StyledAchievements = styled.ul`
  margin: 0 0 16px 0;
  padding: 0;
  list-style: none;
`;

export const StyledAchievement = styled.li`
  font-family: "Space Mono", monospace;
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text};
`;

export const StyledTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  
  span {
    background: ${({ theme }) => theme.accent}22;
    color: ${({ theme }) => theme.accent};
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 10px;
    font-family: "Space Mono", monospace;
    font-weight: bold;
  }
`;