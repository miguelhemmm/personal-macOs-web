import styled from "styled-components";

export const StyledLeadershipContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledLeadershipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;

export const StyledLeadershipCard = styled.div`
  background: ${({ theme }) => theme.cardSecondary || theme.card};
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.1)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px ${({ theme }) => theme.accent}22;
  }
`;

export const StyledCardIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent}22;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px auto;
  
  svg {
    color: ${({ theme }) => theme.accent};
    font-size: 24px;
  }
`;

export const StyledCardTitle = styled.h3`
  font-family: "Space Mono", monospace;
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.primary};
`;

export const StyledCardDescription = styled.p`
  font-family: "Space Mono", monospace;
  font-size: 12px;
  line-height: 1.6;
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

export const StyledImpactMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  padding: 24px;
  background: ${({ theme }) => theme.nav}22;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.accent}33;
`;

export const StyledMetricItem = styled.div`
  text-align: center;
`;

export const StyledMetricValue = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.accent};
  line-height: 1;
  margin-bottom: 8px;
`;

export const StyledMetricLabel = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.3;
`;