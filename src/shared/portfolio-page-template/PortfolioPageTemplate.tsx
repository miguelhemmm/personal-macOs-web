import { FC, useState, ReactElement } from "react";
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
}) => {
  const [isClose, setIsClose] = useState<boolean>(false);

  return (
    <PortfolioLayout
      minimize={minimize}
      isClose={isClose}
      onPixelArtClick={() => setIsClose(false)}
    >
      <IosCard
        setMinimize={setMinimize}
        setMaximize={setMaximize}
        maximize={maximize}
        minimize={minimize}
        setIsClose={setIsClose}
        isClose={isClose}
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