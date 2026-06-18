import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { ButtonArrow, RatingStars } from '@/components/icons/AppIcons'

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
  { text: '"Calm, brilliant, fairly priced. Replied on a Sunday afternoon."', av: 'JM', name: 'Jess Mitchell', where: '60th birthday · Twickenham' },
  { text: '"They write the run-sheet better than our own ops people."', av: 'RA', name: 'Raj Aggarwal', where: 'Atlas · Canary Wharf' },
  { text: '"My daughter still talks about the magician. Best money we spent."', av: 'SO', name: "Sara O'Connell", where: 'Kids party · Hounslow' },
  { text: '"Held our entire weekend so quietly we forgot we\'d hired anyone."', av: 'PD', name: 'Priya & Daniel', where: 'Wedding · Richmond' },
  { text: '"Re-quoted in 24 hours every time we changed our minds."', av: 'FK', name: 'Farah K.', where: 'Engagement · Soho' },
  { text: '"Honest about what they couldn\'t do. That\'s why we trusted the rest."', av: 'JT', name: 'James T.', where: 'Product launch · Shoreditch' },
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
          <div className="hero-split">
            <div>
              <span className="eyebrow">Isleworth, London · est. 2014</span>
              <h1 className="h-display h1 hero-title-gap">
                A small studio,<br />
                <em className="brand-accent">eleven years</em><br />
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
      <section className="section-page">
        <div className="container content-split-reverse">
          <div className="ph reveal image-4-5" data-label="Founder · Aanya at the studio" />
          <Reveal>
            <span className="eyebrow">— our story —</span>
            <h2 className="h-display h2 title-gap">
              Started with one wedding<br />in a <em className="italic">friend's garden</em>.
            </h2>
            <p className="body-text mt-6">
              In 2014, Aanya planned her best friend's wedding in a back garden in Isleworth. It was
              sixty guests, two folding tables, a borrowed marquee and a karaoke machine. Eleven years
              later, we've held everything from a £180k product launch to a five-year-old's pirate party
              — but the brief is still the same: <strong>nothing on the day surprises you except the good bits</strong>.
            </p>
            <p className="body-text mt-[18px]">
              We stayed small on purpose. Eleven people, no juniors learning on your day, no sub-contracting
              the bits that matter. The voice you fall for in the consultation is the same one keeping
              things calm at 11pm when the rain starts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Principles ─────────────────────────────────── */}
      <section className="dark-section section-page-xl section-rounded-dark">
        <div className="container">
          <Reveal className="center-intro">
            <span className="eyebrow center text-paper-muted">— five rules —</span>
            <h2 className="h-display h2 title-gap text-paper">
              How we run<br />
              <em className="italic">the studio</em>.
            </h2>
          </Reveal>
          <Reveal className="grid-5-cards">
            {PRINCIPLES.map((p) => (
              <div key={p.n}>
                <div className="serif-accent text-[56px]">{p.n}</div>
                <h3 className="serif-card-title my-3.5 mb-2 text-paper">{p.title}</h3>
                <p className="small-paper-muted">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────── */}
      <section id="team" className="section-page-xl">
        <div className="container">
          <Reveal className="mb-16">
            <span className="eyebrow">— the eleven —</span>
            <h2 className="h-display h2 title-gap">Meet the studio.</h2>
          </Reveal>
          <Reveal className="grid-4-cards">
            {TEAM.map((m) => (
              <div key={m.name}>
                <div
                  className={`ph image-square rounded-ae-lg ${m.light ? 'bg-paper-2' : ''}${m.img ? ' ' + m.img : ''}`}
                  data-label={m.label}
                />
                <h3 className="serif-card-title mt-4 mb-1">{m.name}</h3>
                <p className="muted text-[13px]">{m.role}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Reviews ────────────────────────────────────── */}
      <section id="reviews" className="section-paper-2 py-[100px]">
        <div className="container">
          <Reveal className="section-heading-row mb-12">
            <div>
              <span className="eyebrow">— what people say —</span>
              <h2 className="h-display h2 title-gap">
                213 reviews. <em className="italic">4.9 stars.</em>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="pill amber">Google</span>
              <span className="pill">Trustpilot</span>
              <span className="pill">Hitched</span>
            </div>
          </Reveal>
          <Reveal className="grid-3-reviews">
            {REVIEWS.map((r) => (
              <div key={r.name} className="review">
                <div className="stars"><RatingStars /></div>
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
      <section className="section-page">
        <div className="container">
          <Reveal
            data-scroll="cta"
            className="panel-cta panel-cta-amber panel-center"
          >
            <h2 className="h-display h2 text-white">Come say hi.</h2>
            <p className="mt-[18px] text-lg text-white/90">
              Coffee at the studio in Isleworth. No deposit, no pitch.
            </p>
            <Link href="/contact" className="btn btn-lg btn-white-amber mt-8">
              Book a 20-min consult <ButtonArrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
