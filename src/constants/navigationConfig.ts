import { TFunction } from 'i18next';

export interface NavigationItem {
  path: string;
  translationKey: string;
  label?: string; // For when we have the translation function
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { path: '/', translationKey: 'Navigation.finder' },
  { path: '/experience', translationKey: 'Navigation.experience' },
  { path: '/skills', translationKey: 'Navigation.skills' },
  { path: '/projects', translationKey: 'Navigation.projects' },
  { path: '/about', translationKey: 'Navigation.about' },
  { path: '/leadership', translationKey: 'Navigation.leadership' },
  { path: '/education', translationKey: 'Navigation.education' },
];

export const getTranslatedNavigationItems = (t: TFunction): NavigationItem[] => {
  return NAVIGATION_ITEMS.map(item => ({
    ...item,
    label: t(item.translationKey),
  }));
};

// Common button styles as constants
export const NAV_BUTTON_STYLES = {
  background: 'none',
  border: 'none',
  padding: '4px 8px',
  cursor: 'pointer',
  fontSize: '14px',
  fontFamily: 'inherit',
} as const;

export const ACTIVE_COLOR = '#007ACC';
export const INACTIVE_COLOR = 'inherit';