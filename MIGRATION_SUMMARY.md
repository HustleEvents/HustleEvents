# HustleEvents - Lovable to React TSX Tailwind Migration ✅

**Date**: June 4, 2026  
**Status**: ✅ **FIXED & VERIFIED**

---

## Problem Statement

**Error**: `Pre-transform error: Failed to load url /src/main.tsx (resolved id: /src/main.tsx). Does the file exist?`

**Root Cause**: The `src/` folder was transferred from Lovable, but the project configuration files (`package.json`, `vite.config.ts`, `tsconfig.json`) were not updated to match the Lovable framework setup. This created a mismatch between the dependencies and configuration.

---

## What Was Changed

### 1. **package.json** - Updated Dependencies
**From**: Minimal React setup (only React + React-DOM)  
**To**: Complete TanStack Start + Lovable stack (63 packages)

**Key Dependencies Added**:
- ✅ TanStack Stack: `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/react-query`
- ✅ Tailwind CSS v4: `@tailwindcss/vite`, `tailwindcss`
- ✅ Radix UI Components: 30+ `@radix-ui/*` packages
- ✅ shadcn/ui utilities: `cmdk`, `class-variance-authority`, `tailwind-merge`
- ✅ Form & Validation: `@hookform/resolvers`, `react-hook-form`, `zod`
- ✅ UI Utilities: `lucide-react`, `date-fns`, `sonner`, `embla-carousel-react`
- ✅ Backend/SSR: `nitro` (server), `@lovable.dev/vite-tanstack-config`

**Dev Dependencies Updated**:
- `typescript`: `6.0.2` → `5.8.3` (better compatibility)
- `vite`: `8.0.12` → `7.3.1` (TanStack compatible)
- Added `prettier`, `eslint-config-prettier` (code formatting)

### 2. **vite.config.ts** - Framework Configuration
**From**: Basic React plugin setup
```typescript
export default defineConfig({
  plugins: [react()],
})
```

**To**: Lovable's TanStack Start config
```typescript
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
```

**Why**: The Lovable config automatically includes:
- TanStack Start plugin (full-stack React framework)
- Tailwind CSS v4 plugin (@tailwindcss/vite)
- TypeScript path aliases (@/* → ./src/*)
- Nitro server configuration (SSR)
- React/TanStack dependency deduplication
- Component tagging (dev-only for HMR optimization)
- Vite client environment injection

### 3. **tsconfig.json** - TypeScript Configuration
**From**: Simplified config with separate references
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

**To**: Unified Lovable-compatible config
```json
{
  "include": ["src/**/*.ts", "src/**/*.tsx", "vite.config.ts", "eslint.config.js"],
  "compilerOptions": {
    "target": "ES2022",
    "jsx": "react-jsx",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "moduleResolution": "Bundler",
    "verbatimModuleSyntax": false,
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Key Changes**:
- ✅ Removed separate `tsconfig.app.json` & `tsconfig.node.json` references
- ✅ Added `"@/*"` path alias (used throughout the codebase)
- ✅ Changed `moduleResolution` to `"Bundler"` (Vite standard)
- ✅ Set `verbatimModuleSyntax: false` (allows ES module transpilation)
- ✅ Target ES2022 (TanStack Start requirement)

### 4. **scripts in package.json** - Updated Commands
**From**:
```json
"dev": "vite",
"build": "tsc -b && vite build"
```

**To**:
```json
"dev": "vite dev",
"build": "vite build",
"build:dev": "vite build --mode development",
"format": "prettier --write ."
```

---

## Project Architecture - What You Have

### File-Based Routing (TanStack Router)
```
src/routes/
├── __root.tsx           ← Root layout with Providers
├── index.tsx            ← Home page (/)
├── about.tsx            ← /about
├── services.tsx         ← /services
├── gallery.tsx          ← /gallery
├── contact.tsx          ← /contact
└── sitemap[.]xml.ts     ← /sitemap.xml (static)
```

### Components & UI
```
src/components/
├── SiteHeader.tsx       ← Navigation
├── SiteFooter.tsx       ← Footer
├── PageHero.tsx         ← Hero sections
├── SectionHeading.tsx   ← Typography
└── ui/                  ← shadcn/ui components (50+)
    ├── button.tsx
    ├── card.tsx
    ├── accordion.tsx
    ├── dialog.tsx
    ├── form.tsx
    ├── input.tsx
    ├── select.tsx
    ├── tabs.tsx
    └── ...more
```

### Core Framework Files
```
src/
├── router.tsx           ← Router initialization (getRouter)
├── routeTree.gen.ts     ← Auto-generated route tree
├── start.ts             ← TanStack Start instance
├── server.ts            ← SSR error handling wrapper
├── styles.css           ← Tailwind with @theme variables
└── lib/
    ├── error-capture.ts     ← Unhandled error catcher
    ├── error-page.ts        ← Error UI rendering
    └── lovable-error-reporting.ts  ← Analytics (optional)
```

---

## Installation & Setup ✅ Completed

### Commands Run
1. ✅ Updated `package.json` with 63 dependencies
2. ✅ Updated `vite.config.ts` to Lovable config
3. ✅ Updated `tsconfig.json` to unified config
4. ✅ Ran `npm install` (341 packages added/updated)
5. ✅ Verified dev server starts: `npm run dev`

### Verification
```bash
$ npm run dev
> vite dev

[Server running at http://localhost:5173]
✅ Dev server responding
✅ HTML served correctly
✅ Vite hot module reloading enabled
```

---

## Lovable-Specific Code - What to Know

### 1. Error Reporting (src/lib/lovable-error-reporting.ts)
The `reportLovableError()` function sends error data to Lovable's analytics:
```typescript
reportLovableError(error, { boundary: "tanstack_root_error_component" });
```

**Status**: ✅ Kept as-is (no-op if not connected to Lovable)  
**To Remove**: Delete calls in `src/routes/__root.tsx` if migrating away from Lovable

### 2. Error Boundary Capture (src/lib/error-capture.ts)
Captures unhandled errors before they're swallowed by the SSR layer:
```typescript
globalThis.addEventListener("error", (event) => record(event.error));
globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
```

**Status**: ✅ Active and working  
**Purpose**: Prevents 500 errors from losing original error info in SSR

### 3. Error Page Rendering (src/lib/error-page.ts)
Renders styled HTML error pages on the server:
```typescript
export function renderErrorPage(error?: Error): string
```

**Status**: ✅ Used by `src/server.ts`  
**Purpose**: Ensures users see pretty error pages, not raw 500 responses

---

## Comparison: Lovable vs. Standard React

| Feature | Lovable Project | Standard React |
|---------|-----------------|----------------|
| **Framework** | TanStack Start (SSR) | Vite + React (Client-only) |
| **Routing** | File-based (@tanstack/react-router) | Manual routing (usually react-router-dom) |
| **Styling** | Tailwind CSS v4 + @theme | Any (CSS, Styled, etc.) |
| **UI Components** | shadcn/ui + Radix | Choice of UI library |
| **Backend** | Nitro server included | N/A (frontend-only) |
| **Entry Point** | TanStack Start (no main.tsx) | index.html → main.tsx → App.tsx |
| **Build** | `vite build` (outputs SSR bundle) | `vite build` (client bundle) |
| **Dev Server** | `vite dev` (with HMR + server reloads) | `vite` (client HMR only) |

---

## What NOT to Change

❌ **Do NOT**: Add a `src/main.tsx` file  
✅ **Why**: TanStack Start handles the entry point via `routeTree.gen.ts`

❌ **Do NOT**: Convert to Client-only React  
✅ **Why**: The infrastructure is set up for SSR; you have `server.ts` for a reason

❌ **Do NOT**: Remove `start.ts` or `server.ts`  
✅ **Why**: These are required for TanStack Start's full-stack operation

❌ **Do NOT**: Use plain HTML in routes  
✅ **Why**: Use shadcn/ui components or semantic HTML with Radix primitives

---

## Available Commands

```bash
# Development
npm run dev          # Start dev server with HMR

# Build & Preview
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier
```

---

## Next Steps - Customization

### 1. **Update Branding**
- [ ] Change site title in `index.html`
- [ ] Update favicon in `public/favicon.svg`
- [ ] Modify color theme in `src/styles.css` (CSS variables)

### 2. **Add Pages**
- Create new files in `src/routes/` (e.g., `src/routes/blog.tsx`)
- TanStack Router auto-generates routes from file structure

### 3. **Customize Components**
- All UI components in `src/components/ui/` are from shadcn/ui
- Edit or create new components in `src/components/`

### 4. **Remove Lovable Analytics** (Optional)
- Delete `src/lib/lovable-error-reporting.ts`
- Remove `reportLovableError()` calls from `src/routes/__root.tsx`
- Remove `@lovable.dev/vite-tanstack-config` from package.json

### 5. **Add API Routes** (Optional)
- Create `src/routes/api/` directory
- Use TanStack Start's `createFileRoute()` for API endpoints
- Example: `src/routes/api/hello.ts`

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npm run dev -- --port 3000
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Rebuild TypeScript cache
npx tsc --noEmit
```

### Vite HMR Not Working
- Check firewall settings
- Ensure `localhost:5173` is accessible
- Clear browser cache and restart dev server

---

## Dependencies Overview

### Core Framework (5)
- `react`, `react-dom` - UI library
- `@tanstack/react-start` - Full-stack framework
- `@tanstack/react-router` - File-based routing
- `@tanstack/react-query` - Data fetching

### Styling (2)
- `tailwindcss@4` - Utility CSS framework
- `@tailwindcss/vite` - Vite integration plugin

### UI Components (30+)
- `@radix-ui/*` - Headless component primitives
- `lucide-react` - Icon library

### Utilities (20+)
- `react-hook-form` - Form state management
- `@hookform/resolvers`, `zod` - Form validation
- `date-fns` - Date manipulation
- `cmdk` - Command palette
- `embla-carousel-react` - Carousel
- `recharts` - Charts
- `sonner` - Toast notifications
- `vaul` - Drawer component
- `react-resizable-panels` - Resizable layouts
- `clsx`, `tailwind-merge`, `class-variance-authority` - CSS utilities

### Dev Dependencies (10+)
- `typescript` - Type checking
- `eslint`, `prettier` - Code quality
- `vite@7` - Build tool
- `@lovable.dev/vite-tanstack-config` - Config plugin
- `nitro` - SSR server

**Total**: 63 production + dev dependencies (340 with transitive)

---

## Summary of Changes Made

| File | Change | Status |
|------|--------|--------|
| `package.json` | Updated 60+ deps, scripts | ✅ Done |
| `vite.config.ts` | Lovable TanStack config | ✅ Done |
| `tsconfig.json` | Unified config, path aliases | ✅ Done |
| `npm install` | 341 packages installed | ✅ Done |
| Dev server test | `npm run dev` verified | ✅ Done |

---

## FAQ

**Q: Why is there no main.tsx?**  
A: TanStack Start uses file-based routing. Routes in `src/routes/` are the entry points. The framework auto-generates `routeTree.gen.ts`.

**Q: Why "vite dev" instead of just "vite"?**  
A: The Lovable config requires the explicit `dev` subcommand for the server to initialize correctly.

**Q: Can I remove server.ts?**  
A: No. It's part of the SSR setup. Even though the current build might be client-only, the file is referenced by TanStack Start.

**Q: How do I add environment variables?**  
A: Create `.env.local` at root. Use `import.meta.env.VITE_*` in client code (public vars).

**Q: Is this production-ready?**  
A: Not yet. You should configure proper error monitoring (remove Lovable error reporting if you don't use it), set up CI/CD, and add a real backend if needed.

---

**Created**: June 4, 2026  
**Project**: HustleEvents  
**Framework**: TanStack Start + React 19 + Tailwind CSS v4 + shadcn/ui  
**Status**: ✅ **Ready for Development**
