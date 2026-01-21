# fix_plan.md - Portfolio macOS-Style Development Plan

## 🔴 Priority: CRITICAL

### Core Functionality
- [ ] All elements from top bar (menu bar) should have functional dropdowns/actions
- [ ] Window stacking with proper z-index management (click to bring to front)
- [ ] Implement Dexie.js IndexedDB for persistent local storage

---

## 🟠 Priority: HIGH

### macOS Menu Bar (Top)
- [ ] **Apple Menu** → "About This Mac" opens About Me modal/window
- [ ] **File Menu** → Download Resume/CV, Print page
- [ ] **Edit Menu** → Copy contact info, etc.
- [ ] **View Menu** → Toggle dark/light mode, change language
- [ ] **Window Menu** → List of open windows, minimize all, close all
- [ ] **Help Menu** → Site navigation guide, keyboard shortcuts
- [ ] **Spotlight Search** (magnifying glass) → Global search for content/projects
- [ ] **WiFi Indicator** → Show connection status or social links
- [ ] **Battery Indicator** → Fun percentage (e.g., "Creativity: 100%")
- [ ] **Control Center** → Quick settings panel (theme, language, sound)
- [ ] **Clock** → Real-time clock, click for calendar

### macOS Dock (Bottom)
- [ ] **Finder** → Project browser / Portfolio showcase with folder structure
- [ ] **Safari** → Links to live projects, external sites
- [ ] **Calendar** → Availability calendar or timeline of experience
- [ ] **Photos** → Image gallery of work, screenshots, certifications
- [ ] **Music** → Spotify embed or playlist showcase
- [ ] **Messages** → Chat interface (could integrate with a chat service)
- [ ] **Maps** → Location display or embedded map
- [ ] **App Store** → Skills/technologies showcase as "apps"
- [ ] **Reminders** → To-do list or goals
- [ ] **Trash** → Easter egg or "deleted projects" humor

---

## 🟡 Priority: MEDIUM

### Window System Features
- [ ] Window title bar with traffic lights (red/yellow/green buttons)
- [ ] Double-click title bar to maximize/restore
- [ ] Draggable windows with bounds checking
- [ ] Resizable windows with min/max constraints
- [ ] Window minimize animation to dock
- [ ] Dock bounce animation when app opens
- [ ] Dock magnification effect on hover
- [ ] Multiple windows of same app support
- [ ] Window snap to edges (optional)

### Dock Enhancements
- [ ] Separator between app icons and minimized windows
- [ ] Tooltip with app name on hover
- [ ] Right-click context menu (Options, Quit, etc.)
- [ ] Drag to reorder icons (stored in IndexedDB)

### Desktop Features
- [ ] Desktop background customization (stored preference)
- [ ] Desktop icons support (optional)
- [ ] Right-click desktop context menu
- [ ] Wallpaper selection in Settings app

---

## 🟢 Priority: STANDARD

### Individual App Implementations

#### Finder App
- [ ] Sidebar with sections (Favorites, Projects, Skills)
- [ ] Grid/List view toggle
- [ ] Breadcrumb navigation
- [ ] Preview panel for selected items
- [ ] Search within Finder

#### Notes App
- [ ] Rich text editor (bold, italic, lists)
- [ ] Note categories/folders
- [ ] Sync with IndexedDB via Dexie

#### Terminal App
- [ ] Command history stored in IndexedDB

#### Mail App
- [ ] Sent mail history (local)

#### Settings App
- [ ] General: Name display, language preference
- [ ] Appearance: Auto theme option
- [ ] Dock: Size, magnification, position
- [ ] Accessibility: Font size, reduced motion

#### Safari App
- [ ] Address bar (decorative or functional)
- [ ] Bookmarks bar with project links
- [ ] Tab support (optional)
- [ ] Project preview in iframe or card view

#### Photos App
- [ ] Grid gallery view
- [ ] Lightbox/modal for full view
- [ ] Albums organization
- [ ] Lazy loading images

#### Calendar App
- [ ] Monthly view
- [ ] Experience timeline
- [ ] Availability display (optional)

#### Calculator App
- [ ] History (optional)

---

## 🔵 Priority: ENHANCEMENT

### Performance & Lighthouse
- [ ] Achieve Lighthouse score > 90 for all categories
- [ ] Implement lazy loading for images and components
- [ ] Code splitting per app/route
- [ ] Optimize bundle size (analyze with vite-bundle-visualizer)
- [ ] Preload critical fonts
- [ ] Compress images (WebP format)
- [ ] Add resource hints (preconnect, prefetch)
- [ ] Implement service worker for offline support

### SEO
- [ ] Meta tags for all pages
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags
- [ ] Structured data (JSON-LD) for Person schema
- [ ] Sitemap.xml generation
- [ ] robots.txt configuration
- [ ] Canonical URLs

### Accessibility (a11y)
- [ ] Keyboard navigation for all interactive elements
- [ ] Focus indicators visible
- [ ] ARIA labels for icons and buttons
- [ ] Skip to content link
- [ ] Screen reader testing
- [ ] Color contrast compliance (WCAG AA)
- [ ] Reduced motion support (`prefers-reduced-motion`)

### PWA Features
- [ ] Web App Manifest
- [ ] Service Worker with caching strategy
- [ ] Offline fallback page
- [ ] Install prompt
- [ ] App icons for all sizes

### i18n Completion
- [ ] Audit all hardcoded strings
- [ ] Add language switcher in menu bar
- [ ] Persist language preference in IndexedDB

---

## ⚪ Priority: POLISH

### Animations & Micro-interactions
- [ ] Window open/close animations
- [ ] Dock icon bounce on launch
- [ ] Smooth window dragging
- [ ] Button hover effects
- [ ] Loading states for async operations
- [ ] Skeleton loaders for content
- [ ] Page transitions

### Easter Eggs
- [ ] Konami code activation
- [ ] Hidden Terminal commands
- [ ] "About This Mac" style system info
- [ ] Matrix mode in Terminal
- [ ] Boot screen on first visit (optional)

### Analytics & Monitoring
- [ ] Privacy-friendly analytics (Plausible, Umami, or Vercel Analytics)
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring

### Testing
- [ ] Unit tests for utility functions
- [ ] Component tests with React Testing Library
- [ ] E2E tests with Playwright or Cypress
- [ ] Visual regression tests (optional)

---

## 📋 Technical Debt

- [ ] Audit and remove unused dependencies
- [ ] Consolidate styling approach (Emotion vs styled-components vs Sass)
- [ ] Ensure consistent TypeScript strict compliance
- [ ] Add JSDoc comments to complex functions
- [ ] Create Storybook for component documentation (optional)
- [ ] Review and optimize re-renders
- [ ] Implement error boundaries

---

## ✅ Completed

### 2026-01-21

#### CRITICAL - Core Functionality
- [x] Implement window management system (open, close, minimize, maximize, drag, resize) - Basic window management with open/close/minimize/maximize/focus/drag
- [x] All elements from bottom bar (dock) should open corresponding app windows

#### MEDIUM - Window System Features
- [x] Indicator dots below dock icons for open apps

#### STANDARD - Individual App Implementations

**Terminal App**
- [x] Command input with history (up/down arrows)
- [x] Built-in commands: `help`, `about`, `skills`, `projects`, `contact`, `clear`, `ls`, `cat`
- [x] ASCII art welcome message
- [x] Custom prompt styling

**Calculator App**
- [x] Basic operations (+, -, ×, ÷)
- [x] Keyboard support

**Mail App**
- [x] Contact form with validation
- [x] Form fields: name, email, subject, message
- [x] Integration with mailto
- [x] Success/error feedback

**Settings App**
- [x] Appearance: Light/Dark theme toggle
- [x] About: Version info, credits, tech stack

**Notes App**
- [x] Create, Read, Update, Delete notes (basic CRUD without IndexedDB persistence yet)
- [x] Search notes

#### ENHANCEMENT - i18n Completion
- [x] Complete English translations (added translations for Terminal, Notes, Mail, Settings apps)
- [x] Complete Spanish translations (added translations for Terminal, Notes, Mail, Settings apps)

---

## 📝 Notes

- Use Dexie.js for all IndexedDB operations
- Follow macOS Human Interface Guidelines for UI consistency
- Maintain bilingual support (EN/ES) for all new features
- Test on Chrome, Firefox, Safari, and mobile browsers
- Keep bundle size under 500KB initial load target
- Window management uses a context-based approach with WindowManagerProvider
- Apps are rendered through WindowRenderer component
- New apps should be added to both the apps/index.ts and the appComponents map in WindowRenderer
- Dock icons use emoji fallbacks when PNG icons are not available
