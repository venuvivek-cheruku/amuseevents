// app/services/outdoor/page.tsx

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
  title: 'Outdoor Events London — Amuse Events',
  description:
    'Outdoor event packages from £2,500. Garden parties, festivals, fêtes and open-air celebrations — weather-planned, beautifully delivered.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/outdoor' },
  openGraph: {
    title: 'Outdoor Events — Amuse Events',
    description: 'Garden parties, festivals and open-air celebrations — rain or shine.',
    url: 'https://amuseevents.co.uk/services/outdoor',
    images: [{ url: '/assets/og-outdoor.jpg', width: 1200, height: 630 }],
  },
}

const PACKAGES = [
  {
    pill: 'Garden',
    title: 'Garden party',
    price: '£2,500',
    features: [
      'Up to 60 guests',
      'Marquee or sail shade setup',
      'Outdoor furniture & styling',
      'Catering coordination',
      'One coordinator on-site',
    ],
    cta: 'Choose Garden',
    featured: false,
  },
  {
    pill: 'Most chosen',
    title: 'Full outdoor event',
    price: '£6,500',
    features: [
      'Everything in Garden',
      'Up to 200 guests',
      'Stretch tent or tipi hire',
      'Power, lighting & PA system',
      'Bar & food stall coordination',
      'Two coordinators on-site',
    ],
    cta: 'Choose Full Outdoor',
    featured: true,
  },
  {
    pill: 'Festival',
    title: 'Festival production',
    price: '£15,000',
    features: [
      'Everything in Full Outdoor',
      'Unlimited capacity',
      'Multi-stage production',
      'Generator & infrastructure',
      'Talent booking & artist liaison',
      'Full production team on-site',
    ],
    cta: 'Choose Festival',
    featured: false,
  },
]

const TIMELINE = [
  {
    n: 1,
    month: 'month -4',
    title: 'Recce',
    body: 'Free site visit. We assess ground, access, power, weather exposure.',
    amber: true,
  },
  {
    n: 2,
    month: 'month -3',
    title: 'Plan',
    body: 'Site plan, weather contingency, vendor shortlist, fixed quote.',
    amber: false,
  },
  {
    n: 3,
    month: 'week -1',
    title: 'Build',
    body: 'Structures up, power on, sound checked, décor placed.',
    amber: false,
  },
  {
    n: 4,
    month: 'day 0',
    title: 'Enjoy',
    body: "Gates open. Sun or rain — we've planned for both.",
    amber: false,
  },
]

const RECENT_EVENTS = [
  {
    imageStyle: 'amber-tint' as const,
    imageLabel: 'Garden · Richmond',
    category: 'August 2025',
    meta: 'Richmond',
    title: 'Richmond Garden Party',
    body: '120 guests · full outdoor · riverside marquee, hog roast, live acoustic.',
  },
  {
    imageLabel: 'Festival · Kent',
    category: 'July 2025',
    meta: 'Kent',
    title: 'Summer Festival',
    body: '500 guests · festival production · two stages, 12 acts, glamping village.',
  },
  {
    imageLabel: 'Fête · Hampstead',
    category: 'June 2025',
    meta: 'Hampstead',
    title: 'Village Fête',
    body: '300 guests · garden package · charity fête, vintage stalls, brass band.',
  },
]

const FAQS = [
  {
    q: 'What happens if it rains?',
    a: "Every outdoor event we plan has a weather contingency — covered structures, rain-proof stages and a Plan B timeline. We monitor forecasts from 72 hours out.",
  },
  {
    q: 'Do you handle permits and licensing?',
    a: "Yes — we manage council permits, road closures, TENs licenses and environmental health notifications. It's all included.",
  },
  {
    q: 'Can you work in our garden?',
    a: "Absolutely — about half our outdoor events are in private gardens. We'll do a site visit to check access, ground conditions and power availability.",
  },
  {
    q: 'What about toilets?',
    a: 'We source luxury portable toilets for any event without fixed facilities. Nobody notices them — which is the point.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Ideally 3–4 months for full outdoor events, 6+ months for festival-scale. Summer weekends book fast.',
  },
]

export default function OutdoorPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Services', url: 'https://amuseevents.co.uk/services' },
    { name: 'Outdoor Events', url: 'https://amuseevents.co.uk/services/outdoor' },
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
                <Link href="/services">Services</Link> / <b>Outdoor events</b>
              </div>
              <Eyebrow>Outdoor events · rain or shine</Eyebrow>
              <h1 className="h-display h1 hero-title-gap">
                Take it
                <br />
                <em className="brand-accent">outside.</em>
                <br />
                We&apos;ll handle the sky.
              </h1>
              <p className="lede lede-gap">
                Garden parties, festivals and open-air celebrations —
                weather-planned, permit-handled, beautifully delivered.
              </p>
              <div className="actions-row mt-9">
                <Btn href="/contact" variant="amber" size="lg">
                  Plan my event <ButtonArrow />
                </Btn>
                <Btn href="#packages" variant="ghost" size="lg">
                  What&apos;s included
                </Btn>
              </div>
            </div>

            <div className="wedding-gallery">
              <div
                className="ph amber-tint image-3-4"
                data-label="Outdoor · marquee"
              />
              <div
                className="ph image-3-4 wedding-gallery-offset"
                data-label="Outdoor · festival"
              />
              <div className="ph image-3-4" data-label="Outdoor · garden" />
              <div className="ph image-3-4" data-label="Outdoor · sunset" />
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
              lede="Pick a starting point. Scale up or down. We'll re-quote same day."
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
            all packages include the site visit · weather plan · vendor
            coordination · VAT inc.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-page-xl">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— how it works —" center>
              From <em className="italic">site visit</em>
              <br />
              to <em className="italic">gates open</em>.
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
            <SectionHeading eyebrow="Recent outdoor events">
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
              imageLabel="Garden · Richmond"
              quote="It rained at 3pm. By 3:15 every guest was under cover with a drink in hand. They'd planned for it down to the minute. The party didn't skip a beat."
              initials="M"
              name="Michael"
              where="Garden Party · Richmond · August 2025"
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
        <h2 className="h-display h2">Tell us the location.</h2>
        <p className="mt-[18px] text-lg text-ink-2">
          We&apos;ll come back within 4 hours with a site plan.
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