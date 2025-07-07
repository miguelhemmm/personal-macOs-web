import styled from "styled-components";

export const StyledEducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledEducationGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledEducationCard = styled.div`
  background: ${({ theme }) => theme.cardSecondary || theme.card};
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.1)'};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(4px);
  }
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledCardIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent}22;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    color: ${({ theme }) => theme.accent};
    font-size: 24px;
  }
`;

export const StyledCardInfo = styled.div`
  flex: 1;
`;

export const StyledInstitution = styled.h3`
  font-family: "Space Mono", monospace;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 4px 0;
  color: ${({ theme }) => theme.primary};
`;

export const StyledDegree = styled.h4`
  font-family: "Space Mono", monospace;
  font-size: 14px;
  font-weight: normal;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.secondary};
  font-style: italic;
`;

export const StyledPeriod = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.accent};
  font-weight: bold;
  margin-bottom: 4px;
`;

export const StyledLocation = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StyledUniqueBackground = styled.div`
  background: ${({ theme }) => theme.accent}11;
  border-radius: 12px;
  padding: 20px;
  border-left: 4px solid ${({ theme }) => theme.accent};
`;

export const StyledBackgroundTitle = styled.h3`
  font-family: "Space Mono", monospace;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.accent};
`;

export const StyledBackgroundText = styled.p`
  font-family: "Space Mono", monospace;
  font-size: 12px;
  line-height: 1.6;
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

export const StyledLanguageSkills = styled.div`
  background: ${({ theme }) => theme.nav}22;
  border-radius: 12px;
  padding: 20px;
  
  h3 {
    font-family: "Space Mono", monospace;
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 16px 0;
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const StyledLanguageItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.1)'};
  
  &:last-child {
    border-bottom: none;
  }
  
  .language {
    font-family: "Space Mono", monospace;
    font-size: 12px;
    color: ${({ theme }) => theme.text};
  }
  
  .level {
    font-family: "Space Mono", monospace;
    font-size: 11px;
    color: ${({ theme }) => theme.accent};
    font-weight: bold;
    background: ${({ theme }) => theme.accent}22;
    padding: 2px 8px;
    border-radius: 8px;
  }
`;