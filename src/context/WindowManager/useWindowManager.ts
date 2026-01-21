import { useContext } from "react";
import { WindowManagerContextType } from "models";
import { WindowManagerContext } from "./WindowManagerContext";

export const useWindowManager = (): WindowManagerContextType => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error(
      "useWindowManager must be used within a WindowManagerProvider"
    );
  }
  return context;
};
