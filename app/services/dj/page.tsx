// app/services/dj/page.tsx

import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { IconMusic, IconShield, IconSparkle } from '@/components/icons/AppIcons'

export const metadata: Metadata = {
  title: 'DJ & Club Events London — Amuse Events',
  description:
    'Professional DJ services and club night production from £1,200. Sound, lighting, talent booking and full event management.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/dj' },
  openGraph: {
    title: 'DJ & Club Events — Amuse Events',
    description:
      'Sound, lighting, talent and the energy to match. Professional DJ and club event services.',
    url: 'https://amuseevents.co.uk/services/dj',
    images: [{ url: '/assets/og-dj.jpg', width: 1200, height: 630 }],
  },
}

export default function DJPage() {
  return (
    <ServiceDetailPage
      crumbLabel="DJ & club events"
      breadcrumbName="DJ & Club Events"
      breadcrumbUrl="https://amuseevents.co.uk/services/dj"
      heroEyebrow="DJ & club events · sound done right"
      heroHeadline={
        <>
          The sound,
          <br />
          <em className="brand-accent">the lights,</em>
          <br />
          the energy.
        </>
      }
      heroLede="Professional DJ services, club night production and festival staging. Three hundred events. The dancefloor always full."
      heroPrimaryCta="Book a DJ"
      galleryImages={[
        { imageStyle: 'amber-tint', label: 'DJ · booth' },
        { label: 'DJ · crowd' },
        { label: 'DJ · lights' },
        { label: 'DJ · production' },
      ]}
      stats={[
        { value: '300+', label: 'Nights run since 2014' },
        { value: '20+', label: 'In-house resident DJs' },
        { value: '4.9★', label: 'Average client rating' },
      ]}
      differentiatorsEyebrow="— why us —"
      differentiatorsHeadline={
        <>
          A dancefloor that <em className="italic">never empties</em>.
        </>
      }
      differentiators={[
        {
          icon: IconMusic,
          title: 'Resident DJs across every genre',
          body: 'House, hip-hop, garage, Bollywood, soul — our own roster, not a booking agency middleman.',
        },
        {
          icon: IconSparkle,
          title: 'Sound & lighting designed for the room',
          body: 'Every rig is spec\'d for the specific venue, not a one-size-fits-all setup.',
        },
        {
          icon: IconShield,
          title: 'Full liability & PRS covered',
          body: 'Insurance, licensing and venue paperwork handled before you even ask about it.',
        },
      ]}
      packagesLede="Pick a starting point. Add lighting, swap talent. We'll re-quote same day."
      packages={[
        {
          pill: 'Solo set',
          title: 'DJ & sound package',
          price: '£1,200',
          features: [
            'Professional DJ for up to 5 hours',
            'PA system & booth setup',
            'Pre-event music consultation',
            'Wireless microphone for speeches',
            'Set-up & pack-down',
          ],
          cta: 'Choose Solo Set',
          featured: false,
        },
        {
          pill: 'Most chosen',
          title: 'Full club night',
          price: '£3,800',
          features: [
            'Everything in Solo Set',
            'Lighting rig & dance floor design',
            'Two DJs or DJ + live performer',
            'Venue liaison & sound check',
            'Security coordination',
            'Event manager on-site',
          ],
          cta: 'Choose Club Night',
          featured: true,
        },
        {
          pill: 'Festival',
          title: 'Multi-stage production',
          price: '£9,500',
          features: [
            'Everything in Club Night',
            'Multi-room / multi-stage setup',
            'Talent booking & rider management',
            'Full production & staging',
            'LED walls & visual design',
            'Four-person production team',
          ],
          cta: 'Choose Festival',
          featured: false,
        },
      ]}
      packagesIncluded={['Consultation', 'Sound spec', 'Vendor coordination', 'VAT included']}
      addOnsLede="Bolt these onto any package — priced separately, added in a day."
      addOns={[
        { name: 'Extra hour of DJ time', price: '£200' },
        { name: 'Live percussionist / MC', price: '£400' },
        { name: 'Cold spark or CO2 effects', price: '£350' },
        { name: 'Live stream of the night', price: '£500' },
      ]}
      timelineHeadline={
        <>
          From <em className="italic">brief</em>
          <br />
          to <em className="italic">bass drop</em>.
        </>
      }
      timeline={[
        {
          n: 1,
          month: 'month -3',
          title: 'Brief',
          body: 'Free call. Tell us the genre, the venue, the vision.',
          amber: true,
        },
        {
          n: 2,
          month: 'month -2',
          title: 'Design',
          body: 'Sound spec, lighting plot, talent shortlist, fixed quote.',
          amber: false,
        },
        {
          n: 3,
          month: 'week -1',
          title: 'Tech check',
          body: 'Venue walk-through, sound check, final run-through.',
          amber: false,
        },
        {
          n: 4,
          month: 'day 0',
          title: 'Drop',
          body: 'Doors open. Bass hits. We run the night.',
          amber: false,
        },
      ]}
      processQuote={{
        quote: "Your only job on the night is to be on the dancefloor when the drop hits.",
        attribution: 'Aanya Mehta, Founder',
      }}
      processImageLabel="DJ · sound check"
      recentEyebrow="Recent DJ events"
      recentEvents={[
        {
          imageStyle: 'amber-tint',
          imageLabel: 'Warehouse · E1',
          category: 'November 2025',
          meta: 'Shoreditch',
          title: 'Warehouse Sessions',
          body: '400 capacity · full production · two rooms, 6 DJs, LED tunnel entrance.',
        },
        {
          imageLabel: 'Rooftop · SE1',
          category: 'September 2025',
          meta: 'Southbank',
          title: 'Sunset Sessions',
          body: '200 guests · club night package · rooftop terrace, sunset DJ set, cocktail bar.',
        },
        {
          imageLabel: 'Private · W1',
          category: 'August 2025',
          meta: 'Mayfair',
          title: 'Private Launch Party',
          body: '150 guests · solo set + lighting · brand launch, curated playlist, press photographer.',
        },
        {
          imageLabel: 'Garage night · N1',
          category: 'June 2025',
          meta: 'Islington',
          title: 'UK Garage Revival',
          body: '250 capacity · full club night · three DJs, MC, smoke effects, sold-out door.',
        },
      ]}
      galleryStrip={[
        { imageStyle: 'amber-tint', label: 'DJ booth close-up' },
        { label: 'Crowd on the floor' },
        { label: 'Lighting rig detail' },
        { label: 'Late-night set' },
      ]}
      testimonial={{
        imageStyle: 'amber-tint',
        imageLabel: 'Warehouse · E1',
        quote:
          "Sound was crystal, lighting was cinematic, and the dancefloor didn't empty once in six hours. They run a night the way it should be run.",
        initials: 'J',
        name: 'James',
        where: 'Club Event · Shoreditch · November 2025',
      }}
      review={{
        text: '"Booked the multi-stage package for a launch party — sound was flawless across both rooms and the transitions between DJs were seamless."',
        initials: 'RA',
        name: 'Raj A.',
        where: 'Private Launch · Mayfair',
      }}
      ctaHeadline="Tell us the vibe."
      ctaBody="We'll come back within 4 hours with a plan."
      ctaButtonLabel="Book a DJ"
    />
  )
}
