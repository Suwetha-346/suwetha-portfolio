# Suwetha S T — Portfolio

A dark-first, editorial personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, GSAP, Lenis, and Lucide React.

## Getting started

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        — fonts, global metadata/SEO, providers
  page.tsx           — assembles all sections
  globals.css         — design tokens, grain overlay, base styles
  sitemap.ts          — sitemap route
components/
  Navbar.tsx           — sticky nav, active-section indicator, mobile menu
  Hero.tsx             — hero section + entrance animation
  NeuralVisualization.tsx — signature canvas data-node visualization
  About.tsx
  Skills.tsx
  Projects.tsx / ProjectCard.tsx
  Experience.tsx       — timeline
  Education.tsx        — timeline
  Certifications.tsx
  Contact.tsx           — mailto-based contact form
  Footer.tsx
  SmoothScrollProvider.tsx — Lenis + GSAP ScrollTrigger wiring
lib/
  data.ts              — all site content in one place (edit here)
  useScrollReveal.ts    — reusable scroll-reveal animation hook
public/
  images/og-placeholder.svg — placeholder Open Graph image
  resume-placeholder.pdf     — placeholder resume file
  robots.txt
```

## Things to replace before deploying

All are clearly marked in code with comments:

- `public/images/og-placeholder.svg` → real 1200×630 Open Graph image
- Resume: `public/Suwetha_S_T_Resume.pdf` is already the real resume — the "Download Resume" link in `components/Hero.tsx` points to it and triggers a download of that exact file. Replace this file (same filename) whenever the resume is updated.
- Portrait placeholder in `components/About.tsx` → real portrait (swap the placeholder block for a Next.js `<Image>`)
- Project image placeholders in `components/ProjectCard.tsx` → real screenshots (swap for `<Image>`)
- Live Demo / GitHub links for each project in `lib/data.ts` (`liveDemo`, `github` fields — currently `null`, rendering as disabled placeholders)
- Certification completion dates in `lib/data.ts` (`CERTIFICATIONS`)
- `SITE_URL` placeholder domain in `app/layout.tsx` and `app/sitemap.ts` (canonical URL / OG URL) once you have a real domain
- Portfolio URL link (currently omitted from the footer since none was provided — add it in `components/Footer.tsx` / `lib/data.ts` if you get one)

## Editing content

Nearly all text content (skills, projects, experience, education, certifications, socials) lives in `lib/data.ts`. Update it there and it propagates everywhere.

## Notes

- Smooth scrolling (Lenis) and all GSAP animations automatically disable when the visitor has `prefers-reduced-motion` enabled.
- The contact form has no backend — submitting opens the visitor's email client via a `mailto:` link pre-filled with their message, addressed to `suwetha361@gmail.com`.
- Fonts (Playfair Display, Inter) are loaded via `next/font/google`, which self-hosts them at build time for performance and avoids layout shift.
