# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server.
- `npm run build` — runs `npm install --legacy-peer-deps --include=dev && next build`. The `--legacy-peer-deps` flag is required because of React 19 peer dependency conflicts (notably `cmdk`, which is overridden in `package.json`).
- `npm run start` — serve the production build.
- `npm run lint` — run `next lint`. Note: ESLint is **ignored during `next build`** (`eslint.ignoreDuringBuilds: true` in both `next.config.js` and `next.config.ts`), so lint must be run explicitly.
- No test runner is configured. Do not invent test commands.

## Architecture

Next.js 15 App Router marketing site for "Tavestack" (package name `propease`). React 19, TypeScript strict, Tailwind + shadcn/ui. This is a static marketing site — no auth, no API routes, no backend services.

### Two `next.config` files exist
`next.config.js` (CJS) and `next.config.ts` (TS) both exist. **Next.js prefers `.ts` over `.js`**, so `next.config.ts` is the active config — it's minimal (only `eslint.ignoreDuringBuilds`). The richer `next.config.js` (webpack alias for `@`, `transpilePackages: ['cmdk']`, `experimental.typedRoutes`, `images.domains`) is effectively dead code unless `.ts` is removed. When changing config, edit `next.config.ts` or consolidate the two — don't assume `next.config.js` is being read.

### Route structure
- `src/app/layout.tsx` — root layout. Wraps everything in `ThemeProvider` (next-themes, class-based dark mode, system default).
- `src/app/(marketing)/` — route group for the public marketing site (about, blog, contact, demo, features, integrations, pricing, resources, solutions). Its `layout.tsx` is `"use client"` and renders `<Aurora />` (OGL-based animated background) behind a theme-aware backdrop, plus shared `<Navbar />` / `<Footer />`.
- `src/app/docs/` — internal documentation pages.

### Path alias and imports
`@/*` resolves to `src/*` via `tsconfig.json`. shadcn/ui is configured (`components.json`) with `components → @/components`, `ui → @/components/ui`, `utils/lib → @/lib`, `hooks → @/hooks`. The `cn` helper lives at `@/lib` (re-exported from `src/lib/index.ts`).

### Components layout
- `src/components/ui/` — 61 shadcn/ui primitives plus custom visual components (chroma-grid, magic-bento, flickering-grid, marquee, gradient-text, etc.). Treat these as the design-system layer.
- `src/components/global/` — shared layout primitives (`wrapper.tsx`, `animation-container.tsx`, `icons.tsx`, `images.tsx`).
- `src/components/docs/` — documentation page chrome (`docs-layout.tsx`, `doc-section.tsx`, `code-block.tsx`).
- Top-level `src/components/*.tsx` — page-section components (hero, features, pricing, testimonials, faq, cta, footer, navbar, aurora, etc.) consumed by the marketing pages.
- `src/constants/` — static content for sections (faq, features, integrations, perks, pricing, reviews, testimonials, nav-links, metrics, how-it-works) and `fonts.ts`. Section components import their data from here rather than hardcoding it.

### Server-side polyfill
`src/instrumentation.ts` polyfills `globalThis.localStorage` for **Node.js v25+**, where the built-in `localStorage` exists but is missing standard Web Storage API methods. Next.js calls the exported `register()` to ensure the file is loaded before the server starts. Don't remove this without verifying the Node version in use.

### Environment variables
See `.env.example`. Only `NEXT_PUBLIC_APP_NAME` is used. Optionally set `NEXT_PUBLIC_SITE_URL` to override the canonical/sitemap base (defaults to `https://tavestack.com` in `src/utils/metadata.ts`).

### Dependency notes
- React 19 + Next 15.3.8. Many Radix/shadcn packages predate React 19; `cmdk` is pinned via `overrides` to use React 19. If you add a UI package, expect peer-dep warnings — install with `--legacy-peer-deps` to match the build command.
- Heavy animation/visual stack: `framer-motion`, `gsap`, `ogl` (WebGL aurora), `react-parallax-tilt`, `embla-carousel-react`, `recharts`. Several of these are client-only — pages using them are marked `"use client"`.
