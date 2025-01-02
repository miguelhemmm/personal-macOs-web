import { FC } from "react";
interface TypingComponentProps {
  children: string;
  delay: number;
}

export const TypingComponent: FC<TypingComponentProps> = ({ children }) => {
  return <p className="type">{children}</p>;
};
