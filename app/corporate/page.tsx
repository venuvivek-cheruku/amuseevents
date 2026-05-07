import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'

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
      <section className="page-hero aubergine-section" style={{ border: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'end' }}>
            <div>
              <span className="eyebrow">Corporate &amp; office events</span>
              <h1 className="h-display h1" style={{ marginTop: 24 }}>
                Discreet,<br />on time,<br />
                <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>on brand</em>.
              </h1>
              <p className="lede" style={{ marginTop: 28 }}>
                Launches, conferences, summer parties, off-sites, awards nights. We've delivered
                for fintech, agencies, family offices and law firms — quietly, since 2014.
              </p>
              <div className="row" style={{ gap: 12, marginTop: 36 }}>
                <Link href="/contact" className="btn btn-amber btn-lg">
                  Brief us in 5 minutes <span className="arrow">→</span>
                </Link>
                <a href="#case-studies" className="btn btn-ghost btn-lg" style={{ color: 'var(--paper)', borderColor: 'rgba(246,241,232,.4)' }}>
                  See case studies
                </a>
              </div>
            </div>
            <div className="ph dark" data-label="Corporate launch · stage build" style={{ aspectRatio: '4/5' }} />
          </div>
        </div>
      </section>

      {/* ── Trust logos ────────────────────────────────── */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <p className="mono" style={{ textAlign: 'center', color: 'var(--ink-3)', marginBottom: 32, letterSpacing: '.14em', textTransform: 'uppercase' }}>
            Trusted by — anonymised on request
          </p>
          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 24, alignItems: 'center' }}>
            {['Fintech ◆', 'Law firm ◆', 'Agency ◆', 'Hotel group ◆', 'Family office ◆', 'Tech start-up ◆'].map((label) => (
              <div key={label} className="ph" data-label={label} style={{ aspectRatio: '5/2', background: 'var(--paper-2)' }} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── What we deliver ────────────────────────────── */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <Reveal style={{ marginBottom: 64, maxWidth: 720 }}>
            <span className="eyebrow">— what we deliver —</span>
            <h2 className="h-display h2" style={{ marginTop: 18 }}>
              Six formats,<br />
              <em style={{ fontStyle: 'italic' }}>one signature</em>: it just runs.
            </h2>
          </Reveal>
          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {FORMATS.map((f) => (
              <div key={f.n} className="card">
                <span className="pill amber">{f.n}</span>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, margin: '14px 0 8px', letterSpacing: '-.015em' }}>{f.title}</h3>
                <p className="muted" style={{ fontSize: 14 }}>{f.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Case studies ───────────────────────────────── */}
      <section id="case-studies" style={{ padding: '120px 0', background: 'var(--paper-2)' }}>
        <div className="container">
          <Reveal style={{ marginBottom: 56 }}>
            <span className="eyebrow">— recent —</span>
            <h2 className="h-display h2" style={{ marginTop: 18 }}>
              Three from <em style={{ fontStyle: 'italic' }}>this year</em>
            </h2>
          </Reveal>
          <Reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {CASE_STUDIES.map((cs) => (
              <div key={cs.title} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div className={`ph${cs.img ? ' ' + cs.img : ''}`} data-label={cs.label} style={{ aspectRatio: '16/9' }} />
                <div style={{ padding: 32 }}>
                  <div className="mono muted" style={{ textTransform: 'uppercase', marginBottom: 12 }}>— {cs.date}</div>
                  <h3 className="h-display h4">{cs.title}</h3>
                  <p className="muted" style={{ marginTop: 12 }}>{cs.body}</p>
                  <div className="row" style={{ gap: 16, marginTop: 20, flexWrap: 'wrap' }}>
                    {cs.pills.map((p) => <span key={p} className="pill">{p}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Testimonial ────────────────────────────────── */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <Reveal>
            <div className="testimonial">
              <div className="ph dark" data-label="Atlas team" />
              <div>
                <div className="stars">★★★★★</div>
                <p className="quote" style={{ marginTop: 14 }}>
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
      <section style={{ padding: '80px 0 120px' }}>
        <div className="container">
          <Reveal
            data-scroll="cta"
            style={{ background: 'var(--ink)', color: 'var(--paper)', borderRadius: 32, padding: 80, textAlign: 'center' }}
          >
            <h2 className="h-display h2" style={{ color: 'var(--paper)' }}>
              Brief us in <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>five minutes</em>.
            </h2>
            <p style={{ margin: '18px auto 0', fontSize: 18, color: 'rgba(246,241,232,.75)', maxWidth: '52ch' }}>
              NDA on request. Procurement-friendly invoicing. We work with internal events teams
              or take it end-to-end.
            </p>
            <div className="row" style={{ gap: 14, marginTop: 36, justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-amber btn-lg">
                Send a brief <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
