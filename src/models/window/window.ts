import { ReactElement } from "react";

export type AppId =
  | "finder"
  | "safari"
  | "notes"
  | "mail"
  | "calendar"
  | "photos"
  | "music"
  | "terminal"
  | "calculator"
  | "messages"
  | "maps"
  | "settings"
  | "appstore"
  | "reminders"
  | "trash"
  | "about"
  | "siri"
  | "contacts";

export interface WindowPosition {
  x: number;
  y: number;
}

export interface WindowSize {
  width: number;
  height: number;
}

export interface WindowState {
  id: string;
  appId: AppId;
  title: string;
  isMinimized: boolean;
  isMaximized: boolean;
  isFocused: boolean;
  zIndex: number;
  position: WindowPosition;
  size: WindowSize;
}

export interface AppConfig {
  id: AppId;
  name: string;
  icon: string;
  component: () => ReactElement;
  defaultSize: WindowSize;
  minSize?: WindowSize;
  maxSize?: WindowSize;
  singleton?: boolean;
}

export interface WindowManagerContextType {
  windows: WindowState[];
  openWindow: (appId: AppId) => void;
  closeWindow: (windowId: string) => void;
  minimizeWindow: (windowId: string) => void;
  maximizeWindow: (windowId: string) => void;
  restoreWindow: (windowId: string) => void;
  focusWindow: (windowId: string) => void;
  moveWindow: (windowId: string, position: WindowPosition) => void;
  resizeWindow: (windowId: string, size: WindowSize) => void;
  getOpenApps: () => AppId[];
  isAppOpen: (appId: AppId) => boolean;
}
