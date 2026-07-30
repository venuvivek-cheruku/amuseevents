// app/services/photography/page.tsx

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
  title: 'Event Photography & Film London — Amuse Events',
  description:
    'Event photography and videography packages from £900. Natural, editorial and cinematic coverage for weddings, parties and corporate events.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/photography' },
  openGraph: {
    title: 'Photography & Film — Amuse Events',
    description: 'Natural, editorial and cinematic coverage — every moment, every angle.',
    url: 'https://amuseevents.co.uk/services/photography',
    images: [{ url: '/assets/og-photography.jpg', width: 1200, height: 630 }],
  },
}

const PACKAGES = [
  {
    pill: 'Capture',
    title: 'Photography package',
    price: '£900',
    features: [
      'One photographer for up to 6 hours',
      'Pre-event brief & shot list',
      'Natural & candid coverage',
      '300+ edited digital images',
      'Online gallery within 14 days',
    ],
    cta: 'Choose Capture',
    featured: false,
  },
  {
    pill: 'Most chosen',
    title: 'Photo & film',
    price: '£2,800',
    features: [
      'Everything in Capture',
      'Videographer for up to 8 hours',
      'Cinematic highlight reel (3–5 min)',
      'Full ceremony & speeches edit',
      'Drone footage (venue permitting)',
      'Two photographers on-site',
    ],
    cta: 'Choose Photo & Film',
    featured: true,
  },
  {
    pill: 'Editorial',
    title: 'Full editorial coverage',
    price: '£5,500',
    features: [
      'Everything in Photo & Film',
      'Art-directed editorial session',
      'Full-length documentary film (15–20 min)',
      'Same-day edit for evening screening',
      'Album design & print coordination',
      'Second videographer',
    ],
    cta: 'Choose Editorial',
    featured: false,
  },
]

const TIMELINE = [
  {
    n: 1,
    month: 'month -2',
    title: 'Brief',
    body: 'Free call. Tell us the event, the style, the must-have shots.',
    amber: true,
  },
  {
    n: 2,
    month: 'month -1',
    title: 'Plan',
    body: 'Shot list, timeline integration, lighting assessment.',
    amber: false,
  },
  {
    n: 3,
    month: 'week -1',
    title: 'Recce',
    body: 'Venue walk-through for angles, light and logistics.',
    amber: false,
  },
  {
    n: 4,
    month: 'day 0',
    title: 'Shoot',
    body: 'We blend in. You be present. Every moment captured.',
    amber: false,
  },
]

const RECENT_EVENTS = [
  {
    imageStyle: 'amber-tint' as const,
    imageLabel: 'Wedding · Richmond',
    category: 'September 2025',
    meta: 'Richmond Hill',
    title: 'P&D Wedding Film',
    body: 'Photo & film · two photographers, drone, 4-minute highlight reel, 400+ images.',
  },
  {
    imageLabel: 'Corporate · City',
    category: 'October 2025',
    meta: 'City of London',
    title: 'Annual Gala Coverage',
    body: 'Photography package · 6-hour coverage, press-ready images, 24-hour turnaround.',
  },
  {
    imageLabel: 'Birthday · Notting Hill',
    category: 'August 2025',
    meta: 'Notting Hill',
    title: "40th Birthday Film",
    body: 'Editorial package · art-directed portraits, same-day edit screened at dinner.',
  },
]

const FAQS = [
  {
    q: 'How long until we get the photos?',
    a: "Photography: online gallery within 14 days. Film highlight reel: 4–6 weeks. Full documentary: 8–10 weeks. Rush delivery is available.",
  },
  {
    q: 'Can we choose the photographer?',
    a: "Yes — we'll introduce you to 2–3 photographers whose style matches your brief. You pick who feels right.",
  },
  {
    q: 'Do you cover events outside London?',
    a: "Up to 90 minutes from central London is included. Destination coverage is on request — we love a good travel shoot.",
  },
  {
    q: 'Can you add photography to another service booking?',
    a: "Absolutely — most clients bundle photography with another service and we apply a 10% bundle discount.",
  },
  {
    q: 'What about printing and albums?',
    a: "We offer album design and print coordination through our Editorial package, or as an add-on to any package.",
  },
]

export default function PhotographyPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Services', url: 'https://amuseevents.co.uk/services' },
    { name: 'Photography & Film', url: 'https://amuseevents.co.uk/services/photography' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      <section className="page-hero">
        <div className="container">
          <div className="hero-split-wedding">
            <div>
              <Eyebrow>Photography & film · every moment, every angle</Eyebrow>
              <h1 className="h-display h1 hero-title-gap">
                Be present.
                <br />
                <em className="brand-accent">We&apos;ll capture</em>
                <br />
                the rest.
              </h1>
              <p className="lede lede-gap">
                Natural, editorial and cinematic coverage for weddings, parties
                and corporate events. You won&apos;t know we&apos;re there — until you
                see the photos.
              </p>
              <div className="actions-row mt-9">
                <Btn href="/contact" variant="amber" size="lg">
                  Book a photographer <ButtonArrow />
                </Btn>
                <Btn href="#packages" variant="ghost" size="lg">
                  What&apos;s included
                </Btn>
              </div>
            </div>

            <div className="wedding-gallery">
              <div className="ph amber-tint image-3-4" data-label="Photo · candid" />
              <div className="ph image-3-4 wedding-gallery-offset" data-label="Photo · portrait" />
              <div className="ph image-3-4" data-label="Photo · detail" />
              <div className="ph image-3-4" data-label="Film · behind scenes" />
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="section-page section-paper-2">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— what's included —" center lede="Pick a starting point. Add a videographer, drop the drone. We'll re-quote same day.">
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

          <p className="reveal mono mt-8 text-center text-ink-3">all packages include the pre-event brief · shot list · editing · online gallery · VAT inc.</p>
        </div>
      </section>

      <section className="section-page-xl">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— how it works —" center>
              From <em className="italic">brief</em><br />to <em className="italic">gallery</em>.
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
            <SectionHeading eyebrow="Recent shoots">A few from <em className="italic">last season</em></SectionHeading>
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
              imageLabel="P&D · garden"
              quote="We didn't notice them all day. Then the gallery arrived and we cried. They captured moments we didn't even know happened. Absolutely extraordinary."
              initials="P&D"
              name="Priya & Daniel"
              where="Wedding Photography · Richmond · September 2025"
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
        <h2 className="h-display h2">Tell us the date.</h2>
        <p className="mt-[18px] text-lg text-ink-2">We&apos;ll match you with the right photographer within 4 hours.</p>
        <div className="actions-center mt-8">
          <Btn href="/contact" variant="primary" size="lg">Book a photographer <ButtonArrow /></Btn>
        </div>
      </CtaPanel>
    </>
  )
}