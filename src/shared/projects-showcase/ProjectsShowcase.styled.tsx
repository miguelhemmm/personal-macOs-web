import styled from "styled-components";

export const StyledProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 0;
`;

export const StyledProjectCard = styled.div`
  background: ${({ theme }) => theme.cardSecondary || theme.card};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.1)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px ${({ theme }) => theme.accent}22;
  }
`;

export const StyledProjectImage = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  background: ${({ theme }) => theme.nav};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledProjectContent = styled.div`
  padding: 20px;
`;

export const StyledProjectTitle = styled.h3`
  font-family: "Space Mono", monospace;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.primary};
`;

export const StyledProjectDescription = styled.p`
  font-family: "Space Mono", monospace;
  font-size: 12px;
  line-height: 1.6;
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.text};
`;

export const StyledProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`;

export const StyledTechTag = styled.span`
  background: ${({ theme }) => theme.accent}22;
  color: ${({ theme }) => theme.accent};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-family: "Space Mono", monospace;
  font-weight: bold;
`;

export const StyledImpactMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
  padding: 12px;
  background: ${({ theme }) => theme.nav}22;
  border-radius: 8px;
`;

export const StyledMetric = styled.div`
  text-align: center;
  
  .value {
    display: block;
    font-family: "Space Mono", monospace;
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.accent};
    line-height: 1;
  }
  
  .label {
    display: block;
    font-family: "Space Mono", monospace;
    font-size: 10px;
    color: ${({ theme }) => theme.secondary};
    margin-top: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const StyledProjectLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const StyledProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: ${({ theme }) => theme.accent}22;
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  border-radius: 6px;
  font-family: "Space Mono", monospace;
  font-size: 11px;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.nav};
  }
`;