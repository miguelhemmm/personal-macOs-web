import { FC, ReactElement } from "react";
import { IosCard, PortfolioLayout, PortfolioFooter } from "shared";
import { ThemeProps } from "models";

interface Props {
  minimize?: boolean;
  maximize?: boolean;
  setMinimize?: (minimize: boolean) => void;
  setMaximize?: (maximize: boolean) => void;
  themeMode: ThemeProps;
  title: string;
  body: ReactElement;
  footerText: string;
  isClose?: boolean;
  setIsClose?: (isClose: boolean) => void;
  isMinimizeAnimating?: boolean;
  setIsMinimizeAnimating?: (isAnimating: boolean) => void;
}

export const PortfolioPageTemplate: FC<Props> = ({
  minimize,
  maximize,
  setMinimize,
  setMaximize,
  themeMode,
  title,
  body,
  footerText,
  isClose,
  setIsClose,
  isMinimizeAnimating,
  setIsMinimizeAnimating,
}) => {
  return (
    <PortfolioLayout>
      <IosCard
        setMinimize={setMinimize}
        setMaximize={setMaximize}
        maximize={maximize}
        minimize={minimize}
        setIsClose={setIsClose}
        isClose={isClose}
        isMinimizeAnimating={isMinimizeAnimating}
        setIsMinimizeAnimating={setIsMinimizeAnimating}
        isPortfolio={true}
        title={title}
        body={body}
        footer={
          <PortfolioFooter color={themeMode.secondary}>
            {footerText}
          </PortfolioFooter>
        }
      />
    </PortfolioLayout>
  );
};