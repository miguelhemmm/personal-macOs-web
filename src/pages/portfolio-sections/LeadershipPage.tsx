import { FC } from "react";
import { LeadershipSection, PortfolioPageTemplate } from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
}

export const LeadershipPage: FC<Props> = (props) => {
  return (
    <PortfolioPageTemplate
      {...props}
      title="Leadership & Impact"
      body={<LeadershipSection />}
      footerText="Leading teams and driving technical innovation at Globant"
    />
  );
};