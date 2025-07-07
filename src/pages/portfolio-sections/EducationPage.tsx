import { FC, useState } from "react";
import { IosCard, EducationSection, PortfolioLayout, PortfolioFooter } from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
}

export const EducationPage: FC<Props> = ({
  minimize,
  maximize,
  setMinimize,
  setMaximize,
  themeMode,
}) => {
  const [isClose, setIsClose] = useState<boolean>(false);

  return (
    <PortfolioLayout
      minimize={minimize}
      isClose={isClose}
      onPixelArtClick={() => setIsClose(false)}
    >
      <IosCard
        setMinimize={setMinimize}
        setMaximize={setMaximize}
        maximize={maximize}
        minimize={minimize}
        setIsClose={setIsClose}
        isClose={isClose}
        isPortfolio={true}
        title="Education & Background"
        body={<EducationSection />}
        footer={<PortfolioFooter color={themeMode.secondary}>Dual engineering background with international business experience</PortfolioFooter>}
      />
    </PortfolioLayout>
  );
};