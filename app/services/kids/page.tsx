// app/services/kids/page.tsx

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
  title: 'Kids Entertainment & Parties London — Amuse Events',
  description:
    'Kids party packages from £600. Themed parties, entertainers, magicians and face-painters. Ages 1–12 — mess managed, memories made.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/kids' },
  openGraph: {
    title: 'Kids Entertainment — Amuse Events',
    description: 'Themed parties, entertainers, and total chaos — beautifully managed.',
    url: 'https://amuseevents.co.uk/services/kids',
    images: [{ url: '/assets/og-kids.jpg', width: 1200, height: 630 }],
  },
}

const PACKAGES = [
  {
    pill: 'Party box',
    title: 'Entertainer package',
    price: '£600',
    features: [
      'Up to 20 children',
      '2-hour entertainer (magician, clown or character)',
      'Party games coordination',
      'Balloon décor bundle',
      'Set-up & pack-down',
    ],
    cta: 'Choose Party Box',
    featured: false,
  },
  {
    pill: 'Most chosen',
    title: 'Themed party',
    price: '£1,800',
    features: [
      'Everything in Party Box',
      'Up to 40 children',
      'Custom theme décor & styling',
      'Face painter + entertainer',
      'Party food coordination',
      'Two coordinators on-site',
    ],
    cta: 'Choose Themed',
    featured: true,
  },
  {
    pill: 'Spectacular',
    title: 'Full production party',
    price: '£4,000',
    features: [
      'Everything in Themed',
      'Unlimited children',
      'Bespoke set design & build',
      'Character performers',
      'Soft play or activity stations',
      'Photography included',
    ],
    cta: 'Choose Spectacular',
    featured: false,
  },
]

const TIMELINE = [
  {
    n: 1,
    month: 'week -6',
    title: 'Chat',
    body: 'Free call. Tell us the age, the theme, the chaos level.',
    amber: true,
  },
  {
    n: 2,
    month: 'week -4',
    title: 'Theme',
    body: 'Mood-board, entertainer shortlist, fixed quote.',
    amber: false,
  },
  {
    n: 3,
    month: 'week -1',
    title: 'Confirm',
    body: 'All vendors confirmed, run-of-day finalised.',
    amber: false,
  },
  {
    n: 4,
    month: 'day 0',
    title: 'Play',
    body: 'Children arrive. Magic happens. You relax.',
    amber: false,
  },
]

const RECENT_EVENTS = [
  {
    imageStyle: 'amber-tint' as const,
    imageLabel: 'Olivia · 5th',
    category: 'November 2025',
    meta: 'Richmond',
    title: "Olivia's 5th",
    body: '25 kids · themed package · enchanted forest, face painting, puppet show.',
  },
  {
    imageLabel: 'Noah · 7th',
    category: 'October 2025',
    meta: 'Wimbledon',
    title: "Noah's 7th",
    body: '35 kids · full production · superhero theme, character performers, obstacle course.',
  },
  {
    imageLabel: 'Twins · 3rd',
    category: 'September 2025',
    meta: 'Chiswick',
    title: "Ava & Mia's 3rd",
    body: '18 kids · party box · soft play, balloon artist, teddy bears picnic.',
  },
]

const FAQS = [
  {
    q: 'What age range do you cater for?',
    a: 'Ages 1–12 primarily. For teen parties, our birthday service is a better fit — same team, different vibe.',
  },
  {
    q: 'Can you work at our home?',
    a: "Yes — about 40% of our kids parties are at home. We bring everything, set up, run it, and leave the place tidy.",
  },
  {
    q: 'Do you provide party food?',
    a: "We coordinate catering but don't cook ourselves. We work with trusted children's caterers who handle allergies and dietary needs properly.",
  },
  {
    q: 'How many adults should supervise?',
    a: "Our team handles the entertainment and flow, but we recommend at least 1 parent per 5 children for safety — especially for under-5s.",
  },
  {
    q: 'Can we request a specific character?',
    a: "Absolutely — from Elsa to Spider-Man to Bluey. We have a roster of professional character performers. Just ask.",
  },
]

export default function KidsPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Services', url: 'https://amuseevents.co.uk/services' },
    { name: 'Kids Entertainment', url: 'https://amuseevents.co.uk/services/kids' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-split-wedding">
            <div>
              <Eyebrow>Kids entertainment · ages 1–12</Eyebrow>
              <h1 className="h-display h1 hero-title-gap">
                Parties they
                <br />
                <em className="brand-accent">won&apos;t stop</em>
                <br />
                talking about.
              </h1>
              <p className="lede lede-gap">
                Themed parties, brilliant entertainers and total chaos —
                beautifully managed. You get to be a parent, not a party
                planner.
              </p>
              <div className="actions-row mt-9">
                <Btn href="/contact" variant="amber" size="lg">
                  Plan their party <ButtonArrow />
                </Btn>
                <Btn href="#packages" variant="ghost" size="lg">
                  What&apos;s included
                </Btn>
              </div>
            </div>

            <div className="wedding-gallery">
              <div className="ph amber-tint image-3-4" data-label="Kids · party" />
              <div className="ph image-3-4 wedding-gallery-offset" data-label="Kids · entertainment" />
              <div className="ph image-3-4" data-label="Kids · décor" />
              <div className="ph image-3-4" data-label="Kids · fun" />
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
              lede="Pick a starting point. Add a face painter, swap the magician. We'll re-quote same day."
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
                <h3 className={`h-display h4 mt-[18px]${pkg.featured ? ' text-paper' : ''}`}>
                  {pkg.title}
                </h3>
                <div className={`my-3.5 font-serif text-[56px] leading-none tracking-[-.03em]${pkg.featured ? ' text-paper' : ''}`}>
                  {pkg.price}
                  <span className={`font-sans text-base${pkg.featured ? ' text-paper/60' : ' text-ink-3'}`}>
                    {' '} / from
                  </span>
                </div>
                <ul className="my-6 flex list-none flex-col gap-3 p-0 text-sm">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex gap-2${pkg.featured ? ' text-paper/90' : ''}`}>
                      <IconCheck className="icon-check mt-0.5" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Btn href="/contact" variant={pkg.featured ? 'amber' : 'ghost'} className="mt-auto">
                  {pkg.cta}
                </Btn>
              </div>
            ))}
          </Reveal>

          <p className="reveal mono mt-8 text-center text-ink-3">
            all packages include the discovery call · theme consultation · vendor coordination · VAT inc.
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
              to <em className="italic">party time</em>.
            </SectionHeading>
          </Reveal>

          <Reveal className="timeline">
            <div className="timeline-line" />
            {TIMELINE.map((t) => (
              <div key={t.n} className="timeline-item">
                <div className={`timeline-dot absolute left-1/2 top-0 -translate-x-1/2 ${
                  t.amber ? 'border-0 bg-amber text-ink' : t.n === 4 ? 'border-0 bg-ink text-paper' : 'border-[1.5px] border-ink bg-paper text-ink'
                }`}>
                  {t.n}
                </div>
                <div className="mono muted text-[11px] uppercase">{t.month}</div>
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
            <SectionHeading eyebrow="Recent kids parties">
              A few from <em className="italic">last season</em>
            </SectionHeading>
            <Btn href="/contact" variant="ghost">Full portfolio <ButtonArrow /></Btn>
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
              imageLabel="Olivia · forest party"
              quote="The enchanted forest was beyond anything we imagined. Every child was mesmerised. Olivia still talks about it months later. Worth every single penny."
              initials="R"
              name="Rachel"
              where="Kids Party · Richmond · November 2025"
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
        <div className="cta-orb-lg" />
        <h2 className="h-display h2">Tell us their age.</h2>
        <p className="mt-[18px] text-lg text-ink-2">
          We&apos;ll come back within 4 hours with party ideas.
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