// app/services/private/page.tsx

import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Private Party Planning London — Amuse Events',
  description:
    'Private party packages from £1,600. Anniversaries, engagements, house parties and celebrations — designed and delivered with discretion.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/private' },
  openGraph: {
    title: 'Private Parties — Amuse Events',
    description: 'Anniversaries, engagements and celebrations — beautifully private.',
    url: 'https://amuseevents.co.uk/services/private',
    images: [{ url: '/assets/og-private.jpg', width: 1200, height: 630 }],
  },
}

export default function PrivatePartiesPage() {
  return (
    <ServiceDetailPage
      crumbLabel="Private parties"
      breadcrumbName="Private Parties"
      breadcrumbUrl="https://amuseevents.co.uk/services/private"
      heroEyebrow="Private parties · beautifully discreet"
      heroHeadline={
        <>
          Your celebration,
          <br />
          <em className="brand-accent">your rules,</em>
          <br />
          our hands.
        </>
      }
      heroLede="Anniversaries, engagements and everything worth celebrating — designed around you and delivered with quiet precision."
      heroPrimaryCta="Plan my party"
      galleryImages={[
        { imageStyle: 'amber-tint', label: 'Private · venue' },
        { label: 'Private · dinner' },
        { label: 'Private · guests' },
        { label: 'Private · details' },
      ]}
      packagesLede="Pick a starting point. Add entertainment, swap the menu. We'll re-quote same day."
      packages={[
        {
          pill: 'Gather',
          title: 'Styled gathering',
          price: '£1,600',
          features: [
            'Up to 40 guests',
            'Venue styling & ambience',
            'Run-of-evening timeline',
            'Catering coordination',
            'One coordinator on-site',
          ],
          cta: 'Choose Gather',
          featured: false,
        },
        {
          pill: 'Most chosen',
          title: 'Full private party',
          price: '£4,200',
          features: [
            'Everything in Gather',
            'Up to 100 guests',
            'Entertainment sourcing (DJ, band, performer)',
            'Custom menu design with caterer',
            'Bar setup & drinks coordination',
            'Two coordinators on-site',
          ],
          cta: 'Choose Full Party',
          featured: true,
        },
        {
          pill: 'Exclusive',
          title: 'Bespoke celebration',
          price: '£8,000',
          features: [
            'Everything in Full Party',
            'Unlimited guests',
            'Bespoke theme & design system',
            'Venue sourcing & exclusive hire',
            'Production & staging',
            'Three-person team on the day',
          ],
          cta: 'Choose Exclusive',
          featured: false,
        },
      ]}
      packagesFootnote="all packages include the discovery call · mood-board · vendor coordination · VAT inc."
      timelineHeadline={
        <>
          From <em className="italic">enquiry</em>
          <br />
          to <em className="italic">on the night</em>.
        </>
      }
      timeline={[
        {
          n: 1,
          month: 'month -3',
          title: 'Listen',
          body: 'Free call. Tell us the occasion, the guest list, the dream.',
          amber: true,
        },
        {
          n: 2,
          month: 'month -2',
          title: 'Design',
          body: 'Mood-board, venue options, menu concepts, fixed quote.',
          amber: false,
        },
        {
          n: 3,
          month: 'week -2',
          title: 'Confirm',
          body: 'All vendors locked. Final walk-through. Briefings done.',
          amber: false,
        },
        {
          n: 4,
          month: 'day 0',
          title: 'Celebrate',
          body: 'You arrive. You enjoy. We hold the rest.',
          amber: false,
        },
      ]}
      recentEyebrow="Recent private parties"
      recentEvents={[
        {
          imageStyle: 'amber-tint',
          imageLabel: 'R&L · Anniversary',
          category: 'October 2025',
          meta: 'Kensington',
          title: "Ruby & Leo's 25th",
          body: '80 guests · full party · townhouse takeover, live band, champagne tower.',
        },
        {
          imageLabel: 'Engagement · Mayfair',
          category: 'September 2025',
          meta: 'Mayfair',
          title: "Tom & Ella's Engagement",
          body: '60 guests · styled gathering · cocktail evening, string quartet, garden marquee.',
        },
        {
          imageLabel: 'Housewarming · Dulwich',
          category: 'August 2025',
          meta: 'Dulwich',
          title: "The Khans' Housewarming",
          body: '120 guests · bespoke package · garden party, BBQ, kids area, DJ till midnight.',
        },
      ]}
      testimonial={{
        imageStyle: 'amber-tint',
        imageLabel: 'R&L · anniversary',
        quote:
          'They turned our living room into a venue. Sixty guests, a string quartet and not a single thing out of place. It felt like a film set but warmer.',
        initials: 'R&L',
        name: 'Ruby & Leo',
        where: 'Anniversary · Kensington · October 2025',
      }}
      ctaHeadline="Tell us the occasion."
      ctaBody="We'll come back within 4 hours with a plan."
      ctaButtonLabel="Start planning"
    />
  )
}
