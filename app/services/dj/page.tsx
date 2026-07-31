// app/services/dj/page.tsx

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
  title: 'DJ & Club Events London — Amuse Events',
  description:
    'Professional DJ services and club night production from £1,200. Sound, lighting, talent booking and full event management.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/dj' },
  openGraph: {
    title: 'DJ & Club Events — Amuse Events',
    description:
      'Sound, lighting, talent and the energy to match. Professional DJ and club event services.',
    url: 'https://amuseevents.co.uk/services/dj',
    images: [{ url: '/assets/og-dj.jpg', width: 1200, height: 630 }],
  },
}

const PACKAGES = [
  {
    pill: 'Solo set',
    title: 'DJ & sound package',
    price: '£1,200',
    features: [
      'Professional DJ for up to 5 hours',
      'PA system & booth setup',
      'Pre-event music consultation',
      'Wireless microphone for speeches',
      'Set-up & pack-down',
    ],
    cta: 'Choose Solo Set',
    featured: false,
  },
  {
    pill: 'Most chosen',
    title: 'Full club night',
    price: '£3,800',
    features: [
      'Everything in Solo Set',
      'Lighting rig & dance floor design',
      'Two DJs or DJ + live performer',
      'Venue liaison & sound check',
      'Security coordination',
      'Event manager on-site',
    ],
    cta: 'Choose Club Night',
    featured: true,
  },
  {
    pill: 'Festival',
    title: 'Multi-stage production',
    price: '£9,500',
    features: [
      'Everything in Club Night',
      'Multi-room / multi-stage setup',
      'Talent booking & rider management',
      'Full production & staging',
      'LED walls & visual design',
      'Four-person production team',
    ],
    cta: 'Choose Festival',
    featured: false,
  },
]

const TIMELINE = [
  {
    n: 1,
    month: 'month -3',
    title: 'Brief',
    body: 'Free call. Tell us the genre, the venue, the vision.',
    amber: true,
  },
  {
    n: 2,
    month: 'month -2',
    title: 'Design',
    body: 'Sound spec, lighting plot, talent shortlist, fixed quote.',
    amber: false,
  },
  {
    n: 3,
    month: 'week -1',
    title: 'Tech check',
    body: 'Venue walk-through, sound check, final run-through.',
    amber: false,
  },
  {
    n: 4,
    month: 'day 0',
    title: 'Drop',
    body: 'Doors open. Bass hits. We run the night.',
    amber: false,
  },
]

const RECENT_EVENTS = [
  {
    imageStyle: 'amber-tint' as const,
    imageLabel: 'Warehouse · E1',
    category: 'November 2025',
    meta: 'Shoreditch',
    title: 'Warehouse Sessions',
    body: '400 capacity · full production · two rooms, 6 DJs, LED tunnel entrance.',
  },
  {
    imageLabel: 'Rooftop · SE1',
    category: 'September 2025',
    meta: 'Southbank',
    title: 'Sunset Sessions',
    body: '200 guests · club night package · rooftop terrace, sunset DJ set, cocktail bar.',
  },
  {
    imageLabel: 'Private · W1',
    category: 'August 2025',
    meta: 'Mayfair',
    title: 'Private Launch Party',
    body: '150 guests · solo set + lighting · brand launch, curated playlist, press photographer.',
  },
]

const FAQS = [
  {
    q: 'Can we choose the DJ?',
    a: "Yes — we have a roster of 20+ DJs across genres. We'll match based on your brief, or you can request someone specific.",
  },
  {
    q: 'Do you handle licensing?',
    a: "We coordinate with the venue on TENs and late-night licensing. If the venue needs a new application, we'll guide you through it.",
  },
  {
    q: 'What genres do you cover?',
    a: 'Everything from house and techno to Afrobeats, R&B, hip-hop, garage, drum & bass and commercial. Tell us the vibe.',
  },
  {
    q: 'Can you do outdoor events?',
    a: 'Yes — we have weatherproof PA systems and covered DJ booths. Check our outdoor events service for larger festivals.',
  },
  {
    q: 'What about noise restrictions?',
    a: 'We always check local sound ordinances beforehand. Our sound engineers carry decibel meters and we comply with every venue limit.',
  },
]

export default function DJPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Services', url: 'https://amuseevents.co.uk/services' },
    {
      name: 'DJ & Club Events',
      url: 'https://amuseevents.co.uk/services/dj',
    },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-split-wedding">
            <div>
              <div className="crumb">
                <Link href="/services">Services</Link> / <b>DJ & club events</b>
              </div>
              <Eyebrow>DJ & club events · sound done right</Eyebrow>
              <h1 className="h-display h1 hero-title-gap">
                The sound,
                <br />
                <em className="brand-accent">the lights,</em>
                <br />
                the energy.
              </h1>
              <p className="lede lede-gap">
                Professional DJ services, club night production and festival
                staging. Three hundred events. The dancefloor always full.
              </p>
              <div className="actions-row mt-9">
                <Btn href="/contact" variant="amber" size="lg">
                  Book a DJ <ButtonArrow />
                </Btn>
                <Btn href="#packages" variant="ghost" size="lg">
                  What&apos;s included
                </Btn>
              </div>
            </div>

            <div className="wedding-gallery">
              <div className="ph amber-tint image-3-4" data-label="DJ · booth" />
              <div
                className="ph image-3-4 wedding-gallery-offset"
                data-label="DJ · crowd"
              />
              <div className="ph image-3-4" data-label="DJ · lights" />
              <div className="ph image-3-4" data-label="DJ · production" />
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="section-page section-paper-2">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading
              eyebrow="— what's included —"
              center
              lede="Pick a starting point. Add lighting, swap talent. We'll re-quote same day."
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
                className={`card flex flex-col${pkg.featured ? ' card-dark' : ''}`}
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
                      <IconCheck className="icon-check mt-0.5" aria-hidden="true" />
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
            all packages include the consultation · sound spec · vendor
            coordination · VAT inc.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-page-xl">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— how it works —" center>
              From <em className="italic">brief</em>
              <br />
              to <em className="italic">bass drop</em>.
            </SectionHeading>
          </Reveal>

          <Reveal className="timeline">
            <div className="timeline-line" />
            {TIMELINE.map((t) => {
              const dotClass = t.amber
                ? 'border-0 bg-amber text-ink'
                : t.n === 4
                  ? 'border-0 bg-ink text-paper'
                  : 'border-[1.5px] border-ink bg-paper text-ink'

              return (
                <div key={t.n} className="timeline-item">
                  <div
                    className={`timeline-dot absolute left-1/2 top-0 -translate-x-1/2 ${dotClass}`}
                  >
                    {t.n}
                  </div>
                  <div className="mono muted text-[11px] uppercase">
                    {t.month}
                  </div>
                  <h3 className="timeline-title">{t.title}</h3>
                  <p className="muted text-[13px]">{t.body}</p>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* Recent events */}
      <section className="section-paper-2 section-page-gallery">
        <div className="container">
          <Reveal className="section-heading-row mb-12">
            <SectionHeading eyebrow="Recent DJ events">
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

      {/* Testimonial */}
      <section className="section-page">
        <div className="container">
          <Reveal>
            <Testimonial
              imageStyle="amber-tint"
              imageLabel="Warehouse · E1"
              quote="Sound was crystal, lighting was cinematic, and the dancefloor didn't empty once in six hours. They run a night the way it should be run."
              initials="J"
              name="James"
              where="Club Event · Shoreditch · November 2025"
            />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <CtaPanel variant="amber">
        <h2 className="h-display h2">Tell us the vibe.</h2>
        <p className="mt-[18px] text-lg text-ink-2">
          We&apos;ll come back within 4 hours with a plan.
        </p>
        <div className="actions-center mt-8">
          <Btn href="/contact" variant="primary" size="lg">
            Book a DJ <ButtonArrow />
          </Btn>
        </div>
      </CtaPanel>
    </>
  )
}