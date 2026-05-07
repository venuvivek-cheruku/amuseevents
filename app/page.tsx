import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { HeroIntro } from '@/components/animations/HeroIntro'
import { CONTACT } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Amuse Events — London Event Planning & DJ Nights',
  description:
    'A London studio crafting weddings, parties, corporate events and DJ club nights since 2014. Calm planning. Joyful days.',
  alternates: { canonical: 'https://amuseevents.co.uk' },
  openGraph: {
    title: 'Amuse Events — London Event Planning & DJ Nights',
    description: 'Weddings, corporate events, kids parties, and London DJ nights. Calm planning. Joyful days.',
    url: 'https://amuseevents.co.uk',
    images: [{ url: '/assets/og-home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amuse Events — London Event Planning & DJ Nights',
    description: 'Weddings, corporate events, kids parties, and London DJ nights.',
  },
}

const ARROW_SVG = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const WA_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm5.6 14.3c-.2.6-1.2 1.2-1.7 1.3-.4.1-1 .1-1.6-.1-1.5-.5-3.7-1.7-5.1-3.4-.6-.7-1.1-1.5-1.5-2.4-.4-1-.4-1.8 0-2.5.2-.4.5-.6.8-.6h.6c.2 0 .4 0 .5.4l.7 1.7c.1.2.1.4 0 .5l-.4.5c-.1.1-.2.2-.1.4.4 1 1.1 1.7 2.1 2.2.2.1.3 0 .4-.1l.4-.5c.1-.2.3-.2.5-.1l1.6.7c.2.1.3.2.3.3 0 .3 0 .8-.5 1.2z"/>
  </svg>
)

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ name: 'Home', url: 'https://amuseevents.co.uk' }])} />

      {/* ── Hero ──────────────────────────────────────── */}
      <section style={{ padding: '60px 0 80px' }}>
        <HeroIntro />
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 64, alignItems: 'end' }}>
            <div>
              <span data-hero="eyebrow" className="eyebrow">London · since 2014</span>
              <h1 className="h-display h1" data-hero="title-1" style={{ marginTop: 24 }}>
                Events that feel{' '}
                <em data-hero="title-2" style={{ fontStyle: 'italic', color: 'var(--amber)', display: 'inline' }}>
                  effortlessly
                </em>{' '}yours.
              </h1>
              <p className="lede" data-hero="lede" style={{ marginTop: 28, maxWidth: '48ch' }}>
                We design, build and run weddings, parties and corporate moments across London.
                You enjoy the day. We hold the rest.
              </p>
              <div className="row" data-hero="lede" style={{ gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-amber btn-lg">
                  Plan your event <span className="arrow">→</span>
                </Link>
                <a href={CONTACT.waUrl} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">
                  {WA_SVG} WhatsApp us
                </a>
              </div>
              <div className="row" data-hero="stat" style={{ gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
                <span className="pill dot">Free consultation</span>
                <span className="pill">Replies in 4 hours</span>
                <span className="pill">No deposit to chat</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '220px 220px', gap: 16 }}>
              <div
                className="ph reveal"
                data-label="Wedding · Richmond Hill 2025"
                style={{ gridColumn: '1/3' }}
              />
              <div className="ph reveal" data-label="Birthday styling" />
              <div className="ph amber-tint reveal" data-label="Garden party · Twickenham" />
            </div>
          </div>

          {/* Trust strip */}
          <Reveal className="stats-row" style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
            <div className="stat amber">
              <div className="n">11<span style={{ fontSize: '.5em', color: 'var(--ink-3)', fontStyle: 'normal' }}>yrs</span></div>
              <div className="l">Running London events since 2014</div>
            </div>
            <div className="stat">
              <div className="n">640<span style={{ color: 'var(--amber)' }}>+</span></div>
              <div className="l">Weddings, parties &amp; launches</div>
            </div>
            <div className="stat">
              <div className="n">4.9<span style={{ color: 'var(--amber)' }}>★</span></div>
              <div className="l">Average across 213 reviews</div>
            </div>
            <div className="stat">
              <div className="n">98<span style={{ fontSize: '.5em', color: 'var(--ink-3)', fontStyle: 'normal' }}>%</span></div>
              <div className="l">Of clients refer us within a year</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services mosaic ───────────────────────────── */}
      <section style={{ background: 'var(--paper-2)', padding: '120px 0' }}>
        <div className="container">
          <Reveal className="row-between" style={{ alignItems: 'end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div style={{ maxWidth: 640 }}>
              <span className="eyebrow">02 — what we do</span>
              <h2 className="h-display h2" style={{ marginTop: 18 }}>
                A small studio,<br />
                <em style={{ fontStyle: 'italic' }}>a wide range</em> of moments.
              </h2>
            </div>
            <p className="lede" style={{ maxWidth: 380 }}>
              Ten services. One team. Whether it's a five-year-old's party or a 300-guest gala —
              we plan it the same calm way.
            </p>
          </Reveal>

          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: 200, gap: 16 }}>
            <Link href="/weddings" className="service-card" style={{ gridColumn: 'span 6', gridRow: 'span 2' }}>
              <div className="ph amber-tint" data-label="Wedding hero" />
              <div className="gradient" />
              <span className="arrow-circle">{ARROW_SVG}</span>
              <div className="content">
                <div className="num">— 01 —</div>
                <h3>Weddings</h3>
                <p>Ceremony to last dance. Held with care.</p>
              </div>
            </Link>

            <Link href="/services#birthdays" className="service-card" style={{ gridColumn: 'span 3', gridRow: 'span 1', aspectRatio: 'auto' }}>
              <div className="ph" data-label="Birthday party" />
              <div className="gradient" />
              <span className="arrow-circle">{ARROW_SVG}</span>
              <div className="content">
                <div className="num">— 02 —</div>
                <h3 style={{ fontSize: 22 }}>Birthdays</h3>
              </div>
            </Link>

            <Link href="/services#kids" className="service-card" style={{ gridColumn: 'span 3', gridRow: 'span 1', aspectRatio: 'auto' }}>
              <div className="ph" data-label="Kids entertainment" />
              <div className="gradient" />
              <span className="arrow-circle">{ARROW_SVG}</span>
              <div className="content">
                <div className="num">— 03 —</div>
                <h3 style={{ fontSize: 22 }}>Kids parties</h3>
              </div>
            </Link>

            <Link href="/corporate" className="service-card" style={{ gridColumn: 'span 3', gridRow: 'span 1', aspectRatio: 'auto' }}>
              <div className="ph" data-label="Corporate launch" />
              <div className="gradient" />
              <span className="arrow-circle">{ARROW_SVG}</span>
              <div className="content">
                <div className="num">— 04 —</div>
                <h3 style={{ fontSize: 22 }}>Corporate</h3>
              </div>
            </Link>

            <Link href="/services#dj" className="service-card" style={{ gridColumn: 'span 3', gridRow: 'span 1', aspectRatio: 'auto' }}>
              <div className="ph dark" data-label="DJ &amp; club" />
              <div className="gradient" />
              <span className="arrow-circle">{ARROW_SVG}</span>
              <div className="content">
                <div className="num">— 05 —</div>
                <h3 style={{ fontSize: 22 }}>DJ &amp; Club</h3>
              </div>
            </Link>

            <Link href="/services#private" className="service-card" style={{ gridColumn: 'span 4', gridRow: 'span 2', aspectRatio: 'auto' }}>
              <div className="ph" data-label="Private party" />
              <div className="gradient" />
              <span className="arrow-circle">{ARROW_SVG}</span>
              <div className="content">
                <div className="num">— 06 —</div>
                <h3>Private parties</h3>
                <p>Milestones, anniversaries, the in-between.</p>
              </div>
            </Link>

            <Link href="/services#outdoor" className="service-card" style={{ gridColumn: 'span 4', gridRow: 'span 1', aspectRatio: 'auto' }}>
              <div className="ph" data-label="Outdoor / garden" />
              <div className="gradient" />
              <span className="arrow-circle">{ARROW_SVG}</span>
              <div className="content">
                <div className="num">— 07 —</div>
                <h3 style={{ fontSize: 22 }}>Outdoor events</h3>
              </div>
            </Link>

            <Link href="/services#production" className="service-card" style={{ gridColumn: 'span 4', gridRow: 'span 1', aspectRatio: 'auto' }}>
              <div className="ph dark" data-label="Production · marquee · lighting" />
              <div className="gradient" />
              <span className="arrow-circle">{ARROW_SVG}</span>
              <div className="content">
                <div className="num">— 08 —</div>
                <h3 style={{ fontSize: 22 }}>Production</h3>
              </div>
            </Link>
          </Reveal>

          <Reveal style={{ marginTop: 32, display: 'flex', justifyContent: 'center' }}>
            <Link href="/services" className="btn btn-ghost">
              See all 10 services <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Editorial ──────────────────────────────────── */}
      <section style={{ padding: '140px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'center' }}>
            <div
              className="ph reveal"
              data-label="Studio at work · candid behind-the-scenes"
              style={{ aspectRatio: '4/5' }}
            />
            <Reveal>
              <span className="eyebrow">03 — the studio</span>
              <h2 className="h-display h2" style={{ marginTop: 18 }}>
                The people on the<br />
                <em style={{ fontStyle: 'italic' }}>phone</em> are the people<br />
                on the <em style={{ fontStyle: 'italic' }}>day</em>.
              </h2>
              <p className="lede" style={{ marginTop: 28 }}>
                We're a small Isleworth-based team — eleven years deep, nothing sub-contracted.
                The voice you fall for in the consultation is the same one keeping things calm at
                11pm when the rain starts.
              </p>
              <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 36, fontStyle: 'italic', color: 'var(--amber)', lineHeight: 1 }}>
                    Honest pricing.
                  </div>
                  <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>
                    Fixed quote on day one. No "small extras" the week before.
                  </p>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 36, fontStyle: 'italic', color: 'var(--amber)', lineHeight: 1 }}>
                    One number.
                  </div>
                  <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>
                    One planner per event. Direct line, all hours, end-to-end.
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 36 }}>
                <Link href="/about" className="btn btn-primary">
                  Meet the studio <span className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────── */}
      <section className="dark-section" style={{ padding: '140px 0', borderRadius: '32px 32px 0 0' }}>
        <div className="container">
          <Reveal className="row-between" style={{ alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 64 }}>
            <div style={{ maxWidth: 640 }}>
              <span className="eyebrow">04 — the process</span>
              <h2 className="h-display h2" style={{ marginTop: 18 }}>
                From <em style={{ fontStyle: 'italic' }}>"is this a good idea?"</em><br />
                to <em style={{ fontStyle: 'italic' }}>"that was perfect"</em>.
              </h2>
            </div>
            <p className="lede" style={{ maxWidth: 380 }}>Five quiet steps. No surprises along the way.</p>
          </Reveal>

          <Reveal style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              {[
                { num: '01', label: 'Listen — week 1', title: 'A 20-minute call.', body: 'Coffee in Isleworth or video, you pick. We listen, we don\'t pitch. By the end, we both know if we\'re a fit.' },
                { num: '02', label: 'Shape — week 2', title: 'One page. One price.', body: 'You get a clear plan with a fixed quote. Move things, swap things, change anything. Re-quote in 24 hours.' },
                { num: '03', label: 'Source — months out', title: 'Vendors, venues, the lot.', body: 'We bring the people we trust. You meet the ones that matter. Everyone else stays invisible — by design.' },
                { num: '04', label: 'Rehearse — week of', title: 'Walk-through & run-of-day.', body: 'Every minute mapped. Every contingency named. Every supplier briefed. You stop checking your phone.' },
                { num: '05', label: 'Run — day 0', title: 'You arrive as a guest.', body: 'Your only job is to be present. We hold the room behind you, in earpieces, so quietly you forget we\'re there.' },
              ].map((s) => (
                <div key={s.num} className="step">
                  <div className="num">{s.num}</div>
                  <div>
                    <div className="label">{s.label}</div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ position: 'sticky', top: 100 }}>
              <div className="ph dark" data-label="Process · planner at venue" style={{ aspectRatio: '4/5' }} />
              <div style={{ marginTop: 24, padding: 28, background: 'rgba(246,241,232,.05)', border: '1px solid rgba(246,241,232,.1)', borderRadius: 20 }}>
                <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 12 }}>— promise —</div>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.3, margin: 0, color: 'var(--paper)' }}>
                  "Your only job on the day is to show up dressed and decide nothing."
                </p>
                <p style={{ marginTop: 18, color: 'rgba(246,241,232,.55)', fontSize: 13 }}>
                  — Aanya Mehta, Founder
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonial + reviews ──────────────────────── */}
      <section style={{ padding: '140px 0' }}>
        <div className="container">
          <Reveal>
            <div className="testimonial">
              <div className="ph amber-tint" data-label="Couple at their wedding" />
              <div>
                <div className="stars">★★★★★</div>
                <p className="quote" style={{ marginTop: 14 }}>
                  From the first call to the last song, we never once felt like we had to chase
                  anything. Every detail landed exactly as we'd pictured it — some even better.
                  We'd book them again without a second thought.
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

          <Reveal style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p className="text">"Calm, brilliant, fairly priced. Got back to me on a Sunday afternoon."</p>
              <div className="who"><div className="av">JM</div><div><div className="name">Jess Mitchell</div><div className="where">60th birthday · Twickenham</div></div></div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p className="text">"Booked them for our launch. Marquee, sound, food — one team, zero stress."</p>
              <div className="who"><div className="av">RA</div><div><div className="name">Raj Aggarwal</div><div className="where">Product launch · Soho</div></div></div>
            </div>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p className="text">"My daughter still talks about the magician. Best money we spent on her sixth."</p>
              <div className="who"><div className="av">SO</div><div><div className="name">Sara O'Connell</div><div className="where">Kids party · Hounslow</div></div></div>
            </div>
          </Reveal>

          <Reveal style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
            <Link href="/about#reviews" className="btn btn-ghost">
              Read 213 verified reviews <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Marquee ────────────────────────────────────── */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Weddings</span><span className="dot">●</span>
          <span className="ital">Birthdays</span><span className="dot">●</span>
          <span>Corporate launches</span><span className="dot">●</span>
          <span className="ital">Kids parties</span><span className="dot">●</span>
          <span>DJ &amp; club nights</span><span className="dot">●</span>
          <span className="ital">Garden parties</span><span className="dot">●</span>
          <span>Production</span><span className="dot">●</span>
          <span className="ital">Photography</span><span className="dot">●</span>
          <span>Weddings</span><span className="dot">●</span>
          <span className="ital">Birthdays</span><span className="dot">●</span>
          <span>Corporate launches</span><span className="dot">●</span>
          <span className="ital">Kids parties</span><span className="dot">●</span>
          <span>DJ &amp; club nights</span><span className="dot">●</span>
          <span className="ital">Garden parties</span><span className="dot">●</span>
          <span>Production</span><span className="dot">●</span>
          <span className="ital">Photography</span><span className="dot">●</span>
        </div>
      </div>

      {/* ── Journal teaser ─────────────────────────────── */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <Reveal className="row-between" style={{ alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
            <div>
              <span className="eyebrow">06 — journal</span>
              <h2 className="h-display h2" style={{ marginTop: 18 }}>
                Notes from <em style={{ fontStyle: 'italic' }}>the studio</em>
              </h2>
            </div>
            <Link href="/journal" className="btn btn-ghost">All posts <span className="arrow">→</span></Link>
          </Reveal>

          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
            <Link href="/journal" className="article">
              <div className="ph" data-label="Spring 2026 weddings" />
              <div className="meta"><span className="cat">— Trends —</span><span>3 min read</span></div>
              <h3>What's actually changing in spring 2026 weddings</h3>
              <p>Less white tents, more dinner-plate moments. A field report from our last six bookings.</p>
            </Link>
            <Link href="/journal" className="article">
              <div className="ph" data-label="Pricing &amp; honesty" />
              <div className="meta"><span className="cat">— Honest pricing —</span><span>5 min read</span></div>
              <h3>Why we publish our prices and most planners don't</h3>
              <p>The London events industry has a quote-shock problem. Here's how we're trying to fix it.</p>
            </Link>
            <Link href="/journal" className="article">
              <div className="ph amber-tint" data-label="Birthday at home" />
              <div className="meta"><span className="cat">— How-to —</span><span>4 min read</span></div>
              <h3>Hosting a 50-guest birthday at home (and not losing your mind)</h3>
              <p>The five things to outsource, the three to keep, and the one rule we always break.</p>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────── */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <Reveal
            data-scroll="cta"
            style={{ background: 'var(--amber)', borderRadius: 32, padding: 80, color: '#fff', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: -100, right: -100, width: 360, height: 360, borderRadius: '50%', background: 'rgba(255,255,255,.08)' }} />
            <div style={{ position: 'absolute', bottom: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,.06)' }} />
            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
              <div>
                <div className="eyebrow" style={{ color: 'rgba(255,255,255,.85)' }}>— say hi —</div>
                <h2 className="h-display h2" style={{ marginTop: 18, color: '#fff' }}>
                  Tell us<br />about your day.
                </h2>
                <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.9)', maxWidth: '44ch' }}>
                  It takes 90 seconds. We reply the same evening. No deposit, no hard sell —
                  just a quick honest conversation.
                </p>
                <div className="row" style={{ gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn" style={{ background: '#fff', color: 'var(--amber-2)', height: 60, fontSize: 16, padding: '0 32px' }}>
                    Start the form <span className="arrow">→</span>
                  </Link>
                  <a
                    href={CONTACT.waUrl}
                    target="_blank" rel="noreferrer"
                    className="btn"
                    style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.5)', height: 60, fontSize: 16, padding: '0 32px' }}
                  >
                    {WA_SVG} WhatsApp instead
                  </a>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'rgba(255,255,255,.85)', marginBottom: 14 }}>
                  or, the old way:
                </div>
                <a href={`tel:${CONTACT.phoneTel}`} style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'clamp(28px,4vw,48px)', color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
                  {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 22, color: 'rgba(255,255,255,.85)' }}>
                  {CONTACT.email}
                </a>
                <div style={{ marginTop: 32, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.2)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)' }}>
                  Mon–Fri 9am–7pm · Sat by appointment
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
