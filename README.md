# Amuse Events

Production website for **Amuse Events** — a London event planning studio running weddings, corporate events, kids parties and DJ club nights since 2014.

Live: [amuseevents.co.uk](https://amuseevents.co.uk)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| Styling | CSS custom properties — no Tailwind |
| CMS | Sanity v3 (optional — falls back to static data) |
| Ticketing | Visisto (custom embedded widget) |
| Email | Resend v4 |
| Animations | GSAP 3 + ScrollTrigger |
| Fonts | Fraunces · Inter · JetBrains Mono (next/font/google) |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services mosaic, process, testimonials, journal teaser |
| `/services` | All 10 services with alternating image/text blocks |
| `/weddings` | Packages (£1,400 / £4,200 / £8,800), timeline, FAQ |
| `/corporate` | Corporate events — formats, case studies |
| `/about` | Studio story, team, principles, reviews |
| `/events` | DJ nights — filter, Visisto ticketing widget, lineup |
| `/journal` | Blog index — featured post, category filter, newsletter |
| `/contact` | Contact form, WhatsApp card, studio address, FAQ |
| `/studio` | Sanity CMS admin (requires env vars) |

---

## Getting started

```bash
npm install
npm run dev
```

The site runs without any environment variables — Sanity and Resend fall back gracefully.

### Environment variables (optional)

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
RESEND_API_KEY=
```

---

## Project structure

```
app/                  # Next.js App Router pages
components/
  animations/         # GSAP scroll + hero + micro-interactions
  contact/            # ContactForm client component
  events/             # EventCard, VisistoWidget, EventsPageClient
  journal/            # NewsletterForm
lib/                  # types, utils, static event data
sanity/               # Sanity schema + client + queries
public/assets/        # Logo, OG images
```

---

## Design system

All tokens live in `app/globals.css`:

- `--paper: #F6F1E8` · `--ink: #191614` · `--amber: #F26A2C`
- `--aubergine: #3A2733` (corporate hero)
- Serif display: Fraunces with optical size + SOFT axes
