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
  title: 'Wedding Planning London',
  description:
    'Three wedding packages from £1,400. Day-of coordination to full design and planning. Ceremony to last dance — held with care.',
  alternates: { canonical: 'https://amuseevents.co.uk/weddings' },
  openGraph: {
    title: 'Weddings — Amuse Events',
    description:
      'Three packages. No hidden anything. Eleven years, two hundred weddings, one promise.',
    url: 'https://amuseevents.co.uk/weddings',
    images: [{ url: '/assets/og-weddings.jpg', width: 1200, height: 630 }],
  },
}

const PACKAGES = [
  {
    pill: 'Essential',
    title: 'Day-of coordination',
    price: '£1,400',
    desc: "For couples who've planned it themselves and need calm hands on the day.",
    features: [
      'Two coordinators on the day',
      'Vendor handover from week -2',
      'Detailed run-of-day timeline',
      'Ceremony & reception flow',
      'Set-up & pack-down',
    ],
    cta: 'Choose Essential',
    featured: false,
  },
  {
    pill: 'Most chosen',
    title: 'Partial planning',
    price: '£4,200',
    desc: 'For couples with the venue locked, the rest still in the cloud.',
    features: [
      'Everything in Essential',
      'Up to 5 vendor sourcings',
      'Styling direction & mood-board',
      'Monthly check-ins from booking',
      '3-hour pre-day rehearsal',
      'Three coordinators on the day',
    ],
    cta: 'Choose Partial',
    featured: true,
  },
  {
    pill: 'Full',
    title: 'Full planning & design',
    price: '£8,800',
    desc: 'For couples who want to hand it over. We design the day from blank page.',
    features: [
      'Everything in Partial',
      'Bespoke design system',
      'Venue sourcing',
      'Unlimited vendor sourcing',
      'Production & staging',
      'Four-person team on the day',
    ],
    cta: 'Choose Full',
    featured: false,
  },
]

const TIMELINE = [
  { n: 1, month: 'month -9', title: 'Discover', body: 'Free call. Coffee in Isleworth. We listen.', amber: true },
  { n: 2, month: 'month -7', title: 'Shape', body: 'One-page plan. Fixed quote. You approve.', amber: false },
  { n: 3, month: 'month -5', title: 'Source', body: 'Venue, food, music, flowers, all the rest.', amber: false },
  { n: 4, month: 'month -2', title: 'Rehearse', body: 'Walk-through. Run-of-day. Briefings.', amber: false },
  { n: 5, month: 'day 0', title: 'Run', body: 'You arrive. You enjoy. We hold the rest.', amber: false },
]

const RECENT_WEDDINGS = [
  {
    imageStyle: 'amber-tint' as const,
    imageLabel: 'P&D · Richmond',
    category: 'September 2025',
    meta: 'Richmond Hill',
    title: 'Priya & Daniel',
    body: '140 guests · partial planning · garden ceremony, marquee dinner, late-night DJ.',
  },
  {
    imageLabel: 'A&S · Twickenham',
    category: 'August 2025',
    meta: 'Twickenham',
    title: 'Aisha & Sam',
    body: '90 guests · full planning · intimate boathouse, vegan menu, sunset Sufi singers.',
  },
  {
    imageLabel: 'N&K · Chiswick',
    category: 'July 2025',
    meta: 'Chiswick',
    title: 'Nadia & Karim',
    body: '200 guests · full + production · two-day Punjabi-Lebanese fusion.',
  },
]

const FAQS = [
  {
    q: 'Do you travel outside London?',
    a: 'Up to 90 minutes from central London is included in any package. Further afield is on request — we do about 8 destination weddings a year.',
  },
  {
    q: 'Can we mix & match the packages?',
    a: 'Yes. Every package is a starting shape, not a contract. After the first call we tend to add or drop items so it fits your specific day.',
  },
  {
    q: "What if our date isn't free?",
    a: "We'll be honest within the hour. If we can't take it, we'll recommend three planners we'd happily hand the day to.",
  },
  {
    q: 'How do we hold a date?',
    a: '20% deposit after the consultation. Fully refundable for 14 days, no questions asked.',
  },
  {
    q: 'Do you do small weddings?',
    a: 'Yes — our smallest last year was 14 guests in a Soho speakeasy. Small days deserve as much care as the big ones.',
  },
]

export default function WeddingsPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Weddings', url: 'https://amuseevents.co.uk/weddings' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* ── Page hero ──────────────────────────────────── */}
      <section className="pb-16 pt-0 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="hero-split-wedding">
            <div>
              <Eyebrow className="pb-4 md:pb-8">Weddings · the calm way</Eyebrow>
              <h1 className="h-display h1 hero-title-gap pt-4 md:pt-6">
                Your wedding,
                <br />
                <em className="brand-accent">held quietly</em>
                <br />
                by people who care.
              </h1>
              <p className="lede lede-gap mt-6 md:mt-10 lg:mt-20">
                Eleven years. Two hundred weddings. One promise — nothing on the day
                surprises you except the good bits.
              </p>
              <div className="actions-row mt-6 md:mt-9">
                <Btn href="/contact" variant="amber" size="lg">
                  Check 2026 availability <ButtonArrow />
                </Btn>
                <Btn href="#packages" variant="ghost" size="lg">
                  See packages
                </Btn>
              </div>
            </div>

            <div className="wedding-gallery">
              <div className="ph amber-tint image-3-4" data-label="Wedding · ceremony" />
              <div className="ph image-3-4 wedding-gallery-offset" data-label="Wedding · reception" />
              <div className="ph image-3-4" data-label="Wedding · couple" />
              <div className="ph image-3-4" data-label="Wedding · detail" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages ───────────────────────────────────── */}
      <section id="packages" className="section-page section-paper-2">
        <div className="container px-4 md:px-8">
          <Reveal className="center-intro mb-8 md:mb-12">
            <div className="flex flex-col items-center gap-6 text-center md:gap-8">
              <SectionHeading eyebrow="— pricing —" center>
                Three packages.
                <br />
                <em className="italic">No hidden anything.</em>
              </SectionHeading>

              <p className="lede mx-auto">
                Pick a starting point. Move things in or out. We'll re-quote in 24 hours, no questions.
              </p>
            </div>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.title}
                className={`card flex flex-col ${pkg.featured ? 'card-featured' : ''}`}
              >
                <span
                  className={`pill self-start !inline-flex px-[18px] py-2${
                    pkg.featured ? ' !bg-amber !text-white !border-amber' : ''
                  }`}
                >
                  {pkg.pill}
                </span>

                <h3
                  className={`h-display h4 py-[14px]${pkg.featured ? ' !text-white' : ''}`}
                >
                  {pkg.title}
                </h3>

                <div
                  className={`my-3.5 font-serif text-[40px] leading-none tracking-[-.03em] md:text-[56px]${
                    pkg.featured ? ' !text-white' : ''
                  }`}
                >
                  {pkg.price}
                  <span
                    className={`font-sans text-sm${
                      pkg.featured ? ' !text-white/60' : ' text-ink-3'
                    }`}
                  >
                    {' '}/ from
                  </span>
                </div>

                <p
                  className={`text-sm${
                    pkg.featured ? ' !text-white/70' : ' text-ink-3'
                  }`}
                >
                  {pkg.desc}
                </p>

                <ul className="my-6 flex list-none flex-col gap-3 p-0 text-sm">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex gap-2${
                        pkg.featured ? ' !text-white/90' : ''
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

          <p className="mono mt-8 text-center text-ink-3">
            all packages include the discovery call · mood-board · vendor playbook · VAT inc.
          </p>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────── */}
      <section className="section-page-xl">
        <div className="container pt-8 md:pt-12">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— the journey —" center>
              From <em className="italic">first call</em>
              <br />
              to <em className="italic">last dance</em>.
            </SectionHeading>
          </Reveal>

          <Reveal className="timeline mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">
            <div className="timeline-line hidden lg:block" />
            {TIMELINE.map((t) => (
              <div key={t.n} className="timeline-item">
                <div
                  className={`timeline-dot absolute left-1/2 top-0 -translate-x-1/2 ${
                    t.amber
                      ? 'border-0 bg-amber text-ink'
                      : t.n === 5
                        ? 'border-0 bg-ink text-paper'
                        : 'border-[1.5px] border-ink bg-paper text-ink'
                  }`}
                >
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

      {/* ── Recent weddings ────────────────────────────── */}
      <section className="section-paper-2 py-16 md:py-20">
        <div className="container">
          <Reveal className="mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4">
                <Eyebrow>Recent weddings</Eyebrow>
              </div>
              <SectionHeading>
                A few from <em className="italic">last season</em>
              </SectionHeading>
            </div>
            <Btn href="/contact" variant="ghost">
              Full portfolio <ButtonArrow />
            </Btn>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 [&_h3]:font-bold">
            {RECENT_WEDDINGS.map((w) => (
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
              imageLabel="P&D candid · garden"
              quote="We handed them a mood board and a guest list and they handled everything else. On the day we were genuinely just guests at our own wedding. Worth every penny."
              initials="P&D"
              name="Priya & Daniel"
              where="Wedding · Richmond Hill · September 2025"
            />
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className="section-paper-2 section-page-md">
        <div className="container">
          <Reveal className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <div className="mb-6">
                <Eyebrow>— FAQ —</Eyebrow>
              </div>
              <h2 className="h-display h2">
                The questions
                <br />
                we hear <em className="italic">most</em>
              </h2>
            </div>

            <div className="flex flex-col">
              <FaqList items={FAQS} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <CtaPanel variant="amber">
        <h2 className="h-display h2 !text-paper">Tell us your date.</h2>
        <p className="mt-[18px] text-lg !text-paper">
          We'll come back within 4 hours, every time.
        </p>
        <div className="actions-center mt-8">
          <Btn
            href="/contact"
            variant="primary"
            size="lg"
            className="!bg-paper !text-amber"
          >
            Check availability <ButtonArrow />
          </Btn>
        </div>
      </CtaPanel>
    </>
  )
}