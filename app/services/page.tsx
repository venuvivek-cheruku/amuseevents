import type { Metadata } from 'next'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { ButtonArrow, IconSparkle } from '@/components/icons/AppIcons'
import { Btn } from '@/components/ui/Btn'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Pill } from '@/components/ui/Pill'
import { CtaPanel } from '@/components/ui/CtaPanel'
import { CONTACT } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Services — Event Planning London',
  description:
    'Ten event services from a London studio. Weddings, birthdays, corporate, kids parties, DJ nights, outdoor events, production and more. Calm planning. Joyful days.',
  alternates: { canonical: 'https://amuseevents.co.uk/services' },
  openGraph: {
    title: 'Services — Amuse Events',
    description: 'Ten event services. One team. From quiet 30-guest dinners to 600-person launches.',
    url: 'https://amuseevents.co.uk/services',
  },
}

const SERVICES = [
  {
    id: 'weddings',
    num: '01',
    cat: 'Celebrations',
    tag: 'Most popular',
    title: 'Weddings',
    body: 'From day-of coordination to full design and planning. Three packages, no hidden costs, three quiet planners on your side from month -9 to last dance.',
    features: ['Day-of coordination', 'Partial planning', 'Full planning & design', 'Vendor sourcing', 'Run-of-day timeline', 'On-site team of 2–4'],
    href: '/weddings',
    cta: 'Wedding packages',
    from: 'from £1,400',
    imageStyle: 'amber-tint',
    imageLabel: 'Wedding · ceremony detail',
    imageLeft: true,
  },
  {
    id: 'birthdays',
    num: '02',
    cat: 'Celebrations',
    title: 'Birthdays',
    body: 'Big numbers (50ths, 60ths, 70ths) and the small ones too. We handle the venue, food, music and styling — you just send the invites.',
    features: ['Venue sourcing', 'Catering management', 'Bar & drinks', 'Décor & styling', 'Music & DJ', 'Photography optional'],
    href: '/contact',
    cta: 'Plan a birthday',
    from: 'from £900',
    imageStyle: '',
    imageLabel: 'Birthday · 50th · garden',
    imageLeft: false,
  },
  {
    id: 'kids',
    num: '03',
    cat: 'Celebrations',
    title: 'Kids entertainment',
    body: 'Magicians, character actors, balloon artists, soft-play, science shows. DBS-checked entertainers and a full structured plan so the chaos is the joyful kind.',
    features: ['Magicians & clowns', 'Princess & superhero', 'Balloon & face paint', 'Soft-play hire', 'Party hosting', 'Cake & catering'],
    href: '/contact',
    cta: 'Book a kids party',
    from: 'from £450',
    imageStyle: 'amber-tint',
    imageLabel: 'Kids party · joy detail',
    imageLeft: true,
  },
  {
    id: 'corporate',
    num: '04',
    cat: 'Corporate',
    title: 'Corporate & office events',
    body: 'Product launches, conferences, summer parties, off-sites and Christmas. Delivered for fintech, agencies, family offices and law firms — discreetly, on time, on budget.',
    features: ['Product launches', 'Conferences', 'Summer / winter parties', 'Off-sites', 'Awards nights', 'Brand activations'],
    href: '/corporate',
    cta: 'Corporate page',
    from: 'from £3,200',
    imageStyle: 'dark',
    imageLabel: 'Corporate launch · stage & lighting',
    imageLeft: false,
  },
  {
    id: 'dj',
    num: '05',
    cat: 'Celebrations',
    title: 'DJ & club events',
    body: 'In-house DJs across genres — house, hip-hop, garage, Bollywood, soul. Plus full venue partnerships for one-night takeovers and brand club nights.',
    features: ['Resident & guest DJs', 'Sound system hire', 'Club takeovers', 'MC & live vocals', 'Lighting & visuals', 'Bar packages'],
    href: '/contact',
    cta: 'Book a DJ',
    from: 'from £350',
    imageStyle: 'dark',
    imageLabel: 'DJ · club night · low light',
    imageLeft: true,
  },
  {
    id: 'private',
    num: '06',
    cat: 'Celebrations',
    title: 'Private parties',
    body: 'Anniversaries, engagements, christenings, retirements, "just-because" suppers. Anything important to you, planned with the same care as a 200-guest wedding.',
    features: ['Venue sourcing', 'Full catering', 'Décor & florals', 'Music & entertainment', 'Photographer optional', 'On-site coordination'],
    href: '/contact',
    cta: 'Plan a party',
    from: 'from £700',
    imageStyle: '',
    imageLabel: 'Private dinner · candlelit',
    imageLeft: false,
  },
  {
    id: 'outdoor',
    num: '07',
    cat: 'Production',
    title: 'Outdoor events',
    body: 'Garden parties, marquee weddings, festival-style birthdays. We bring everything — flooring, generators, loos, bars, weather plans and a small army that\'s done it before.',
    features: ['Marquee supply', 'Flooring & lighting', 'Generator hire', 'Weather contingency', 'Bar setup', 'Full logistics'],
    href: '/contact',
    cta: 'Outdoor enquiry',
    from: 'from £2,400',
    imageStyle: '',
    imageLabel: 'Outdoor · marquee in field',
    imageLeft: true,
  },
  {
    id: 'production',
    num: '08',
    cat: 'Production',
    title: 'Event supplies & production',
    body: 'Marquees, staging, sound, lighting, AV, generators, dance floors, bars, furniture, tableware. Hire standalone or bundled into a planning package.',
    features: ['Marquee & staging', 'Sound & AV', 'Lighting rigs', 'Dance floors', 'Furniture hire', 'Full strike crew'],
    href: '/contact',
    cta: 'Production quote',
    from: 'priced per spec',
    imageStyle: 'dark',
    imageLabel: 'Production · stage build',
    imageLeft: false,
  },
  {
    id: 'decor',
    num: '09',
    cat: 'Creative',
    title: 'Art work & décor',
    body: 'In-house design for backdrops, signage, florals, neon, installations. We design it, source it, build it, take it away the next morning.',
    features: ['Bespoke backdrops', 'Custom signage', 'Floral design', 'Neon & lighting art', 'Installations', 'Morning strike'],
    href: '/contact',
    cta: 'Discuss creative',
    from: 'from £600',
    imageStyle: '',
    imageLabel: 'Decor · table styling',
    imageLeft: true,
  },
  {
    id: 'photography',
    num: '10',
    cat: 'Creative',
    title: 'Photography & film',
    body: 'Documentary, editorial and corporate. Same-day socials, three-week edits, signature albums. Book on its own or bundled with planning.',
    features: ['Documentary style', 'Same-day socials', 'Highlight film', 'Full day coverage', 'Signature albums', 'Corporate headshots'],
    href: '/contact',
    cta: 'Photography brief',
    from: 'from £750',
    imageStyle: '',
    imageLabel: 'Photographer · candid',
    imageLeft: false,
  },
]

export default function ServicesPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Services', url: 'https://amuseevents.co.uk/services' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* ── Page hero ──────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-split">
            <div>
              <Eyebrow>Ten things we do well</Eyebrow>
              <h1 className="h-display h1 hero-title-gap">
                Whatever the<br />moment,{' '}
                <em className="brand-accent">we hold it</em>.
              </h1>
            </div>
            <p className="lede">
              From a quiet 30-guest dinner to a 600-person product launch, every service runs
              through the same small team.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services list ──────────────────────────────── */}
      <section className="section-page-md">
        <div className="container">
          <div className="chip-row reveal mb-14">
            <button className="chip active">All services</button>
            <button className="chip">Celebrations</button>
            <button className="chip">Corporate</button>
            <button className="chip">Production</button>
            <button className="chip">Creative</button>
          </div>

          {SERVICES.map((s) => (
            <Reveal key={s.id} id={s.id} className="grid grid-cols-2 items-center gap-16 border-t border-line py-12">
              {s.imageLeft ? (
                <>
                  <div className={`ph image-4-3${s.imageStyle ? ' ' + s.imageStyle : ''}`} data-label={s.imageLabel} />
                  <ServiceContent s={s} />
                </>
              ) : (
                <>
                  <ServiceContent s={s} />
                  <div className={`ph image-4-3${s.imageStyle ? ' ' + s.imageStyle : ''}`} data-label={s.imageLabel} />
                </>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <CtaPanel variant="dark" sectionClass="section-page-tight-bottom">
        <Eyebrow center className="text-paper-muted">Not sure which service?</Eyebrow>
        <h2 className="h-display h2 title-gap text-paper">
          Tell us the day.<br />We'll suggest the shape.
        </h2>
        <div className="actions-center mt-9">
          <Btn href="/contact" variant="amber" size="lg">
            Free 20-min consult <ButtonArrow />
          </Btn>
          <Btn href={CONTACT.waUrl} variant="ghost" size="lg" external className="btn-paper-outline">
            WhatsApp instead
          </Btn>
        </div>
      </CtaPanel>
    </>
  )
}

function ServiceContent({ s }: { s: (typeof SERVICES)[0] }) {
  return (
    <div>
      <div className="actions-row mb-5">
        <Pill variant="amber">{s.num} — {s.cat}</Pill>
        {s.tag && <Pill>{s.tag}</Pill>}
      </div>
      <h2 className="h-display h3">{s.title}</h2>
      <p className="body-text mt-4 max-w-[56ch]">{s.body}</p>
      <ul className="grid-two-list my-6">
        {s.features.map((f) => (
          <li key={f} className="flex gap-2">
            <IconSparkle className="icon-feature" aria-hidden="true" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="actions-row">
        <Btn href={s.href} variant="primary">
          {s.cta} <ButtonArrow />
        </Btn>
        <span className="mono muted">{s.from}</span>
      </div>
    </div>
  )
}
