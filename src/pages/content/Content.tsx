import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import {
  GithubIcon,
  IosCard,
  LinkedinIcon,
  StyledButton,
  StyledButtonGroup,
  TypingComponent,
  WhatsAppIcon,
} from "shared";
import { ThemeProps } from "models";
import {
  ExperiencePage,
  ProjectsPage,
  AboutPage,
  LeadershipPage,
  EducationPage,
} from "../portfolio-sections";
import myPdfFile from "../../assets/resume.pdf";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
  isClose?: boolean;
  setIsClose?: (isClose: boolean) => void;
  isMinimizeAnimating?: boolean;
  setIsMinimizeAnimating?: (isAnimating: boolean) => void;
}
export const ContentComponent: FC<Props> = ({
  minimize,
  maximize,
  setMaximize,
  setMinimize,
  themeMode,
  isClose,
  setIsClose,
  isMinimizeAnimating,
  setIsMinimizeAnimating,
}) => {
  const { t } = useTranslation();
  const location = useLocation();

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = myPdfFile;
    link.setAttribute("download", "miguel-hernandez-resume.pdf"); // Set the download filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderIntroCard = () => {
    return (
      <IosCard
        setMinimize={setMinimize}
        setMaximize={setMaximize}
        maximize={maximize}
        minimize={minimize}
        setIsClose={setIsClose}
        isClose={isClose}
        isMinimizeAnimating={isMinimizeAnimating}
        setIsMinimizeAnimating={setIsMinimizeAnimating}
        title="miguelhem@Macbook-Pro"
        body={
          <>
            <TypingComponent children={t("Content.presentation")} delay={0} />
            <TypingComponent children={t("Content.body1")} delay={0} />
            <TypingComponent children={t("Content.body2")} delay={0} />
          </>
        }
        footer={
          <StyledButtonGroup>
            <StyledButton onClick={downloadPdf}>
              <CloudDownloadIcon />
              Resume
            </StyledButton>
            <div>
              <a href="https://www.linkedin.com/in/miguelhem/" target="_blank">
                <LinkedinIcon fillColor={themeMode.linkedinIcon} />
              </a>
            </div>
            <div>
              <a href="https://github.com/miguelhemmm" target="_blank">
                <GithubIcon fillColor={themeMode.githubIcon} />
              </a>
            </div>
            <div>
              <a href=" https://wa.me/+527821039059" target="_blank">
                <WhatsAppIcon fillColor={themeMode.whatsappIcon} />
              </a>
            </div>
          </StyledButtonGroup>
        }
      />
    );
  };

  const renderPortfolioSection = () => {
    const pageProps = {
      minimize,
      maximize,
      setMinimize,
      setMaximize,
      themeMode,
      isClose,
      setIsClose,
      isMinimizeAnimating,
      setIsMinimizeAnimating,
    };

    switch (location.pathname) {
      case "/experience":
        return <ExperiencePage {...pageProps} />;
      case "/projects":
        return <ProjectsPage {...pageProps} />;
      case "/about":
        return <AboutPage {...pageProps} />;
      case "/leadership":
        return <LeadershipPage {...pageProps} />;
      case "/education":
        return <EducationPage {...pageProps} />;
      default:
        return null;
    }
  };

  // Home page just renders the intro card (pixel art is now in App.tsx)
  if (location.pathname === "/") {
    return renderIntroCard();
  }

  // Portfolio pages render their section content
  return renderPortfolioSection();
};
