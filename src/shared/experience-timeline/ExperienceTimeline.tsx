import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  StyledTimeline,
  StyledTimelineItem,
  StyledTimelineDate,
  StyledTimelineContent,
  StyledCompany,
  StyledPosition,
  StyledAchievements,
  StyledAchievement,
  StyledTechStack
} from "./ExperienceTimeline.styled";

interface Experience {
  company: string;
  position: string;
  period: string;
  achievements: string[];
  techStack: string[];
}

export const ExperienceTimeline: FC = () => {
  const { t } = useTranslation();

  const experiences: Experience[] = [
    {
      company: "Globant",
      position: t("Experience.globant.position"),
      period: "2022 - Present",
      achievements: [
        t("Experience.globant.achievement1"),
        t("Experience.globant.achievement2"),
        t("Experience.globant.achievement3")
      ],
      techStack: ["Angular", "React", "TypeScript", "React Native"]
    },
    {
      company: "EPAM Systems",
      position: t("Experience.epam.position"),
      period: "2021 - 2022",
      achievements: [
        t("Experience.epam.achievement1"),
        t("Experience.epam.achievement2"),
        t("Experience.epam.achievement3"),
        t("Experience.epam.achievement4")
      ],
      techStack: ["HTML", "SCSS", ".NET", "React.js", "jQuery"]
    },
    {
      company: "Tata Consultancy Services",
      position: t("Experience.tcs.position"),
      period: "2019 - 2021",
      achievements: [
        t("Experience.tcs.achievement1"),
        t("Experience.tcs.achievement2"),
        t("Experience.tcs.achievement3"),
        t("Experience.tcs.achievement4")
      ],
      techStack: ["Angular 2+", "JavaScript", "TypeScript"]
    },
    {
      company: t("Experience.freelancer.company"),
      position: t("Experience.freelancer.position"),
      period: "2017 - 2019",
      achievements: [
        t("Experience.freelancer.achievement1"),
        t("Experience.freelancer.achievement2"),
        t("Experience.freelancer.achievement3")
      ],
      techStack: ["JavaScript", "Frontend Technologies", "Databases"]
    }
  ];

  return (
    <StyledTimeline>
      {experiences.map((exp, index) => (
        <StyledTimelineItem key={index} $isLast={index === experiences.length - 1}>
          <StyledTimelineDate>{exp.period}</StyledTimelineDate>
          <StyledTimelineContent>
            <StyledCompany>{exp.company}</StyledCompany>
            <StyledPosition>{exp.position}</StyledPosition>
            <StyledAchievements>
              {exp.achievements.map((achievement, achIndex) => (
                <StyledAchievement key={achIndex}>• {achievement}</StyledAchievement>
              ))}
            </StyledAchievements>
            <StyledTechStack>
              {exp.techStack.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </StyledTechStack>
          </StyledTimelineContent>
        </StyledTimelineItem>
      ))}
    </StyledTimeline>
  );
};