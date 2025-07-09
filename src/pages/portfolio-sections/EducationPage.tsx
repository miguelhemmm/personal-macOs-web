import { FC } from "react";
import { EducationSection, PortfolioPageTemplate } from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
}

export const EducationPage: FC<Props> = (props) => {
  return (
    <PortfolioPageTemplate
      {...props}
      title="Education & Background"
      body={<EducationSection />}
      footerText="Dual engineering background with international business experience"
    />
  );
};