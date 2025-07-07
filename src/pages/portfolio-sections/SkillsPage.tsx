import { FC, useState } from "react";
import { IosCard, SkillsMatrix, PortfolioLayout, PortfolioFooter } from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
}

export const SkillsPage: FC<Props> = ({
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
        title="Technical Skills"
        body={<SkillsMatrix />}
        footer={<PortfolioFooter color={themeMode.secondary}>Expertise across frontend, backend, and DevOps technologies</PortfolioFooter>}
      />
    </PortfolioLayout>
  );
};