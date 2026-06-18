import type { Metadata } from 'next'
import { EventsPageClient } from '@/components/events/EventsPageClient'
import { STATIC_EVENTS } from '@/lib/static-events'
import { getAllEvents } from '@/sanity/lib/queries'
import { JsonLd, buildEventSchema, buildBreadcrumbSchema } from '@/components/JsonLd'
import { HeroIntro } from '@/components/animations/HeroIntro'
import type { Event } from '@/lib/types'

export const metadata: Metadata = {
  title: 'DJ Nights & Tickets',
  description:
    'Buy tickets to Amuse Events DJ nights and club takeovers across London. Powered by Visisto — secure, instant, on your phone.',
  alternates: { canonical: 'https://amuseevents.co.uk/events' },
  openGraph: {
    title: 'DJ Nights & Tickets — Amuse Events',
    description:
      'Six DJ nights and club takeovers across London. Secure tickets via Visisto.',
    url: 'https://amuseevents.co.uk/events',
    images: [{ url: '/assets/og-events.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DJ Nights & Tickets — Amuse Events',
    description: 'Six London club nights. Secure tickets via Visisto.',
  },
}

export default async function EventsPage() {
  let events: Event[] = STATIC_EVENTS

  // Try Sanity; fall back to static seed data if not configured
  try {
    const sanityEvents = await getAllEvents()
    if (sanityEvents && sanityEvents.length > 0) events = sanityEvents
  } catch {
    // Sanity not configured yet — static data is fine for development
  }

  const eventSchemas = events.map(buildEventSchema)
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Tickets', url: 'https://amuseevents.co.uk/events' },
  ])

  return (
    <>
      <JsonLd data={eventSchemas} />
      <JsonLd data={breadcrumb} />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="events-hero" aria-label="Events hero">
        <HeroIntro />
        <div className="container">
          <div className="hero-split-events mt-8">
            <div>
              <span
                data-hero="eyebrow"
                className="eyebrow text-amber"
              >
                Live this season
              </span>
              <h1
                className="h-display h1 hero-title-gap text-paper"
              >
                <span data-hero="title-1" className="block">
                  Dance floors,
                </span>
                <em
                  data-hero="title-2"
                  className="block brand-accent"
                >
                  in our hands
                </em>
                .
              </h1>
              <p
                data-hero="lede"
                className="lede mt-6 text-paper/85"
              >
                Six DJ nights and club takeovers between now and June. Tickets
                through Visisto — secure, instant, on your phone before you
                leave the page.
              </p>
            </div>

            <div className="stats-row dark">
              <div data-hero="stat" className="stat amber events-stat-dark">
                <div className="n">06</div>
                <div className="l">Upcoming nights</div>
              </div>
              <div data-hero="stat" className="stat events-stat-dark">
                <div className="n">
                  2,400<span className="stat-accent">+</span>
                </div>
                <div className="l">Tickets sold this year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive: filter + widget + lineup + CTA ── */}
      <EventsPageClient events={events} />
    </>
  )
}
