// app/services/production/page.tsx

import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Event Production London — Amuse Events',
  description:
    'Event production packages from £5,000. Staging, AV, lighting, rigging and technical production for events of any scale.',
  alternates: { canonical: 'https://amuseevents.co.uk/services/production' },
  openGraph: {
    title: 'Event Production — Amuse Events',
    description: 'Staging, AV, lighting and full technical production — built to brief.',
    url: 'https://amuseevents.co.uk/services/production',
    images: [{ url: '/assets/og-production.jpg', width: 1200, height: 630 }],
  },
}

export default function ProductionPage() {
  return (
    <ServiceDetailPage
      crumbLabel="Event production"
      breadcrumbName="Event Production"
      breadcrumbUrl="https://amuseevents.co.uk/services/production"
      heroEyebrow="Event production · built to brief"
      heroHeadline={
        <>
          The stage,
          <br />
          <em className="brand-accent">the tech,</em>
          <br />
          the precision.
        </>
      }
      heroLede="Staging, AV, lighting and full technical production for events of any scale. Two hundred builds. Nothing left to chance."
      heroPrimaryCta="Get a production quote"
      galleryImages={[
        { imageStyle: 'amber-tint', label: 'Production · stage' },
        { label: 'Production · lighting' },
        { label: 'Production · AV' },
        { label: 'Production · crew' },
      ]}
      packagesLede="Pick a starting point. Add a stage, drop the pyro. We'll re-quote same day."
      packages={[
        {
          pill: 'Core',
          title: 'AV & lighting package',
          price: '£5,000',
          features: [
            'PA system & sound engineering',
            'Lighting design & rig',
            'Projection / LED screen',
            'Microphones (wired & wireless)',
            'On-site technician',
          ],
          cta: 'Choose Core',
          featured: false,
        },
        {
          pill: 'Most chosen',
          title: 'Full production',
          price: '£12,000',
          features: [
            'Everything in Core',
            'Stage design & build',
            'LED wall & visual content',
            'Rigging & truss systems',
            'Power distribution & generators',
            'Production manager on-site',
          ],
          cta: 'Choose Full Production',
          featured: true,
        },
        {
          pill: 'Turnkey',
          title: 'Complete build',
          price: '£25,000',
          features: [
            'Everything in Full Production',
            'Multi-room / multi-stage builds',
            'Custom set design & fabrication',
            'Pyrotechnics & special effects',
            'Full crew (8+ technicians)',
            'Post-event de-rig & waste management',
          ],
          cta: 'Choose Turnkey',
          featured: false,
        },
      ]}
      packagesFootnote="all packages include the site visit · technical drawings · crew · VAT inc."
      timelineHeadline={
        <>
          From <em className="italic">brief</em>
          <br />
          to <em className="italic">cue one</em>.
        </>
      }
      timeline={[
        {
          n: 1,
          month: 'month -6',
          title: 'Scope',
          body: 'Free site visit. Technical requirements, venue assessment, brief.',
          amber: true,
        },
        {
          n: 2,
          month: 'month -4',
          title: 'Design',
          body: 'Technical drawings, equipment spec, crew plan, fixed quote.',
          amber: false,
        },
        {
          n: 3,
          month: 'week -1',
          title: 'Build',
          body: 'Load-in, rig, focus, programme, sound check, dress rehearsal.',
          amber: false,
        },
        {
          n: 4,
          month: 'day 0',
          title: 'Deliver',
          body: 'Doors open. Cues fire. We run the tech. You run the show.',
          amber: false,
        },
      ]}
      recentEyebrow="Recent productions"
      recentEvents={[
        {
          imageStyle: 'amber-tint',
          imageLabel: 'Conference · ExCeL',
          category: 'November 2025',
          meta: 'ExCeL London',
          title: 'Tech Summit 2025',
          body: '2,000 delegates · turnkey · main stage, breakout AV, LED walls, live stream.',
        },
        {
          imageLabel: 'Awards · Savoy',
          category: 'October 2025',
          meta: 'The Savoy',
          title: 'Industry Awards',
          body: '400 guests · full production · stage, podium, house lighting, video playback.',
        },
        {
          imageLabel: 'Launch · Battersea',
          category: 'September 2025',
          meta: 'Battersea Power Station',
          title: 'Product Launch',
          body: '300 guests · core AV · projection mapping, spatial audio, press wall.',
        },
      ]}
      testimonial={{
        imageStyle: 'amber-tint',
        imageLabel: 'Summit · ExCeL',
        quote:
          "Two thousand delegates, three stages, zero technical issues. Their production team ran it like a military operation — but with warmth. Couldn't fault a thing.",
        initials: 'K',
        name: 'Karen',
        where: 'Conference · ExCeL London · November 2025',
      }}
      ctaHeadline="Tell us the spec."
      ctaBody="We'll come back within 4 hours with a technical proposal."
      ctaButtonLabel="Get a quote"
    />
  )
}
