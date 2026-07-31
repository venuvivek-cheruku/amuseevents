// app/services/photography/page.tsx

import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Event Photography & Film London — Amuse Events',
  description:
    'Event photography and videography packages from £900. Natural, editorial and cinematic coverage for weddings, parties and corporate events.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/photography' },
  openGraph: {
    title: 'Photography & Film — Amuse Events',
    description: 'Natural, editorial and cinematic coverage — every moment, every angle.',
    url: 'https://amuseevents.co.uk/services/photography',
    images: [{ url: '/assets/og-photography.jpg', width: 1200, height: 630 }],
  },
}

export default function PhotographyPage() {
  return (
    <ServiceDetailPage
      crumbLabel="Photography & film"
      breadcrumbName="Photography & Film"
      breadcrumbUrl="https://amuseevents.co.uk/services/photography"
      heroEyebrow="Photography & film · every moment, every angle"
      heroHeadline={
        <>
          Be present.
          <br />
          <em className="brand-accent">We&apos;ll capture</em>
          <br />
          the rest.
        </>
      }
      heroLede="Natural, editorial and cinematic coverage for weddings, parties and corporate events. You won't know we're there — until you see the photos."
      heroPrimaryCta="Book a photographer"
      galleryImages={[
        { imageStyle: 'amber-tint', label: 'Photo · candid' },
        { label: 'Photo · portrait' },
        { label: 'Photo · detail' },
        { label: 'Film · behind scenes' },
      ]}
      packagesLede="Pick a starting point. Add a videographer, drop the drone. We'll re-quote same day."
      packages={[
        {
          pill: 'Capture',
          title: 'Photography package',
          price: '£900',
          features: [
            'One photographer for up to 6 hours',
            'Pre-event brief & shot list',
            'Natural & candid coverage',
            '300+ edited digital images',
            'Online gallery within 14 days',
          ],
          cta: 'Choose Capture',
          featured: false,
        },
        {
          pill: 'Most chosen',
          title: 'Photo & film',
          price: '£2,800',
          features: [
            'Everything in Capture',
            'Videographer for up to 8 hours',
            'Cinematic highlight reel (3–5 min)',
            'Full ceremony & speeches edit',
            'Drone footage (venue permitting)',
            'Two photographers on-site',
          ],
          cta: 'Choose Photo & Film',
          featured: true,
        },
        {
          pill: 'Editorial',
          title: 'Full editorial coverage',
          price: '£5,500',
          features: [
            'Everything in Photo & Film',
            'Art-directed editorial session',
            'Full-length documentary film (15–20 min)',
            'Same-day edit for evening screening',
            'Album design & print coordination',
            'Second videographer',
          ],
          cta: 'Choose Editorial',
          featured: false,
        },
      ]}
      packagesFootnote="all packages include the pre-event brief · shot list · editing · online gallery · VAT inc."
      timelineHeadline={
        <>
          From <em className="italic">brief</em>
          <br />
          to <em className="italic">gallery</em>.
        </>
      }
      timeline={[
        {
          n: 1,
          month: 'month -2',
          title: 'Brief',
          body: 'Free call. Tell us the event, the style, the must-have shots.',
          amber: true,
        },
        {
          n: 2,
          month: 'month -1',
          title: 'Plan',
          body: 'Shot list, timeline integration, lighting assessment.',
          amber: false,
        },
        {
          n: 3,
          month: 'week -1',
          title: 'Recce',
          body: 'Venue walk-through for angles, light and logistics.',
          amber: false,
        },
        {
          n: 4,
          month: 'day 0',
          title: 'Shoot',
          body: 'We blend in. You be present. Every moment captured.',
          amber: false,
        },
      ]}
      recentEyebrow="Recent shoots"
      recentEvents={[
        {
          imageStyle: 'amber-tint',
          imageLabel: 'Wedding · Richmond',
          category: 'September 2025',
          meta: 'Richmond Hill',
          title: 'P&D Wedding Film',
          body: 'Photo & film · two photographers, drone, 4-minute highlight reel, 400+ images.',
        },
        {
          imageLabel: 'Corporate · City',
          category: 'October 2025',
          meta: 'City of London',
          title: 'Annual Gala Coverage',
          body: 'Photography package · 6-hour coverage, press-ready images, 24-hour turnaround.',
        },
        {
          imageLabel: 'Birthday · Notting Hill',
          category: 'August 2025',
          meta: 'Notting Hill',
          title: '40th Birthday Film',
          body: 'Editorial package · art-directed portraits, same-day edit screened at dinner.',
        },
      ]}
      testimonial={{
        imageStyle: 'amber-tint',
        imageLabel: 'P&D · garden',
        quote:
          "We didn't notice them all day. Then the gallery arrived and we cried. They captured moments we didn't even know happened. Absolutely extraordinary.",
        initials: 'P&D',
        name: 'Priya & Daniel',
        where: 'Wedding Photography · Richmond · September 2025',
      }}
      ctaHeadline="Tell us the date."
      ctaBody="We'll match you with the right photographer within 4 hours."
      ctaButtonLabel="Book a photographer"
    />
  )
}
