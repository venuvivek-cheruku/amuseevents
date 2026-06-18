import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { ButtonArrow, RatingStars } from '@/components/icons/AppIcons'

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
              <span className="eyebrow">Corporate &amp; office events</span>
              <h1 className="h-display h1 hero-title-gap">
                Discreet,<br />on time,<br />
                <em className="brand-accent">on brand</em>.
              </h1>
              <p className="lede lede-gap">
                Launches, conferences, summer parties, off-sites, awards nights. We've delivered
                for fintech, agencies, family offices and law firms — quietly, since 2014.
              </p>
              <div className="actions-row mt-9">
                <Link href="/contact" className="btn btn-amber btn-lg">
                  Brief us in 5 minutes <ButtonArrow />
                </Link>
                <a href="#case-studies" className="btn btn-ghost btn-lg btn-paper-outline">
                  See case studies
                </a>
              </div>
            </div>
            <div className="ph dark image-4-5" data-label="Corporate launch · stage build" />
          </div>
        </div>
      </section>

      {/* ── Trust logos ────────────────────────────────── */}
      <section className="section-page-short section-bordered">
        <div className="container">
          <p className="mono mb-8 text-center uppercase tracking-[.14em] text-ink-3">
            Trusted by — anonymised on request
          </p>
          <Reveal className="grid-6-logos">
            {['Fintech', 'Law firm', 'Agency', 'Hotel group', 'Family office', 'Tech start-up'].map((label) => (
              <div key={label} className="ph image-logo" data-label={label} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── What we deliver ────────────────────────────── */}
      <section className="section-page">
        <div className="container">
          <Reveal className="section-heading-narrow mb-16">
            <span className="eyebrow">— what we deliver —</span>
            <h2 className="h-display h2 title-gap">
              Six formats,<br />
              <em className="italic">one signature</em>: it just runs.
            </h2>
          </Reveal>
          <Reveal className="grid-3-cards">
            {FORMATS.map((f) => (
              <div key={f.n} className="card">
                <span className="pill amber">{f.n}</span>
                <h3 className="serif-card-title-lg my-3.5 mb-2">{f.title}</h3>
                <p className="muted text-sm">{f.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Case studies ───────────────────────────────── */}
      <section id="case-studies" className="section-page section-paper-2">
        <div className="container">
          <Reveal className="mb-14">
            <span className="eyebrow">— recent —</span>
            <h2 className="h-display h2 title-gap">
              Three from <em className="italic">this year</em>
            </h2>
          </Reveal>
          <Reveal className="grid-2-cards">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.title} className="card card-flat">
                <div className={`ph image-16-9${cs.img ? ' ' + cs.img : ''}`} data-label={cs.label} />
                <div className="card-pad">
                  <div className="mono muted mb-3 uppercase">— {cs.date}</div>
                  <h3 className="h-display h4">{cs.title}</h3>
                  <p className="muted mt-3">{cs.body}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-5">
                    {cs.pills.map((p) => <span key={p} className="pill">{p}</span>)}
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
            <div className="testimonial">
              <div className="ph dark" data-label="Atlas team" />
              <div>
                <div className="stars"><RatingStars /></div>
                <p className="quote mt-3.5">
                  Booked them for our launch. Marquee, sound, food — one team, zero stress.
                  They write the run-sheet better than our own ops people.
                </p>
                <div className="meta">
                  <div className="av">RA</div>
                  <div>
                    <div className="name">Raj Aggarwal · Head of Brand</div>
                    <div className="where">Atlas Group · Canary Wharf</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="section-page-deep-bottom">
        <div className="container">
          <Reveal
            data-scroll="cta"
            className="panel-cta panel-cta-dark panel-center"
          >
            <h2 className="h-display h2 text-paper">
              Brief us in <em className="brand-accent">five minutes</em>.
            </h2>
            <p className="mx-auto mt-[18px] max-w-[52ch] text-lg text-paper/75">
              NDA on request. Procurement-friendly invoicing. We work with internal events teams
              or take it end-to-end.
            </p>
            <div className="actions-center mt-9">
              <Link href="/contact" className="btn btn-amber btn-lg">
                Send a brief <ButtonArrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
