import type { Event } from '@/lib/types'
import Image from 'next/image'

interface EventCardProps {
  event: Event
  onSelect: () => void
}

export function EventCard({ event, onSelect }: EventCardProps) {
  const statusLabel =
    event.statusLabel ??
    (event.soldPercentage >= 95 ? 'Last release' : `${event.soldPercentage}% sold`)

  return (
    <a
      href="#book"
      className="event-card"
      data-tag={event.genre}
      onClick={(e) => {
        e.preventDefault()
        onSelect()
      }}
    >
      {event.imageUrl ? (
        <Image
          src={event.imageUrl}
          alt={event.title}
          width={220}
          height={220}
          style={{ borderRadius: 16, objectFit: 'cover', aspectRatio: '1/1' }}
        />
      ) : (
        <div
          className={`ph ${event.imageStyle ?? ''}`}
          data-label={event.title}
          style={{ aspectRatio: '1/1', borderRadius: 16 }}
        />
      )}

      <div>
        <div className="when">
          {event.dateDisplay} · {event.startTime} – {event.endTime}
        </div>
        <h3>{event.title}</h3>
        <p className="where">
          {event.venue} · {event.address}
        </p>
        <div className="lineup">
          {event.lineup.map((dj) => (
            <span key={dj} className="dj">
              {dj}
            </span>
          ))}
        </div>
      </div>

      <div className="price">
        <div className="from">From</div>
        <div className="num">£{event.priceFrom}</div>
        <div className="status">
          <div className="bar">
            <i style={{ width: `${event.soldPercentage}%` }} />
          </div>
          {statusLabel}
        </div>
      </div>
    </a>
  )
}
