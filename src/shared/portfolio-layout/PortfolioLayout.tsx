import { FC, ReactNode } from "react";

interface PortfolioLayoutProps {
  children: ReactNode;
}

// Simplified layout - pixel art is now rendered in App.tsx
export const PortfolioLayout: FC<PortfolioLayoutProps> = ({ children }) => {
  return <>{children}</>;
};
