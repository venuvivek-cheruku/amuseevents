// app/services/production/page.tsx

import  Metadata  from 'next'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { ButtonArrow, IconCheck } from '@/components/icons/AppIcons'
import { Btn } from '@/components/ui/Btn'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { Testimonial } from '@/components/ui/Testimonial'
import { FaqList } from '@/components/ui/FaqList'
import { CtaPanel } from '@/components/ui/CtaPanel'

export const metadata: Metadata = {
  title: 'Event Production London — Amuse Events',
  description:
    'Event production packages from £5,000. Staging, AV, lighting, rigging and technical production for events of any scale.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/production' },
  openGraph: {
    title: 'Event Production — Amuse Events',
    description: 'Staging, AV, lighting and full technical production — built to brief.',
    url: 'https://amuseevents.co.uk/services/production',
    images: [{ url: '/assets/og-production.jpg', width: 1200, height: 630 }],
  },
}

const PACKAGES = [
  {
    pill: 'Core',
    title: 'AV & lighting package',
    price: '£5,000',
    features: [
      'PA system & sound engineering',
      'Lighting design & rig',
      'Projection / LED screen',
      'Microphones (wired & wireless)',
      'On-site technician',
    ],
    cta: 'Choose Core',
    featured: false,
  },
  {
    pill: 'Most chosen',
    title: 'Full production',
    price: '£12,000',
    features: [
      'Everything in Core',
      'Stage design & build',
      'LED wall & visual content',
      'Rigging & truss systems',
      'Power distribution & generators',
      'Production manager on-site',
    ],
    cta: 'Choose Full Production',
    featured: true,
  },
  {
    pill: 'Turnkey',
    title: 'Complete build',
    price: '£25,000',
    features: [
      'Everything in Full Production',
      'Multi-room / multi-stage builds',
      'Custom set design & fabrication',
      'Pyrotechnics & special effects',
      'Full crew (8+ technicians)',
      'Post-event de-rig & waste management',
    ],
    cta: 'Choose Turnkey',
    featured: false,
  },
]

const TIMELINE = [
  {
    n: 1,
    month: 'month -6',
    title: 'Scope',
    body: 'Free site visit. Technical requirements, venue assessment, brief.',
    amber: true,
  },
  {
    n: 2,
    month: 'month -4',
    title: 'Design',
    body: 'Technical drawings, equipment spec, crew plan, fixed quote.',
    amber: false,
  },
  {
    n: 3,
    month: 'week -1',
    title: 'Build',
    body: 'Load-in, rig, focus, programme, sound check, dress rehearsal.',
    amber: false,
  },
  {
    n: 4,
    month: 'day 0',
    title: 'Deliver',
    body: 'Doors open. Cues fire. We run the tech. You run the show.',
    amber: false,
  },
]

const RECENT_EVENTS = [
  {
    imageStyle: 'amber-tint' as const,
    imageLabel: 'Conference · ExCeL',
    category: 'November 2025',
    meta: 'ExCeL London',
    title: 'Tech Summit 2025',
    body: '2,000 delegates · turnkey · main stage, breakout AV, LED walls, live stream.',
  },
  {
    imageLabel: 'Awards · Savoy',
    category: 'October 2025',
    meta: 'The Savoy',
    title: 'Industry Awards',
    body: '400 guests · full production · stage, podium, house lighting, video playback.',
  },
  {
    imageLabel: 'Launch · Battersea',
    category: 'September 2025',
    meta: 'Battersea Power Station',
    title: 'Product Launch',
    body: '300 guests · core AV · projection mapping, spatial audio, press wall.',
  },
]

const FAQS = [
  {
    q: 'Do you work with any venue?',
    a: "Yes — we've produced in hotel ballrooms, warehouses, fields, galleries and living rooms. We adapt to the space.",
  },
  {
    q: 'Can you provide just AV without the full production?',
    a: "Absolutely — our Core package is exactly that. Sound, lighting, projection and a technician. No stage build needed.",
  },
  {
    q: 'Do you handle live streaming?',
    a: "Yes — multi-camera live streams to any platform. We can add it to any package.",
  },
  {
    q: 'What about power in unusual venues?',
    a: "We source and manage generators, distribution boards and cabling. If there's no power, we bring it.",
  },
  {
    q: 'How early do you need to load in?',
    a: "Depends on scale — a Core package needs 3–4 hours. A Turnkey build might need 2–3 days. We'll confirm in the quote.",
  },
]

export default function ProductionPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Services', url: 'https://amuseevents.co.uk/services' },
    { name: 'Event Production', url: 'https://amuseevents.co.uk/services/production' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      <section className="page-hero">
        <div className="container">
          <div className="hero-split-wedding">
            <div>
              <Eyebrow>Event production · built to brief</Eyebrow>
              <h1 className="h-display h1 hero-title-gap">
                The stage,
                <br />
                <em className="brand-accent">the tech,</em>
                <br />
                the precision.
              </h1>
              <p className="lede lede-gap">
                Staging, AV, lighting and full technical production for events
                of any scale. Two hundred builds. Nothing left to chance.
              </p>
              <div className="actions-row mt-9">
                <Btn href="/contact" variant="amber" size="lg">
                  Get a production quote <ButtonArrow />
                </Btn>
                <Btn href="#packages" variant="ghost" size="lg">
                  What&apos;s included
                </Btn>
              </div>
            </div>

            <div className="wedding-gallery">
              <div className="ph amber-tint image-3-4" data-label="Production · stage" />
              <div className="ph image-3-4 wedding-gallery-offset" data-label="Production · lighting" />
              <div className="ph image-3-4" data-label="Production · AV" />
              <div className="ph image-3-4" data-label="Production · crew" />
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="section-page section-paper-2">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— what's included —" center lede="Pick a starting point. Add a stage, drop the pyro. We'll re-quote same day.">
              Everything,<br /><em className="italic">handled.</em>
            </SectionHeading>
          </Reveal>

          <Reveal className="grid-3-cards items-stretch">
            {PACKAGES.map((pkg) => (
              <div key={pkg.title} className={`card flex flex-col${pkg.featured ? ' card-dark' : ''}`}>
                <span className={`pill self-start${pkg.featured ? ' bg-amber text-ink border-amber' : ''}`}>{pkg.pill}</span>
                <h3 className={`h-display h4 mt-[18px]${pkg.featured ? ' text-paper' : ''}`}>{pkg.title}</h3>
                <div className={`my-3.5 font-serif text-[56px] leading-none tracking-[-.03em]${pkg.featured ? ' text-paper' : ''}`}>
                  {pkg.price}<span className={`font-sans text-base${pkg.featured ? ' text-paper/60' : ' text-ink-3'}`}>{' '} / from</span>
                </div>
                <ul className="my-6 flex list-none flex-col gap-3 p-0 text-sm">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex gap-2${pkg.featured ? ' text-paper/90' : ''}`}>
                      <IconCheck className="icon-check mt-0.5" aria-hidden="true" /><span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Btn href="/contact" variant={pkg.featured ? 'amber' : 'ghost'} className="mt-auto">{pkg.cta}</Btn>
              </div>
            ))}
          </Reveal>

          <p className="reveal mono mt-8 text-center text-ink-3">all packages include the site visit · technical drawings · crew · VAT inc.</p>
        </div>
      </section>

      <section className="section-page-xl">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— how it works —" center>
              From <em className="italic">brief</em><br />to <em className="italic">cue one</em>.
            </SectionHeading>
          </Reveal>
          <Reveal className="timeline">
            <div className="timeline-line" />
            {TIMELINE.map((t) => (
              <div key={t.n} className="timeline-item">
                <div className={`timeline-dot absolute left-1/2 top-0 -translate-x-1/2 ${t.amber ? 'border-0 bg-amber text-ink' : t.n === 4 ? 'border-0 bg-ink text-paper' : 'border-[1.5px] border-ink bg-paper text-ink'}`}>{t.n}</div>
                <div className="mono muted text-[11px] uppercase">{t.month}</div>
                <h3 className="timeline-title">{t.title}</h3>
                <p className="muted text-[13px]">{t.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-paper-2 section-page-gallery">
        <div className="container">
          <Reveal className="section-heading-row mb-12">
            <SectionHeading eyebrow="Recent productions">A few from <em className="italic">last season</em></SectionHeading>
            <Btn href="/contact" variant="ghost">Full portfolio <ButtonArrow /></Btn>
          </Reveal>
          <Reveal className="grid-3-cards">
            {RECENT_EVENTS.map((w) => (<ArticleCard key={w.title} imageTall {...w} />))}
          </Reveal>
        </div>
      </section>

      <section className="section-page">
        <div className="container">
          <Reveal>
            <Testimonial
              imageStyle="amber-tint"
              imageLabel="Summit · ExCeL"
              quote="Two thousand delegates, three stages, zero technical issues. Their production team ran it like a military operation — but with warmth. Couldn't fault a thing."
              initials="K"
              name="Karen"
              where="Conference · ExCeL London · November 2025"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-paper-2 section-page-md">
        <div className="container">
          <Reveal className="content-split-start">
            <div className="sticky-aside">
              <SectionHeading eyebrow="— FAQ —">The questions<br />we hear <em className="italic">most</em>.</SectionHeading>
            </div>
            <FaqList items={FAQS} />
          </Reveal>
        </div>
      </section>

      <CtaPanel variant="amber">
        <div className="cta-orb-lg" />
        <h2 className="h-display h2">Tell us the spec.</h2>
        <p className="mt-[18px] text-lg text-ink-2">We&apos;ll come back within 4 hours with a technical proposal.</p>
        <div className="actions-center mt-8">
          <Btn href="/contact" variant="primary" size="lg">Get a quote <ButtonArrow /></Btn>
        </div>
      </CtaPanel>
    </>
  )
}