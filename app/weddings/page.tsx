import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { ButtonArrow, IconCheck, RatingStars } from '@/components/icons/AppIcons'

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
          <div className="hero-split-wedding">
            <div>
              <span className="eyebrow">Weddings · the calm way</span>
              <h1 className="h-display h1 hero-title-gap">
                Your wedding,<br />
                <em className="brand-accent">held quietly</em><br />
                by people who care.
              </h1>
              <p className="lede lede-gap">
                Eleven years. Two hundred weddings. One promise — nothing on the day
                surprises you except the good bits.
              </p>
              <div className="actions-row mt-9">
                <Link href="/contact" className="btn btn-amber btn-lg">
                  Check 2026 availability <ButtonArrow />
                </Link>
                <a href="#packages" className="btn btn-ghost btn-lg">See packages</a>
              </div>
            </div>
            <div className="wedding-gallery">
              <div className="ph amber-tint image-3-4" data-label="Wedding · ceremony" />
              <div className="ph image-3-4 wedding-gallery-offset" data-label="Wedding · reception" />
              <div className="ph image-3-4" data-label="Wedding · couple" />
              <div className="ph image-3-4" data-label="Wedding · detail" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages ───────────────────────────────────── */}
      <section id="packages" className="section-page section-paper-2">
        <div className="container">
          <Reveal className="center-intro">
            <span className="eyebrow center">— pricing —</span>
            <h2 className="h-display h2 title-gap">
              Three packages.<br />
              <em className="italic">No hidden anything.</em>
            </h2>
            <p className="lede mx-auto mt-6">
              Pick a starting point. Move things in or out. We'll re-quote in 24 hours, no questions.
            </p>
          </Reveal>

          <Reveal className="grid-3-cards items-stretch">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.title}
                className={`card flex flex-col${pkg.featured ? ' card-dark' : ''}`}
              >
                <span
                  className={`pill self-start${pkg.featured ? ' bg-amber text-white border-amber' : ''}`}
                >
                  {pkg.pill}
                </span>
                <h3 className={`h-display h4 mt-[18px]${pkg.featured ? ' text-paper' : ''}`}>
                  {pkg.title}
                </h3>
                <div className={`my-3.5 font-serif text-[56px] leading-none tracking-[-.03em]${pkg.featured ? ' text-paper' : ''}`}>
                  {pkg.price}
                  <span className={`font-sans text-base${pkg.featured ? ' text-paper/60' : ' text-ink-3'}`}>
                    {' '}/ from
                  </span>
                </div>
                <p className={`text-sm${pkg.featured ? ' text-paper/70' : ' text-ink-3'}`}>{pkg.desc}</p>
                <ul className="my-6 flex list-none flex-col gap-3 p-0 text-sm">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex gap-2${pkg.featured ? ' text-paper/90' : ''}`}>
                      <IconCheck className="icon-check mt-0.5" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn mt-auto ${pkg.featured ? 'btn-amber' : 'btn-ghost'}`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </Reveal>

          <p className="reveal mono mt-8 text-center text-ink-3">
            all packages include the discovery call · mood-board · vendor playbook · VAT inc.
          </p>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────── */}
      <section className="section-page-xl">
        <div className="container">
          <Reveal className="center-intro">
            <span className="eyebrow center">— the journey —</span>
            <h2 className="h-display h2 title-gap">
              From <em className="italic">first call</em><br />
              to <em className="italic">last dance</em>.
            </h2>
          </Reveal>

          <Reveal className="timeline">
            <div className="timeline-line" />
            {TIMELINE.map((t) => (
              <div key={t.n} className="timeline-item">
                <div
                  className={`timeline-dot absolute left-1/2 top-0 -translate-x-1/2 ${
                    t.amber ? 'border-0 bg-amber text-white' : t.n === 5 ? 'border-0 bg-ink text-paper' : 'border-[1.5px] border-ink bg-paper text-ink'
                  }`}
                >
                  {t.n}
                </div>
                <div className="mono muted text-[11px] uppercase">{t.month}</div>
                <h3 className="timeline-title">{t.title}</h3>
                <p className="muted text-[13px]">{t.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Recent weddings ────────────────────────────── */}
      <section className="section-paper-2 pt-[60px] pb-[140px]">
        <div className="container">
          <Reveal className="section-heading-row mb-12">
            <div>
              <span className="eyebrow">Recent weddings</span>
              <h2 className="h-display h2 title-gap">
                A few from <em className="italic">last season</em>
              </h2>
            </div>
            <Link href="/contact" className="btn btn-ghost">Full portfolio <ButtonArrow /></Link>
          </Reveal>

          <Reveal className="grid-3-cards">
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
      <section className="section-page">
        <div className="container">
          <Reveal>
            <div className="testimonial">
              <div className="ph amber-tint" data-label="P&D candid · garden" />
              <div>
                <div className="stars"><RatingStars /></div>
                <p className="quote mt-3.5">
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
      <section className="section-paper-2 py-[100px]">
        <div className="container">
          <Reveal className="content-split-start">
            <div className="sticky-aside">
              <span className="eyebrow">— FAQ —</span>
              <h2 className="h-display h2 title-gap">
                The questions<br />we hear <em className="italic">most</em>.
              </h2>
            </div>
            <div>
              {FAQS.map((faq, i) => (
                <details
                  key={faq.q}
                  className="faq-item"
                  open={i === 0}
                >
                  <summary className="faq-summary items-center tracking-[-.015em]">
                    {faq.q}
                    <span className="faq-plus">+</span>
                  </summary>
                  <p className="faq-answer">{faq.a}</p>
                </details>
              ))}
            </div>
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
            <div className="cta-orb-lg" />
            <h2 className="h-display h2 text-white">Tell us your date.</h2>
            <p className="mt-[18px] text-lg text-white/90">
              We'll come back within 4 hours, every time.
            </p>
            <div className="actions-center mt-8">
              <Link href="/contact" className="btn btn-lg btn-white-amber">
                Check availability <ButtonArrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
