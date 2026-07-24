import type { Metadata } from 'next'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { ButtonArrow } from '@/components/icons/AppIcons'
import { Btn } from '@/components/ui/Btn'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Pill } from '@/components/ui/Pill'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Testimonial } from '@/components/ui/Testimonial'
import { CtaPanel } from '@/components/ui/CtaPanel'

export const metadata: Metadata = {
  title: 'Corporate & Office Events London',
  description:
    'Discreet, on-time, on-brand. Corporate launches, conferences, summer parties, off-sites and awards nights for London\'s leading firms since 2014.',
  alternates: { canonical: 'https://amuseevents.co.uk/corporate' },
  openGraph: {
    title: 'Corporate Events — Amuse Events',
    description: 'Six formats, one signature: it just runs. Delivered for fintech, agencies, family offices and law firms.',
    url: 'https://amuseevents.co.uk/corporate',
  },
}

const FORMATS = [
  { n: '01', title: 'Product launches', body: 'From 30-guest press dinners to 600-guest reveals. Full stage, AV, hospitality.' },
  { n: '02', title: 'Conferences', body: 'Single-day, multi-day, hybrid. Speaker management, run-sheets, breakouts.' },
  { n: '03', title: 'Summer & winter parties', body: 'The annual one. Venue, food, music, the small army that makes it look easy.' },
  { n: '04', title: 'Off-sites & retreats', body: 'UK and EU. Logistics, agenda design, optional facilitation partner.' },
  { n: '05', title: 'Awards nights', body: 'Nominations, judging, room flow, hosting talent, the lot.' },
  { n: '06', title: 'Brand activations', body: 'Pop-ups, experiential, partner events. Built fast, briefed crisply.' },
]

const CASE_STUDIES = [
  {
    img: 'dark', label: 'Atlas · NYE', date: 'December 2025 · Canary Wharf',
    title: 'Atlas Group · NYE party',
    body: '280 guests, full takeover of a Wharf rooftop, two stages, four-course dinner, 2am close. Brief: "make us the office everyone wants to be at next year."',
    pills: ['280 guests', '10-week lead', '£68k'],
  },
  {
    img: '', label: 'Northbank Studio · launch', date: 'October 2025 · Soho',
    title: 'Northbank Studio · launch',
    body: 'Press & client launch for a new agency identity. Editorial dinner for 80 in a converted warehouse, custom installation, three-course tasting menu.',
    pills: ['80 guests', '6-week lead', '£24k'],
  },
]

export default function CorporatePage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Corporate', url: 'https://amuseevents.co.uk/corporate' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* ── Page hero (aubergine) ───────────────────────── */}
      <section className="page-hero aubergine-section border-0">
        <div className="container">
          <div className="hero-split-corporate">
            <div>
              <div className="pb-4 pt-4 md:pb-6">
                <Eyebrow>Corporate &amp; office events</Eyebrow>
              </div>

              <h1 className="h-display h1 hero-title-gap">
                Discreet,<br />on time,<br />
                <em className="brand-accent">on brand</em>.
              </h1>

              <p className="lede lede-gap">
                Launches, conferences, summer parties, off-sites, awards nights. We've delivered
                for fintech, agencies, family offices and law firms — quietly, since 2014.
              </p>

              <div className="actions-row mt-6 flex-wrap md:mt-9">
                <Btn href="/contact" variant="amber" size="lg">
                  Brief us in 5 minutes <ButtonArrow />
                </Btn>
                <Btn
                  href="#case-studies"
                  variant="ghost"
                  size="lg"
                  className="!border !border-line !text-paper hover:!border-line hover:!text-paper hover:!bg-transparent"
                >
                  See case studies
                </Btn>
              </div>
            </div>

            <div className="ph dark image-4-5 hidden md:block" data-label="Corporate launch · stage build" />
          </div>
        </div>
      </section>

      {/* ── Trust logos ────────────────────────────────── */}
      <section className="section-page-short section-bordered">
        <div className="container">
          <p className="mono mb-6 text-center uppercase tracking-[.14em] text-ink-3 md:mb-8">
            Trusted by — anonymised on request
          </p>
          <Reveal className="grid grid-cols-2 items-center gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {['Fintech', 'Law firm', 'Agency', 'Hotel group', 'Family office', 'Tech start-up'].map((label) => (
              <div key={label} className="ph image-logo" data-label={label} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── What we deliver ────────────────────────────── */}
      <section className="section-page">
        <div className="container">
          <Reveal className="section-heading-narrow mb-10 pb-2 pt-6 md:mb-16 md:pt-10">
            <div className="mb-4">
              <Eyebrow>— what we deliver —</Eyebrow>
            </div>

            <SectionHeading>
              Six formats,<br />
              <em className="italic">one signature</em>: it just runs.
            </SectionHeading>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FORMATS.map((f) => (
              <div key={f.n} className="card">
                <Pill variant="amber">{f.n}</Pill>
                <h3 className="serif-card-title-lg !font-semibold my-3.5 mb-2">
                  {f.title}
                </h3>
                <p className="muted text-sm">{f.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Case studies ───────────────────────────────── */}
      <section id="case-studies" className="section-page bg-paper-2">
        <div className="container">
          <Reveal className="section-heading-narrow mb-10 pb-2 pt-6 md:mb-16 md:pt-10">
            <div className="mb-4">
              <Eyebrow>— recent —</Eyebrow>
            </div>

            <SectionHeading>
              Two from <em className="italic">this year</em>
            </SectionHeading>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CASE_STUDIES.map((c) => (
              <div key={c.title} className="card !p-0 overflow-hidden">
                <div
                  className={`ph image-16-9 rounded-none ${c.img ? c.img : ''}`}
                  data-label={c.label}
                />

                <div className="px-5 pb-6 pt-3 md:px-8 md:pb-8">
                  <p className="mono mb-3 text-[11px] uppercase tracking-[.14em] text-ink-3">
                    {c.date}
                  </p>
                  <h3 className="serif-card-title-lg !font-semibold mb-3">
                    {c.title}
                  </h3>
                  <p className="muted text-sm mb-4">{c.body}</p>
                  <div className="chip-row flex-wrap">
                    {c.pills.map((pill) => (
                      <span key={pill} className="chip !bg-paper-2">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Testimonial ────────────────────────────────── */}
      <section className="section-page">
        <div className="container">
          <Reveal>
            <Testimonial
              imageStyle="dark"
              imageLabel="Atlas team"
              quote="Booked them for our launch. Marquee, sound, food — one team, zero stress. They write the run-sheet better than our own ops people."
              initials="RA"
              name="Raj Aggarwal · Head of Brand"
              where="Atlas Group · Canary Wharf"
            />
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <CtaPanel variant="dark" sectionClass="section-page-deep-bottom">
        <h2 className="h-display h2 text-paper">
          Brief us in <em className="brand-accent">five minutes</em>.
        </h2>
        <p className="mx-auto mt-[18px] max-w-[52ch] text-lg text-paper/75">
          NDA on request. Procurement-friendly invoicing. We work with internal events teams
          or take it end-to-end.
        </p>
        <div className="actions-center mt-9">
          <Btn href="/contact" variant="amber" size="lg">
            Send a brief <ButtonArrow />
          </Btn>
        </div>
      </CtaPanel>
    </>
  )
}