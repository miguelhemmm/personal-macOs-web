import styled from "styled-components";

export const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledCareerStory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledStorySection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: ${({ theme }) => theme.cardSecondary || theme.card};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.1)'};
`;

export const StyledIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent}22;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    color: ${({ theme }) => theme.accent};
    font-size: 20px;
  }
`;

export const StyledStoryTitle = styled.h3`
  font-family: "Space Mono", monospace;
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.primary};
`;

export const StyledStoryText = styled.div`
  flex: 1;
  font-family: "Space Mono", monospace;
  font-size: 12px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;

export const StyledHighlight = styled.span`
  color: ${({ theme }) => theme.accent};
  font-weight: bold;
  margin-left: 4px;
`;

export const StyledJourneyTimeline = styled.div`
  background: ${({ theme }) => theme.nav}22;
  border-radius: 12px;
  padding: 20px;
  border-left: 4px solid ${({ theme }) => theme.accent};
`;

export const StyledTimelineStep = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 12px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    color: ${({ theme }) => theme.accent};
    font-weight: bold;
  }
`;

export const StyledQuote = styled.blockquote`
  font-family: "Space Mono", monospace;
  font-size: 14px;
  font-style: italic;
  text-align: center;
  color: ${({ theme }) => theme.accent};
  margin: 20px 0 0 0;
  padding: 20px;
  background: ${({ theme }) => theme.accent}11;
  border-radius: 12px;
  border-left: 4px solid ${({ theme }) => theme.accent};
  position: relative;
  
  &::before {
    content: '"';
    font-size: 40px;
    position: absolute;
    top: -10px;
    left: 20px;
    color: ${({ theme }) => theme.accent}66;
  }
  
  &::after {
    content: '"';
    font-size: 40px;
    position: absolute;
    bottom: -20px;
    right: 20px;
    color: ${({ theme }) => theme.accent}66;
  }
`;