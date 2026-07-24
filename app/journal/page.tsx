import type { Metadata } from 'next'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { NewsletterForm } from '@/components/journal/NewsletterForm'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Pill } from '@/components/ui/Pill'
import { ArticleCard } from '@/components/ui/ArticleCard'

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

const POSTS: {
  imageStyle?: 'amber-tint' | 'dark'
  imageLabel: string
  category: string
  meta: string
  title: string
  body: string
}[] = [
  {
    imageLabel: 'Pricing post',
    category: 'Honest pricing',
    meta: '5 min',
    title: 'Why we publish our prices and most planners don\'t',
    body: 'The London events industry has a quote-shock problem. Here\'s how we\'re trying to fix it.',
  },
  {
    imageStyle: 'amber-tint',
    imageLabel: 'Birthday at home',
    category: 'How-to',
    meta: '4 min',
    title: 'Hosting a 50-guest birthday at home (and not losing your mind)',
    body: 'The five things to outsource, the three to keep, and the one rule we always break.',
  },
  {
    imageLabel: 'Run of day',
    category: 'BTS',
    meta: '6 min',
    title: 'Anatomy of a wedding run-of-day, minute by minute',
    body: 'The 14-page document we hand every couple in week-of. Annotated, with the bits that always change.',
  },
  {
    imageLabel: 'Corporate budgets',
    category: 'Corporate',
    meta: '7 min',
    title: 'Where corporate event budgets actually go in 2026',
    body: 'Pulled from 47 closed quotes this year. Hint: it\'s not the venue.',
  },
  {
    imageLabel: 'DJ economics',
    category: 'Behind the scenes',
    meta: '5 min',
    title: 'What it actually costs to put on a 600-cap club night',
    body: 'Sound, lighting, security, talent, insurance, the bit nobody talks about: ticket fees.',
  },
  {
    imageLabel: 'Vendor list',
    category: 'Weddings',
    meta: '9 min',
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
          <div className="hero-split">
            <div>
              <div className="pb-4">
                <Eyebrow>— Notes from the studio —</Eyebrow>
              </div>
              <h1 className="h-display h1 hero-title-gap">
                Things we<br />
                <em className="brand-accent">learn</em>, things we<br />
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
      <section className="section-page-short">
        <div className="container">
          <Reveal className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <div className="ph amber-tint image-4-3 rounded-media" data-label="Spring 2026 weddings · feature" />
            <div>
              <div className="actions-row mb-[18px] flex-wrap">
                <Pill variant="amber">— Featured —</Pill>
                <Pill>Trends</Pill>
                <Pill>8 min read</Pill>
              </div>
              <h2 className="h-display h2">
                What's actually changing in <em className="italic">spring 2026</em> weddings.
              </h2>
              <p className="lede mt-4 md:mt-5">
                Less white tents. More dinner-plate moments. A field report from our last six bookings
                — and the four trends we're seeing rise across the season.
              </p>
              <div className="actions-row mt-5 md:mt-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-paper-3 text-xs font-semibold">
                  AM
                </div>
                <span className="muted text-[13px]">Aanya Mehta · 4 days ago</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Posts grid ─────────────────────────────────── */}
      <section className="section-page-top">
        <div className="container">
          <div className="mb-8 flex flex-wrap gap-2 md:mb-10 md:gap-3">
            <button className="!rounded-full !bg-black !px-4 !py-2 !text-sm !text-white md:!px-5">
              All posts
            </button>
            <button className="rounded-full !border !border-[#d9ccb8] px-4 py-2 text-sm md:px-5">
              Weddings
            </button>
            <button className="rounded-full !border !border-[#d9ccb8] px-4 py-2 text-sm md:px-5">
              Corporate
            </button>
            <button className="rounded-full !border !border-[#d9ccb8] px-4 py-2 text-sm md:px-5">
              Honest pricing
            </button>
            <button className="rounded-full !border !border-[#d9ccb8] px-4 py-2 text-sm md:px-5">
              How-to
            </button>
            <button className="rounded-full !border !border-[#d9ccb8] px-4 py-2 text-sm md:px-5">
              Behind the scenes
            </button>
          </div>

          <Reveal className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 [&_h3]:font-bold">
            {POSTS.map((post) => (
              <ArticleCard key={post.title} href="#" imageTall {...post} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────── */}
      <section className="pb-16 md:pb-[140px]">
        <div className="container">
          <Reveal
            data-scroll="cta"
            className="panel-cta-sm panel-cta-dark grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-[1.1fr_1fr]"
          >
            <div>
              <Eyebrow className="text-paper-muted">— quarterly journal —</Eyebrow>
              <h2 className="h-display h3 mt-3 text-paper">
                Four times a year. <em className="italic">Never more.</em>
              </h2>
              <p className="mt-4 text-paper/70">
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