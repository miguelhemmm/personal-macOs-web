# PROMPT.md - Ralph Wiggum Style Prompt for Portfolio Project

## Phase 0: Orientation

0a. Study `CLAUDE.md` to learn about project architecture, commands, and patterns.

0b. The source code is in `src/` with the following structure:
- `src/pages/` - Main page components
- `src/shared/` - Reusable components
- `src/theme/` - Theme configuration
- `src/i18n/` - Internationalization
- `src/models/` - TypeScript types
- `src/assets/` - Static assets

0c. Study `fix_plan.md` to understand current progress and pending tasks.

---

## Phase 1: Analysis & Planning

1. Your task is to implement missing features, fix bugs, and improve the portfolio application. Follow the `fix_plan.md` and choose the most important 10 things. Before making changes, search the codebase (don't assume something is not implemented) using subagents. You may use up to 100 parallel subagents for research operations but only 1 subagent for build/test commands.

2. After implementing functionality or resolving problems, run the appropriate commands:
   - `npm run lint` - Verify no linting errors
   - `npm run build` - Verify production build succeeds
   - `npm run dev` - Test functionality in development

3. When you discover a TypeScript, React, styling, or build issue, immediately update `@fix_plan.md` with your findings using a subagent. When the issue is resolved, update `@fix_plan.md` and remove the item using a subagent.

---

## Phase 2: Git Workflow

4. When tasks pass validation, update `@fix_plan.md`, then:
   ```bash
   git add -A
   git commit -m "descriptive message of changes"
   git push
   ```

5. As soon as there are no build or lint errors, create a git tag. If there are no git tags, start at `0.0.0` and increment patch by 1 (e.g., `0.0.1`).

---

## Phase 3: Quality Standards

6. **IMPORTANT**: We want single sources of truth, no duplicate code or redundant implementations. If tests or builds unrelated to your work fail, it's your job to resolve them as part of the increment of change.

7. **IMPORTANT**: DO NOT IMPLEMENT PLACEHOLDER OR SIMPLE IMPLEMENTATIONS. WE WANT FULL IMPLEMENTATIONS.

8. When authoring components, ensure:
   - TypeScript strict mode compliance
   - Proper barrel exports in `index.ts` files
   - Path aliases usage (`@i18n`, `@models`, `@shared`)
   - Emotion/styled-components consistency
   - i18n support for all user-facing text (English + Spanish)

---

## Phase 4: Documentation

9. Keep `@AGENT.md` up to date with information on how to build/test and your learnings to optimize the development loop using a subagent. Keep it brief.

10. Keep `@fix_plan.md` up to date with your learnings using a subagent. Especially after wrapping up/finishing your turn.

11. When `@fix_plan.md` becomes large, periodically clean out completed items from the file using a subagent.

12. **IMPORTANT**: DO NOT PLACE STATUS REPORT UPDATES INTO `@AGENT.md`.

---

## Phase 5: Component & Feature Development

13. When creating new components:
    - Follow the existing component structure (own directory with styled components)
    - Maintain macOS UI design language consistency
    - Support both light/dark theme modes
    - Ensure responsive design for mobile navigation

14. When working with translations:
    - Update both `en` and `es` translation files
    - Use the `useTranslation` hook properly
    - Ensure all user-facing strings are translatable

15. You may work on multiple components at once using up to 50 parallel subagents.

---

## Phase 6: Bug Tracking

16. For any bugs you notice, it's important to resolve them OR document them in `@fix_plan.md` to be resolved using a subagent.

17. When you learn something new about how to run commands or handle specific patterns, update `@AGENT.md` using a subagent.

---

## Tech Stack Reference

- **Framework**: React 18 + TypeScript
- **Build**: Vite + @vitejs/plugin-react
- **Styling**: Emotion + styled-components + Sass
- **UI**: Material-UI icons
- **i18n**: react-i18next
- **Routing**: React Router DOM v7
- **Deploy**: GitHub Pages (`npm run deploy`)

---

## Commands Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server with HMR |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

---

## Ultimate Goal

Achieve a **polished, production-ready portfolio** with:
- ✅ Complete macOS-inspired UI
- ✅ Full i18n support (EN/ES)
- ✅ Dark/Light theme switching
- ✅ Responsive mobile design
- ✅ Zero TypeScript/lint errors
- ✅ Optimized performance
- ✅ Clean, maintainable code architecture
