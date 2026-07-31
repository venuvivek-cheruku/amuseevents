// app/services/kids/page.tsx

import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Kids Entertainment & Parties London — Amuse Events',
  description:
    'Kids party packages from £600. Themed parties, entertainers, magicians and face-painters. Ages 1–12 — mess managed, memories made.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/kids' },
  openGraph: {
    title: 'Kids Entertainment — Amuse Events',
    description: 'Themed parties, entertainers, and total chaos — beautifully managed.',
    url: 'https://amuseevents.co.uk/services/kids',
    images: [{ url: '/assets/og-kids.jpg', width: 1200, height: 630 }],
  },
}

export default function KidsPage() {
  return (
    <ServiceDetailPage
      crumbLabel="Kids entertainment"
      breadcrumbName="Kids Entertainment"
      breadcrumbUrl="https://amuseevents.co.uk/services/kids"
      heroEyebrow="Kids entertainment · ages 1–12"
      heroHeadline={
        <>
          Parties they
          <br />
          <em className="brand-accent">won&apos;t stop</em>
          <br />
          talking about.
        </>
      }
      heroLede="Themed parties, brilliant entertainers and total chaos — beautifully managed. You get to be a parent, not a party planner."
      heroPrimaryCta="Plan their party"
      galleryImages={[
        { imageStyle: 'amber-tint', label: 'Kids · party' },
        { label: 'Kids · entertainment' },
        { label: 'Kids · décor' },
        { label: 'Kids · fun' },
      ]}
      packagesLede="Pick a starting point. Add a face painter, swap the magician. We'll re-quote same day."
      packages={[
        {
          pill: 'Party box',
          title: 'Entertainer package',
          price: '£600',
          features: [
            'Up to 20 children',
            '2-hour entertainer (magician, clown or character)',
            'Party games coordination',
            'Balloon décor bundle',
            'Set-up & pack-down',
          ],
          cta: 'Choose Party Box',
          featured: false,
        },
        {
          pill: 'Most chosen',
          title: 'Themed party',
          price: '£1,800',
          features: [
            'Everything in Party Box',
            'Up to 40 children',
            'Custom theme décor & styling',
            'Face painter + entertainer',
            'Party food coordination',
            'Two coordinators on-site',
          ],
          cta: 'Choose Themed',
          featured: true,
        },
        {
          pill: 'Spectacular',
          title: 'Full production party',
          price: '£4,000',
          features: [
            'Everything in Themed',
            'Unlimited children',
            'Bespoke set design & build',
            'Character performers',
            'Soft play or activity stations',
            'Photography included',
          ],
          cta: 'Choose Spectacular',
          featured: false,
        },
      ]}
      packagesFootnote="all packages include the discovery call · theme consultation · vendor coordination · VAT inc."
      timelineHeadline={
        <>
          From <em className="italic">enquiry</em>
          <br />
          to <em className="italic">party time</em>.
        </>
      }
      timeline={[
        {
          n: 1,
          month: 'week -6',
          title: 'Chat',
          body: 'Free call. Tell us the age, the theme, the chaos level.',
          amber: true,
        },
        {
          n: 2,
          month: 'week -4',
          title: 'Theme',
          body: 'Mood-board, entertainer shortlist, fixed quote.',
          amber: false,
        },
        {
          n: 3,
          month: 'week -1',
          title: 'Confirm',
          body: 'All vendors confirmed, run-of-day finalised.',
          amber: false,
        },
        {
          n: 4,
          month: 'day 0',
          title: 'Play',
          body: 'Children arrive. Magic happens. You relax.',
          amber: false,
        },
      ]}
      recentEyebrow="Recent kids parties"
      recentEvents={[
        {
          imageStyle: 'amber-tint',
          imageLabel: 'Olivia · 5th',
          category: 'November 2025',
          meta: 'Richmond',
          title: "Olivia's 5th",
          body: '25 kids · themed package · enchanted forest, face painting, puppet show.',
        },
        {
          imageLabel: 'Noah · 7th',
          category: 'October 2025',
          meta: 'Wimbledon',
          title: "Noah's 7th",
          body: '35 kids · full production · superhero theme, character performers, obstacle course.',
        },
        {
          imageLabel: 'Twins · 3rd',
          category: 'September 2025',
          meta: 'Chiswick',
          title: "Ava & Mia's 3rd",
          body: '18 kids · party box · soft play, balloon artist, teddy bears picnic.',
        },
      ]}
      testimonial={{
        imageStyle: 'amber-tint',
        imageLabel: 'Olivia · forest party',
        quote:
          'The enchanted forest was beyond anything we imagined. Every child was mesmerised. Olivia still talks about it months later. Worth every single penny.',
        initials: 'R',
        name: 'Rachel',
        where: 'Kids Party · Richmond · November 2025',
      }}
      ctaHeadline="Tell us their age."
      ctaBody="We'll come back within 4 hours with party ideas."
      ctaButtonLabel="Start planning"
    />
  )
}
