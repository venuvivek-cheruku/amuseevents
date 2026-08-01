// app/services/birthdays/page.tsx

import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { IconClock, IconShield, IconSparkle } from '@/components/icons/AppIcons'

export const metadata: Metadata = {
  title: 'Birthday Party Planning London — Amuse Events',
  description:
    'Birthday party packages from £800. Intimate dinners to full-scale celebrations. Styled, sourced and run — so you actually enjoy your own party.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/birthdays' },
  openGraph: {
    title: 'Birthday Parties — Amuse Events',
    description:
      'From intimate dinners to full-scale celebrations. Every detail handled.',
    url: 'https://amuseevents.co.uk/services/birthdays',
    images: [{ url: '/assets/og-birthdays.jpg', width: 1200, height: 630 }],
  },
}

export default function BirthdaysPage() {
  return (
    <ServiceDetailPage
      crumbLabel="Birthdays"
      breadcrumbName="Birthdays"
      breadcrumbUrl="https://amuseevents.co.uk/services/birthdays"
      heroEyebrow="Birthdays · every age, every style"
      heroHeadline={
        <>
          Your birthday,
          <br />
          <em className="brand-accent">actually fun</em>
          <br />
          for you too.
        </>
      }
      heroLede="From intimate dinners to landmark blowouts — styled, sourced and run so you can be the guest of honour, not the event manager."
      heroPrimaryCta="Plan my birthday"
      galleryImages={[
        { imageStyle: 'amber-tint', label: 'Birthday · venue' },
        { label: 'Birthday · celebration' },
        { label: 'Birthday · details' },
        { label: 'Birthday · guests' },
      ]}
      stats={[
        { value: '180+', label: 'Birthdays run since 2014' },
        { value: '4.9', label: 'Average client rating' },
        { value: '48hr', label: 'Average quote turnaround' },
      ]}
      differentiatorsEyebrow="— why us —"
      differentiatorsHeadline={
        <>
          Your party, <em className="italic">without the admin</em>.
        </>
      }
      differentiators={[
        {
          icon: IconSparkle,
          title: 'Bespoke themes, not templates',
          body: 'Every mood-board is built from scratch around you — no recycled Pinterest boards.',
        },
        {
          icon: IconClock,
          title: 'Fast, honest quoting',
          body: 'A fixed price back within 48 hours, with nothing hidden for the week before.',
        },
        {
          icon: IconShield,
          title: 'Fully insured, always',
          body: 'Every vendor and entertainer we bring is insured and vetted — no surprises on the day.',
        },
      ]}
      packagesLede="Pick a starting point. Move things in or out. We'll re-quote in 24 hours."
      packages={[
        {
          pill: 'Intimate',
          title: 'Styled dinner party',
          price: '£800',
          features: [
            'Up to 30 guests',
            'Venue styling & table décor',
            'Run-of-evening timeline',
            'Set-up & pack-down',
            'One coordinator on-site',
          ],
          cta: 'Choose Intimate',
          featured: false,
        },
        {
          pill: 'Most chosen',
          title: 'Full birthday event',
          price: '£2,400',
          features: [
            'Everything in Intimate',
            'Up to 80 guests',
            'DJ or live music sourcing',
            'Custom cake & catering coordination',
            'Photo booth or photographer',
            'Two coordinators on-site',
          ],
          cta: 'Choose Full',
          featured: true,
        },
        {
          pill: 'Milestone',
          title: 'Landmark celebration',
          price: '£5,500',
          features: [
            'Everything in Full',
            'Unlimited guest count',
            'Bespoke theme & design system',
            'Entertainment sourcing',
            'Production & staging',
            'Three-person team on the day',
          ],
          cta: 'Choose Milestone',
          featured: false,
        },
      ]}
      packagesIncluded={['Discovery call', 'Mood-board', 'Vendor coordination', 'VAT included']}
      addOnsLede="Bolt these onto any package — priced separately, added in a day."
      addOns={[
        { name: 'Extra hour of venue time', price: '£150' },
        { name: 'Photo booth with props', price: '£300' },
        { name: 'Late-night snack cart', price: '£220' },
        { name: 'Custom cake topper & signage', price: '£90' },
      ]}
      timelineHeadline={
        <>
          From <em className="italic">enquiry</em>
          <br />
          to <em className="italic">on the day</em>.
        </>
      }
      timeline={[
        {
          n: 1,
          month: 'week -8',
          title: 'Discover',
          body: 'Free call. Tell us the vibe, the guest count, the dream.',
          amber: true,
        },
        {
          n: 2,
          month: 'week -6',
          title: 'Design',
          body: 'Mood-board, venue shortlist, fixed quote.',
          amber: false,
        },
        {
          n: 3,
          month: 'week -3',
          title: 'Source',
          body: 'Catering, entertainment, décor — all confirmed.',
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
      processQuote={{
        quote: "Your only job on the day is to show up dressed and blow out the candles.",
        attribution: 'Aanya Mehta, Founder',
      }}
      processImageLabel="Birthday · planner on-site"
      recentEyebrow="Recent birthdays"
      recentEvents={[
        {
          imageStyle: 'amber-tint',
          imageLabel: 'Sophia · 30th',
          category: 'October 2025',
          meta: 'Shoreditch',
          title: "Sophia's 30th",
          body: '60 guests · full package · rooftop terrace, live jazz trio, custom cocktail bar.',
        },
        {
          imageLabel: 'Marcus · 50th',
          category: 'September 2025',
          meta: 'Mayfair',
          title: "Marcus's 50th",
          body: '120 guests · milestone package · private members club, big band, black-tie dinner.',
        },
        {
          imageLabel: 'Leila · 21st',
          category: 'August 2025',
          meta: 'Camden',
          title: "Leila's 21st",
          body: '45 guests · styled dinner · warehouse venue, neon theme, DJ till 2am.',
        },
        {
          imageLabel: 'Tom · 40th',
          category: 'July 2025',
          meta: 'Battersea',
          title: "Tom's 40th",
          body: '90 guests · full package · garden marquee, live band, fireworks finale.',
        },
      ]}
      galleryStrip={[
        { imageStyle: 'amber-tint', label: 'Table styling detail' },
        { label: 'Balloon installation' },
        { label: 'Cake table' },
        { label: 'Evening lighting' },
      ]}
      testimonial={{
        imageStyle: 'amber-tint',
        imageLabel: 'Sophia · rooftop',
        quote:
          "I told them I wanted a rooftop, jazz and tequila. They came back with a full concept in 48 hours. On the night I didn't lift a finger — best birthday I've ever had.",
        initials: 'S',
        name: 'Sophia',
        where: '30th Birthday · Shoreditch · October 2025',
      }}
      review={{
        text: '"Handled a last-minute venue change two days out without missing a beat. Genuinely calm under pressure."',
        initials: 'MB',
        name: 'Marcus B.',
        where: '50th Birthday · Mayfair',
      }}
      ctaHeadline="Tell us the date."
      ctaBody="We'll come back within 4 hours with ideas, every time."
      ctaButtonLabel="Start planning"
    />
  )
}
