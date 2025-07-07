import { FC } from "react";
import { useTranslation } from "react-i18next";
import SchoolIcon from "@mui/icons-material/School";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CodeIcon from "@mui/icons-material/Code";
import {
  StyledAboutContainer,
  StyledCareerStory,
  StyledStorySection,
  StyledIconContainer,
  StyledStoryTitle,
  StyledStoryText,
  StyledHighlight,
  StyledJourneyTimeline,
  StyledTimelineStep,
  StyledQuote
} from "./AboutSection.styled";

export const AboutSection: FC = () => {
  const { t } = useTranslation();

  return (
    <StyledAboutContainer>
      <StyledCareerStory>
        <StyledStorySection>
          <StyledIconContainer>
            <SchoolIcon />
          </StyledIconContainer>
          <StyledStoryTitle>{t("About.journey.engineering.title")}</StyledStoryTitle>
          <StyledStoryText>
            {t("About.journey.engineering.description")}
            <StyledHighlight>{t("About.journey.engineering.highlight")}</StyledHighlight>
          </StyledStoryText>
        </StyledStorySection>

        <StyledStorySection>
          <StyledIconContainer>
            <FlightTakeoffIcon />
          </StyledIconContainer>
          <StyledStoryTitle>{t("About.journey.transition.title")}</StyledStoryTitle>
          <StyledStoryText>
            {t("About.journey.transition.description")}
            <StyledHighlight>{t("About.journey.transition.highlight")}</StyledHighlight>
          </StyledStoryText>
        </StyledStorySection>

        <StyledStorySection>
          <StyledIconContainer>
            <CodeIcon />
          </StyledIconContainer>
          <StyledStoryTitle>{t("About.journey.current.title")}</StyledStoryTitle>
          <StyledStoryText>
            {t("About.journey.current.description")}
            <StyledHighlight>{t("About.journey.current.highlight")}</StyledHighlight>
          </StyledStoryText>
        </StyledStorySection>
      </StyledCareerStory>

      <StyledJourneyTimeline>
        <StyledTimelineStep>
          <strong>2012-2017:</strong> {t("About.timeline.step1")}
        </StyledTimelineStep>
        <StyledTimelineStep>
          <strong>2017-2019:</strong> {t("About.timeline.step2")}
        </StyledTimelineStep>
        <StyledTimelineStep>
          <strong>2018:</strong> {t("About.timeline.step3")}
        </StyledTimelineStep>
        <StyledTimelineStep>
          <strong>2019-2024:</strong> {t("About.timeline.step4")}
        </StyledTimelineStep>
        <StyledTimelineStep>
          <strong>2022-Present:</strong> {t("About.timeline.step5")}
        </StyledTimelineStep>
      </StyledJourneyTimeline>

      <StyledQuote>
        "{t("About.philosophy")}"
      </StyledQuote>
    </StyledAboutContainer>
  );
};