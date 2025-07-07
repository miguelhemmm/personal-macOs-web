import { FC } from "react";
import { IosCard, AboutSection } from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
}

export const AboutPage: FC<Props> = ({
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
      title="About Miguel"
      body={<AboutSection />}
      footer={<div style={{ fontSize: '10px', color: themeMode.secondary }}>From Engineering to Software Development - A unique journey</div>}
    />
  );
};