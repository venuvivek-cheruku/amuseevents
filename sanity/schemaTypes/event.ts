import { defineField, defineType, defineArrayMember } from 'sanity'

const ticketTierMember = defineArrayMember({
  name: 'ticketTier',
  title: 'Ticket Tier',
  type: 'object',
  fields: [
    defineField({ name: 'id',          type: 'slug',    title: 'ID (unique key)', options: { source: 'name' } }),
    defineField({ name: 'name',        type: 'string',  title: 'Tier name', validation: r => r.required() }),
    defineField({ name: 'description', type: 'text',    title: 'Short description', rows: 2 }),
    defineField({ name: 'price',       type: 'number',  title: 'Price (£)' }),
    defineField({ name: 'fee',         type: 'number',  title: 'Booking fee (£)' }),
    defineField({ name: 'soldOut',     type: 'boolean', title: 'Sold out?' }),
    defineField({ name: 'tag',         type: 'string',  title: 'Badge label (e.g. "Most popular")' }),
    defineField({
      name: 'tagStyle',
      type: 'string',
      title: 'Badge style',
      options: { list: ['amber', 'dark'] },
    }),
    defineField({ name: 'maxPerOrder', type: 'number',  title: 'Max per order', initialValue: 10 }),
  ],
  preview: { select: { title: 'name', subtitle: 'price' }, prepare: ({ title, subtitle }) => ({ title, subtitle: `£${subtitle}` }) },
})

const lineupArtistMember = defineArrayMember({
  name: 'lineupArtist',
  title: 'Lineup Artist',
  type: 'object',
  fields: [
    defineField({ name: 'name',       type: 'string', title: 'Name', validation: r => r.required() }),
    defineField({ name: 'role',       type: 'string', title: 'Role (e.g. "Headline · 90 min set")' }),
    defineField({ name: 'initials',   type: 'string', title: 'Initials (for placeholder)' }),
    defineField({ name: 'image',      type: 'image',  title: 'Photo', options: { hotspot: true } }),
    defineField({
      name: 'imageStyle',
      type: 'string',
      title: 'Placeholder style (if no photo)',
      options: { list: ['amber-tint', 'dark', 'default'] },
      initialValue: 'default',
    }),
  ],
})

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title',         type: 'string',   title: 'Event title', validation: r => r.required() }),
    defineField({ name: 'slug',          type: 'slug',     title: 'Slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'date',          type: 'date',     title: 'Date', validation: r => r.required() }),
    defineField({ name: 'dateDisplay',   type: 'string',   title: 'Date display (e.g. "Sat 11 Apr")' }),
    defineField({ name: 'startTime',     type: 'string',   title: 'Start time (e.g. "9pm")' }),
    defineField({ name: 'endTime',       type: 'string',   title: 'End time (e.g. "4am")' }),
    defineField({ name: 'ageRestriction', type: 'string',  title: 'Age restriction', initialValue: '18+' }),
    defineField({ name: 'venue',         type: 'string',   title: 'Venue name', validation: r => r.required() }),
    defineField({ name: 'address',       type: 'string',   title: 'Address' }),
    defineField({ name: 'postcode',      type: 'string',   title: 'Postcode' }),
    defineField({
      name: 'genre',
      type: 'string',
      title: 'Genre',
      options: { list: ['house', 'bolly', 'hiphop', 'garage'] },
      validation: r => r.required(),
    }),
    defineField({ name: 'lineup',        type: 'array',    title: 'Lineup (for card)', of: [{ type: 'string' }] }),
    defineField({ name: 'priceFrom',     type: 'number',   title: 'Starting price (£)' }),
    defineField({ name: 'soldPercentage', type: 'number',  title: 'Sold %', validation: r => r.min(0).max(100) }),
    defineField({ name: 'statusLabel',   type: 'string',   title: 'Status label override (e.g. "Last release")' }),
    defineField({
      name: 'imageStyle',
      type: 'string',
      title: 'Placeholder image style',
      options: { list: ['amber-tint', 'dark', 'default'] },
      initialValue: 'default',
    }),
    defineField({ name: 'coverImage',    type: 'image',    title: 'Cover image', options: { hotspot: true } }),
    defineField({ name: 'ticketTiers',   type: 'array',    title: 'Ticket tiers', of: [ticketTierMember] }),
    defineField({ name: 'lineupDetail',  type: 'array',    title: 'Lineup detail', of: [lineupArtistMember] }),
    defineField({ name: 'description',   type: 'text',     title: 'Night description', rows: 3 }),
    defineField({ name: 'visistoEventId', type: 'string',  title: 'Visisto event ID (for real embed)' }),
    defineField({ name: 'published',     type: 'boolean',  title: 'Published?', initialValue: true }),
  ],
  orderings: [{ title: 'Date', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'coverImage' },
  },
})
