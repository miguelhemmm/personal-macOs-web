import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  StyledDrawer, 
  StyledDrawerOverlay, 
  StyledDrawerContent,
  StyledNavItem,
  StyledNavList
} from './MobileDrawer.styled';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { path: '/', label: t('Navigation.finder') },
    { path: '/experience', label: t('Navigation.experience') },
    { path: '/skills', label: t('Navigation.skills') },
    { path: '/projects', label: t('Navigation.projects') },
    { path: '/about', label: t('Navigation.about') },
    { path: '/leadership', label: t('Navigation.leadership') },
    { path: '/education', label: t('Navigation.education') },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <StyledDrawer $isOpen={isOpen}>
      <StyledDrawerOverlay $isOpen={isOpen} onClick={onClose} />
      <StyledDrawerContent $isOpen={isOpen}>
        <StyledNavList>
          {navigationItems.map((item) => (
            <StyledNavItem 
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              $isActive={location.pathname === item.path}
            >
              {item.label}
            </StyledNavItem>
          ))}
        </StyledNavList>
      </StyledDrawerContent>
    </StyledDrawer>
  );
};