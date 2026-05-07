interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

/** Injects a JSON-LD <script> block into the page head */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/* ── Schema builders ────────────────────────────── */

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Amuse Events',
    url: 'https://amuseevents.co.uk',
    logo: 'https://amuseevents.co.uk/assets/logo-mark.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-7449-470-276',
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.instagram.com/amuseeventsuk/',
      'https://m.facebook.com/AmuseEventsUK/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Isleworth',
      addressRegion: 'London',
      addressCountry: 'GB',
    },
  }
}

export function buildEventSchema(event: {
  title: string
  date: string
  startTime: string
  endTime: string
  venue: string
  address: string
  priceFrom: number
  description?: string
  imageUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: event.title,
    description: event.description,
    image: event.imageUrl,
    startDate: `${event.date}T${toIsoTime(event.startTime)}`,
    endDate: `${event.date}T${toIsoTime(event.endTime)}`,
    location: {
      '@type': 'Place',
      name: event.venue,
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.address,
        addressLocality: 'London',
        addressCountry: 'GB',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Amuse Events',
      url: 'https://amuseevents.co.uk',
    },
    offers: {
      '@type': 'Offer',
      price: event.priceFrom,
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      url: 'https://amuseevents.co.uk/events',
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  }
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/* ── Helper ─────────────────────────────────────── */

function toIsoTime(display: string): string {
  const lower = display.toLowerCase().replace(/\s/g, '')
  const isPm = lower.includes('pm')
  const num = parseInt(lower, 10)
  if (isNaN(num)) return '21:00:00'
  let h = num
  if (isPm && h !== 12) h += 12
  if (!isPm && h === 12) h = 0
  if (h >= 24) h -= 24
  return `${String(h).padStart(2, '0')}:00:00`
}
