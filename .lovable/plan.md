

## Comprehensive UI Upgrade Plan

This is a major visual and UX overhaul across all pages and shared components to elevate the site to a premium, modern standard while preserving the existing teal/aqua brand identity and all admin EditableText functionality.

---

### 1. Global Styles & Design System Refinements

**File: `src/index.css`**
- Add smooth scroll behavior to `html`
- Add subtle text rendering improvements (`-webkit-font-smoothing`, `text-rendering`)
- Add new utility classes: `.text-gradient` (teal gradient text), `.section-padding` (consistent vertical rhythm)
- Improve `glass-card` with stronger blur and subtle shadow

**File: `tailwind.config.ts`**
- Add custom `boxShadow` tokens (soft, medium, strong) for consistent depth
- Add a `fade-in-up` and `blur-in` keyframe animation for richer entrance effects

---

### 2. Navbar Upgrade

**File: `src/components/Navbar.tsx`**
- Increase logo size slightly, add smooth opacity transition on scroll
- Add a subtle glow/shadow to the CTA button in the nav
- Improve mobile menu: add background blur overlay behind the sheet, smoother slide-in from right instead of accordion-style height animation
- Add active link indicator with a subtle pill background instead of just underline

---

### 3. Homepage (Index) Overhaul

**File: `src/pages/Index.tsx`**
- **Hero**: Add a subtle animated gradient mesh background behind the hero image for more visual depth. Increase heading size on desktop. Add a badge/pill above the subtitle (e.g., "Servicio Certificado").
- **Problems section**: Convert from plain circles to elevated cards with icon, title, description, and a subtle gradient border on hover. Better spacing.
- **Solutions section**: Add numbered steps (01, 02, 03) to each card for visual hierarchy. Slightly larger cards with more padding.
- **Why Choose Us**: Replace plain counters with cards that have icons and background accents. Add a decorative line connecting them.
- **Use Cases**: Add a subtle background pattern. Make cards taller with better icon treatment (gradient background circles).

---

### 4. Nosotros Page

**File: `src/pages/Nosotros.tsx`**
- **Hero**: Add animated particles or floating shapes for visual interest
- **Trust headline**: Make the number/stat more prominent with a gradient text effect
- **About section**: Replace the plain logo with a more compelling layout - add a decorative frame/border around the image area
- **Solutions cards**: Add subtle number indicators and improve the hover state with a left-border accent animation

---

### 5. Empresas Page

**File: `src/pages/Empresas.tsx`**
- **Hero**: Replace the floating Factory icon box with a more compelling visual - use stacked floating cards or a dashboard-like mockup shape
- **Problems**: Improve with connecting lines between the 3 items to show progression
- **Trust section cards**: Add gradient icon backgrounds and stronger shadow on hover

---

### 6. Condominios Page

**File: `src/pages/Condominios.tsx`**
- **Hero stat bar**: Improve with animated number counting and better visual separation (vertical dividers with gradient)
- **Problems/Solutions**: Consistent improvements matching the Empresas page upgrades

---

### 7. Contacto Page

**File: `src/pages/Contacto.tsx`**
- **Trust badges**: Add subtle animated pulse on the icons
- **Form card**: Add floating label effect, better focus states with primary color glow, slightly rounded inputs
- **Contact info cards**: Add gradient icon backgrounds matching the brand
- **Success state**: Add confetti-like animation or a more celebratory visual

---

### 8. Shared Components

**File: `src/components/CTABanner.tsx`**
- Add animated gradient background instead of flat `bg-secondary`
- Make buttons more prominent: one filled primary, one outline with glow effect
- Add a decorative wave/mesh pattern overlay

**File: `src/components/Footer.tsx`**
- Add a gradient top border accent line
- Improve link hover states with underline slide animation
- Better visual hierarchy with section dividers

**File: `src/components/Testimonials.tsx`**
- Add star ratings visual
- Add avatar placeholder circles with initials
- Improve card design with gradient quote marks

**File: `src/components/BackToTop.tsx`**
- Add a progress ring around the button showing scroll position

**File: `src/pages/NotFound.tsx`**
- Complete redesign with brand styling, animated 404 number, water-themed illustration, and proper navigation back

---

### Technical Details

- All changes preserve existing `EditableText` wrappers and `contentKey` props
- All changes use existing framer-motion patterns and extend them
- No new dependencies needed - everything uses Tailwind, framer-motion, and lucide-react already in the project
- Mobile responsiveness maintained and improved throughout
- All animation variants follow existing easing curves `[0.22, 1, 0.36, 1]`
- Changes are purely visual/CSS/animation - no database or backend changes needed

