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
          className="aspect-square rounded-2xl object-cover"
        />
      ) : (
        <div
          className={`ph image-square rounded-2xl ${event.imageStyle ?? ''}`}
          data-label={event.title}
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
          <progress className="event-progress" max={100} value={event.soldPercentage} aria-label={`${event.soldPercentage}% sold`} />
          {statusLabel}
        </div>
      </div>
    </a>
  )
}
