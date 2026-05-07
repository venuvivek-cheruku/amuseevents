export interface TicketTier {
  id: string
  name: string
  description: string
  price: number
  fee: number
  soldOut?: boolean
  tag?: string
  tagStyle?: 'amber' | 'dark'
  isSoldOutBundle?: boolean
  maxPerOrder?: number
}

export interface LineupArtist {
  name: string
  role: string
  initials: string
  imageUrl?: string
  imageStyle?: 'amber-tint' | 'dark' | 'default'
}

export type EventGenre = 'house' | 'bolly' | 'hiphop' | 'garage'

export interface Event {
  id: string
  title: string
  slug?: string
  /** ISO date string e.g. "2026-04-11" */
  date: string
  /** Display string e.g. "Sat 11 Apr" */
  dateDisplay: string
  startTime: string
  endTime: string
  ageRestriction?: string
  venue: string
  address: string
  postcode?: string
  genre: EventGenre
  lineup: string[]
  priceFrom: number
  soldPercentage: number
  statusLabel?: string
  imageStyle?: 'amber-tint' | 'dark' | 'default'
  imageUrl?: string
  ticketTiers: TicketTier[]
  lineupDetail?: LineupArtist[]
  description?: string
  visistoEventId?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  eventType: string
  date?: string
  message: string
}
