# Task 2-b: Fix Text Visibility in CaseStudiesSection

## Summary
Fixed text visibility issues in CaseStudiesSection.tsx where light text was needed on the dark `bg-albos-dark` (#18181B) background.

## Changes Made

### File: `src/components/sections/CaseStudiesSection.tsx`

1. **Line 202**: `text-albos-muted` → `text-albos-light/70`
   - The description paragraph used `text-albos-muted` (#A1A1AA) which is a disconnected muted gray. Changed to `text-albos-light/70` (rgba(250,250,250,0.7)) for better contrast and cohesive color family with the heading text.

2. **Line 120**: `text-albos-light/50` → `text-albos-light/60`
   - The result badge text was at 50% opacity which is hard to read. Bumped to 60% for better readability of the metric text.

## Verification
- All 6 audit items checked and verified
- `bg-albos-dark` (#18181B) confirmed working as dark background via CSS custom property
- Zero lint errors
- Dev server compiling cleanly (GET / 200)

## Color Audit Results
| Element | Color Class | Effective Color | Visible? |
|---------|------------|-----------------|----------|
| Section heading | text-albos-light | #FAFAFA | ✅ |
| Section description | text-albos-light/70 | rgba(250,250,250,0.7) | ✅ (fixed) |
| Result badge | text-albos-light/60 | rgba(250,250,250,0.6) | ✅ (fixed) |
| Hover description | text-albos-light/80 | rgba(250,250,250,0.8) | ✅ |
| Tech tags | text-albos-light/60 | rgba(250,250,250,0.6) | ✅ |
| CTA link | text-albos-light | #FAFAFA | ✅ |
| Category pill | text-albos-dark | #18181B on orange | ✅ |
| Card titles | text-white | #FFFFFF on dark gradient | ✅ |
