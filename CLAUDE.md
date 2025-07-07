# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start Vite development server with HMR
- `npm run build` - Build for production (runs TypeScript compilation then Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint with TypeScript support

### Deployment
- `npm run deploy` - Deploy to GitHub Pages (runs predeploy script first)
- `npm run predeploy` - Builds the project before deployment

## Project Architecture

This is a personal portfolio site built as a React + TypeScript + Vite application with a macOS-inspired UI design.

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with @vitejs/plugin-react
- **Styling**: Emotion CSS-in-JS + styled-components + Sass
- **UI Library**: Material-UI (MUI) for icons and some components
- **Internationalization**: react-i18next with English and Spanish translations
- **Routing**: React Router DOM v7

### Key Architectural Patterns

#### Styling Strategy
- Uses Emotion as primary CSS-in-JS solution with `@emotion/react` and `@emotion/styled`
- styled-components for theme provider functionality
- Sass for additional styling (.scss files)
- Custom font integration (San Francisco font family)

#### Theme System
- Dual theme setup: MUI ThemeProvider + styled-components ThemeProvider
- Custom theme context in `src/theme/` with light/dark mode switching
- Theme state managed via custom `useTheme` hook

#### Code Organization
- **Barrel exports**: Most directories use `index.ts` files for clean imports
- **Path aliases**: Configured in both `tsconfig.json` and `vite.config.ts`
  - `@i18n` → `/src/i18n/i18n.ts`
  - `@models` → `/src/models/index.ts`
  - `@shared` → `/src/shared/index.ts`
- **Component structure**: Each component has its own directory with styled components

#### State Management
- React state hooks for local state
- Theme state via React Context
- i18n state managed by react-i18next

### Directory Structure
- `src/pages/` - Main page components (Navigation, Content, Toolbar)
- `src/shared/` - Reusable components (icons, library components, iOS-style cards)
- `src/theme/` - Theme configuration and context
- `src/i18n/` - Internationalization setup and translation files
- `src/models/` - TypeScript type definitions
- `src/assets/` - Static assets including fonts, images, and SVGs

### macOS UI Implementation
The application mimics macOS interface elements:
- Navigation component serves as the top menu bar
- Toolbar component represents the dock
- iOS-style cards for content presentation
- Battery indicator and mobile navigation components

## Important Notes

- Uses strict TypeScript configuration with unused locals/parameters checking
- ESLint configured for React with TypeScript support
- Vite path aliases must be kept in sync with TypeScript paths
- Emotion requires `jsxImportSource` configuration in both tsconfig and Vite