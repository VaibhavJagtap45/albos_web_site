# Task 4-a/4-b — Feature Enhancement Agent

## Task Summary
Redesign CookieConsent as bottom banner, add scroll-down indicator to Hero, and improve page transition timing.

## Work Log

### Task 1: Redesign CookieConsent (less intrusive)
- **File**: `src/components/ui/CookieConsent.tsx`
- Changed from centered floating card (`max-w-lg`, `bottom-6 left-6 right-6`) to full-width bottom banner (`fixed bottom-0 left-0 right-0`)
- Dark glass background: `bg-[#0A0A0A]/95 backdrop-blur-xl`
- Subtle top border: `border-t border-white/[0.06]`
- Gradient accent line at top: `bg-gradient-to-r from-transparent via-[#FF5C00]/30 to-transparent` (h-[1px])
- Horizontal layout: icon + text on left, buttons on right (desktop)
- Mobile: stacks vertically (flex-col md:flex-row)
- Reduced delay from 3000ms to 1500ms
- Accept button: `bg-[#FF5C00] rounded-full` pill
- Decline button: subtle pill with `border border-white/[0.12] rounded-full`
- Removed X close button
- Animation: slide up from below viewport with spring physics (`type: 'spring', stiffness: 300, damping: 30`)
- All localStorage logic preserved exactly

### Task 2: Add scroll-down indicator to Hero
- **File**: `src/components/sections/HeroSection.tsx`
- Replaced existing SVG-based scroll indicator with new design
- Mouse outline: `w-6 h-10 rounded-full border-2 border-white/20` div
- Animated dot inside: `w-1.5 h-1.5 rounded-full bg-[#FF5C00]` with Framer Motion translateY animation (2s infinite, easeInOut, y: [0, 16, 0])
- Text below: "Scroll to explore" in `text-[9px] uppercase tracking-[0.2em] text-[#6B6B6B]`
- Scroll listener: fades out indicator when user scrolls past 200px (AnimatePresence with opacity exit animation)
- Added `useState` for `showScrollIndicator` and `useEffect` for scroll listener (passive)
- Removed `ChevronDown` import (no longer used)

### Task 3: Improve page transition timing
- **File**: `src/app/page.tsx`
- Changed `setTimeout(() => setIsPageLoading(false), 500)` to `setTimeout(() => setIsPageLoading(false), 300)`
- Makes page transitions feel snappier (200ms faster)

## Verification
- `bun run lint` — zero errors
- Dev server returns HTTP 200

## Stage Summary
- CookieConsent redesigned as sleek full-width bottom banner (less intrusive, appears sooner)
- Hero scroll indicator redesigned with mouse outline + animated accent dot + scroll fade-out
- Page transition timeout reduced from 500ms to 300ms for snappier feel
- All changes lint-free and server healthy
