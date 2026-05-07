import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'The Studio — About Amuse Events',
  description:
    'A small Isleworth studio, eleven years of saying yes carefully. Meet the team behind 640+ weddings, parties and launches across London.',
  alternates: { canonical: 'https://amuseevents.co.uk/about' },
  openGraph: {
    title: 'The Studio — Amuse Events',
    description: 'Eleven of us. One office above a flower shop. Six hundred and forty events held without losing a single one.',
    url: 'https://amuseevents.co.uk/about',
  },
}

const PRINCIPLES = [
  { n: '01', title: 'Honest pricing', body: 'Fixed quote on day one. No "small extras" the week before.' },
  { n: '02', title: 'One number', body: 'One planner per event. Direct line. All hours. End to end.' },
  { n: '03', title: 'No sub-contracting', body: 'The team you meet runs your day. No agencies in the middle.' },
  { n: '04', title: 'Small by design', body: 'We turn down work to keep care high. Six events a month, max.' },
  { n: '05', title: 'Reply in 4 hours', body: 'Including weekends. If we can\'t, you get a real reason and a real time.' },
]

const TEAM = [
  { name: 'Aanya Mehta', role: 'Founder & lead planner', img: '', label: 'Aanya · founder' },
  { name: 'Hugo Walsh', role: 'Head of weddings', img: 'amber-tint', label: 'Hugo · weddings' },
  { name: 'Priya Sharma', role: 'Head of corporate', img: '', label: 'Priya · corporate' },
  { name: 'Marcus Boateng', role: 'Head of production', img: 'dark', label: 'Marcus · production' },
  { name: 'Lucia Romero', role: 'Creative director', img: '', label: 'Lucia · creative' },
  { name: 'Sam Okafor', role: 'Operations', img: '', label: 'Sam · ops' },
  { name: 'Maya Khan', role: 'Senior planner', img: 'amber-tint', label: 'Maya · planner' },
  { name: '+ four more', role: 'Coordinators & runners', img: '', label: 'And four more', light: true },
]

const REVIEWS = [
  { stars: '★★★★★', text: '"Calm, brilliant, fairly priced. Replied on a Sunday afternoon."', av: 'JM', name: 'Jess Mitchell', where: '60th birthday · Twickenham' },
  { stars: '★★★★★', text: '"They write the run-sheet better than our own ops people."', av: 'RA', name: 'Raj Aggarwal', where: 'Atlas · Canary Wharf' },
  { stars: '★★★★★', text: '"My daughter still talks about the magician. Best money we spent."', av: 'SO', name: "Sara O'Connell", where: 'Kids party · Hounslow' },
  { stars: '★★★★★', text: '"Held our entire weekend so quietly we forgot we\'d hired anyone."', av: 'PD', name: 'Priya & Daniel', where: 'Wedding · Richmond' },
  { stars: '★★★★★', text: '"Re-quoted in 24 hours every time we changed our minds."', av: 'FK', name: 'Farah K.', where: 'Engagement · Soho' },
  { stars: '★★★★★', text: '"Honest about what they couldn\'t do. That\'s why we trusted the rest."', av: 'JT', name: 'James T.', where: 'Product launch · Shoreditch' },
]

export default function AboutPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'The Studio', url: 'https://amuseevents.co.uk/about' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* ── Page hero ──────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'end' }}>
            <div>
              <span className="eyebrow">Isleworth, London · est. 2014</span>
              <h1 className="h-display h1" style={{ marginTop: 24 }}>
                A small studio,<br />
                <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>eleven years</em><br />
                of saying yes carefully.
              </h1>
            </div>
            <p className="lede">
              Eleven of us. One office above a flower shop in Isleworth. Six hundred and forty
              events held without losing a single one.
            </p>
          </div>
        </div>
      </section>

      {/* ── Founder story ──────────────────────────────── */}
      <section style={{ padding: '120px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'center' }}>
          <div className="ph reveal" data-label="Founder · Aanya at the studio" style={{ aspectRatio: '4/5' }} />
          <Reveal>
            <span className="eyebrow">— our story —</span>
            <h2 className="h-display h2" style={{ marginTop: 18 }}>
              Started with one wedding<br />in a <em style={{ fontStyle: 'italic' }}>friend's garden</em>.
            </h2>
            <p className="body-text" style={{ marginTop: 24 }}>
              In 2014, Aanya planned her best friend's wedding in a back garden in Isleworth. It was
              sixty guests, two folding tables, a borrowed marquee and a karaoke machine. Eleven years
              later, we've held everything from a £180k product launch to a five-year-old's pirate party
              — but the brief is still the same: <strong>nothing on the day surprises you except the good bits</strong>.
            </p>
            <p className="body-text" style={{ marginTop: 18 }}>
              We stayed small on purpose. Eleven people, no juniors learning on your day, no sub-contracting
              the bits that matter. The voice you fall for in the consultation is the same one keeping
              things calm at 11pm when the rain starts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Principles ─────────────────────────────────── */}
      <section className="dark-section" style={{ padding: '140px 0', borderRadius: '32px 32px 0 0' }}>
        <div className="container">
          <Reveal style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 64px' }}>
            <span className="eyebrow center" style={{ color: 'rgba(246,241,232,.6)' }}>— five rules —</span>
            <h2 className="h-display h2" style={{ color: 'var(--paper)', marginTop: 18 }}>
              How we run<br />
              <em style={{ fontStyle: 'italic' }}>the studio</em>.
            </h2>
          </Reveal>
          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 24 }}>
            {PRINCIPLES.map((p) => (
              <div key={p.n}>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 56, color: 'var(--amber)', lineHeight: 1 }}>{p.n}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, margin: '14px 0 8px', color: 'var(--paper)' }}>{p.title}</h3>
                <p style={{ color: 'rgba(246,241,232,.65)', fontSize: 14 }}>{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────── */}
      <section id="team" style={{ padding: '140px 0' }}>
        <div className="container">
          <Reveal style={{ marginBottom: 64 }}>
            <span className="eyebrow">— the eleven —</span>
            <h2 className="h-display h2" style={{ marginTop: 18 }}>Meet the studio.</h2>
          </Reveal>
          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '32px 24px' }}>
            {TEAM.map((m) => (
              <div key={m.name}>
                <div
                  className={`ph${m.img ? ' ' + m.img : ''}`}
                  data-label={m.label}
                  style={{ aspectRatio: '1/1', borderRadius: 20, ...(m.light ? { background: 'var(--paper-2)' } : {}) }}
                />
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, margin: '16px 0 4px' }}>{m.name}</h3>
                <p className="muted" style={{ fontSize: 13 }}>{m.role}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Reviews ────────────────────────────────────── */}
      <section id="reviews" style={{ padding: '100px 0', background: 'var(--paper-2)' }}>
        <div className="container">
          <Reveal className="row-between" style={{ marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span className="eyebrow">— what people say —</span>
              <h2 className="h-display h2" style={{ marginTop: 18 }}>
                213 reviews. <em style={{ fontStyle: 'italic' }}>4.9 stars.</em>
              </h2>
            </div>
            <div className="row" style={{ gap: 16 }}>
              <span className="pill amber">Google</span>
              <span className="pill">Trustpilot</span>
              <span className="pill">Hitched</span>
            </div>
          </Reveal>
          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {REVIEWS.map((r) => (
              <div key={r.name} className="review">
                <div className="stars">{r.stars}</div>
                <p className="text">{r.text}</p>
                <div className="who">
                  <div className="av">{r.av}</div>
                  <div>
                    <div className="name">{r.name}</div>
                    <div className="where">{r.where}</div>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <Reveal
            data-scroll="cta"
            style={{ background: 'var(--amber)', borderRadius: 32, padding: 80, color: '#fff', textAlign: 'center' }}
          >
            <h2 className="h-display h2" style={{ color: '#fff' }}>Come say hi.</h2>
            <p style={{ marginTop: 18, fontSize: 18, color: 'rgba(255,255,255,.9)' }}>
              Coffee at the studio in Isleworth. No deposit, no pitch.
            </p>
            <Link href="/contact" className="btn btn-lg" style={{ background: '#fff', color: 'var(--amber-2)', marginTop: 32, display: 'inline-flex' }}>
              Book a 20-min consult <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
