import { FC } from "react";
import { SkillsMatrix, PortfolioPageTemplate } from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
}

export const SkillsPage: FC<Props> = (props) => {
  return (
    <PortfolioPageTemplate
      {...props}
      title="Technical Skills"
      body={<SkillsMatrix />}
      footerText="Expertise across frontend, backend, and DevOps technologies"
    />
  );
};