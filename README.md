# TechMiner Global

[![Pages Deploy](https://github.com/TechMinerGlobal/techminer-global/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://github.com/TechMinerGlobal/techminer-global/actions/workflows/deploy-gh-pages.yml) [![Site Monitor](https://github.com/TechMinerGlobal/techminer-global/actions/workflows/monitor-site.yml/badge.svg)](https://github.com/TechMinerGlobal/techminer-global/actions/workflows/monitor-site.yml)

Next.js website scaffold for TechMiner Global.

Getting started (using `npm`):

```bash
cd techminer-global
npm install
npm run dev
```

Tailwind CSS is already configured. If you need to regenerate PostCSS/Tailwind files locally, you can run:

```bash
npx tailwindcss init -p
```

Build for production:

```bash
npm run build
npm start
```

Deployment notes for Cloudflare Pages are in `cloudflare-pages.md`.

Asset generation and export

If you supplied a high-resolution `public/logo.png` (recommended), you can auto-generate favicons and social PNGs using ImageMagick or `rsvg-convert`:

```bash
# from project root
chmod +x scripts/generate-assets.sh
./scripts/generate-assets.sh
```

This will create `public/favicons/*`, `public/favicon.ico`, and exported PNG social banners when the required tools are available. If not, open the SVGs in `public/` and export PNGs manually.

Included templates to review:
- `public/social-banner-1200x630.svg`
- `public/social-banner-1500x500.svg`
- `assets/business-card.svg` (export to PDF with Inkscape or Illustrator)
- `public/email-signature.html`
- `brand-guidelines.md`

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
