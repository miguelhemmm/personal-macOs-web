import styled from "styled-components";

export const StyledSkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 0;
`;

export const StyledSkillCategory = styled.div`
  background: ${({ theme }) => theme.cardSecondary || theme.card};
  border-radius: 8px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.1)'};
`;

export const StyledCategoryTitle = styled.h3`
  font-family: "Space Mono", monospace;
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.accent};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const StyledSkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledSkillItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
`;

export const StyledSkillName = styled.span`
  font-family: "Space Mono", monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  white-space: nowrap;
`;

export const StyledYears = styled.span`
  font-family: "Space Mono", monospace;
  font-size: 10px;
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  min-width: 20px;
  text-align: center;
`;

export const StyledSkillLevel = styled.div`
  flex: 1;
`;

export const StyledSkillBar = styled.div`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.border || 'rgba(255,255,255,0.1)'};
  border-radius: 2px;
  overflow: hidden;
`;

export const StyledSkillProgress = styled.div<{ $level: number }>`
  height: 100%;
  width: ${({ $level }) => ($level / 10) * 100}%;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.accent}88 0%, 
    ${({ theme }) => theme.accent} 100%
  );
  border-radius: 2px;
  transition: width 0.3s ease;
  
  /* Add animation on mount */
  animation: fillBar 1s ease-out;
  
  @keyframes fillBar {
    from { width: 0; }
    to { width: ${({ $level }) => ($level / 10) * 100}%; }
  }
`;