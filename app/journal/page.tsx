import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { NewsletterForm } from '@/components/journal/NewsletterForm'

export const metadata: Metadata = {
  title: 'Journal — Notes from the Studio',
  description:
    'Field reports, honest pricing breakdowns, and behind-the-scenes from real events. Written by the planners, not by marketing.',
  alternates: { canonical: 'https://amuseevents.co.uk/journal' },
  openGraph: {
    title: 'Journal — Amuse Events',
    description: 'Things we learn, things we get wrong, things that work. Field notes from a London event studio.',
    url: 'https://amuseevents.co.uk/journal',
  },
}

const POSTS = [
  {
    img: '',
    imgLabel: 'Pricing post',
    cat: 'Honest pricing',
    read: '5 min',
    title: 'Why we publish our prices and most planners don\'t',
    body: 'The London events industry has a quote-shock problem. Here\'s how we\'re trying to fix it.',
  },
  {
    img: 'amber-tint',
    imgLabel: 'Birthday at home',
    cat: 'How-to',
    read: '4 min',
    title: 'Hosting a 50-guest birthday at home (and not losing your mind)',
    body: 'The five things to outsource, the three to keep, and the one rule we always break.',
  },
  {
    img: '',
    imgLabel: 'Run of day',
    cat: 'BTS',
    read: '6 min',
    title: 'Anatomy of a wedding run-of-day, minute by minute',
    body: 'The 14-page document we hand every couple in week-of. Annotated, with the bits that always change.',
  },
  {
    img: '',
    imgLabel: 'Corporate budgets',
    cat: 'Corporate',
    read: '7 min',
    title: 'Where corporate event budgets actually go in 2026',
    body: 'Pulled from 47 closed quotes this year. Hint: it\'s not the venue.',
  },
  {
    img: '',
    imgLabel: 'DJ economics',
    cat: 'Behind the scenes',
    read: '5 min',
    title: 'What it actually costs to put on a 600-cap club night',
    body: 'Sound, lighting, security, talent, insurance, the bit nobody talks about: ticket fees.',
  },
  {
    img: '',
    imgLabel: 'Vendor list',
    cat: 'Weddings',
    read: '9 min',
    title: 'Our 2026 vendor list, finally written down',
    body: 'Florists, caterers, calligraphers, bands. The people we trust, organised by neighbourhood.',
  },
]

export default function JournalPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Journal', url: 'https://amuseevents.co.uk/journal' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* ── Page hero ──────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'end' }}>
            <div>
              <span className="eyebrow">Notes from the studio</span>
              <h1 className="h-display h1" style={{ marginTop: 24 }}>
                Things we<br />
                <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>learn</em>, things we<br />
                get wrong, things that work.
              </h1>
            </div>
            <p className="lede">
              Field reports, honest pricing breakdowns, behind-the-scenes from real events.
              Written by the planners, not by marketing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured ───────────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <Reveal style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
            <div className="ph amber-tint" data-label="Spring 2026 weddings · feature" style={{ aspectRatio: '4/3', borderRadius: 'var(--r-md)' }} />
            <div>
              <div className="row" style={{ gap: 12, marginBottom: 18 }}>
                <span className="pill amber">— Featured —</span>
                <span className="pill">Trends</span>
                <span className="pill">8 min read</span>
              </div>
              <h2 className="h-display h2">
                What's actually changing in <em style={{ fontStyle: 'italic' }}>spring 2026</em> weddings.
              </h2>
              <p className="lede" style={{ marginTop: 20 }}>
                Less white tents. More dinner-plate moments. A field report from our last six bookings
                — and the four trends we're seeing rise across the season.
              </p>
              <div className="row" style={{ gap: 12, marginTop: 24 }}>
                <div className="av" style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--paper-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600 }}>AM</div>
                <span className="muted" style={{ fontSize: 13 }}>Aanya Mehta · 4 days ago</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Posts grid ─────────────────────────────────── */}
      <section style={{ padding: '80px 0 140px' }}>
        <div className="container">
          <div className="chip-row reveal" style={{ marginBottom: 40 }}>
            <button className="chip active">All posts</button>
            <button className="chip">Weddings</button>
            <button className="chip">Corporate</button>
            <button className="chip">Honest pricing</button>
            <button className="chip">How-to</button>
            <button className="chip">Behind the scenes</button>
          </div>

          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px 24px' }}>
            {POSTS.map((post) => (
              <Link key={post.title} href="#" className="article">
                <div className={`ph ph-tall${post.img ? ' ' + post.img : ''}`} data-label={post.imgLabel} />
                <div className="meta">
                  <span className="cat">— {post.cat} —</span>
                  <span>{post.read}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────── */}
      <section style={{ padding: '0 0 140px' }}>
        <div className="container">
          <Reveal
            data-scroll="cta"
            style={{ background: 'var(--ink)', color: 'var(--paper)', borderRadius: 32, padding: 64, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}
          >
            <div>
              <span className="eyebrow" style={{ color: 'rgba(246,241,232,.6)' }}>— quarterly journal —</span>
              <h2 className="h-display h3" style={{ color: 'var(--paper)', marginTop: 12 }}>
                Four times a year. <em style={{ fontStyle: 'italic' }}>Never more.</em>
              </h2>
              <p style={{ marginTop: 16, color: 'rgba(246,241,232,.7)' }}>
                Field notes, post-mortems, real numbers from real events. We hate inbox noise too.
              </p>
            </div>
            <NewsletterForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
