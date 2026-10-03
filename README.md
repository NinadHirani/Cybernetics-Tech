# Cybernetics Tech

Company website for Cybernetics Tech, an IT services studio in Rajkot, Gujarat: web, app and software development, SEO, branding and design.

Live site: https://cybernetics-tech.vercel.app

## Pages

- `/` home: hero, services, products and portfolio sections
- `/who-we-are`, `/our-work`
- `/services` and `/services/[slug]` (web-development, app-development, software-development, graphics-design, seo-service)
- `/contact-us`: the form opens a pre-filled email to cyberneticstech001@gmail.com, so no backend or paid service is needed
- `/privacy-policy`, `/refund-policy`, `/cancellation-policy`
- `sitemap.xml` and `robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`

## Tech

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, shadcn/ui (Radix), Framer Motion. Deployed on Vercel.

## Run locally

```bash
bun install      # or npm install
bun dev          # http://localhost:3000
bun run build
```

The site code lives on the `master` branch, which is the one Vercel deploys.

Built by [Ninad Hirani](https://github.com/NinadHirani).
