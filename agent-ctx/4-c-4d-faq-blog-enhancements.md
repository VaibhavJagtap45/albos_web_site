# Task ID: 4-c/4-d — FAQ Accordion & Blog Category Filtering

## Work Log

### Task 1: FAQ Accordion on Contact Page
- **File**: `src/components/sections/ContactSection.tsx`
- Replaced `FAQ_ITEMS` with the 6 new FAQ items specified:
  1. "What is your typical project timeline?" — 8-20 weeks range
  2. "How do you handle communication during a project?" — Daily standups, sprint reviews
  3. "What technologies do you specialize in?" — React, Next.js, Node.js, Python, Java, .NET, AWS, Azure, GCP
  4. "Do you offer post-launch support?" — 24/7 support, 99.9% uptime SLA
  5. "How do you ensure code quality?" — Code review, automated testing, CI/CD
  6. "Can you work with our existing team?" — Staff augmentation model
- Created new `FAQItem` sub-component with:
  - Animated expand/collapse via AnimatePresence with `initial={false}` to skip initial animation
  - Smooth height animation using `height: 0` → `height: 'auto'` (not CSS max-height hack)
  - ChevronDown icon that rotates 180° via `motion.div` with `animate={{ rotate: isOpen ? 180 : 0 }}`
  - Active item accent left border: `border-l-2 border-l-[#FF5C00]`
  - Divider lines between items via `border-b border-white/[0.06]`
- Updated `FAQAccordion` to use the new `FAQItem` sub-component
- Changed FAQ section background from light (`bg-[#F5F4F0]`) to dark (`bg-[#0A0A0A]`)
- Updated SectionLabel from `dark` to default (light mode) for dark background
- Changed heading text color from `text-[#0A0A0A]` to `text-[#F5F4F0]`
- Updated "Our HQ" section label and heading for dark bg compatibility
- Changed map placeholder border from `border-black/[0.08]` to `border-white/[0.06]`

### Task 2: Blog Category Filtering
- **File**: `src/components/sections/BlogSection.tsx`
- Updated `CATEGORIES` from `['All', 'Engineering', 'AI/ML', 'Design', 'Business', 'Case Studies']` to `['All', 'Engineering', 'AI & ML', 'Cloud', 'Product', 'Design']`
- Updated `TAG_CATEGORY_MAP` to match new categories (AI→'AI & ML', Kubernetes→'Cloud', Cloud→'Cloud', Mobile→'Product', DevOps→'Cloud', Python→'AI & ML' + Engineering)
- Updated inactive category pill styling: `border border-[#0A0A0A]/[0.08] text-[#6B6B6B] hover:border-[#FF5C00]/30 hover:text-[#FF5C00] hover:bg-[#FF5C00]/[0.04]`
- Active category keeps: `bg-[#FF5C00] text-[#0A0A0A] rounded-full`
- Added "Showing X articles" counter that updates with filter selection
- Added AnimatePresence with layout animation: `initial={{ opacity: 0, scale: 0.9 }}`, `animate={{ opacity: 1, scale: 1 }}`, `exit={{ opacity: 0, scale: 0.9 }}` with `layout` prop for smooth reflow
- **File**: `src/lib/constants.ts`
- Updated `BLOG_POSTS` categories:
  - id 2: "AI/ML" → "AI & ML"
  - id 4: "Business" → "Cloud"
  - id 5: "Engineering" → "Product"
  - id 6: "Case Studies" → "Engineering"

### Verification
- `bun run lint` — zero errors
- Dev server returns HTTP 200

## Stage Summary
- Contact page now has dark-themed FAQ section with animated accordion using FAQItem sub-component
- Blog section has updated category filter pills with 6 categories, article counter, and smooth layout animation
- All BLOG_POSTS categories updated to match new filter categories
- Lint: zero errors, Server: HTTP 200
