# Technical Specification Document

## Project Overview

**Project Name:** GlobalExpress - Hyderabad to USA Courier Service Website  
**Tech Stack:** React + TypeScript + Vite + Tailwind CSS + shadcn/ui  
**Animation Library:** Framer Motion  
**Build Output:** `/mnt/okcomputer/output/app/dist/`

---

## Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Installation |
|-----------|---------|--------------|
| Button | CTAs, form submissions | `npx shadcn add button` |
| Card | Service cards, pricing cards, testimonials | `npx shadcn add card` |
| Input | Form fields | `npx shadcn add input` |
| Textarea | Contact form message | `npx shadcn add textarea` |
| Select | Service type dropdown | `npx shadcn add select` |
| Accordion | FAQ section | `npx shadcn add accordion` |
| Badge | Featured pricing label | `npx shadcn add badge` |
| Sheet | Mobile navigation | `npx shadcn add sheet` |
| Separator | Visual dividers | `npx shadcn add separator` |

### Custom Components

| Component | Purpose | Location |
|-----------|---------|----------|
| Navbar | Fixed navigation with scroll effects | `src/components/Navbar.tsx` |
| HeroSection | Hero with animations | `src/sections/HeroSection.tsx` |
| ServicesSection | Service cards grid | `src/sections/ServicesSection.tsx` |
| HowItWorksSection | Process steps | `src/sections/HowItWorksSection.tsx` |
| PricingSection | Pricing cards with toggle | `src/sections/PricingSection.tsx` |
| TrackingSection | Tracking form | `src/sections/TrackingSection.tsx` |
| TestimonialsSection | Customer reviews | `src/sections/TestimonialsSection.tsx` |
| StatsSection | Statistics counter | `src/sections/StatsSection.tsx` |
| FAQSection | Accordion FAQ | `src/sections/FAQSection.tsx` |
| ContactSection | Contact form + info | `src/sections/ContactSection.tsx` |
| Footer | Site footer | `src/sections/Footer.tsx` |
| AnimatedCounter | Number count-up animation | `src/components/AnimatedCounter.tsx` |
| ScrollReveal | Scroll-triggered animations | `src/components/ScrollReveal.tsx` |
| ServiceCard | Individual service card | `src/components/ServiceCard.tsx` |
| PricingCard | Individual pricing card | `src/components/PricingCard.tsx` |
| TestimonialCard | Individual testimonial | `src/components/TestimonialCard.tsx` |
| ProcessStep | How it works step | `src/components/ProcessStep.tsx` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Global Animations** |
| Fade In Up (scroll) | Framer Motion | `motion.div` with `whileInView`, `initial={{ opacity: 0, y: 30 }}`, `animate={{ opacity: 1, y: 0 }}` | Medium |
| Fade In Scale | Framer Motion | `motion.div` with scale transform | Low |
| Slide In Left/Right | Framer Motion | `motion.div` with x transform | Low |
| Stagger Children | Framer Motion | `staggerChildren` in parent variants | Medium |
| **Navbar** |
| Scroll shadow effect | React state + CSS | `useScroll` hook, toggle class on scroll | Low |
| Mobile menu slide | Framer Motion | `AnimatePresence` + `motion.div` slide | Medium |
| Link underline | CSS | `::after` pseudo-element width animation | Low |
| **Hero** |
| Load animations | Framer Motion | Sequential `motion.div` with delays | Medium |
| Floating effect | Framer Motion | `animate={{ y: [0, -10, 0] }}` infinite | Low |
| Button hover | CSS/Framer | `whileHover={{ y: -2 }}` | Low |
| **Services** |
| Card stagger reveal | Framer Motion | `whileInView` with staggered children | Medium |
| Card hover lift | Framer Motion | `whileHover={{ y: -8 }}` | Low |
| Icon scale | Framer Motion | `whileHover={{ scale: 1.1 }}` | Low |
| **How It Works** |
| Step sequence | Framer Motion | `whileInView` with stagger delays | Medium |
| Line draw | Framer Motion | SVG path animation with `pathLength` | High |
| Step hover | CSS | Background color transition | Low |
| **Pricing** |
| Card reveal | Framer Motion | Staggered fade in up | Medium |
| Toggle slide | Framer Motion | `layout` prop for smooth position change | Medium |
| Price fade | Framer Motion | `AnimatePresence` for number swap | Medium |
| **Tracking** |
| Form slide in | Framer Motion | `whileInView` from left/right | Low |
| Input focus | CSS | Border color transition | Low |
| Progress animation | Framer Motion | Sequential fill animations | High |
| **Testimonials** |
| Card stagger | Framer Motion | `whileInView` with stagger | Medium |
| Carousel | Framer Motion | Drag gestures + snap | High |
| **Stats** |
| Count-up numbers | Custom hook | `useCountUp` with Intersection Observer | Medium |
| Fade in | Framer Motion | `whileInView` | Low |
| **FAQ** |
| Accordion expand | Framer Motion | `AnimatePresence` + height animation | Medium |
| Icon rotation | Framer Motion | `rotate: 45` on open | Low |
| **Contact** |
| Form slide in | Framer Motion | `whileInView` from sides | Low |
| Input focus | CSS | Border + shadow transition | Low |
| Submit loading | Framer Motion | Spinner rotation | Low |
| Success message | Framer Motion | Fade in replacement | Low |
| **Footer** |
| Link hover | CSS | Color + underline | Low |
| Social icon hover | Framer Motion | `whileHover={{ scale: 1.1 }}` | Low |

---

## Animation Library Choices

### Primary: Framer Motion
**Rationale:**
- Native React integration
- Declarative API
- Excellent performance
- Built-in gesture support
- AnimatePresence for mount/unmount
- whileInView for scroll triggers

### Secondary: CSS Transitions/Animations
**Use for:**
- Simple hover effects
- Color transitions
- Underline animations
- Focus states

### Custom Hooks Needed

| Hook | Purpose |
|------|---------|
| `useScrollPosition` | Track scroll for navbar |
| `useCountUp` | Animated number counter |
| `useInView` | Intersection observer wrapper |

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-illustration.jpg
│   │   ├── tracking-illustration.jpg
│   │   ├── avatar-rahul.jpg
│   │   ├── avatar-priya.jpg
│   │   └── avatar-amit.jpg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── select.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── sheet.tsx
│   │   │   └── separator.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── PricingCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── ProcessStep.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── TrackingSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useCountUp.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Dependencies

### Core Dependencies (Auto-installed)
- react
- react-dom
- typescript
- vite
- tailwindcss
- @radix-ui/* (via shadcn)
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Additional Dependencies to Install
```bash
npm install framer-motion
```

---

## Color Configuration (Tailwind)

```javascript
// tailwind.config.js extend colors
colors: {
  primary: {
    dark: '#1a2b3c',
    DEFAULT: '#2d4a6f',
    light: '#3d6a9f',
  },
  neutral: {
    white: '#ffffff',
    light: '#f5f7fa',
    medium: '#6b7280',
    dark: '#374151',
  },
  accent: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  }
}
```

---

## Font Configuration

```css
/* Import Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* tailwind.config.js */
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

---

## Build Commands

```bash
# Initialize project
bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "GlobalExpress Courier"

# Navigate to project
cd /mnt/okcomputer/output/app

# Install shadcn components
npx shadcn add button card input textarea select accordion badge sheet separator

# Install animation library
npm install framer-motion

# Development server
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

---

## Performance Considerations

1. **Image Optimization**
   - Use WebP format where possible
   - Lazy load images below fold
   - Proper width/height attributes

2. **Animation Performance**
   - Use `transform` and `opacity` only
   - Apply `will-change` sparingly
   - Respect `prefers-reduced-motion`

3. **Code Splitting**
   - Vite handles automatic chunking
   - Lazy load heavy sections if needed

4. **Bundle Size**
   - Tree-shake unused components
   - Import Lucide icons individually

---

## Accessibility Requirements

1. **Keyboard Navigation**
   - All interactive elements focusable
   - Visible focus indicators
   - Logical tab order

2. **Screen Readers**
   - Semantic HTML
   - ARIA labels where needed
   - Alt text for images

3. **Color Contrast**
   - WCAG 2.1 AA compliance
   - Minimum 4.5:1 for normal text
   - Minimum 3:1 for large text

4. **Motion**
   - Respect `prefers-reduced-motion`
   - Provide static alternatives
