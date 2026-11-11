# Ekhaya Properties

Premium real estate agency website for **Ekhaya Properties**, Mbabane, Eswatini.

**Live:** https://ekhaya-properties.vercel.app  
**Repo:** https://github.com/Brightwell-Dlamini/ekhaya-properties

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS (Charcoal / Sand / Copper)
- Framer Motion, Lucide icons
- Vercel deployment

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

See `.env.example`. Important:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for sitemap, OG, metadata |
| `FORMSPREE_ENDPOINT` | Optional — forwards contact form submissions |

Without Formspree, enquiries are accepted and logged server-side; WhatsApp remains the primary instant channel.

## Structure

```
app/
  page.tsx                 Home
  listings/page.tsx        Full listings + search
  properties/[id]/         Property detail
  privacy/  terms/         Legal
  api/contact/             Form API
  sitemap.ts  robots.ts
components/
  layout/    Navbar, Footer
  sections/  Hero, PropertyGrid, About, …
  forms/     ContactForm
data/properties.ts         Listing data (replace with CMS later)
```

## Custom domain (ekhaya.co.sz)

1. Vercel → Project → Settings → Domains → add `ekhaya.co.sz` and `www.ekhaya.co.sz`
2. At your DNS provider, add the records Vercel shows (usually A / CNAME)
3. Set `NEXT_PUBLIC_SITE_URL=https://ekhaya.co.sz` in Vercel env vars and redeploy

## Content updates

- Listings: edit `data/properties.ts` (or connect a CMS)
- Replace Unsplash URLs with client photography when available
- Logo: replace `public/logo.svg` and `public/favicon.svg`

## Contact

- WhatsApp: +268 7678 0729
- Phone: 7602 2772
- Email: info@ekhaya.co.sz
- Address: Msakato Street, Mbabane, Eswatini
