import { FC } from "react";
import { IosCard, SkillsMatrix } from "shared";
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
  return (
    <IosCard
      setMinimize={setMinimize}
      setMaximize={setMaximize}
      maximize={maximize}
      minimize={minimize}
      setIsClose={() => {}}
      isClose={false}
      isPortfolio={true}
      title="Technical Skills"
      body={<SkillsMatrix />}
      footer={<div style={{ fontSize: '10px', color: themeMode.secondary }}>Expertise across frontend, backend, and DevOps technologies</div>}
    />
  );
};