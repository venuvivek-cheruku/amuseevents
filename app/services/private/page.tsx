// app/services/private/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
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
  title: 'Private Party Planning London — Amuse Events',
  description:
    'Private party packages from £1,600. Anniversaries, engagements, house parties and celebrations — designed and delivered with discretion.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/private' },
  openGraph: {
    title: 'Private Parties — Amuse Events',
    description: 'Anniversaries, engagements and celebrations — beautifully private.',
    url: 'https://amuseevents.co.uk/services/private',
    images: [{ url: '/assets/og-private.jpg', width: 1200, height: 630 }],
  },
}

const PACKAGES = [
  {
    pill: 'Gather',
    title: 'Styled gathering',
    price: '£1,600',
    features: [
      'Up to 40 guests',
      'Venue styling & ambience',
      'Run-of-evening timeline',
      'Catering coordination',
      'One coordinator on-site',
    ],
    cta: 'Choose Gather',
    featured: false,
  },
  {
    pill: 'Most chosen',
    title: 'Full private party',
    price: '£4,200',
    features: [
      'Everything in Gather',
      'Up to 100 guests',
      'Entertainment sourcing (DJ, band, performer)',
      'Custom menu design with caterer',
      'Bar setup & drinks coordination',
      'Two coordinators on-site',
    ],
    cta: 'Choose Full Party',
    featured: true,
  },
  {
    pill: 'Exclusive',
    title: 'Bespoke celebration',
    price: '£8,000',
    features: [
      'Everything in Full Party',
      'Unlimited guests',
      'Bespoke theme & design system',
      'Venue sourcing & exclusive hire',
      'Production & staging',
      'Three-person team on the day',
    ],
    cta: 'Choose Exclusive',
    featured: false,
  },
]

const TIMELINE = [
  {
    n: 1,
    month: 'month -3',
    title: 'Listen',
    body: 'Free call. Tell us the occasion, the guest list, the dream.',
    amber: true,
  },
  {
    n: 2,
    month: 'month -2',
    title: 'Design',
    body: 'Mood-board, venue options, menu concepts, fixed quote.',
    amber: false,
  },
  {
    n: 3,
    month: 'week -2',
    title: 'Confirm',
    body: 'All vendors locked. Final walk-through. Briefings done.',
    amber: false,
  },
  {
    n: 4,
    month: 'day 0',
    title: 'Celebrate',
    body: 'You arrive. You enjoy. We hold the rest.',
    amber: false,
  },
]

const RECENT_EVENTS = [
  {
    imageStyle: 'amber-tint' as const,
    imageLabel: 'R&L · Anniversary',
    category: 'October 2025',
    meta: 'Kensington',
    title: "Ruby & Leo's 25th",
    body: '80 guests · full party · townhouse takeover, live band, champagne tower.',
  },
  {
    imageLabel: 'Engagement · Mayfair',
    category: 'September 2025',
    meta: 'Mayfair',
    title: "Tom & Ella's Engagement",
    body: '60 guests · styled gathering · cocktail evening, string quartet, garden marquee.',
  },
  {
    imageLabel: 'Housewarming · Dulwich',
    category: 'August 2025',
    meta: 'Dulwich',
    title: "The Khans' Housewarming",
    body: '120 guests · bespoke package · garden party, BBQ, kids area, DJ till midnight.',
  },
]

const FAQS = [
  {
    q: 'What kind of private parties do you do?',
    a: 'Anniversaries, engagements, housewarmings, retirement parties, reunions, divorce parties — you name it. If it matters to you, it matters to us.',
  },
  {
    q: 'Can you keep it a surprise?',
    a: "Yes — about a third of our private parties are surprises. We have a discreet coordination process with a designated insider to keep everything under wraps.",
  },
  {
    q: 'Do you work on weeknights?',
    a: 'Absolutely. Not every party is a Saturday night. We do weeknight dinners, Sunday brunches and everything in between.',
  },
  {
    q: 'What about noise and neighbours?',
    a: 'We check local restrictions, brief DJs on cut-off times and ensure clean, quiet pack-downs. We respect your neighbours as much as you do.',
  },
  {
    q: 'Can we BYO drinks?',
    a: "If the venue allows it, yes. We'll help with glassware hire, ice, bar setup and mixers regardless.",
  },
]

export default function PrivatePartiesPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Services', url: 'https://amuseevents.co.uk/services' },
    { name: 'Private Parties', url: 'https://amuseevents.co.uk/services/private' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-split-wedding">
            <div>
              <div className="crumb">
                <Link href="/services">Services</Link> / <b>Private parties</b>
              </div>
              <Eyebrow>Private parties · beautifully discreet</Eyebrow>
              <h1 className="h-display h1 hero-title-gap">
                Your celebration,
                <br />
                <em className="brand-accent">your rules,</em>
                <br />
                our hands.
              </h1>
              <p className="lede lede-gap">
                Anniversaries, engagements and everything worth celebrating —
                designed around you and delivered with quiet precision.
              </p>
              <div className="actions-row mt-9">
                <Btn href="/contact" variant="amber" size="lg">
                  Plan my party <ButtonArrow />
                </Btn>
                <Btn href="#packages" variant="ghost" size="lg">
                  What&apos;s included
                </Btn>
              </div>
            </div>

            <div className="wedding-gallery">
              <div
                className="ph amber-tint image-3-4"
                data-label="Private · venue"
              />
              <div
                className="ph image-3-4 wedding-gallery-offset"
                data-label="Private · dinner"
              />
              <div className="ph image-3-4" data-label="Private · guests" />
              <div className="ph image-3-4" data-label="Private · details" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages ───────────────────────────────────── */}
      <section id="packages" className="section-page section-paper-2">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading
              eyebrow="— what's included —"
              center
              lede="Pick a starting point. Add entertainment, swap the menu. We'll re-quote same day."
            >
              Everything,
              <br />
              <em className="italic">handled.</em>
            </SectionHeading>
          </Reveal>

          <Reveal className="grid-3-cards items-stretch">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.title}
                className={`card flex flex-col${
                  pkg.featured ? ' card-dark' : ''
                }`}
              >
                <span
                  className={`pill self-start${
                    pkg.featured ? ' bg-amber text-ink border-amber' : ''
                  }`}
                >
                  {pkg.pill}
                </span>

                <h3
                  className={`h-display h4 mt-[18px]${
                    pkg.featured ? ' text-paper' : ''
                  }`}
                >
                  {pkg.title}
                </h3>

                <div
                  className={`my-3.5 font-serif text-[56px] leading-none tracking-[-.03em]${
                    pkg.featured ? ' text-paper' : ''
                  }`}
                >
                  {pkg.price}
                  <span
                    className={`font-sans text-base${
                      pkg.featured ? ' text-paper/60' : ' text-ink-3'
                    }`}
                  >
                    {' '}
                    / from
                  </span>
                </div>

                <ul className="my-6 flex list-none flex-col gap-3 p-0 text-sm">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex gap-2${
                        pkg.featured ? ' text-paper/90' : ''
                      }`}
                    >
                      <IconCheck
                        className="icon-check mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Btn
                  href="/contact"
                  variant={pkg.featured ? 'amber' : 'ghost'}
                  className="mt-auto"
                >
                  {pkg.cta}
                </Btn>
              </div>
            ))}
          </Reveal>

          <p className="reveal mono mt-8 text-center text-ink-3">
            all packages include the discovery call · mood-board · vendor
            coordination · VAT inc.
          </p>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────── */}
      <section className="section-page-xl">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— how it works —" center>
              From <em className="italic">enquiry</em>
              <br />
              to <em className="italic">on the night</em>.
            </SectionHeading>
          </Reveal>

          <Reveal className="timeline">
            <div className="timeline-line" />
            {TIMELINE.map((t) => (
              <div key={t.n} className="timeline-item">
                <div
                  className={`timeline-dot absolute left-1/2 top-0 -translate-x-1/2 ${
                    t.amber
                      ? 'border-0 bg-amber text-ink'
                      : t.n === 4
                        ? 'border-0 bg-ink text-paper'
                        : 'border-[1.5px] border-ink bg-paper text-ink'
                  }`}
                >
                  {t.n}
                </div>
                <div className="mono muted text-[11px] uppercase">
                  {t.month}
                </div>
                <h3 className="timeline-title">{t.title}</h3>
                <p className="muted text-[13px]">{t.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Recent events ──────────────────────────────── */}
      <section className="section-paper-2 section-page-gallery">
        <div className="container">
          <Reveal className="section-heading-row mb-12">
            <SectionHeading eyebrow="Recent private parties">
              A few from <em className="italic">last season</em>
            </SectionHeading>
            <Btn href="/contact" variant="ghost">
              Full portfolio <ButtonArrow />
            </Btn>
          </Reveal>

          <Reveal className="grid-3-cards">
            {RECENT_EVENTS.map((w) => (
              <ArticleCard key={w.title} imageTall {...w} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Testimonial ────────────────────────────────── */}
      <section className="section-page">
        <div className="container">
          <Reveal>
            <Testimonial
              imageStyle="amber-tint"
              imageLabel="R&L · anniversary"
              quote="They turned our living room into a venue. Sixty guests, a string quartet and not a single thing out of place. It felt like a film set but warmer."
              initials="R&L"
              name="Ruby & Leo"
              where="Anniversary · Kensington · October 2025"
            />
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className="section-paper-2 section-page-md">
        <div className="container">
          <Reveal className="content-split-start">
            <div className="sticky-aside">
              <SectionHeading eyebrow="— FAQ —">
                The questions
                <br />
                we hear <em className="italic">most</em>.
              </SectionHeading>
            </div>
            <FaqList items={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <CtaPanel variant="amber">
        <h2 className="h-display h2">Tell us the occasion.</h2>
        <p className="mt-[18px] text-lg text-ink-2">
          We&apos;ll come back within 4 hours with a plan.
        </p>
        <div className="actions-center mt-8">
          <Btn href="/contact" variant="primary" size="lg">
            Start planning <ButtonArrow />
          </Btn>
        </div>
      </CtaPanel>
    </>
  )
}