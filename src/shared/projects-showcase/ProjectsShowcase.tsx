import { FC } from "react";
import { useTranslation } from "react-i18next";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import {
  StyledProjectsContainer,
  StyledProjectCard,
  StyledProjectImage,
  StyledProjectContent,
  StyledProjectTitle,
  StyledProjectDescription,
  StyledProjectTech,
  StyledTechTag,
  StyledProjectLinks,
  StyledProjectLink,
  StyledImpactMetrics,
  StyledMetric
} from "./ProjectsShowcase.styled";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  impact?: {
    label: string;
    value: string;
  }[];
}

export const ProjectsShowcase: FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: t("Projects.angularMigration.title"),
      description: t("Projects.angularMigration.description"),
      techStack: ["AngularJS", "Angular", "TypeScript", "RxJS"],
      impact: [
        { label: t("Projects.angularMigration.impact1.label"), value: t("Projects.angularMigration.impact1.value") },
        { label: t("Projects.angularMigration.impact2.label"), value: t("Projects.angularMigration.impact2.value") }
      ]
    },
    {
      title: t("Projects.hospitalityApps.title"),
      description: t("Projects.hospitalityApps.description"),
      techStack: ["HTML", "SCSS", "JavaScript", ".NET", "CMS"],
      impact: [
        { label: t("Projects.hospitalityApps.impact1.label"), value: t("Projects.hospitalityApps.impact1.value") },
        { label: t("Projects.hospitalityApps.impact2.label"), value: t("Projects.hospitalityApps.impact2.value") }
      ]
    },
    {
      title: t("Projects.reactMigration.title"),
      description: t("Projects.reactMigration.description"),
      techStack: ["jQuery", "React", "JavaScript", "Modern JS"],
      impact: [
        { label: t("Projects.reactMigration.impact1.label"), value: t("Projects.reactMigration.impact1.value") },
        { label: t("Projects.reactMigration.impact2.label"), value: t("Projects.reactMigration.impact2.value") }
      ]
    },
    {
      title: t("Projects.performanceOptimization.title"),
      description: t("Projects.performanceOptimization.description"),
      techStack: ["Database Optimization", "Frontend", "Performance"],
      impact: [
        { label: t("Projects.performanceOptimization.impact1.label"), value: t("Projects.performanceOptimization.impact1.value") },
        { label: t("Projects.performanceOptimization.impact2.label"), value: t("Projects.performanceOptimization.impact2.value") }
      ]
    }
  ];

  return (
    <StyledProjectsContainer>
      {projects.map((project, index) => (
        <StyledProjectCard key={index}>
          {project.image && (
            <StyledProjectImage>
              <img src={project.image} alt={project.title} />
            </StyledProjectImage>
          )}
          <StyledProjectContent>
            <StyledProjectTitle>{project.title}</StyledProjectTitle>
            <StyledProjectDescription>{project.description}</StyledProjectDescription>
            
            <StyledProjectTech>
              {project.techStack.map((tech, techIndex) => (
                <StyledTechTag key={techIndex}>{tech}</StyledTechTag>
              ))}
            </StyledProjectTech>

            {project.impact && (
              <StyledImpactMetrics>
                {project.impact.map((metric, metricIndex) => (
                  <StyledMetric key={metricIndex}>
                    <span className="value">{metric.value}</span>
                    <span className="label">{metric.label}</span>
                  </StyledMetric>
                ))}
              </StyledImpactMetrics>
            )}

            {(project.liveUrl || project.githubUrl) && (
              <StyledProjectLinks>
                {project.liveUrl && (
                  <StyledProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <LaunchIcon sx={{ fontSize: '16px' }} />
                    {t("Projects.liveDemo")}
                  </StyledProjectLink>
                )}
                {project.githubUrl && (
                  <StyledProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <CodeIcon sx={{ fontSize: '16px' }} />
                    {t("Projects.sourceCode")}
                  </StyledProjectLink>
                )}
              </StyledProjectLinks>
            )}
          </StyledProjectContent>
        </StyledProjectCard>
      ))}
    </StyledProjectsContainer>
  );
};