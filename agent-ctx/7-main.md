# Task 7: Replace All Fonts with Metrik Font

## Agent: Main
## Status: COMPLETED

## Summary
Replaced all 3 Google Fonts (Syne, DM Sans, JetBrains Mono for non-code) with Metrik Font across the entire Albos Technologies Pvt Ltd website.

## Changes Made

### 1. `src/app/layout.tsx`
- Removed `Syne` and `DM_Sans` imports from `next/font/google`
- Added `localFont` from `next/font/local`
- Created `metrik` local font with 10 woff2 entries (300/400/500/700/900 × normal/italic)
- Variable: `--font-metrik`
- Kept `JetBrains_Mono` for code elements
- Updated body className: `${metrik.variable} ${jetbrainsMono.variable}`

### 2. `src/app/globals.css`
- `--font-sans: var(--font-metrik)` (was `var(--font-dm-sans)`)
- `body { font-family: var(--font-metrik) }` (was `var(--font-dm-sans)`)
- `h1-h6 { font-family: var(--font-metrik) }` (was `var(--font-syne), var(--font-dm-sans)`)
- `.body-large { font-family: var(--font-metrik) }` (was `var(--font-dm-sans)`)

### 3. All Component Files (37 files)
- Bulk replaced `font-[family-name:var(--font-syne)]` → `font-[family-name:var(--font-metrik)]`
- Bulk replaced `font-[family-name:var(--font-dm-sans)]` → `font-[family-name:var(--font-metrik)]`
- Manual fixes for SVG fontFamily attributes and Tailwind `font-syne` class names in:
  - ContactSection.tsx (3 SVG fontFamily attrs)
  - not-found.tsx (2 Tailwind classes + 1 inline style)
  - Breadcrumbs.tsx (3 Tailwind classes + 1 inline style)

## Verification
- `bun run lint` — zero errors
- Zero remaining references to `--font-syne` or `--font-dm-sans`
- Dev server compiles cleanly
