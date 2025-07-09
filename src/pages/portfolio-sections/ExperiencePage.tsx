import { FC } from "react";
import { ExperienceTimeline, PortfolioPageTemplate } from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
}

export const ExperiencePage: FC<Props> = (props) => {
  return (
    <PortfolioPageTemplate
      {...props}
      title="Professional Experience"
      body={<ExperienceTimeline />}
      footerText="7+ years of progressive growth in software development"
    />
  );
};
