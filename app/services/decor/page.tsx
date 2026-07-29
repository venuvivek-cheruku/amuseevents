// app/services/decor/page.tsx

import  Metadata  from 'next'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { ButtonArrow, IconCheck } from '@/components/icons/AppIcons'
import { Btn } from '@/components/ui/Btn'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { Testimonial } from '@/components/ui/Testimonial'
import { FaqList } from '@/components/ui/FaqList'
import { CtaPanel } from '@/components/ui/CtaPanel'

export const metadata: Metadata = {
  title: 'Art Work & Décor London — Amuse Events',
  description:
    'Event styling and décor packages from £1,800. Floral design, table styling, installations and bespoke art direction for any occasion.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/decor' },
  openGraph: {
    title: 'Art Work & Décor — Amuse Events',
    description: 'Floral design, installations and bespoke styling — every detail considered.',
    url: 'https://amuseevents.co.uk/services/decor',
    images: [{ url: '/assets/og-decor.jpg', width: 1200, height: 630 }],
  },
}

const PACKAGES = [
  {
    pill: 'Style',
    title: 'Styling package',
    price: '£1,800',
    features: [
      'Mood-board & colour palette',
      'Table styling & centrepieces',
      'Welcome signage & stationery direction',
      'Candle & linen coordination',
      'Set-up & styling on the day',
    ],
    cta: 'Choose Style',
    featured: false,
  },
  {
    pill: 'Most chosen',
    title: 'Full décor design',
    price: '£4,500',
    features: [
      'Everything in Style',
      'Floral design & installation',
      'Ceremony backdrop or arch',
      'Lounge furniture & feature areas',
      'Lighting design for ambience',
      'Dedicated stylist on the day',
    ],
    cta: 'Choose Full Décor',
    featured: true,
  },
  {
    pill: 'Bespoke',
    title: 'Art direction & build',
    price: '£10,000',
    features: [
      'Everything in Full Décor',
      'Bespoke installation design & fabrication',
      'Immersive environment creation',
      'Custom prop & set build',
      'Art direction for photography',
      'Full styling team on the day',
    ],
    cta: 'Choose Bespoke',
    featured: false,
  },
]

const TIMELINE = [
  {
    n: 1,
    month: 'month -3',
    title: 'Inspire',
    body: 'Free consultation. Share your vision, Pinterest boards, colour loves.',
    amber: true,
  },
  {
    n: 2,
    month: 'month -2',
    title: 'Design',
    body: 'Mood-board, material samples, floral concepts, fixed quote.',
    amber: false,
  },
  {
    n: 3,
    month: 'week -1',
    title: 'Source',
    body: 'All materials sourced, florals ordered, props confirmed.',
    amber: false,
  },
  {
    n: 4,
    month: 'day 0',
    title: 'Install',
    body: 'We arrive early. You arrive to a transformed space.',
    amber: false,
  },
]

const RECENT_EVENTS = [
  {
    imageStyle: 'amber-tint' as const,
    imageLabel: 'Wedding · Kew',
    category: 'September 2025',
    meta: 'Kew Gardens',
    title: 'Botanical Wedding',
    body: 'Full décor · hanging floral installation, moss table runners, candlelit dinner.',
  },
  {
    imageLabel: 'Launch · Soho',
    category: 'October 2025',
    meta: 'Soho',
    title: 'Brand Launch',
    body: 'Art direction · immersive brand environment, custom neon, press-ready styling.',
  },
  {
    imageLabel: 'Anniversary · Chelsea',
    category: 'August 2025',
    meta: 'Chelsea',
    title: 'Golden Anniversary',
    body: 'Styling package · elegant gold palette, orchid centrepieces, vintage linen.',
  },
]

const FAQS = [
  {
    q: 'Can you match a specific colour palette?',
    a: "Yes — we work from Pantone references, fabric swatches or even a photo. We've matched wedding stationery to napkin thread before.",
  },
  {
    q: 'Do you provide the flowers?',
    a: "We design and art-direct florals, then work with our trusted florists to source and install. You get our eye and their craft.",
  },
  {
    q: 'Can you style a venue we have already booked?',
    a: "Absolutely — most clients come with a venue. We do a site visit and design around the architecture, not against it.",
  },
  {
    q: 'Do you handle hire items (furniture, tableware)?',
    a: "Yes — we source and coordinate all hire items. Tables, chairs, glassware, linen, candelabras — whatever the design needs.",
  },
  {
    q: 'What happens to the décor after the event?',
    a: "We handle complete de-rig and removal. If you want to keep the flowers, we'll arrange that too. Nothing left behind.",
  },
]

export default function DecorPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Services', url: 'https://amuseevents.co.uk/services' },
    { name: 'Art Work & Décor', url: 'https://amuseevents.co.uk/services/decor' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      <section className="page-hero">
        <div className="container">
          <div className="hero-split-wedding">
            <div>
              <Eyebrow>Art work & décor · every detail considered</Eyebrow>
              <h1 className="h-display h1 hero-title-gap">
                Spaces that
                <br />
                <em className="brand-accent">feel like</em>
                <br />
                something.
              </h1>
              <p className="lede lede-gap">
                Floral design, table styling, immersive installations and
                bespoke art direction. We don&apos;t decorate — we transform.
              </p>
              <div className="actions-row mt-9">
                <Btn href="/contact" variant="amber" size="lg">
                  Get a styling quote <ButtonArrow />
                </Btn>
                <Btn href="#packages" variant="ghost" size="lg">
                  What&apos;s included
                </Btn>
              </div>
            </div>

            <div className="wedding-gallery">
              <div className="ph amber-tint image-3-4" data-label="Décor · floral" />
              <div className="ph image-3-4 wedding-gallery-offset" data-label="Décor · table" />
              <div className="ph image-3-4" data-label="Décor · installation" />
              <div className="ph image-3-4" data-label="Décor · detail" />
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="section-page section-paper-2">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— what's included —" center lede="Pick a starting point. Add florals, drop the furniture. We'll re-quote same day.">
              Everything,<br /><em className="italic">handled.</em>
            </SectionHeading>
          </Reveal>

          <Reveal className="grid-3-cards items-stretch">
            {PACKAGES.map((pkg) => (
              <div key={pkg.title} className={`card flex flex-col${pkg.featured ? ' card-dark' : ''}`}>
                <span className={`pill self-start${pkg.featured ? ' bg-amber text-ink border-amber' : ''}`}>{pkg.pill}</span>
                <h3 className={`h-display h4 mt-[18px]${pkg.featured ? ' text-paper' : ''}`}>{pkg.title}</h3>
                <div className={`my-3.5 font-serif text-[56px] leading-none tracking-[-.03em]${pkg.featured ? ' text-paper' : ''}`}>
                  {pkg.price}<span className={`font-sans text-base${pkg.featured ? ' text-paper/60' : ' text-ink-3'}`}>{' '} / from</span>
                </div>
                <ul className="my-6 flex list-none flex-col gap-3 p-0 text-sm">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex gap-2${pkg.featured ? ' text-paper/90' : ''}`}>
                      <IconCheck className="icon-check mt-0.5" aria-hidden="true" /><span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Btn href="/contact" variant={pkg.featured ? 'amber' : 'ghost'} className="mt-auto">{pkg.cta}</Btn>
              </div>
            ))}
          </Reveal>

          <p className="reveal mono mt-8 text-center text-ink-3">all packages include the consultation · mood-board · sourcing · VAT inc.</p>
        </div>
      </section>

      <section className="section-page-xl">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— how it works —" center>
              From <em className="italic">inspiration</em><br />to <em className="italic">installation</em>.
            </SectionHeading>
          </Reveal>
          <Reveal className="timeline">
            <div className="timeline-line" />
            {TIMELINE.map((t) => (
              <div key={t.n} className="timeline-item">
                <div className={`timeline-dot absolute left-1/2 top-0 -translate-x-1/2 ${t.amber ? 'border-0 bg-amber text-ink' : t.n === 4 ? 'border-0 bg-ink text-paper' : 'border-[1.5px] border-ink bg-paper text-ink'}`}>{t.n}</div>
                <div className="mono muted text-[11px] uppercase">{t.month}</div>
                <h3 className="timeline-title">{t.title}</h3>
                <p className="muted text-[13px]">{t.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-paper-2 section-page-gallery">
        <div className="container">
          <Reveal className="section-heading-row mb-12">
            <SectionHeading eyebrow="Recent styling">A few from <em className="italic">last season</em></SectionHeading>
            <Btn href="/contact" variant="ghost">Full portfolio <ButtonArrow /></Btn>
          </Reveal>
          <Reveal className="grid-3-cards">
            {RECENT_EVENTS.map((w) => (<ArticleCard key={w.title} imageTall {...w} />))}
          </Reveal>
        </div>
      </section>

      <section className="section-page">
        <div className="container">
          <Reveal>
            <Testimonial
              imageStyle="amber-tint"
              imageLabel="Wedding · Kew"
              quote="Walking into the reception was like stepping into a painting. The hanging florals, the candlelight, the moss — it was otherworldly. Our guests still talk about it."
              initials="S&J"
              name="Sarah & James"
              where="Wedding Décor · Kew Gardens · September 2025"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-paper-2 section-page-md">
        <div className="container">
          <Reveal className="content-split-start">
            <div className="sticky-aside">
              <SectionHeading eyebrow="— FAQ —">The questions<br />we hear <em className="italic">most</em>.</SectionHeading>
            </div>
            <FaqList items={FAQS} />
          </Reveal>
        </div>
      </section>

      <CtaPanel variant="amber">
        <div className="cta-orb-lg" />
        <h2 className="h-display h2">Share your vision.</h2>
        <p className="mt-[18px] text-lg text-ink-2">We&apos;ll come back within 4 hours with a concept.</p>
        <div className="actions-center mt-8">
          <Btn href="/contact" variant="primary" size="lg">Get a styling quote <ButtonArrow /></Btn>
        </div>
      </CtaPanel>
    </>
  )
}