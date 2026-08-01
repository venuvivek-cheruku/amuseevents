// app/services/decor/page.tsx

import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { IconPalette, IconSparkle, IconClock } from '@/components/icons/AppIcons'

export const metadata: Metadata = {
  title: 'Art Work & Décor London — Amuse Events',
  description:
    'Event styling and décor packages from £1,800. Floral design, table styling, installations and bespoke art direction for any occasion.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/decor' },
  openGraph: {
    title: 'Art Work & Décor — Amuse Events',
    description: 'Floral design, installations and bespoke styling — every detail considered.',
    url: 'https://amuseevents.co.uk/services/decor',
    images: [{ url: '/assets/og-decor.jpg', width: 1200, height: 630 }],
  },
}

export default function DecorPage() {
  return (
    <ServiceDetailPage
      crumbLabel="Art work & décor"
      breadcrumbName="Art Work & Décor"
      breadcrumbUrl="https://amuseevents.co.uk/services/decor"
      heroEyebrow="Art work & décor · every detail considered"
      heroHeadline={
        <>
          Spaces that
          <br />
          <em className="brand-accent">feel like</em>
          <br />
          something.
        </>
      }
      heroLede="Floral design, table styling, immersive installations and bespoke art direction. We don't decorate — we transform."
      heroPrimaryCta="Get a styling quote"
      galleryImages={[
        { imageStyle: 'amber-tint', label: 'Décor · floral' },
        { label: 'Décor · table' },
        { label: 'Décor · installation' },
        { label: 'Décor · detail' },
      ]}
      stats={[
        { value: '130+', label: 'Spaces transformed' },
        { value: '100%', label: 'Bespoke, no repeated designs' },
        { value: '4.9', label: 'Average client rating' },
      ]}
      differentiatorsEyebrow="— why us —"
      differentiatorsHeadline={
        <>
          We don&apos;t decorate — <em className="italic">we transform</em>.
        </>
      }
      differentiators={[
        {
          icon: IconSparkle,
          title: 'In-house design & build',
          body: 'Backdrops, florals and installations are designed, sourced and built by our own studio team.',
        },
        {
          icon: IconPalette,
          title: 'Never a repeated concept',
          body: 'Every mood-board is built fresh around your palette — nothing lifted from a catalogue.',
        },
        {
          icon: IconClock,
          title: 'Gone by morning',
          body: 'Full strike and clean removal the next day, so venues get their space back on time.',
        },
      ]}
      packagesLede="Pick a starting point. Add florals, drop the furniture. We'll re-quote same day."
      packages={[
        {
          pill: 'Style',
          title: 'Styling package',
          price: '£1,800',
          features: [
            'Mood-board & colour palette',
            'Table styling & centrepieces',
            'Welcome signage & stationery direction',
            'Candle & linen coordination',
            'Set-up & styling on the day',
          ],
          cta: 'Choose Style',
          featured: false,
        },
        {
          pill: 'Most chosen',
          title: 'Full décor design',
          price: '£4,500',
          features: [
            'Everything in Style',
            'Floral design & installation',
            'Ceremony backdrop or arch',
            'Lounge furniture & feature areas',
            'Lighting design for ambience',
            'Dedicated stylist on the day',
          ],
          cta: 'Choose Full Décor',
          featured: true,
        },
        {
          pill: 'Bespoke',
          title: 'Art direction & build',
          price: '£10,000',
          features: [
            'Everything in Full Décor',
            'Bespoke installation design & fabrication',
            'Immersive environment creation',
            'Custom prop & set build',
            'Art direction for photography',
            'Full styling team on the day',
          ],
          cta: 'Choose Bespoke',
          featured: false,
        },
      ]}
      packagesIncluded={['Consultation', 'Mood-board', 'Sourcing', 'VAT included']}
      addOnsLede="Bolt these onto any package — priced separately, added in a day."
      addOns={[
        { name: 'Hanging floral installation', price: '£1,400' },
        { name: 'Neon or custom signage', price: '£350' },
        { name: 'Extra lounge furniture set', price: '£600' },
        { name: 'Next-day strike & removal', price: '£250' },
      ]}
      timelineHeadline={
        <>
          From <em className="italic">inspiration</em>
          <br />
          to <em className="italic">installation</em>.
        </>
      }
      timeline={[
        {
          n: 1,
          month: 'month -3',
          title: 'Inspire',
          body: 'Free consultation. Share your vision, Pinterest boards, colour loves.',
          amber: true,
        },
        {
          n: 2,
          month: 'month -2',
          title: 'Design',
          body: 'Mood-board, material samples, floral concepts, fixed quote.',
          amber: false,
        },
        {
          n: 3,
          month: 'week -1',
          title: 'Source',
          body: 'All materials sourced, florals ordered, props confirmed.',
          amber: false,
        },
        {
          n: 4,
          month: 'day 0',
          title: 'Install',
          body: 'We arrive early. You arrive to a transformed space.',
          amber: false,
        },
      ]}
      processQuote={{
        quote: "You should walk into the room and not recognise it. That's the brief every time.",
        attribution: 'Aanya Mehta, Founder',
      }}
      processImageLabel="Décor · install morning"
      recentEyebrow="Recent styling"
      recentEvents={[
        {
          imageStyle: 'amber-tint',
          imageLabel: 'Wedding · Kew',
          category: 'September 2025',
          meta: 'Kew Gardens',
          title: 'Botanical Wedding',
          body: 'Full décor · hanging floral installation, moss table runners, candlelit dinner.',
        },
        {
          imageLabel: 'Launch · Soho',
          category: 'October 2025',
          meta: 'Soho',
          title: 'Brand Launch',
          body: 'Art direction · immersive brand environment, custom neon, press-ready styling.',
        },
        {
          imageLabel: 'Anniversary · Chelsea',
          category: 'August 2025',
          meta: 'Chelsea',
          title: 'Golden Anniversary',
          body: 'Styling package · elegant gold palette, orchid centrepieces, vintage linen.',
        },
        {
          imageLabel: 'Gala · Mayfair',
          category: 'July 2025',
          meta: 'Mayfair',
          title: 'Charity Gala',
          body: 'Bespoke build · immersive entrance tunnel, custom stage backdrop, art direction.',
        },
      ]}
      galleryStrip={[
        { imageStyle: 'amber-tint', label: 'Hanging floral detail' },
        { label: 'Table centrepiece' },
        { label: 'Custom signage' },
        { label: 'Backdrop installation' },
      ]}
      testimonial={{
        imageStyle: 'amber-tint',
        imageLabel: 'Wedding · Kew',
        quote:
          'Walking into the reception was like stepping into a painting. The hanging florals, the candlelight, the moss — it was otherworldly. Our guests still talk about it.',
        initials: 'S&J',
        name: 'Sarah & James',
        where: 'Wedding Décor · Kew Gardens · September 2025',
      }}
      review={{
        text: '"Our brand launch needed a completely immersive space and they nailed the concept from a single mood board call."',
        initials: 'SB',
        name: 'Soho Brand Launch',
        where: 'Art Direction · Soho',
      }}
      ctaHeadline="Share your vision."
      ctaBody="We'll come back within 4 hours with a concept."
      ctaButtonLabel="Get a styling quote"
    />
  )
}
