import type { Metadata } from 'next'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { ButtonArrow } from '@/components/icons/AppIcons'
import { Btn } from '@/components/ui/Btn'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Pill } from '@/components/ui/Pill'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { CtaPanel } from '@/components/ui/CtaPanel'

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
  { n: '05', title: 'Reply in 4 hours', body: "Including weekends. If we can't, you get a real reason and a real time." },
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
  { text: '"Calm, brilliant, fairly priced. Replied on a Sunday afternoon."', initials: 'JM', name: 'Jess Mitchell', where: '60th birthday · Twickenham' },
  { text: '"They write the run-sheet better than our own ops people."', initials: 'RA', name: 'Raj Aggarwal', where: 'Atlas · Canary Wharf' },
  { text: '"My daughter still talks about the magician. Best money we spent."', initials: 'SO', name: "Sara O'Connell", where: 'Kids party · Hounslow' },
  { text: '"Held our entire weekend so quietly we forgot we\'d hired anyone."', initials: 'PD', name: 'Priya & Daniel', where: 'Wedding · Richmond' },
  { text: '"Re-quoted in 24 hours every time we changed our minds."', initials: 'FK', name: 'Farah K.', where: 'Engagement · Soho' },
  { text: '"Honest about what they couldn\'t do. That\'s why we trusted the rest."', initials: 'JT', name: 'James T.', where: 'Product launch · Shoreditch' },
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
              <Eyebrow className="pb-4 md:pb-6">
                Isleworth, London · est. 2014
              </Eyebrow>
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
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div className="ph image-4-5 hidden md:block" data-label="Founder · Aanya at the studio" />
            <Reveal>
              <div className="pb-4 md:pb-5">
                <Eyebrow>— our story —</Eyebrow>
              </div>

              <SectionHeading>
                Started with one wedding<br />in a <em className="italic">friend's garden</em>.
              </SectionHeading>

              <div className="mt-6 flex flex-col gap-6">
                <p className="body-text">
                  In 2014, Aanya planned her best friend's wedding in a back garden in Isleworth. It was
                  sixty guests, two folding tables, a borrowed marquee and a karaoke machine. Eleven years
                  later, we've held everything from a £180k product launch to a five-year-old's pirate party
                  — but the brief is still the same: <strong>nothing on the day surprises you except the good bits</strong>.
                </p>
                <p className="body-text">
                  We stayed small on purpose. Eleven people, no juniors learning on your day, no sub-contracting
                  the bits that matter. The voice you fall for in the consultation is the same one keeping
                  things calm at 11pm when the rain starts.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Principles ─────────────────────────────────── */}
      <section className="dark-section section-page-xl section-rounded-dark">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— five rules —" center>
              How we run<br />
              <em className="italic">the studio</em>.
            </SectionHeading>
          </Reveal>

          <Reveal className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 md:mt-16">
            {PRINCIPLES.map((p) => (
              <div key={p.n}>
                <div className="serif-accent text-[40px] md:text-[56px]">{p.n}</div>
                <h3 className="serif-card-title !font-bold my-3.5 mb-2 text-paper">
                  {p.title}
                </h3>
                <p className="small-paper-muted">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────── */}
      <section id="team" className="section-page-xl">
        <div className="container">
          <Reveal className="mb-10 md:mb-16">
            <div className="mb-4">
              <Eyebrow>— the eleven —</Eyebrow>
            </div>

            <SectionHeading>
              Meet the studio.
            </SectionHeading>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {TEAM.map((m) => (
              <div key={m.name}>
                <div
                  className={`ph image-square rounded-ae-lg ${m.light ? 'bg-paper-2' : ''}${m.img ? ' ' + m.img : ''}`}
                  data-label={m.label}
                />
                <h3 className="serif-card-title !font-bold mt-4 mb-3">{m.name}</h3>
                <p className="muted text-[13px]">{m.role}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Reviews ────────────────────────────────────── */}
      <section id="reviews" className="section-paper-2 section-page-md">
        <div className="container">
          <Reveal className="mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="pb-4">
                <Eyebrow>— what people say —</Eyebrow>
              </div>

              <SectionHeading>
                213 reviews. <em className="italic">4.9 stars.</em>
              </SectionHeading>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <Pill variant="amber">Google</Pill>
              <Pill>Trustpilot</Pill>
              <Pill>Hitched</Pill>
            </div>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <CtaPanel variant="amber">
        <h2 className="h-display h2 !text-paper">Come say hi.</h2>
        <p className="mt-[18px] text-lg !text-paper">
          Coffee at the studio in Isleworth. No deposit, no pitch.
        </p>
        <Btn
          href="/contact"
          variant="primary"
          size="lg"
          className="mt-8 !bg-paper !text-amber"
        >
          Book a 20-min consult <ButtonArrow />
        </Btn>
      </CtaPanel>
    </>
  )
}