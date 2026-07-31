import type { ReactNode } from 'react'
import Link from 'next/link'
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

export interface GalleryImage {
  imageStyle?: 'amber-tint'
  label: string
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

  packagesLede: string
  packages: PackageTier[]
  packagesFootnote: string

  timelineHeadline: ReactNode
  timeline: TimelineStep[]

  recentEyebrow: string
  recentEvents: RecentEvent[]

  testimonial: TestimonialData

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
  packagesLede,
  packages,
  packagesFootnote,
  timelineHeadline,
  timeline,
  recentEyebrow,
  recentEvents,
  testimonial,
  ctaHeadline,
  ctaBody,
  ctaButtonLabel,
}: ServiceDetailPageProps) {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Services', url: 'https://amuseevents.co.uk/services' },
    { name: breadcrumbName, url: breadcrumbUrl },
  ])

  const lastStep = timeline[timeline.length - 1]

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
        </div>
      </section>

      {/* ── Packages ───────────────────────────────────── */}
      <section id="packages" className="section-page section-paper-2">
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

          <p className="reveal mono mt-8 text-center text-ink-3">{packagesFootnote}</p>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────── */}
      <section className="section-page-xl">
        <div className="container">
          <Reveal className="center-intro">
            <SectionHeading eyebrow="— how it works —" center>
              {timelineHeadline}
            </SectionHeading>
          </Reveal>

          <Reveal className="timeline">
            <div className="timeline-line" />
            {timeline.map((t) => (
              <div key={t.n} className="timeline-item">
                <div
                  className={`timeline-dot absolute left-1/2 top-0 -translate-x-1/2 ${
                    t.amber
                      ? 'border-0 bg-amber text-ink'
                      : t.n === lastStep.n
                        ? 'timeline-dot-final'
                        : 'border-[1.5px] border-ink bg-paper text-ink'
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

          <Reveal className="grid-3-cards">
            {recentEvents.map((w) => (
              <ArticleCard key={w.title} imageTall {...w} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Testimonial ────────────────────────────────── */}
      <section className="section-page">
        <div className="container">
          <Reveal>
            <Testimonial {...testimonial} />
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
