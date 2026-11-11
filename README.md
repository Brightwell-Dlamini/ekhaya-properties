# Ekhaya Properties

Premium real estate agency website for **Ekhaya Properties**, a leading brokerage based in Mbabane, Eswatini.

## Brand

**Ekhaya** means “Home”. The site blends modern luxury with the warm, welcoming essence of a family home — designed to the standard of a high-end international advisory firm.

## Tech Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for elegant animations
- **shadcn/ui-inspired** accessible components
- **Lucide React** icons
- **next/image** for optimized imagery

## Design System

| Token        | Value     | Usage                          |
|--------------|-----------|--------------------------------|
| Charcoal     | `#1A1A1A` | Primary text, dark sections    |
| Sand         | `#F5F2EB` | Backgrounds, soft surfaces     |
| Copper       | `#D35400` | CTAs, accents, active states   |
| White        | `#FFFFFF` | Cards, high-contrast elements  |

**Typography**
- Headlines: Playfair Display (serif)
- Body: Inter (sans-serif)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx          # Root layout + SEO metadata
  page.tsx            # Home page composition
  globals.css
components/
  layout/
    Navbar.tsx        # Glassmorphism sticky nav + mobile drawer
  sections/
    Hero.tsx          # Full-viewport cinematic hero
    PropertyGrid.tsx  # Filterable listings grid
  ui/
    button.tsx
lib/
  utils.ts            # cn() helper
```

## Contact

- WhatsApp: +268 7678 0729
- Phone: 7602 2772
- Email: info@ekhaya.co.sz
- Address: Msakato Street, Mbabane, Eswatini

---

Built with precision for the Eswatini market.
