import type { ComponentType, ReactNode, SVGProps } from 'react'
import Link from 'next/link'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { ButtonArrow, IconCheck } from '@/components/icons/AppIcons'
import { Btn } from '@/components/ui/Btn'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { Testimonial } from '@/components/ui/Testimonial'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { FaqList } from '@/components/ui/FaqList'
import { CtaPanel } from '@/components/ui/CtaPanel'
import { SITE_FAQS } from '@/lib/faqs'

export interface PackageTier {
  pill: string
  title: string
  price: string
  features: string[]
  cta: string
  featured: boolean
}

export interface TimelineStep {
  n: number
  month: string
  title: string
  body: string
  amber: boolean
}

export interface RecentEvent {
  imageStyle?: 'amber-tint' | 'dark'
  imageLabel: string
  category: string
  meta: string
  title: string
  body: string
}

export interface TestimonialData {
  imageStyle?: 'amber-tint' | 'dark'
  imageLabel: string
  quote: string
  initials: string
  name: string
  where: string
}

export interface ReviewData {
  text: string
  initials: string
  name: string
  where: string
}

export interface GalleryImage {
  imageStyle?: 'amber-tint'
  label: string
}

export interface StatItem {
  value: string
  label: string
}

export interface Differentiator {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
}

export interface AddOn {
  name: string
  price: string
}

export interface ProcessQuote {
  quote: string
  attribution: string
}

export interface ServiceDetailPageProps {
  crumbLabel: string
  breadcrumbName: string
  breadcrumbUrl: string

  heroEyebrow: string
  heroHeadline: ReactNode
  heroLede: string
  heroPrimaryCta: string
  galleryImages: [GalleryImage, GalleryImage, GalleryImage, GalleryImage]

  stats: [StatItem, StatItem, StatItem]

  differentiatorsEyebrow: string
  differentiatorsHeadline: ReactNode
  differentiators: Differentiator[]

  packagesLede: string
  packages: PackageTier[]
  packagesIncluded: string[]

  addOnsLede: string
  addOns: AddOn[]

  timelineHeadline: ReactNode
  timeline: TimelineStep[]
  processQuote: ProcessQuote
  processImageLabel: string

  recentEyebrow: string
  recentEvents: [RecentEvent, RecentEvent, RecentEvent, RecentEvent]
  galleryStrip: [GalleryImage, GalleryImage, GalleryImage, GalleryImage]

  testimonial: TestimonialData
  review: ReviewData

  ctaHeadline: ReactNode
  ctaBody: string
  ctaButtonLabel: string
}

export function ServiceDetailPage({
  crumbLabel,
  breadcrumbName,
  breadcrumbUrl,
  heroEyebrow,
  heroHeadline,
  heroLede,
  heroPrimaryCta,
  galleryImages,
  stats,
  differentiatorsEyebrow,
  differentiatorsHeadline,
  differentiators,
  packagesLede,
  packages,
  packagesIncluded,
  addOnsLede,
  addOns,
  timelineHeadline,
  timeline,
  processQuote,
  processImageLabel,
  recentEyebrow,
  recentEvents,
  galleryStrip,
  testimonial,
  review,
  ctaHeadline,
  ctaBody,
  ctaButtonLabel,
}: ServiceDetailPageProps) {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Services', url: 'https://amuseevents.co.uk/services' },
    { name: breadcrumbName, url: breadcrumbUrl },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-split-wedding">
            <div>
              <div className="crumb">
                <Link href="/services">Services</Link> / <b>{crumbLabel}</b>
              </div>
              <Eyebrow>{heroEyebrow}</Eyebrow>
              <h1 className="h-display h1 hero-title-gap">{heroHeadline}</h1>
              <p className="lede lede-gap">{heroLede}</p>
              <div className="actions-row mt-9">
                <Btn href="/contact" variant="amber" size="lg">
                  {heroPrimaryCta} <ButtonArrow />
                </Btn>
                <Btn href="#packages" variant="ghost" size="lg">
                  What&apos;s included
                </Btn>
              </div>
            </div>

            <div className="wedding-gallery">
              <div
                className={`ph image-3-4${galleryImages[0].imageStyle ? ` ${galleryImages[0].imageStyle}` : ''}`}
                data-label={galleryImages[0].label}
              />
              <div
                className={`ph image-3-4 wedding-gallery-offset${galleryImages[1].imageStyle ? ` ${galleryImages[1].imageStyle}` : ''}`}
                data-label={galleryImages[1].label}
              />
              <div
                className={`ph image-3-4${galleryImages[2].imageStyle ? ` ${galleryImages[2].imageStyle}` : ''}`}
                data-label={galleryImages[2].label}
              />
              <div
                className={`ph image-3-4${galleryImages[3].imageStyle ? ` ${galleryImages[3].imageStyle}` : ''}`}
                data-label={galleryImages[3].label}
              />
            </div>
          </div>

          {/* ── Trust stats ─────────────────────────────── */}
          <Reveal className="stats-row stats-top-border">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="n">{s.value}</div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Why choose us ───────────────────────────────── */}
      <section className="section-page section-paper-2">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow={differentiatorsEyebrow} center>
              {differentiatorsHeadline}
            </SectionHeading>
          </Reveal>

          <Reveal className="grid-3-cards items-stretch">
            {differentiators.map((d) => (
              <div key={d.title} className="card flex flex-col">
                <span className="mega-ico">
                  <d.icon aria-hidden="true" />
                </span>
                <h3 className="h-display h4 mt-5">{d.title}</h3>
                <p className="mt-2 text-sm text-ink-3">{d.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Packages ───────────────────────────────────── */}
      <section id="packages" className="section-page-xl">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading
              eyebrow="— what's included —"
              center
              lede={packagesLede}
            >
              Everything,
              <br />
              <em className="italic">handled.</em>
            </SectionHeading>
          </Reveal>

          <Reveal className="grid-3-cards items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`card flex flex-col${pkg.featured ? ' card-dark' : ''}`}
              >
                <span
                  className={`pill self-start${
                    pkg.featured ? ' bg-amber text-ink border-amber' : ''
                  }`}
                >
                  {pkg.pill}
                </span>

                <h3
                  className={`h-display h4 mt-[18px]${pkg.featured ? ' text-paper' : ''}`}
                >
                  {pkg.title}
                </h3>

                <div
                  className={`my-3.5 font-serif text-[56px] leading-none tracking-[-.03em]${
                    pkg.featured ? ' text-paper' : ''
                  }`}
                >
                  {pkg.price}
                  <span
                    className={`font-sans text-base${
                      pkg.featured ? ' text-paper/60' : ' text-ink-3'
                    }`}
                  >
                    {' '}
                    / from
                  </span>
                </div>

                <ul className="my-6 flex list-none flex-col gap-3 p-0 text-sm">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex gap-2${pkg.featured ? ' text-paper/90' : ''}`}
                    >
                      <IconCheck className="icon-check mt-0.5" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Btn
                  href="/contact"
                  variant={pkg.featured ? 'amber' : 'ghost'}
                  className="mt-auto"
                >
                  {pkg.cta}
                </Btn>
              </div>
            ))}
          </Reveal>

          <Reveal className="chip-row mt-10 justify-center">
            {packagesIncluded.map((item) => (
              <span key={item} className="chip">
                <IconCheck className="icon-check" aria-hidden="true" /> {item}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Add-ons ──────────────────────────────────────── */}
      <section className="section-page section-paper-2">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— optional extras —" center lede={addOnsLede}>
              Add it on,
              <br />
              <em className="italic">if you want it.</em>
            </SectionHeading>
          </Reveal>

          <Reveal className="grid-4-cards">
            {addOns.map((a) => (
              <div key={a.name} className="addon-card">
                <span>{a.name}</span>
                <b>{a.price}</b>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="dark-section section-page-xl section-rounded-dark">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— how it works —" center>
              {timelineHeadline}
            </SectionHeading>
          </Reveal>

          <Reveal className="content-split-sticky">
            <div>
              {timeline.map((t) => (
                <div key={t.n} className="step">
                  <div className="num">{String(t.n).padStart(2, '0')}</div>
                  <div>
                    <div className="label">{t.month}</div>
                    <h3>{t.title}</h3>
                    <p>{t.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="process-sidebar">
              <div className="ph dark image-4-5" data-label={processImageLabel} />
              <div className="mt-6 rounded-ae-lg border border-paper/10 bg-paper/5 p-7">
                <div className="eyebrow mb-3 text-amber">— promise —</div>
                <p className="m-0 font-serif text-[22px] leading-snug text-paper">
                  &quot;{processQuote.quote}&quot;
                </p>
                <p className="mt-[18px] text-[13px] text-paper/55">
                  — {processQuote.attribution}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Recent events ──────────────────────────────── */}
      <section className="section-paper-2 section-page-gallery">
        <div className="container">
          <Reveal className="section-heading-row mb-12">
            <SectionHeading eyebrow={recentEyebrow}>
              A few from <em className="italic">last season</em>
            </SectionHeading>
            <Btn href="/contact" variant="ghost">
              Full portfolio <ButtonArrow />
            </Btn>
          </Reveal>

          <Reveal className="grid-4-cards">
            {recentEvents.map((w) => (
              <ArticleCard key={w.title} imageTall {...w} />
            ))}
          </Reveal>

          <Reveal className="home-gallery mt-8">
            {galleryStrip.map((g) => (
              <div
                key={g.label}
                className={`ph${g.imageStyle ? ` ${g.imageStyle}` : ''}`}
                data-label={g.label}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="section-page-xl">
        <div className="container">
          <Reveal>
            <Testimonial {...testimonial} />
          </Reveal>

          <Reveal className="mt-10 max-w-[480px]">
            <ReviewCard {...review} />
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className="section-paper-2 section-page-md">
        <div className="container">
          <Reveal className="content-split-start">
            <div className="sticky-aside">
              <SectionHeading eyebrow="— FAQ —">
                The questions
                <br />
                we hear <em className="italic">most</em>.
              </SectionHeading>
            </div>
            <FaqList items={SITE_FAQS} />
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <CtaPanel variant="amber">
        <h2 className="h-display h2">{ctaHeadline}</h2>
        <p className="mt-[18px] text-lg text-ink-2">{ctaBody}</p>
        <div className="actions-center mt-8">
          <Btn href="/contact" variant="primary" size="lg">
            {ctaButtonLabel} <ButtonArrow />
          </Btn>
        </div>
      </CtaPanel>
    </>
  )
}
