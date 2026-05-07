import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Wedding Planning London',
  description:
    'Three wedding packages from £1,400. Day-of coordination to full design and planning. Ceremony to last dance — held with care.',
  alternates: { canonical: 'https://amuseevents.co.uk/weddings' },
  openGraph: {
    title: 'Weddings — Amuse Events',
    description: 'Three packages. No hidden anything. Eleven years, two hundred weddings, one promise.',
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
    features: ['Two coordinators on the day', 'Vendor handover from week -2', 'Detailed run-of-day timeline', 'Ceremony & reception flow', 'Set-up & pack-down'],
    cta: 'Choose Essential',
    featured: false,
  },
  {
    pill: 'Most chosen',
    title: 'Partial planning',
    price: '£4,200',
    desc: 'For couples with the venue locked, the rest still in the cloud.',
    features: ['Everything in Essential', 'Up to 5 vendor sourcings', 'Styling direction & mood-board', 'Monthly check-ins from booking', '3-hour pre-day rehearsal', 'Three coordinators on the day'],
    cta: 'Choose Partial',
    featured: true,
  },
  {
    pill: 'Full',
    title: 'Full planning & design',
    price: '£8,800',
    desc: 'For couples who want to hand it over. We design the day from blank page.',
    features: ['Everything in Partial', 'Bespoke design system', 'Venue sourcing', 'Unlimited vendor sourcing', 'Production & staging', 'Four-person team on the day'],
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

const FAQS = [
  { q: 'Do you travel outside London?', a: 'Up to 90 minutes from central London is included in any package. Further afield is on request — we do about 8 destination weddings a year.' },
  { q: 'Can we mix & match the packages?', a: 'Yes. Every package is a starting shape, not a contract. After the first call we tend to add or drop items so it fits your specific day.' },
  { q: "What if our date isn't free?", a: "We'll be honest within the hour. If we can't take it, we'll recommend three planners we'd happily hand the day to." },
  { q: 'How do we hold a date?', a: '20% deposit after the consultation. Fully refundable for 14 days, no questions asked.' },
  { q: 'Do you do small weddings?', a: 'Yes — our smallest last year was 14 guests in a Soho speakeasy. Small days deserve as much care as the big ones.' },
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
      <section className="page-hero">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'end' }}>
            <div>
              <span className="eyebrow">Weddings · the calm way</span>
              <h1 className="h-display h1" style={{ marginTop: 24 }}>
                Your wedding,<br />
                <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>held quietly</em><br />
                by people who care.
              </h1>
              <p className="lede" style={{ marginTop: 28 }}>
                Eleven years. Two hundred weddings. One promise — nothing on the day
                surprises you except the good bits.
              </p>
              <div className="row" style={{ gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-amber btn-lg">
                  Check 2026 availability <span className="arrow">→</span>
                </Link>
                <a href="#packages" className="btn btn-ghost btn-lg">See packages</a>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div className="ph amber-tint" data-label="Wedding · ceremony" style={{ aspectRatio: '3/4' }} />
              <div className="ph" data-label="Wedding · reception" style={{ aspectRatio: '3/4', marginTop: 32 }} />
              <div className="ph" data-label="Wedding · couple" style={{ aspectRatio: '3/4' }} />
              <div className="ph" data-label="Wedding · detail" style={{ aspectRatio: '3/4' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages ───────────────────────────────────── */}
      <section id="packages" style={{ padding: '120px 0', background: 'var(--paper-2)' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow center">— pricing —</span>
            <h2 className="h-display h2" style={{ marginTop: 18 }}>
              Three packages.<br />
              <em style={{ fontStyle: 'italic' }}>No hidden anything.</em>
            </h2>
            <p className="lede" style={{ margin: '24px auto 0' }}>
              Pick a starting point. Move things in or out. We'll re-quote in 24 hours, no questions.
            </p>
          </Reveal>

          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, alignItems: 'stretch' }}>
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.title}
                className="card"
                style={{
                  display: 'flex', flexDirection: 'column',
                  ...(pkg.featured ? { background: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' } : {}),
                }}
              >
                <span
                  className="pill"
                  style={{
                    alignSelf: 'flex-start',
                    ...(pkg.featured ? { background: 'var(--amber)', color: '#fff', borderColor: 'var(--amber)' } : {}),
                  }}
                >
                  {pkg.pill}
                </span>
                <h3 className="h-display h4" style={{ marginTop: 18, ...(pkg.featured ? { color: 'var(--paper)' } : {}) }}>
                  {pkg.title}
                </h3>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 56, lineHeight: 1, margin: '14px 0', letterSpacing: '-.03em', ...(pkg.featured ? { color: 'var(--paper)' } : {}) }}>
                  {pkg.price}
                  <span style={{ fontSize: 16, color: pkg.featured ? 'rgba(246,241,232,.6)' : 'var(--ink-3)', fontFamily: 'var(--sans)' }}>
                    {' '}/ from
                  </span>
                </div>
                <p style={{ fontSize: 14, color: pkg.featured ? 'rgba(246,241,232,.7)' : 'var(--ink-3)' }}>{pkg.desc}</p>
                <ul style={{ margin: '24px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ color: pkg.featured ? 'rgba(246,241,232,.9)' : 'inherit' }}>✓ {f}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn ${pkg.featured ? 'btn-amber' : 'btn-ghost'}`}
                  style={{ marginTop: 'auto' }}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </Reveal>

          <p className="reveal mono" style={{ textAlign: 'center', marginTop: 32, color: 'var(--ink-3)' }}>
            all packages include the discovery call · mood-board · vendor playbook · VAT inc.
          </p>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────── */}
      <section style={{ padding: '140px 0' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow center">— the journey —</span>
            <h2 className="h-display h2" style={{ marginTop: 18 }}>
              From <em style={{ fontStyle: 'italic' }}>first call</em><br />
              to <em style={{ fontStyle: 'italic' }}>last dance</em>.
            </h2>
          </Reveal>

          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 24, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 16, left: '8%', right: '8%', height: 1, background: 'var(--line)' }} />
            {TIMELINE.map((t) => (
              <div key={t.n} style={{ position: 'relative', paddingTop: 48, textAlign: 'center' }}>
                <div style={{
                  position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                  width: 32, height: 32, borderRadius: '50%',
                  background: t.amber ? 'var(--amber)' : t.n === 5 ? 'var(--ink)' : 'var(--paper)',
                  color: t.amber ? '#fff' : t.n === 5 ? 'var(--paper)' : 'var(--ink)',
                  border: !t.amber && t.n !== 5 ? '1.5px solid var(--ink)' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 600,
                }}>
                  {t.n}
                </div>
                <div className="mono muted" style={{ textTransform: 'uppercase', fontSize: 11 }}>{t.month}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, margin: '8px 0', letterSpacing: '-.015em' }}>{t.title}</h3>
                <p className="muted" style={{ fontSize: 13 }}>{t.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Recent weddings ────────────────────────────── */}
      <section style={{ padding: '60px 0 140px', background: 'var(--paper-2)' }}>
        <div className="container">
          <Reveal className="row-between" style={{ alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
            <div>
              <span className="eyebrow">Recent weddings</span>
              <h2 className="h-display h2" style={{ marginTop: 18 }}>
                A few from <em style={{ fontStyle: 'italic' }}>last season</em>
              </h2>
            </div>
            <Link href="/contact" className="btn btn-ghost">Full portfolio <span className="arrow">→</span></Link>
          </Reveal>

          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              { img: 'amber-tint', label: 'P&D · Richmond', cat: 'September 2025', where: 'Richmond Hill', title: 'Priya & Daniel', desc: '140 guests · partial planning · garden ceremony, marquee dinner, late-night DJ.' },
              { img: '', label: 'A&S · Twickenham', cat: 'August 2025', where: 'Twickenham', title: 'Aisha & Sam', desc: '90 guests · full planning · intimate boathouse, vegan menu, sunset Sufi singers.' },
              { img: '', label: 'N&K · Chiswick', cat: 'July 2025', where: 'Chiswick', title: 'Nadia & Karim', desc: '200 guests · full + production · two-day Punjabi-Lebanese fusion.' },
            ].map((w) => (
              <div key={w.title} className="article">
                <div className={`ph ph-tall${w.img ? ' ' + w.img : ''}`} data-label={w.label} />
                <div className="meta"><span className="cat">— {w.cat} —</span><span>{w.where}</span></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
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
              <div className="ph amber-tint" data-label="P&D candid · garden" />
              <div>
                <div className="stars">★★★★★</div>
                <p className="quote" style={{ marginTop: 14 }}>
                  We handed them a mood board and a guest list and they handled everything else.
                  On the day we were genuinely just guests at our own wedding. Worth every penny.
                </p>
                <div className="meta">
                  <div className="av">P&amp;D</div>
                  <div>
                    <div className="name">Priya &amp; Daniel</div>
                    <div className="where">Wedding · Richmond Hill · September 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'var(--paper-2)' }}>
        <div className="container">
          <Reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 120 }}>
              <span className="eyebrow">— FAQ —</span>
              <h2 className="h-display h2" style={{ marginTop: 18 }}>
                The questions<br />we hear <em style={{ fontStyle: 'italic' }}>most</em>.
              </h2>
            </div>
            <div>
              {FAQS.map((faq, i) => (
                <details
                  key={faq.q}
                  style={{ borderBottom: '1px solid var(--line)', padding: '24px 0' }}
                  open={i === 0}
                >
                  <summary style={{
                    cursor: 'pointer', fontFamily: 'var(--serif)', fontSize: 22,
                    letterSpacing: '-.015em', listStyle: 'none',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    {faq.q}
                    <span style={{ color: 'var(--amber)', fontSize: 28, fontStyle: 'italic' }}>+</span>
                  </summary>
                  <p style={{ marginTop: 16, color: 'var(--ink-3)' }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <Reveal
            data-scroll="cta"
            style={{ background: 'var(--amber)', borderRadius: 32, padding: 80, color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: -100, right: -100, width: 360, height: 360, borderRadius: '50%', background: 'rgba(255,255,255,.08)' }} />
            <h2 className="h-display h2" style={{ color: '#fff' }}>Tell us your date.</h2>
            <p style={{ marginTop: 18, fontSize: 18, color: 'rgba(255,255,255,.9)' }}>
              We'll come back within 4 hours, every time.
            </p>
            <div className="row" style={{ gap: 14, marginTop: 32, justifyContent: 'center' }}>
              <Link href="/contact" className="btn" style={{ background: '#fff', color: 'var(--amber-2)', height: 60, fontSize: 16, padding: '0 32px' }}>
                Check availability <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
