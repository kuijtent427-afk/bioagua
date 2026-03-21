

## Site-Wide UI Modernization Plan

The **Index**, **Empresas**, and **Contacto** pages already have parallax heroes, glassmorphism cards, stagger animations, and hover effects. The **Condominios** and **Nosotros** pages are noticeably flat by comparison. The **Navbar**, **Footer**, and **CTABanner** shared components also lack interactivity.

---

### 1. Condominios Page (`src/pages/Condominios.tsx`)

Currently the weakest page -- no parallax, no hover effects, static cards, non-functional carousel buttons.

- **Hero**: Add parallax scroll (`useScroll`/`useTransform`), floating background shapes, staggered text/button animations (matching Empresas hero pattern)
- **Problems section**: Replace basic `fadeUp` with `staggerContainer` + `scaleIn`; add `whileHover={{ y: -8 }}` lift on cards and `whileHover={{ scale: 1.1 }}` on icon circles
- **Solutions section**: Convert to teal gradient band with wave dividers (matching Index/Empresas); wrap items in glassmorphism cards with hover slide effect; replace static Droplets icon with actual brand logo (white filter)
- **Cases of Success**: Remove non-functional chevron carousel buttons; add `slideInLeft`/`slideInRight` entrance animations and hover lift + glassmorphism card styling (matching Index cases section)
- **CTA**: Wrap in motion fade-in

### 2. Nosotros Page (`src/pages/Nosotros.tsx`)

Currently very plain -- minimal animations, no hover effects, flat stat counters, static solution lists.

- **Hero**: Add floating shapes, parallax scroll, staggered subtitle animation below heading
- **Trust headline**: Add `scaleIn` animation with a subtle counter-like effect on "50 empresas"
- **About section**: Add `whileHover={{ scale: 1.05 }}` on logo; wrap stats in animated counters matching Index `CountUp` pattern
- **Solutions sections (Empresas + Condominios)**: Convert to alternating gradient bands -- one teal gradient with glassmorphism cards, the other light-bg with bordered hover cards; add `whileHover` slide/lift on each solution item; add `whileHover` scale on images
- **CTA**: Wrap in motion fade-in

### 3. Navbar (`src/components/Navbar.tsx`)

- Add framer-motion `AnimatePresence` + slide-down animation on mobile menu open/close (instead of instant show/hide)
- Add underline animation on desktop nav links using `motion.div` layoutId for active indicator (smooth sliding underline between links)

### 4. Footer (`src/components/Footer.tsx`)

- Add staggered fade-in animation on scroll into view for each column
- Add `whileHover={{ x: 4 }}` on contact links and `hover:text-accent` underline animation on navigation links

### 5. CTABanner (`src/components/CTABanner.tsx`)

- Add floating background shape (subtle animated circle)
- Add `whileHover={{ scale: 1.05 }}` on buttons
- Add staggered entrance for title, subtitle, and buttons

---

### Technical Notes

- Reuse the same animation variants across all pages (`staggerContainer`, `scaleIn`, `fadeUp`, `slideInLeft`, `slideInRight`) for consistency
- Import `useScroll`, `useTransform`, `useRef` from framer-motion where needed
- Import `AnimatePresence` for Navbar mobile menu
- All changes are UI-only -- no new dependencies required (framer-motion already installed)
- 5 files modified: `Condominios.tsx`, `Nosotros.tsx`, `Navbar.tsx`, `Footer.tsx`, `CTABanner.tsx`

