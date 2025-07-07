import { FC } from "react";
import { IosCard, ProjectsShowcase } from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
}

export const ProjectsPage: FC<Props> = ({
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
      title="Key Projects"
      body={<ProjectsShowcase />}
      footer={<div style={{ fontSize: '10px', color: themeMode.secondary }}>Highlighting impactful projects and technical achievements</div>}
    />
  );
};