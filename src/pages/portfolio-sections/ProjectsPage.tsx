import { FC } from "react";
import { ProjectsShowcase, PortfolioPageTemplate } from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
}

export const ProjectsPage: FC<Props> = (props) => {
  return (
    <PortfolioPageTemplate
      {...props}
      title="Key Projects"
      body={<ProjectsShowcase />}
      footerText="Highlighting impactful projects and technical achievements"
    />
  );
};