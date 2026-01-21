import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useState,
} from "react";
import {
  AppId,
  WindowManagerContextType,
  WindowPosition,
  WindowSize,
  WindowState,
} from "models";

export const WindowManagerContext = createContext<WindowManagerContextType | null>(
  null
);

interface Props {
  children: ReactNode;
}

const DEFAULT_WINDOW_SIZE: WindowSize = { width: 600, height: 400 };

const APP_NAMES: Record<AppId, string> = {
  finder: "Finder",
  safari: "Safari",
  notes: "Notes",
  mail: "Mail",
  calendar: "Calendar",
  photos: "Photos",
  music: "Music",
  terminal: "Terminal",
  calculator: "Calculator",
  messages: "Messages",
  maps: "Maps",
  settings: "System Preferences",
  appstore: "App Store",
  reminders: "Reminders",
  trash: "Trash",
  about: "About This Mac",
  siri: "Siri",
  contacts: "Contacts",
};

const APP_SIZES: Partial<Record<AppId, WindowSize>> = {
  calculator: { width: 260, height: 400 },
  terminal: { width: 650, height: 450 },
  settings: { width: 700, height: 500 },
  notes: { width: 600, height: 450 },
  mail: { width: 650, height: 500 },
  about: { width: 500, height: 350 },
  finder: { width: 750, height: 500 },
  messages: { width: 600, height: 450 },
  contacts: { width: 600, height: 450 },
};

let windowIdCounter = 0;
let zIndexCounter = 100;

const generateWindowId = (): string => {
  windowIdCounter += 1;
  return `window-${windowIdCounter}`;
};

const getNextZIndex = (): number => {
  zIndexCounter += 1;
  return zIndexCounter;
};

const calculateInitialPosition = (index: number): WindowPosition => {
  const offset = index * 30;
  return {
    x: 100 + offset,
    y: 80 + offset,
  };
};

export const WindowManagerProvider: FC<Props> = ({ children }) => {
  const [windows, setWindows] = useState<WindowState[]>([]);

  const openWindow = useCallback((appId: AppId) => {
    setWindows((prev) => {
      const existingWindow = prev.find(
        (w) => w.appId === appId && !w.isMinimized
      );
      if (existingWindow) {
        return prev.map((w) =>
          w.id === existingWindow.id
            ? { ...w, isFocused: true, zIndex: getNextZIndex() }
            : { ...w, isFocused: false }
        );
      }

      const minimizedWindow = prev.find(
        (w) => w.appId === appId && w.isMinimized
      );
      if (minimizedWindow) {
        return prev.map((w) =>
          w.id === minimizedWindow.id
            ? {
                ...w,
                isMinimized: false,
                isFocused: true,
                zIndex: getNextZIndex(),
              }
            : { ...w, isFocused: false }
        );
      }

      const newWindow: WindowState = {
        id: generateWindowId(),
        appId,
        title: APP_NAMES[appId],
        isMinimized: false,
        isMaximized: false,
        isFocused: true,
        zIndex: getNextZIndex(),
        position: calculateInitialPosition(prev.length),
        size: APP_SIZES[appId] || DEFAULT_WINDOW_SIZE,
      };

      return [
        ...prev.map((w) => ({ ...w, isFocused: false })),
        newWindow,
      ];
    });
  }, []);

  const closeWindow = useCallback((windowId: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== windowId));
  }, []);

  const minimizeWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === windowId
          ? { ...w, isMinimized: true, isFocused: false }
          : w
      )
    );
  }, []);

  const maximizeWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === windowId
          ? { ...w, isMaximized: true, isFocused: true, zIndex: getNextZIndex() }
          : { ...w, isFocused: false }
      )
    );
  }, []);

  const restoreWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === windowId
          ? {
              ...w,
              isMaximized: false,
              isMinimized: false,
              isFocused: true,
              zIndex: getNextZIndex(),
            }
          : { ...w, isFocused: false }
      )
    );
  }, []);

  const focusWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === windowId
          ? { ...w, isFocused: true, zIndex: getNextZIndex() }
          : { ...w, isFocused: false }
      )
    );
  }, []);

  const moveWindow = useCallback((windowId: string, position: WindowPosition) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === windowId ? { ...w, position } : w))
    );
  }, []);

  const resizeWindow = useCallback((windowId: string, size: WindowSize) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === windowId ? { ...w, size } : w))
    );
  }, []);

  const getOpenApps = useCallback((): AppId[] => {
    return [...new Set(windows.map((w) => w.appId))];
  }, [windows]);

  const isAppOpen = useCallback(
    (appId: AppId): boolean => {
      return windows.some((w) => w.appId === appId && !w.isMinimized);
    },
    [windows]
  );

  const value: WindowManagerContextType = {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    focusWindow,
    moveWindow,
    resizeWindow,
    getOpenApps,
    isAppOpen,
  };

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
};
