'use client'

import { useState, useRef, useCallback } from 'react'
import type { Event, EventGenre } from '@/lib/types'
import { EventCard } from './EventCard'
import { VisistoWidget } from './VisistoWidget'
import { Reveal } from '@/components/Reveal'
import { ButtonArrow } from '@/components/icons/AppIcons'
import { Btn } from '@/components/ui/Btn'

const GENRE_FILTERS: { key: 'all' | EventGenre; label: string }[] = [
  { key: 'all',    label: 'All nights' },
  { key: 'house',  label: 'House' },
  { key: 'bolly',  label: 'Bollywood' },
  { key: 'hiphop', label: 'Hip-hop' },
  { key: 'garage', label: 'Garage' },
]

interface EventsPageClientProps {
  events: Event[]
}

export function EventsPageClient({ events }: EventsPageClientProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | EventGenre>('all')
  const [selectedEventId, setSelectedEventId] = useState<string>(events[0]?.id ?? '')
  const bookRef = useRef<HTMLElement>(null)

  const filteredEvents =
    activeFilter === 'all'
      ? events
      : events.filter((e) => e.genre === activeFilter)

  const selectedEvent =
    events.find((e) => e.id === selectedEventId) ?? events[0]

  const handleSelectEvent = useCallback(
    (eventId: string) => {
      setSelectedEventId(eventId)
      setTimeout(() => {
        bookRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    },
    []
  )

  return (
    <>
      {/* ── Event list ───────────────────────────────── */}
      <section className="pt-20 pb-10">
        <div className="container">
          <Reveal className="section-heading-row mb-8">
            <div>
              <span className="eyebrow">— upcoming nights —</span>
              <h2 className="h-display h3 mt-3">
                Pick a night.
              </h2>
            </div>

            <div className="events-filter" role="group" aria-label="Filter by genre">
              {GENRE_FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={activeFilter === f.key ? 'active' : ''}
                  onClick={() => setActiveFilter(f.key)}
                  aria-pressed={activeFilter === f.key}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div
            id="eventList"
            role="list"
            className="flex flex-col gap-4"
          >
            {filteredEvents.length === 0 ? (
              <p className="muted py-12 text-center">
                No events in this genre right now — check back soon.
              </p>
            ) : (
              filteredEvents.map((event) => (
                <div key={event.id} role="listitem">
                  <EventCard
                    event={event}
                    onSelect={() => handleSelectEvent(event.id)}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── Visisto ticketing embed ────────────────────── */}
      <section
        id="book"
        ref={bookRef}
        className="section-page-deep-bottom"
        aria-label="Book tickets"
      >
        <div className="container max-w-[1200px]">
          <Reveal className="mb-8">
            <span className="eyebrow">— book your tickets —</span>
            <h2
              className="h-display h2 mt-3"
              aria-live="polite"
            >
              {selectedEvent?.title}
            </h2>
          </Reveal>

          {selectedEvent && (
            <Reveal>
              <VisistoWidget event={selectedEvent} />
            </Reveal>
          )}

          <p
            className="mono muted mt-6 text-center text-[11px]"
          >
            14-day refund window · Tickets are non-transferable · Resale only via
            Visisto Exchange
          </p>
        </div>
      </section>

      {/* ── Lineup ────────────────────────────────────── */}
      {selectedEvent?.lineupDetail && selectedEvent.lineupDetail.length > 0 && (
        <LineupSection event={selectedEvent} />
      )}

      {/* ── Promote your own night ────────────────────── */}
      <HostYourOwnCta />
    </>
  )
}

/* ── Lineup section ───────────────────────────────── */

function LineupSection({ event }: { event: Event }) {
  return (
    <section className="pb-[120px]">
      <div className="container max-w-[1200px]">
        <Reveal className="content-split-start">
          <div>
            <span className="eyebrow">— lineup —</span>
            <h2 className="h-display h3 mt-3">
              On the
              <br />
              decks tonight.
            </h2>
            {event.description && (
              <p className="muted mt-4">
                {event.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {event.lineupDetail!.map((artist) => (
              <div key={artist.name} className="lineup-card">
                <div
                  data-label={artist.initials}
                  className={`ph h-20 w-20 rounded-ae-md ${artist.imageStyle ?? ''}`}
                />
                <div>
                  <h4>{artist.name}</h4>
                  <p>{artist.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Host your own CTA ────────────────────────────── */

function HostYourOwnCta() {
  return (
    <section className="pb-[120px]">
      <div className="container">
        <Reveal
          data-scroll="cta"
          className="panel-cta-sm panel-cta-dark events-cta-grid"
        >
          <div>
            <span className="eyebrow text-paper-muted">
              — promote your own night? —
            </span>
            <h2 className="h-display h3 mt-3 text-paper">
              We can host{' '}
              <em className="italic">your event</em> on the same
              ticketing engine.
            </h2>
            <p className="mt-5 text-paper/75">
              Same Visisto embed, your branding, our event team behind it. From
              80-cap basement parties to 1,200-cap warehouse nights.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Btn href="/contact" variant="amber" size="lg">
              Pitch us your night <ButtonArrow />
            </Btn>
            <Btn href="/services#dj" variant="ghost" size="lg" className="btn-paper-outline">
              DJ &amp; club services
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
