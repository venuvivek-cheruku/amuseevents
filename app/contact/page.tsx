import type { Metadata } from 'next'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { ContactForm } from '@/components/contact/ContactForm'
import { ButtonArrow } from '@/components/icons/AppIcons'
import { Btn } from '@/components/ui/Btn'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FaqList } from '@/components/ui/FaqList'
import { CONTACT } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact — Get in Touch',
  description:
    'Tell us about your event in 90 seconds. We reply same evening, every time. Free consultation, no deposit, no hard sell.',
  alternates: { canonical: 'https://amuseevents.co.uk/contact' },
  openGraph: {
    title: 'Contact — Amuse Events',
    description: 'Takes 90 seconds. We reply same evening. No deposit, no hard sell.',
    url: 'https://amuseevents.co.uk/contact',
  },
}

const FAQS = [
  { q: 'How quickly do you reply?', a: 'Within 4 hours, including weekends. Usually inside the hour during studio hours.' },
  { q: 'Do you charge for the consultation?', a: 'No. The first 20 minutes are always free, and there\'s no deposit until you\'ve seen the quote.' },
  { q: "What's your minimum booking?", a: 'Around £450 for a kids party, £1,400 for day-of wedding coordination, £3,200 for corporate. Below that we\'ll happily refer you to a planner we trust.' },
  { q: 'Can I see real budgets?', a: "Yes — once we've had a quick chat, we'll send three real anonymised budgets near your size and shape." },
  { q: 'Do you do destination events?', a: 'Within 90 minutes of central London, included. Further (UK or EU), happy to talk.' },
]

export default function ContactPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: 'https://amuseevents.co.uk' },
    { name: 'Contact', url: 'https://amuseevents.co.uk/contact' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* ── Page hero ──────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-split">
            <div>
              <Eyebrow>Say hi</Eyebrow>
              <h1 className="h-display h1 hero-title-gap">
                Tell us about<br />
                your day.{' '}
                <em className="brand-accent">In your words.</em>
              </h1>
            </div>
            <p className="lede">
              Takes 90 seconds. We reply same evening, every time.
              No deposit, no hard sell.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form + sidebar ──────────────────────────────── */}
      <section className="section-page-top">
        <div className="container content-split-wide">
          <Reveal>
            <ContactForm />
          </Reveal>

          <aside className="reveal stack-24">
            {/* Phone card */}
            <div className="card">
              <Eyebrow>— prefer to talk —</Eyebrow>
              <h3 className="h-display h4 my-3.5 mb-2">Old-school hello</h3>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="contact-phone"
              >
                {CONTACT.phone}
              </a>
              <p className="muted mb-[18px] text-[13px]">Mon–Fri 9am–7pm · Sat by appointment</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="contact-email"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* WhatsApp card */}
            <div className="card card-dark">
              <Eyebrow className="text-paper-muted">— fastest —</Eyebrow>
              <h3 className="h-display h4 my-3.5 mb-2 text-paper">WhatsApp the studio</h3>
              <p className="mb-5 text-sm text-paper/70">
                Text us a few details. Replies usually inside the hour, 9am–9pm.
              </p>
              <Btn href={CONTACT.waUrl} variant="amber" external className="w-full justify-center">
                Open WhatsApp <ButtonArrow />
              </Btn>
            </div>

            {/* Studio address card */}
            <div className="card">
              <Eyebrow>— visit —</Eyebrow>
              <h3 className="h-display h4 my-3.5 mb-2">The studio</h3>
              <p className="contact-address">
                Above Bloom & Petal<br />
                112 South Street<br />
                Isleworth, TW7 7BB
              </p>
              <p className="muted text-[13px]">
                2 min from Isleworth station · Free street parking after 6pm
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section id="faq" className="section-paper-2 section-page-faq">
        <div className="container content-split-start">
          <div className="sticky-aside">
            <SectionHeading eyebrow="— FAQ —">
              Before you<br />get in <em className="italic">touch</em>.
            </SectionHeading>
          </div>
          <Reveal>
            <FaqList items={FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
