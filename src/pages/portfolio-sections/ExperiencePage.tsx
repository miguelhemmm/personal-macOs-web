import { FC } from "react";
import { IosCard, ExperienceTimeline } from "shared";
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
  return (
    <IosCard
      setMinimize={setMinimize}
      setMaximize={setMaximize}
      maximize={maximize}
      minimize={minimize}
      setIsClose={() => {}}
      isClose={false}
      isPortfolio={true}
      title="Professional Experience"
      body={<ExperienceTimeline />}
      footer={<div style={{ fontSize: '10px', color: themeMode.secondary }}>6+ years of progressive growth in software development</div>}
    />
  );
};