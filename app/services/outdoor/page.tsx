// app/services/outdoor/page.tsx

import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { IconShield, IconTree, IconClock } from '@/components/icons/AppIcons'

export const metadata: Metadata = {
  title: 'Outdoor Events London — Amuse Events',
  description:
    'Outdoor event packages from £2,500. Garden parties, festivals, fêtes and open-air celebrations — weather-planned, beautifully delivered.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/outdoor' },
  openGraph: {
    title: 'Outdoor Events — Amuse Events',
    description: 'Garden parties, festivals and open-air celebrations — rain or shine.',
    url: 'https://amuseevents.co.uk/services/outdoor',
    images: [{ url: '/assets/og-outdoor.jpg', width: 1200, height: 630 }],
  },
}

export default function OutdoorPage() {
  return (
    <ServiceDetailPage
      crumbLabel="Outdoor events"
      breadcrumbName="Outdoor Events"
      breadcrumbUrl="https://amuseevents.co.uk/services/outdoor"
      heroEyebrow="Outdoor events · rain or shine"
      heroHeadline={
        <>
          Take it
          <br />
          <em className="brand-accent">outside.</em>
          <br />
          We&apos;ll handle the sky.
        </>
      }
      heroLede="Garden parties, festivals and open-air celebrations — weather-planned, permit-handled, beautifully delivered."
      heroPrimaryCta="Plan my event"
      galleryImages={[
        { imageStyle: 'amber-tint', label: 'Outdoor · marquee' },
        { label: 'Outdoor · festival' },
        { label: 'Outdoor · garden' },
        { label: 'Outdoor · sunset' },
      ]}
      stats={[
        { value: '90+', label: 'Outdoor events delivered' },
        { value: '100%', label: 'Weather contingency planned' },
        { value: '4.8★', label: 'Average client rating' },
      ]}
      differentiatorsEyebrow="— why us —"
      differentiatorsHeadline={
        <>
          Sun or rain, <em className="italic">the show goes on</em>.
        </>
      }
      differentiators={[
        {
          icon: IconTree,
          title: 'Every site walked in person',
          body: 'We recce ground, access and power before quoting — no surprises on install day.',
        },
        {
          icon: IconShield,
          title: 'Weather contingency, always',
          body: 'Every outdoor event has a wet-weather plan built in from the first quote, not bolted on.',
        },
        {
          icon: IconClock,
          title: 'Full permits & logistics handled',
          body: 'Licensing, generators, access roads and neighbour notices — sorted before you arrive.',
        },
      ]}
      packagesLede="Pick a starting point. Scale up or down. We'll re-quote same day."
      packages={[
        {
          pill: 'Garden',
          title: 'Garden party',
          price: '£2,500',
          features: [
            'Up to 60 guests',
            'Marquee or sail shade setup',
            'Outdoor furniture & styling',
            'Catering coordination',
            'One coordinator on-site',
          ],
          cta: 'Choose Garden',
          featured: false,
        },
        {
          pill: 'Most chosen',
          title: 'Full outdoor event',
          price: '£6,500',
          features: [
            'Everything in Garden',
            'Up to 200 guests',
            'Stretch tent or tipi hire',
            'Power, lighting & PA system',
            'Bar & food stall coordination',
            'Two coordinators on-site',
          ],
          cta: 'Choose Full Outdoor',
          featured: true,
        },
        {
          pill: 'Festival',
          title: 'Festival production',
          price: '£15,000',
          features: [
            'Everything in Full Outdoor',
            'Unlimited capacity',
            'Multi-stage production',
            'Generator & infrastructure',
            'Talent booking & artist liaison',
            'Full production team on-site',
          ],
          cta: 'Choose Festival',
          featured: false,
        },
      ]}
      packagesIncluded={['Site visit', 'Weather plan', 'Vendor coordination', 'VAT included']}
      addOnsLede="Bolt these onto any package — priced separately, added in a day."
      addOns={[
        { name: 'Backup indoor venue on hold', price: '£400' },
        { name: 'Extra flooring / hard standing', price: '£600' },
        { name: 'Generator upgrade', price: '£350' },
        { name: 'Fire pit or outdoor heaters', price: '£250' },
      ]}
      timelineHeadline={
        <>
          From <em className="italic">site visit</em>
          <br />
          to <em className="italic">gates open</em>.
        </>
      }
      timeline={[
        {
          n: 1,
          month: 'month -4',
          title: 'Recce',
          body: 'Free site visit. We assess ground, access, power, weather exposure.',
          amber: true,
        },
        {
          n: 2,
          month: 'month -3',
          title: 'Plan',
          body: 'Site plan, weather contingency, vendor shortlist, fixed quote.',
          amber: false,
        },
        {
          n: 3,
          month: 'week -1',
          title: 'Build',
          body: 'Structures up, power on, sound checked, décor placed.',
          amber: false,
        },
        {
          n: 4,
          month: 'day 0',
          title: 'Enjoy',
          body: "Gates open. Sun or rain — we've planned for both.",
          amber: false,
        },
      ]}
      processQuote={{
        quote: "We've never cancelled an outdoor event for weather. We've just planned around it.",
        attribution: 'Aanya Mehta, Founder',
      }}
      processImageLabel="Outdoor · site build"
      recentEyebrow="Recent outdoor events"
      recentEvents={[
        {
          imageStyle: 'amber-tint',
          imageLabel: 'Garden · Richmond',
          category: 'August 2025',
          meta: 'Richmond',
          title: 'Richmond Garden Party',
          body: '120 guests · full outdoor · riverside marquee, hog roast, live acoustic.',
        },
        {
          imageLabel: 'Festival · Kent',
          category: 'July 2025',
          meta: 'Kent',
          title: 'Summer Festival',
          body: '500 guests · festival production · two stages, 12 acts, glamping village.',
        },
        {
          imageLabel: 'Fête · Hampstead',
          category: 'June 2025',
          meta: 'Hampstead',
          title: 'Village Fête',
          body: '300 guests · garden package · charity fête, vintage stalls, brass band.',
        },
        {
          imageLabel: 'Wedding · Surrey',
          category: 'May 2025',
          meta: 'Surrey',
          title: 'Countryside Wedding',
          body: '160 guests · full outdoor · stretch tent, string lighting, marquee dance floor.',
        },
      ]}
      galleryStrip={[
        { imageStyle: 'amber-tint', label: 'Marquee interior' },
        { label: 'String lighting detail' },
        { label: 'Outdoor bar setup' },
        { label: 'Golden hour reception' },
      ]}
      testimonial={{
        imageStyle: 'amber-tint',
        imageLabel: 'Garden · Richmond',
        quote:
          "It rained at 3pm. By 3:15 every guest was under cover with a drink in hand. They'd planned for it down to the minute. The party didn't skip a beat.",
        initials: 'M',
        name: 'Michael',
        where: 'Garden Party · Richmond · August 2025',
      }}
      review={{
        text: '"They handled every permit and neighbour notice for our festival without us lifting a finger. Genuinely stress-free."',
        initials: 'KH',
        name: 'Kent Summer Festival',
        where: 'Festival Production · Kent',
      }}
      ctaHeadline="Tell us the location."
      ctaBody="We'll come back within 4 hours with a site plan."
      ctaButtonLabel="Start planning"
    />
  )
}
