import { FC } from "react";
import { useTranslation } from "react-i18next";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import BuildIcon from "@mui/icons-material/Build";
import {
  StyledLeadershipContainer,
  StyledLeadershipGrid,
  StyledLeadershipCard,
  StyledCardIcon,
  StyledCardTitle,
  StyledCardDescription,
  StyledImpactMetrics,
  StyledMetricItem,
  StyledMetricValue,
  StyledMetricLabel
} from "./LeadershipSection.styled";

export const LeadershipSection: FC = () => {
  const { t } = useTranslation();

  const leadershipAreas = [
    {
      icon: <GroupsIcon />,
      title: t("Leadership.teamLead.title"),
      description: t("Leadership.teamLead.description")
    },
    {
      icon: <EmojiObjectsIcon />,
      title: t("Leadership.innovation.title"),
      description: t("Leadership.innovation.description")
    },
    {
      icon: <BuildIcon />,
      title: t("Leadership.architecture.title"),
      description: t("Leadership.architecture.description")
    },
    {
      icon: <TrendingUpIcon />,
      title: t("Leadership.mentoring.title"),
      description: t("Leadership.mentoring.description")
    }
  ];

  const impactMetrics = [
    {
      value: "6+",
      label: t("Leadership.metrics.yearsExperience")
    },
    {
      value: "10+",
      label: t("Leadership.metrics.projectsLed")
    },
    {
      value: "3",
      label: t("Leadership.metrics.majorMigrations")
    },
    {
      value: "2",
      label: t("Leadership.metrics.companies")
    }
  ];

  return (
    <StyledLeadershipContainer>
      <StyledLeadershipGrid>
        {leadershipAreas.map((area, index) => (
          <StyledLeadershipCard key={index}>
            <StyledCardIcon>{area.icon}</StyledCardIcon>
            <StyledCardTitle>{area.title}</StyledCardTitle>
            <StyledCardDescription>{area.description}</StyledCardDescription>
          </StyledLeadershipCard>
        ))}
      </StyledLeadershipGrid>

      <StyledImpactMetrics>
        {impactMetrics.map((metric, index) => (
          <StyledMetricItem key={index}>
            <StyledMetricValue>{metric.value}</StyledMetricValue>
            <StyledMetricLabel>{metric.label}</StyledMetricLabel>
          </StyledMetricItem>
        ))}
      </StyledImpactMetrics>
    </StyledLeadershipContainer>
  );
};