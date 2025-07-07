import { FC } from "react";
import { useTranslation } from "react-i18next";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  StyledEducationContainer,
  StyledEducationGrid,
  StyledEducationCard,
  StyledCardHeader,
  StyledCardIcon,
  StyledCardInfo,
  StyledInstitution,
  StyledDegree,
  StyledPeriod,
  StyledLocation,
  StyledUniqueBackground,
  StyledBackgroundTitle,
  StyledBackgroundText,
  StyledLanguageSkills,
  StyledLanguageItem
} from "./EducationSection.styled";

export const EducationSection: FC = () => {
  const { t } = useTranslation();

  const education = [
    {
      icon: <SchoolIcon />,
      institution: t("Education.uveg.institution"),
      degree: t("Education.uveg.degree"),
      period: "2020 - 2024",
      location: t("Education.uveg.location")
    },
    {
      icon: <EngineeringIcon />,
      institution: t("Education.tecnm.institution"),
      degree: t("Education.tecnm.degree"),
      period: "2012 - 2017",
      location: t("Education.tecnm.location")
    },
    {
      icon: <LanguageIcon />,
      institution: t("Education.connect.institution"),
      degree: t("Education.connect.degree"),
      period: "2018",
      location: t("Education.connect.location")
    }
  ];

  const languages = [
    { language: t("Education.languages.spanish"), level: t("Education.languages.native") },
    { language: t("Education.languages.english"), level: t("Education.languages.business") }
  ];

  return (
    <StyledEducationContainer>
      <StyledEducationGrid>
        {education.map((edu, index) => (
          <StyledEducationCard key={index}>
            <StyledCardHeader>
              <StyledCardIcon>{edu.icon}</StyledCardIcon>
              <StyledCardInfo>
                <StyledInstitution>{edu.institution}</StyledInstitution>
                <StyledDegree>{edu.degree}</StyledDegree>
                <StyledPeriod>{edu.period}</StyledPeriod>
                <StyledLocation>
                  <LocationOnIcon sx={{ fontSize: '12px' }} />
                  {edu.location}
                </StyledLocation>
              </StyledCardInfo>
            </StyledCardHeader>
          </StyledEducationCard>
        ))}
      </StyledEducationGrid>

      <StyledUniqueBackground>
        <StyledBackgroundTitle>{t("Education.uniqueBackground.title")}</StyledBackgroundTitle>
        <StyledBackgroundText>
          {t("Education.uniqueBackground.description")}
        </StyledBackgroundText>
      </StyledUniqueBackground>

      <StyledLanguageSkills>
        <h3>{t("Education.languages.title")}</h3>
        {languages.map((lang, index) => (
          <StyledLanguageItem key={index}>
            <span className="language">{lang.language}</span>
            <span className="level">{lang.level}</span>
          </StyledLanguageItem>
        ))}
      </StyledLanguageSkills>
    </StyledEducationContainer>
  );
};