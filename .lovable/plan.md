

## Empresas Page UI Modernization

The Empresas page currently feels flat compared to the Index and Contacto pages. It lacks parallax effects, hover interactions, gradient sections, glassmorphism cards, and animated counters that make those pages feel premium. Here is the plan to bring it up to the same level.

### Changes to `src/pages/Empresas.tsx`

**1. Hero Section -- Add depth and interactivity**
- Add floating animated background shapes (like Index hero)
- Add parallax scroll effect using `useScroll` + `useTransform`
- Stagger animate the heading, subtitle, and buttons separately instead of one block
- Add `hover:scale-105` transitions on buttons
- Add the brand logo image as a subtle background element (like Index)

**2. Problems Section -- Richer interactions**
- Use `staggerContainer` + `scaleIn` variants (like Index) instead of basic `fadeUp`
- Add `whileHover={{ y: -8 }}` lift effect on each problem card
- Add `whileHover={{ scale: 1.1, borderColor }}` on the icon circles
- Add a subtle subheading below the main heading

**3. Solutions Section -- Gradient band with glassmorphism**
- Convert from plain white background to a teal gradient band (matching the Index "RESOLVEMOS TODO POR TI" section)
- Add top/bottom SVG wave dividers for visual flow
- Replace the static Droplets icon + BIOAGUA text with the actual brand logo
- Wrap solution items in glassmorphism cards (`bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20`)
- Add hover animations on each solution card

**4. Trust Section -- Animated cards with hover effects**
- Add `whileHover={{ y: -6, scale: 1.03 }}` on trust cards
- Add icon spin/wiggle animation on hover (`whileHover={{ rotate: [0, -10, 10, 0] }}`)
- Use glassmorphism card styling with `hover:border-primary/30 hover:shadow-lg` transitions
- Add a subtitle paragraph below the heading

**5. CTA Banner -- Add motion**
- Wrap the CTABanner in a motion section with fade-in animation

### Technical Notes
- Import `useScroll`, `useTransform`, `useRef` from framer-motion/react
- Import logo from `@/assets/logo.png`
- Reuse animation variants from Index (staggerContainer, scaleIn, slideInLeft, slideInRight)
- All changes contained to `src/pages/Empresas.tsx` only

