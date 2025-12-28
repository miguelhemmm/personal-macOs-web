import { FC } from "react";
import { AboutSection, PortfolioPageTemplate } from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
  isClose?: boolean;
  setIsClose?: (isClose: boolean) => void;
  isMinimizeAnimating?: boolean;
  setIsMinimizeAnimating?: (isAnimating: boolean) => void;
}

export const AboutPage: FC<Props> = (props) => {
  return (
    <PortfolioPageTemplate
      {...props}
      title="About Miguel"
      body={<AboutSection />}
      footerText="From Engineering to Software Development - A unique journey"
    />
  );
};