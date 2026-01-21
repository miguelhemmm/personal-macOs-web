# AGENT.md - Development Notes

## Build & Test Commands

```bash
npm run dev      # Start dev server with HMR
npm run lint     # Run ESLint (0 warnings allowed)
npm run build    # TypeScript compilation + Vite build
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```

## Path Aliases

Use these without the `@` prefix (configured in vite.config.ts and tsconfig.json):
- `models` → src/models/index.ts
- `shared` → src/shared/index.ts
- `theme` → src/theme/index.ts
- `context` → src/context/index.ts
- `apps` → src/apps/index.ts
- `i18n` → src/i18n

## Architecture Notes

### Window Management
- `WindowManagerProvider` wraps the app and manages all window state
- `useWindowManager()` hook provides: openWindow, closeWindow, minimizeWindow, etc.
- `WindowRenderer` component renders all open windows
- Windows support drag, minimize, maximize, close, and z-index stacking

### Adding New Apps
1. Create app component in `src/apps/AppName/`
2. Export from `src/apps/index.ts`
3. Add to `appComponents` map in `WindowRenderer.tsx`
4. Add dock icon in `Toolbar.tsx` (use emoji fallback if no PNG)
5. Add translations in `src/i18n/en.json` and `es.json`

### Styling
- Primary: styled-components for themed components
- Emotion: Used for some MUI-integrated components
- SCSS: Used for toolbar and global styles
- Always access theme via `${({ theme }) => theme.property}`

## Common Gotchas

- ESLint has `--max-warnings 0` - all warnings must be fixed
- Styled files exporting keyframes need `/* eslint-disable react-refresh/only-export-components */`
- For hooks with stable callbacks, use eslint-disable comment for exhaustive-deps
- i18n: Use `useTranslation()` hook, access with `t("Namespace.key", "fallback")`
