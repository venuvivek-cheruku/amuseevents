import type { Metadata } from 'next'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { HeroIntro } from '@/components/animations/HeroIntro'
import {
  ButtonArrow,
  IconArrowUpRight,
  IconSeparatorDot,
  IconStar,
  IconWhatsApp,
} from '@/components/icons/AppIcons'
import { Btn } from '@/components/ui/Btn'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Pill } from '@/components/ui/Pill'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { Testimonial } from '@/components/ui/Testimonial'
import { CONTACT } from '@/lib/utils'
import Link from 'next/link'

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

const REVIEWS = [
  { text: '"Calm, brilliant, fairly priced. Got back to me on a Sunday afternoon."', initials: 'JM', name: 'Jess Mitchell', where: '60th birthday · Twickenham' },
  { text: '"Booked them for our launch. Marquee, sound, food — one team, zero stress."', initials: 'RA', name: 'Raj Aggarwal', where: 'Product launch · Soho' },
  { text: '"My daughter still talks about the magician. Best money we spent on her sixth."', initials: 'SO', name: "Sara O'Connell", where: 'Kids party · Hounslow' },
]

const JOURNAL_TEASERS = [
  { imageLabel: 'Spring 2026 weddings', category: 'Trends', meta: '3 min read', title: "What's actually changing in spring 2026 weddings", body: 'Less white tents, more dinner-plate moments. A field report from our last six bookings.' },
  { imageLabel: 'Pricing & honesty', category: 'Honest pricing', meta: '5 min read', title: "Why we publish our prices and most planners don't", body: "The London events industry has a quote-shock problem. Here's how we're trying to fix it." },
  { imageStyle: 'amber-tint' as const, imageLabel: 'Birthday at home', category: 'How-to', meta: '4 min read', title: 'Hosting a 50-guest birthday at home (and not losing your mind)', body: 'The five things to outsource, the three to keep, and the one rule we always break.' },
]

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
              <Eyebrow data-hero="eyebrow">London · since 2014</Eyebrow>
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
                <Btn href="/contact" variant="amber" size="lg">
                  Plan your event <ButtonArrow />
                </Btn>
                <Btn href={CONTACT.waUrl} external variant="ghost" size="lg">
                  <IconWhatsApp aria-hidden="true" /> WhatsApp us
                </Btn>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-8" data-hero="stat">
                <Pill variant="dot">Free consultation</Pill>
                <Pill>Replies in 4 hours</Pill>
                <Pill>No deposit to chat</Pill>
              </div>
            </div>

            <div className="home-gallery">
              <div data-label="Wedding · Richmond Hill 2025" className="ph reveal home-gallery-wide" />
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
            <SectionHeading eyebrow="02 — what we do">
              A small studio,<br />
              <em className="italic">a wide range</em> of moments.
            </SectionHeading>
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
            <Btn href="/services" variant="ghost">
              See all 10 services <ButtonArrow />
            </Btn>
          </Reveal>
        </div>
      </section>

      {/* ── Editorial ──────────────────────────────────── */}
      <section className="section-page-xl">
        <div className="container">
          <div className="content-split">
            <div className="ph reveal image-4-5" data-label="Studio at work · candid behind-the-scenes" />
            <Reveal>
              <SectionHeading eyebrow="03 — the studio">
                The people on the<br />
                <em className="italic">phone</em> are the people<br />
                on the <em className="italic">day</em>.
              </SectionHeading>
              <p className="lede lede-gap">
                We're a small Isleworth-based team — eleven years deep, nothing sub-contracted.
                The voice you fall for in the consultation is the same one keeping things calm at
                11pm when the rain starts.
              </p>
              <div className="grid-two-fields mt-9 gap-6">
                <div>
                  <div className="serif-accent text-4xl">Honest pricing.</div>
                  <p className="muted mt-2 text-sm">Fixed quote on day one. No "small extras" the week before.</p>
                </div>
                <div>
                  <div className="serif-accent text-4xl">One number.</div>
                  <p className="muted mt-2 text-sm">One planner per event. Direct line, all hours, end-to-end.</p>
                </div>
              </div>
              <div className="mt-9">
                <Btn href="/about" variant="primary">
                  Meet the studio <ButtonArrow />
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────── */}
      <section className="dark-section section-page-xl section-rounded-dark">
        <div className="container">
          <Reveal className="section-heading-row mb-16">
            <SectionHeading eyebrow="04 — the process">
              From <em className="italic">"is this a good idea?"</em><br />
              to <em className="italic">"that was perfect"</em>.
            </SectionHeading>
            <p className="lede max-w-[380px]">Five quiet steps. No surprises along the way.</p>
          </Reveal>

          <Reveal className="content-split-sticky">
            <div>
              {[
                { num: '01', label: 'Listen — week 1', title: 'A 20-minute call.', body: "Coffee in Isleworth or video, you pick. We listen, we don't pitch. By the end, we both know if we're a fit." },
                { num: '02', label: 'Shape — week 2', title: 'One page. One price.', body: 'You get a clear plan with a fixed quote. Move things, swap things, change anything. Re-quote in 24 hours.' },
                { num: '03', label: 'Source — months out', title: 'Vendors, venues, the lot.', body: 'We bring the people we trust. You meet the ones that matter. Everyone else stays invisible — by design.' },
                { num: '04', label: 'Rehearse — week of', title: 'Walk-through & run-of-day.', body: 'Every minute mapped. Every contingency named. Every supplier briefed. You stop checking your phone.' },
                { num: '05', label: 'Run — day 0', title: 'You arrive as a guest.', body: "Your only job is to be present. We hold the room behind you, in earpieces, so quietly you forget we're there." },
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

            <div className="process-sidebar">
              <div className="ph dark image-4-5" data-label="Process · planner at venue" />
              <div className="mt-6 rounded-ae-lg border border-paper/10 bg-paper/5 p-7">
                <div className="eyebrow mb-3 text-amber">— promise —</div>
                <p className="m-0 font-serif text-[22px] leading-snug text-paper">
                  "Your only job on the day is to show up dressed and decide nothing."
                </p>
                <p className="mt-[18px] text-[13px] text-paper/55">— Aanya Mehta, Founder</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonial + reviews ──────────────────────── */}
      <section className="section-page-xl">
        <div className="container">
          <Reveal>
            <Testimonial
              imageStyle="amber-tint"
              imageLabel="Couple at their wedding"
              quote="From the first call to the last song, we never once felt like we had to chase anything. Every detail landed exactly as we'd pictured it — some even better. We'd book them again without a second thought."
              initials="P&D"
              name="Priya & Daniel"
              where="Wedding · Richmond Hill · September 2025"
            />
          </Reveal>

          <Reveal className="grid-3-reviews mt-14">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </Reveal>

          <Reveal className="mt-10 flex justify-center">
            <Btn href="/about#reviews" variant="ghost">
              Read 213 verified reviews <ButtonArrow />
            </Btn>
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
            <SectionHeading eyebrow="06 — journal">
              Notes from <em className="italic">the studio</em>
            </SectionHeading>
            <Btn href="/journal" variant="ghost">All posts <ButtonArrow /></Btn>
          </Reveal>

          <Reveal className="grid-3-cards gap-8">
            {JOURNAL_TEASERS.map((t) => (
              <ArticleCard key={t.title} href="/journal" {...t} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────── */}
      <section className="section-page">
        <div className="container">
          <Reveal data-scroll="cta" className="panel-cta panel-cta-amber">
            <div className="cta-orb-lg" />
            <div className="cta-orb-sm" />
            <div className="cta-split">
              <div>
                <Eyebrow>— say hi —</Eyebrow>
                <h2 className="h-display h2 title-gap">
                  Tell us<br />about your day.
                </h2>
                <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-ink-2">
                  It takes 90 seconds. We reply the same evening. No deposit, no hard sell —
                  just a quick honest conversation.
                </p>
                <div className="actions-row-lg mt-9">
                  <Btn href="/contact" variant="primary" size="lg">
                    Start the form <ButtonArrow />
                  </Btn>
                  <Btn href={CONTACT.waUrl} external variant="ghost" size="lg">
                    <IconWhatsApp aria-hidden="true" /> WhatsApp instead
                  </Btn>
                </div>
              </div>
              <div className="lg:text-right">
                <div className="mb-3.5 font-serif text-lg italic text-ink-2">or, the old way:</div>
                <a href={`tel:${CONTACT.phoneTel}`} className="mb-[18px] block font-serif text-[clamp(28px,4vw,48px)] leading-tight text-ink">
                  {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="block font-serif text-[22px] text-ink-2">
                  {CONTACT.email}
                </a>
                <div className="mt-8 border-t border-ink/20 pt-8 font-mono text-[11px] uppercase tracking-[.12em] text-ink-3">
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
