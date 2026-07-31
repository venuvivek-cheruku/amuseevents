// app/services/birthdays/page.tsx

import type { Metadata } from 'next'
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
  title: 'Birthday Party Planning London — Amuse Events',
  description:
    'Birthday party packages from £800. Intimate dinners to full-scale celebrations. Styled, sourced and run — so you actually enjoy your own party.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/birthdays' },
  openGraph: {
    title: 'Birthday Parties — Amuse Events',
    description:
      'From intimate dinners to full-scale celebrations. Every detail handled.',
    url: 'https://amuseevents.co.uk/services/birthdays',
    images: [{ url: '/assets/og-birthdays.jpg', width: 1200, height: 630 }],
  },
}

const PACKAGES = [
  {
    pill: 'Intimate',
    title: 'Styled dinner party',
    price: '£800',
    features: [
      'Up to 30 guests',
      'Venue styling & table décor',
      'Run-of-evening timeline',
      'Set-up & pack-down',
      'One coordinator on-site',
    ],
    cta: 'Choose Intimate',
    featured: false,
  },
  {
    pill: 'Most chosen',
    title: 'Full birthday event',
    price: '£2,400',
    features: [
      'Everything in Intimate',
      'Up to 80 guests',
      'DJ or live music sourcing',
      'Custom cake & catering coordination',
      'Photo booth or photographer',
      'Two coordinators on-site',
    ],
    cta: 'Choose Full',
    featured: true,
  },
  {
    pill: 'Milestone',
    title: 'Landmark celebration',
    price: '£5,500',
    features: [
      'Everything in Full',
      'Unlimited guest count',
      'Bespoke theme & design system',
      'Entertainment sourcing',
      'Production & staging',
      'Three-person team on the day',
    ],
    cta: 'Choose Milestone',
    featured: false,
  },
]

const TIMELINE = [
  {
    n: 1,
    month: 'week -8',
    title: 'Discover',
    body: 'Free call. Tell us the vibe, the guest count, the dream.',
    amber: true,
  },
  {
    n: 2,
    month: 'week -6',
    title: 'Design',
    body: 'Mood-board, venue shortlist, fixed quote.',
    amber: false,
  },
  {
    n: 3,
    month: 'week -3',
    title: 'Source',
    body: 'Catering, entertainment, décor — all confirmed.',
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
    imageLabel: 'Sophia · 30th',
    category: 'October 2025',
    meta: 'Shoreditch',
    title: "Sophia's 30th",
    body: '60 guests · full package · rooftop terrace, live jazz trio, custom cocktail bar.',
  },
  {
    imageLabel: 'Marcus · 50th',
    category: 'September 2025',
    meta: 'Mayfair',
    title: "Marcus's 50th",
    body: '120 guests · milestone package · private members club, big band, black-tie dinner.',
  },
  {
    imageLabel: 'Leila · 21st',
    category: 'August 2025',
    meta: 'Camden',
    title: "Leila's 21st",
    body: '45 guests · styled dinner · warehouse venue, neon theme, DJ till 2am.',
  },
]

const FAQS = [
  {
    q: 'How far in advance should I book?',
    a: "Ideally 6–8 weeks for a full package, though we've turned around events in 10 days. The sooner, the more venue options we have.",
  },
  {
    q: "Can you work with a venue I've already booked?",
    a: 'Absolutely. About half our birthday clients come with a venue locked — we handle everything else around it.',
  },
  {
    q: 'Do you handle kids birthday parties too?',
    a: "We have a dedicated kids entertainment service for that — check out our Kids Entertainment page. But for teen and adult birthdays, you're in the right place.",
  },
  {
    q: 'What if I have a very specific theme in mind?',
    a: "That's our favourite kind of brief. From Studio Ghibli to 1920s speakeasy, we've designed it all. Bring the Pinterest board.",
  },
  {
    q: 'Is there a minimum guest count?',
    a: "No minimum. Our smallest birthday last year was a table for 8 in a private dining room. It was beautiful.",
  },
]
export default function BirthdaysPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Services', url: 'https://amuseevents.co.uk/services' },
    { name: 'Birthdays', url: 'https://amuseevents.co.uk/services/birthdays' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-split-wedding">
            <div>
              <Eyebrow>Birthdays · every age, every style</Eyebrow>
              <h1 className="h-display h1 hero-title-gap">
                Your birthday,
                <br />
                <em className="brand-accent">actually fun</em>
                <br />
                for you too.
              </h1>
              <p className="lede lede-gap">
                From intimate dinners to landmark blowouts — styled, sourced
                and run so you can be the guest of honour, not the event
                manager.
              </p>
              <div className="actions-row mt-9">
                <Btn href="/contact" variant="amber" size="lg">
                  Plan my birthday <ButtonArrow />
                </Btn>
                <Btn href="#packages" variant="ghost" size="lg">
                  What&apos;s included
                </Btn>
              </div>
            </div>

            <div className="wedding-gallery">
              <div
                className="ph amber-tint image-3-4"
                data-label="Birthday · venue"
              />
              <div
                className="ph image-3-4 wedding-gallery-offset"
                data-label="Birthday · celebration"
              />
              <div className="ph image-3-4" data-label="Birthday · details" />
              <div className="ph image-3-4" data-label="Birthday · guests" />
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
              lede="Pick a starting point. Move things in or out. We'll re-quote in 24 hours."
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
                    pkg.featured
                      ? ' bg-amber text-ink border-amber'
                      : ''
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
              to <em className="italic">on the day</em>.
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
            <SectionHeading eyebrow="Recent birthdays">
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
              imageLabel="Sophia · rooftop"
              quote="I told them I wanted a rooftop, jazz and tequila. They came back with a full concept in 48 hours. On the night I didn't lift a finger — best birthday I've ever had."
              initials="S"
              name="Sophia"
              where="30th Birthday · Shoreditch · October 2025"
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
        <h2 className="h-display h2">Tell us the date.</h2>
        <p className="mt-[18px] text-lg text-ink-2">
          We&apos;ll come back within 4 hours with ideas, every time.
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