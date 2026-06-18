import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { HeroIntro } from '@/components/animations/HeroIntro'
import {
  ButtonArrow,
  IconArrowUpRight,
  IconSeparatorDot,
  IconStar,
  IconWhatsApp,
  RatingStars,
} from '@/components/icons/AppIcons'
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

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ name: 'Home', url: 'https://amuseevents.co.uk' }])} />

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="section-home-hero">
        <HeroIntro />
        <div className="container">
          <div className="hero-split-home">
            <div>
              <span data-hero="eyebrow" className="eyebrow">London · since 2014</span>
              <h1 className="h-display h1 hero-title-gap" data-hero="title-1">
                Events that feel{' '}
                <em data-hero="title-2" className="brand-accent">
                  effortlessly
                </em>{' '}yours.
              </h1>
              <p className="lede lede-gap max-w-[48ch]" data-hero="lede">
                We design, build and run weddings, parties and corporate moments across London.
                You enjoy the day. We hold the rest.
              </p>
              <div className="actions-row mt-9" data-hero="lede">
                <Link href="/contact" className="btn btn-amber btn-lg">
                  Plan your event <ButtonArrow />
                </Link>
                <a href={CONTACT.waUrl} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">
                  <IconWhatsApp aria-hidden="true" /> WhatsApp us
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-8" data-hero="stat">
                <span className="pill dot">Free consultation</span>
                <span className="pill">Replies in 4 hours</span>
                <span className="pill">No deposit to chat</span>
              </div>
            </div>

            <div className="home-gallery">
              <div
                data-label="Wedding · Richmond Hill 2025"
                className="ph reveal home-gallery-wide"
              />
              <div className="ph reveal" data-label="Birthday styling" />
              <div className="ph amber-tint reveal" data-label="Garden party · Twickenham" />
            </div>
          </div>

          {/* Trust strip */}
          <Reveal className="stats-row stats-top-border">
            <div className="stat amber">
              <div className="n">11<span className="stat-suffix">yrs</span></div>
              <div className="l">Running London events since 2014</div>
            </div>
            <div className="stat">
              <div className="n">640<span className="stat-accent">+</span></div>
              <div className="l">Weddings, parties &amp; launches</div>
            </div>
            <div className="stat">
              <div className="n">4.9<IconStar className="icon-stat-star" aria-hidden="true" /></div>
              <div className="l">Average across 213 reviews</div>
            </div>
            <div className="stat">
              <div className="n">98<span className="stat-suffix">%</span></div>
              <div className="l">Of clients refer us within a year</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services mosaic ───────────────────────────── */}
      <section className="section-page section-paper-2">
        <div className="container">
          <Reveal className="section-heading-row mb-14">
            <div className="section-heading-block">
              <span className="eyebrow">02 — what we do</span>
              <h2 className="h-display h2 title-gap">
                A small studio,<br />
                <em className="italic">a wide range</em> of moments.
              </h2>
            </div>
            <p className="lede max-w-[380px]">
              Ten services. One team. Whether it's a five-year-old's party or a 300-guest gala —
              we plan it the same calm way.
            </p>
          </Reveal>

          <Reveal className="service-mosaic">
            <Link href="/weddings" className="service-card mosaic-6x2">
              <div className="ph amber-tint" data-label="Wedding hero" />
              <div className="gradient" />
              <span className="arrow-circle"><IconArrowUpRight aria-hidden="true" /></span>
              <div className="content">
                <div className="num">— 01 —</div>
                <h3>Weddings</h3>
                <p>Ceremony to last dance. Held with care.</p>
              </div>
            </Link>

            <Link href="/services#birthdays" className="service-card mosaic-3x1">
              <div className="ph" data-label="Birthday party" />
              <div className="gradient" />
              <span className="arrow-circle"><IconArrowUpRight aria-hidden="true" /></span>
              <div className="content">
                <div className="num">— 02 —</div>
                <h3 className="service-card-title-sm">Birthdays</h3>
              </div>
            </Link>

            <Link href="/services#kids" className="service-card mosaic-3x1">
              <div className="ph" data-label="Kids entertainment" />
              <div className="gradient" />
              <span className="arrow-circle"><IconArrowUpRight aria-hidden="true" /></span>
              <div className="content">
                <div className="num">— 03 —</div>
                <h3 className="service-card-title-sm">Kids parties</h3>
              </div>
            </Link>

            <Link href="/corporate" className="service-card mosaic-3x1">
              <div className="ph" data-label="Corporate launch" />
              <div className="gradient" />
              <span className="arrow-circle"><IconArrowUpRight aria-hidden="true" /></span>
              <div className="content">
                <div className="num">— 04 —</div>
                <h3 className="service-card-title-sm">Corporate</h3>
              </div>
            </Link>

            <Link href="/services#dj" className="service-card mosaic-3x1">
              <div className="ph dark" data-label="DJ &amp; club" />
              <div className="gradient" />
              <span className="arrow-circle"><IconArrowUpRight aria-hidden="true" /></span>
              <div className="content">
                <div className="num">— 05 —</div>
                <h3 className="service-card-title-sm">DJ &amp; Club</h3>
              </div>
            </Link>

            <Link href="/services#private" className="service-card mosaic-4x2">
              <div className="ph" data-label="Private party" />
              <div className="gradient" />
              <span className="arrow-circle"><IconArrowUpRight aria-hidden="true" /></span>
              <div className="content">
                <div className="num">— 06 —</div>
                <h3>Private parties</h3>
                <p>Milestones, anniversaries, the in-between.</p>
              </div>
            </Link>

            <Link href="/services#outdoor" className="service-card mosaic-4x1">
              <div className="ph" data-label="Outdoor / garden" />
              <div className="gradient" />
              <span className="arrow-circle"><IconArrowUpRight aria-hidden="true" /></span>
              <div className="content">
                <div className="num">— 07 —</div>
                <h3 className="service-card-title-sm">Outdoor events</h3>
              </div>
            </Link>

            <Link href="/services#production" className="service-card mosaic-4x1">
              <div className="ph dark" data-label="Production · marquee · lighting" />
              <div className="gradient" />
              <span className="arrow-circle"><IconArrowUpRight aria-hidden="true" /></span>
              <div className="content">
                <div className="num">— 08 —</div>
                <h3 className="service-card-title-sm">Production</h3>
              </div>
            </Link>
          </Reveal>

          <Reveal className="mt-8 flex justify-center">
            <Link href="/services" className="btn btn-ghost">
              See all 10 services <ButtonArrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Editorial ──────────────────────────────────── */}
      <section className="section-page-xl">
        <div className="container">
          <div className="content-split">
            <div
              className="ph reveal image-4-5"
              data-label="Studio at work · candid behind-the-scenes"
            />
            <Reveal>
              <span className="eyebrow">03 — the studio</span>
              <h2 className="h-display h2 title-gap">
                The people on the<br />
                <em className="italic">phone</em> are the people<br />
                on the <em className="italic">day</em>.
              </h2>
              <p className="lede lede-gap">
                We're a small Isleworth-based team — eleven years deep, nothing sub-contracted.
                The voice you fall for in the consultation is the same one keeping things calm at
                11pm when the rain starts.
              </p>
              <div className="grid-two-fields mt-9 gap-6">
                <div>
                  <div className="serif-accent text-4xl">
                    Honest pricing.
                  </div>
                  <p className="muted mt-2 text-sm">
                    Fixed quote on day one. No "small extras" the week before.
                  </p>
                </div>
                <div>
                  <div className="serif-accent text-4xl">
                    One number.
                  </div>
                  <p className="muted mt-2 text-sm">
                    One planner per event. Direct line, all hours, end-to-end.
                  </p>
                </div>
              </div>
              <div className="mt-9">
                <Link href="/about" className="btn btn-primary">
                  Meet the studio <ButtonArrow />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────── */}
      <section className="dark-section section-page-xl section-rounded-dark">
        <div className="container">
          <Reveal className="section-heading-row mb-16">
            <div className="section-heading-block">
              <span className="eyebrow">04 — the process</span>
              <h2 className="h-display h2 title-gap">
                From <em className="italic">"is this a good idea?"</em><br />
                to <em className="italic">"that was perfect"</em>.
              </h2>
            </div>
            <p className="lede max-w-[380px]">Five quiet steps. No surprises along the way.</p>
          </Reveal>

          <Reveal className="content-split-sticky">
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

            <div className="sticky top-[100px]">
              <div className="ph dark image-4-5" data-label="Process · planner at venue" />
              <div className="mt-6 rounded-ae-lg border border-paper/10 bg-paper/5 p-7">
                <div className="eyebrow mb-3 text-amber">— promise —</div>
                <p className="m-0 font-serif text-[22px] leading-snug text-paper">
                  "Your only job on the day is to show up dressed and decide nothing."
                </p>
                <p className="mt-[18px] text-[13px] text-paper/55">
                  — Aanya Mehta, Founder
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonial + reviews ──────────────────────── */}
      <section className="section-page-xl">
        <div className="container">
          <Reveal>
            <div className="testimonial">
              <div className="ph amber-tint" data-label="Couple at their wedding" />
              <div>
                <div className="stars"><RatingStars /></div>
                <p className="quote mt-3.5">
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

          <Reveal className="grid-3-reviews mt-14">
            <div className="review">
              <div className="stars"><RatingStars /></div>
              <p className="text">"Calm, brilliant, fairly priced. Got back to me on a Sunday afternoon."</p>
              <div className="who"><div className="av">JM</div><div><div className="name">Jess Mitchell</div><div className="where">60th birthday · Twickenham</div></div></div>
            </div>
            <div className="review">
              <div className="stars"><RatingStars /></div>
              <p className="text">"Booked them for our launch. Marquee, sound, food — one team, zero stress."</p>
              <div className="who"><div className="av">RA</div><div><div className="name">Raj Aggarwal</div><div className="where">Product launch · Soho</div></div></div>
            </div>
            <div className="review">
              <div className="stars"><RatingStars /></div>
              <p className="text">"My daughter still talks about the magician. Best money we spent on her sixth."</p>
              <div className="who"><div className="av">SO</div><div><div className="name">Sara O'Connell</div><div className="where">Kids party · Hounslow</div></div></div>
            </div>
          </Reveal>

          <Reveal className="mt-10 flex justify-center">
            <Link href="/about#reviews" className="btn btn-ghost">
              Read 213 verified reviews <ButtonArrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Marquee ────────────────────────────────────── */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Weddings</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span className="ital">Birthdays</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span>Corporate launches</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span className="ital">Kids parties</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span>DJ &amp; club nights</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span className="ital">Garden parties</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span>Production</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span className="ital">Photography</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span>Weddings</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span className="ital">Birthdays</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span>Corporate launches</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span className="ital">Kids parties</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span>DJ &amp; club nights</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span className="ital">Garden parties</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span>Production</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
          <span className="ital">Photography</span><span className="dot"><IconSeparatorDot className="icon-marquee-dot" aria-hidden="true" /></span>
        </div>
      </div>

      {/* ── Journal teaser ─────────────────────────────── */}
      <section className="section-page">
        <div className="container">
          <Reveal className="section-heading-row mb-14">
            <div>
              <span className="eyebrow">06 — journal</span>
              <h2 className="h-display h2 title-gap">
                Notes from <em className="italic">the studio</em>
              </h2>
            </div>
            <Link href="/journal" className="btn btn-ghost">All posts <ButtonArrow /></Link>
          </Reveal>

          <Reveal className="grid-3-cards gap-8">
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
      <section className="section-page">
        <div className="container">
          <Reveal
            data-scroll="cta"
            className="panel-cta panel-cta-amber"
          >
            <div className="cta-orb-lg" />
            <div className="cta-orb-sm" />
            <div className="cta-split">
              <div>
                <div className="eyebrow text-white/85">— say hi —</div>
                <h2 className="h-display h2 title-gap text-white">
                  Tell us<br />about your day.
                </h2>
                <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-white/90">
                  It takes 90 seconds. We reply the same evening. No deposit, no hard sell —
                  just a quick honest conversation.
                </p>
                <div className="actions-row-lg mt-9">
                  <Link href="/contact" className="btn btn-lg btn-white-amber">
                    Start the form <ButtonArrow />
                  </Link>
                  <a
                    href={CONTACT.waUrl}
                    target="_blank" rel="noreferrer"
                    className="btn btn-lg btn-white-outline"
                  >
                    <IconWhatsApp aria-hidden="true" /> WhatsApp instead
                  </a>
                </div>
              </div>
              <div className="text-right">
                <div className="mb-3.5 font-serif text-lg italic text-white/85">
                  or, the old way:
                </div>
                <a href={`tel:${CONTACT.phoneTel}`} className="mb-[18px] block font-serif text-[clamp(28px,4vw,48px)] leading-tight text-white">
                  {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="block font-serif text-[22px] text-white/85">
                  {CONTACT.email}
                </a>
                <div className="mt-8 border-t border-white/20 pt-8 font-mono text-[11px] uppercase tracking-[.12em] text-white/70">
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
