import { FC } from "react";
import { IosCard, LeadershipSection } from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
}

export const LeadershipPage: FC<Props> = ({
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
      title="Leadership & Impact"
      body={<LeadershipSection />}
      footer={<div style={{ fontSize: '10px', color: themeMode.secondary }}>Leading teams and driving technical innovation at Globant</div>}
    />
  );
};