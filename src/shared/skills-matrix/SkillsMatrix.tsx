import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  StyledSkillsContainer,
  StyledSkillCategory,
  StyledCategoryTitle,
  StyledSkillsList,
  StyledSkillItem,
  StyledSkillName,
  StyledSkillLevel,
  StyledSkillBar,
  StyledSkillProgress,
  StyledYears
} from "./SkillsMatrix.styled";

interface Skill {
  name: string;
  level: number; // 1-10
  years: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SkillsMatrix: FC = () => {
  const { t } = useTranslation();

  const skillCategories: SkillCategory[] = [
    {
      title: t("Skills.frontend.title"),
      skills: [
        { name: "JavaScript", level: 9, years: 6 },
        { name: "TypeScript", level: 9, years: 5 },
        { name: "React", level: 9, years: 4 },
        { name: "Angular", level: 9, years: 5 },
        { name: "Vue", level: 7, years: 2 },
        { name: "React Native", level: 8, years: 3 },
        { name: "HTML/CSS", level: 10, years: 6 },
        { name: "SCSS/LESS", level: 9, years: 5 }
      ]
    },
    {
      title: t("Skills.styling.title"),
      skills: [
        { name: "Bootstrap", level: 9, years: 6 },
        { name: "Material UI", level: 9, years: 4 },
        { name: "Styled Components", level: 8, years: 3 },
        { name: "Emotion", level: 8, years: 2 }
      ]
    },
    {
      title: t("Skills.testing.title"),
      skills: [
        { name: "Jest", level: 8, years: 4 },
        { name: "Cypress", level: 8, years: 3 },
        { name: "Karma/Jasmine", level: 8, years: 4 },
        { name: "Storybook", level: 7, years: 2 }
      ]
    },
    {
      title: t("Skills.state.title"),
      skills: [
        { name: "NgRx", level: 8, years: 4 },
        { name: "Redux", level: 8, years: 3 }
      ]
    },
    {
      title: t("Skills.backend.title"),
      skills: [
        { name: "Node.js", level: 7, years: 3 },
        { name: ".NET", level: 7, years: 2 },
        { name: "MongoDB", level: 6, years: 2 },
        { name: "PostgreSQL", level: 6, years: 2 }
      ]
    },
    {
      title: t("Skills.devops.title"),
      skills: [
        { name: "Git", level: 9, years: 6 },
        { name: "Azure DevOps", level: 8, years: 3 },
        { name: "AWS", level: 7, years: 2 },
        { name: "Docker", level: 7, years: 2 }
      ]
    }
  ];

  return (
    <StyledSkillsContainer>
      {skillCategories.map((category, index) => (
        <StyledSkillCategory key={index}>
          <StyledCategoryTitle>{category.title}</StyledCategoryTitle>
          <StyledSkillsList>
            {category.skills.map((skill, skillIndex) => (
              <StyledSkillItem key={skillIndex}>
                <StyledSkillName>{skill.name}</StyledSkillName>
                <StyledYears>{skill.years}y</StyledYears>
                <StyledSkillLevel>
                  <StyledSkillBar>
                    <StyledSkillProgress $level={skill.level} />
                  </StyledSkillBar>
                </StyledSkillLevel>
              </StyledSkillItem>
            ))}
          </StyledSkillsList>
        </StyledSkillCategory>
      ))}
    </StyledSkillsContainer>
  );
};