'use client'

import { useState, useRef, useCallback } from 'react'
import type { Event, EventGenre } from '@/lib/types'
import { EventCard } from './EventCard'
import { VisistoWidget } from './VisistoWidget'
import { Reveal } from '@/components/Reveal'
import Link from 'next/link'

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
      <section style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <Reveal className="row-between" style={{ marginBottom: 32, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span className="eyebrow">— upcoming nights —</span>
              <h2 className="h-display h3" style={{ marginTop: 12 }}>
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
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            {filteredEvents.length === 0 ? (
              <p className="muted" style={{ padding: '48px 0', textAlign: 'center' }}>
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
        style={{ padding: '80px 0 120px' }}
        aria-label="Book tickets"
      >
        <div className="container" style={{ maxWidth: 1200 }}>
          <Reveal style={{ marginBottom: 32 }}>
            <span className="eyebrow">— book your tickets —</span>
            <h2
              className="h-display h2"
              style={{ marginTop: 12 }}
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
            className="mono muted"
            style={{ textAlign: 'center', marginTop: 24, fontSize: 11 }}
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
    <section style={{ padding: '0 0 120px' }}>
      <div className="container" style={{ maxWidth: 1200 }}>
        <Reveal
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 64,
          }}
        >
          <div>
            <span className="eyebrow">— lineup —</span>
            <h2 className="h-display h3" style={{ marginTop: 12 }}>
              On the
              <br />
              decks tonight.
            </h2>
            {event.description && (
              <p className="muted" style={{ marginTop: 16 }}>
                {event.description}
              </p>
            )}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 14,
            }}
          >
            {event.lineupDetail!.map((artist) => (
              <div key={artist.name} className="lineup-card">
                <div
                  className={`ph ${artist.imageStyle ?? ''}`}
                  data-label={artist.initials}
                  style={{ width: 80, height: 80, borderRadius: 12 }}
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
    <section style={{ padding: '0 0 120px' }}>
      <div className="container">
        <Reveal
          data-scroll="cta"
          style={{
            background: 'var(--ink)',
            color: 'var(--paper)',
            borderRadius: 32,
            padding: 64,
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
        >
          <div>
            <span
              className="eyebrow"
              style={{ color: 'rgba(246,241,232,.6)' }}
            >
              — promote your own night? —
            </span>
            <h2
              className="h-display h3"
              style={{ color: 'var(--paper)', marginTop: 12 }}
            >
              We can host{' '}
              <em style={{ fontStyle: 'italic' }}>your event</em> on the same
              ticketing engine.
            </h2>
            <p
              style={{
                marginTop: 20,
                color: 'rgba(246,241,232,.75)',
              }}
            >
              Same Visisto embed, your branding, our event team behind it. From
              80-cap basement parties to 1,200-cap warehouse nights.
            </p>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <Link href="/contact" className="btn btn-amber btn-lg">
              Pitch us your night <span className="arrow">→</span>
            </Link>
            <Link
              href="/services#dj"
              className="btn btn-ghost btn-lg"
              style={{
                color: 'var(--paper)',
                borderColor: 'rgba(246,241,232,.4)',
              }}
            >
              DJ &amp; club services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
