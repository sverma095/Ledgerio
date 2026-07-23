# Ledgerio Marketing Site

A standalone Next.js 16 marketing site for **ledgerio.in**, completely decoupled from the
existing `bizkhata` application repo (which continues running unchanged on `bizkhata.app`).

## Stack

- Next.js 16 (App Router, TypeScript strict mode)
- Tailwind CSS 3
- Framer Motion
- Lucide icons

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # run the production build locally
```

## Environment variables

Create a `.env.local` (not committed) with:

```
RESEND_API_KEY=your_resend_api_key_here
```

This powers the `/contact` page's form (`src/app/api/contact/route.ts`), which emails
submissions to `support@ledgerio.in` via Resend — the same provider your `bizkhata` app
already uses. Without this variable, the form will return a clear error instead of silently
pretending to succeed.

## Before going to production

1. **Replace the placeholder product visual.** `src/components/product-screenshot.tsx` is a
   stylized CSS mockup, not a real screenshot (none were available to embed). Swap it for
   actual app screenshots via `next/image` before shipping.
2. **Have the Privacy Policy and Terms pages reviewed by a lawyer.** They're a reasonable
   structural starting point (and flagged as such on the pages themselves), not legal advice,
   especially regarding the Indian DPDP Act, 2023.
3. **Update `src/lib/site-config.ts`** — social links, support email, and Twitter handle are
   placeholders.
4. **Set the real domain in Vercel** — point `ledgerio.in` at this project's deployment;
   `bizkhata.app` keeps pointing at the existing separate repo. When you're ready to move the
   app to `app.ledgerio.in`, that's a domain reassignment on the *existing* bizkhata Vercel
   project — no code changes needed here.

## Logo assets

Generated from the logo you provided, all in `public/`:
- `favicon.ico` — multi-size (16/32/48/64px), background made transparent
- `logo-icon.png` — the icon mark alone, transparent background (used in Navbar/Footer)
- `logo-full.png` — full lockup with tagline, transparent background
- `og-image.png` — 1200×630 social share card built from the real logo
- `icon-square.png` — 512×512 square version (for apple-touch-icon, PWA manifest, etc.)

Note: Navbar/Footer use the icon mark plus real, theme-adaptive text ("Ledgerio" rendered in
code) rather than the flattened wordmark image — the wordmark's "Ledger" text is a fixed dark
navy baked into the source file, which would have poor contrast against a dark-mode
background. If you'd rather use the actual wordmark image, you'd need a dedicated light-text
dark-mode variant of it first.

## Known dependency notes

- `next` was pinned to `16.2.11` (not 15.x) specifically because Next.js 15.1.6 — the version
  this was originally scaffolded with — falls inside the vulnerable range for
  **CVE-2025-66478**, a critical (CVSS 10.0) RCE in the App Router's RSC protocol. Keep this
  updated; check `npm outdated` periodically.
- `npm audit` will still report 2 issues (`postcss`, `sharp`) — both are vendored **inside**
  Next.js's own dependency tree (`node_modules/next/node_modules/...`), not something fixable
  by this project's own `package.json`. `npm audit`'s suggested "fix" (downgrading to
  `next@9.3.3`) is not viable — ignore it and instead watch for routine Next.js patch releases.

## What's real vs. what's a placeholder

Everything is real, working code — this was built and verified with an actual `next build`
(TypeScript strict mode, all 16 routes prerendering successfully) and `eslint`, both passing
clean. The only placeholders are the ones explicitly called out above: the product visual,
image assets, and legal-page content pending real review.
