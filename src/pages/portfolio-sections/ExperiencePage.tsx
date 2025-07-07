import { FC, useState } from "react";
import {
  IosCard,
  ExperienceTimeline,
  PortfolioLayout,
  PortfolioFooter,
} from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
}

export const ExperiencePage: FC<Props> = ({
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
        title="Professional Experience"
        body={<ExperienceTimeline />}
        footer={
          <PortfolioFooter color={themeMode.secondary}>
            7+ years of progressive growth in software development
          </PortfolioFooter>
        }
      />
    </PortfolioLayout>
  );
};
