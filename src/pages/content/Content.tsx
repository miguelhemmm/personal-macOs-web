import { FC, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { IosCard, StyledButton, StyledButtonGroup } from "shared";
import { StyledContainer, StyledSpan } from "./Content.styled";
import myPdfFile from "../../assets/resume.pdf";
import pixelArtImage from "../../assets/pixel-art-48.png";

interface Props {
  minimize?: boolean;
  setMinimize?: (minimize: boolean) => void;
}
export const ContentComponent: FC<Props> = ({ minimize, setMinimize }): ReactElement => {
  const { t } = useTranslation();
  const [isClose, setIsClose] = useState<boolean>(false);

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = myPdfFile;
    link.setAttribute("download", "miguel-hernandez-resume.pdf"); // Set the download filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderIosCard = () => {
    return (
      <IosCard
        setMinimize={setMinimize}
        minimize={minimize}
        setIsClose={setIsClose}
        isClose={isClose}
        title='miguelhem@Macbook-Pro'
        body={
          <>
            <span>{t("Content.presentation")}</span>
            <span>{t("Content.body1")}</span>
            <span>{t("Content.body2")}</span>
          </>
        }
        footer={
          <StyledButtonGroup>
            <StyledButton onClick={downloadPdf}>
              <CloudDownloadIcon />
              Resume
            </StyledButton>
            <StyledButton>
              <a href='https://www.linkedin.com/in/miguelhem/' target='_blank'>
                Linkedin
              </a>
            </StyledButton>
            <StyledButton>
              <a href='https://github.com/miguelhemmm' target='_blank'>
                Github
              </a>
            </StyledButton>
          </StyledButtonGroup>
        }
      />
    );
  };

  return (
    <StyledContainer>
      {renderIosCard()}
      <StyledSpan $minimize={minimize} $isClose={isClose} onClick={() => setIsClose(false)}>
        <img src={pixelArtImage} />
      </StyledSpan>
    </StyledContainer>
  );
};
