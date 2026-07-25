import { sanityClient } from './client'
import type { Event } from '@/lib/types'

const EVENT_FIELDS = `
  "id": _id,
  title,
  "slug": slug.current,
  date,
  dateDisplay,
  startTime,
  endTime,
  ageRestriction,
  venue,
  address,
  postcode,
  genre,
  lineup,
  priceFrom,
  soldPercentage,
  statusLabel,
  imageStyle,
  "imageUrl": coverImage.asset->url,
  ticketTiers[] {
    "id": id.current,
    name,
    description,
    price,
    fee,
    soldOut,
    isSoldOutBundle,
    tag,
    tagStyle,
    maxPerOrder
  },
  lineupDetail[] {
    name,
    role,
    initials,
    "imageUrl": image.asset->url,
    imageStyle
  },
  description,
  visistoEventId
`

export async function getAllEvents(): Promise<Event[]> {
  const query = `*[_type == "event" && published == true] | order(date asc) { ${EVENT_FIELDS} }`
  try {
    return await sanityClient.fetch<Event[]>(query, {}, { next: { revalidate: 300 } })
  } catch {
    return []
  }
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  const query = `*[_type == "event" && slug.current == $slug][0] { ${EVENT_FIELDS} }`
  try {
    return await sanityClient.fetch<Event | null>(query, { slug }, { next: { revalidate: 300 } })
  } catch {
    return null
  }
}
