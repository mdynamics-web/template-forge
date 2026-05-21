# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Next.js dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Project Overview

This is the **Corexia** marketing website — a web design & SEO agency serving Alicante and Valencia, Spain. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, and `next-intl` for bilingual (ES/EN) content.

## i18n Architecture

- Two locales: `es` (default) and `en`, configured in `i18n/routing.ts`
- `localePrefix: 'never'` — no `/es/` or `/en/` prefix in URLs; locale is inferred via `next-intl` middleware
- Translated pathnames are defined in `i18n/routing.ts` (e.g., `/servicios/diseno-web` → `/services/web-design`)
- All pages live under `app/[locale]/` and receive `params: Promise<{ locale: string }>`
- Server components use `getTranslations()` / `getMessages()` from `next-intl/server`; client components use `useTranslations()`
- Translation files: `messages/es.json` and `messages/en.json`
- `lib/route-utils.ts` provides `normalizePathname()` and `findMatchingRoute()` — these depend on `routing.pathnames` and also import `Route` from the sibling project `../theme-weaver/types/routes.d.ts` (referenced via `tsconfig.json`)

## Adding a New Locale Route

1. Add the canonical key + translations to `pathnames` in `i18n/routing.ts`
2. Create the page file under `app/[locale]/`
3. Add translations to both `messages/es.json` and `messages/en.json`

## Service Pages

All five service pages (webDesign, localSeo, apps, onlineStores, consulting) share a single view component:

- **`components/service-page-view.tsx`** — renders the full page; service-specific charts/layouts are selected via `content.serviceKey`
- **`lib/service-pages.ts`** — `buildServicePageContent(serviceKey, t)` builds typed content from translation keys; also exports `serviceRouteMap` with ES/EN paths per service
- Each `app/[locale]/services/<name>/page.tsx` calls `buildServicePageContent` and passes the result to `<ServicePageView>`

## Location Landing Pages

Dedicated landing pages for Alicante and Valencia with their own self-contained component trees:

- `components/alicante-landing/` — `AlicanteWebDesignLanding.tsx` as entry point, split into `sections/`, `components/`, `hooks/`, `types/`
- `components/valencia-landing/` — same structure
- `components/location/` — generic reusable `LocationPage` component driven by `locationData` (from `components/location/data/locationData.ts`); used for city-level landing pages

## Key Shared Utilities

- `lib/contact.ts` — phone numbers (Alicante/Valencia), email, WhatsApp message generator
- `lib/fonts.ts` — Inter and Manrope font definitions (applied as CSS variables in the root layout)
- `lib/mdx.ts` — MDX blog post parsing (uses `gray-matter` + `next-mdx-remote`)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `components/ui/` — shadcn/ui primitives (Button, Card, Accordion, Input, etc.)

## Root Layout

`app/[locale]/layout.tsx` wraps every page with:
- `NextIntlClientProvider` + `ThemeProvider`
- `Navbar`, `Footer`, `WhatsAppContact`, `CookieConsent`, `GlobalLoaderOverlay`
- Inline `<script>` for dark-mode flash prevention (reads `localStorage["corexia-theme"]`)
- Organization JSON-LD schema injected via `<script type="application/ld+json">`
- Vercel Analytics + Speed Insights

## Cross-Project Dependency

`tsconfig.json` includes `../theme-weaver/types/routes.d.ts` and `lib/route-utils.ts` imports `Route` from there. This means changes to the type definitions in the sibling `theme-weaver` project can break compilation here.
