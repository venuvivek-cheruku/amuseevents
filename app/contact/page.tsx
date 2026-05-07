import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd, buildBreadcrumbSchema } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { ContactForm } from '@/components/contact/ContactForm'
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
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'end' }}>
            <div>
              <span className="eyebrow">Say hi</span>
              <h1 className="h-display h1" style={{ marginTop: 24 }}>
                Tell us about<br />
                your day.{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>In your words.</em>
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
      <section style={{ padding: '80px 0 140px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80 }}>
          <Reveal>
            <ContactForm />
          </Reveal>

          <aside className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Phone card */}
            <div className="card">
              <span className="eyebrow">— prefer to talk —</span>
              <h3 className="h-display h4" style={{ margin: '14px 0 8px' }}>Old-school hello</h3>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 28, letterSpacing: '-.02em', color: 'var(--ink)', margin: '18px 0 6px' }}
              >
                {CONTACT.phone}
              </a>
              <p className="muted" style={{ fontSize: 13, marginBottom: 18 }}>Mon–Fri 9am–7pm · Sat by appointment</p>
              <a
                href={`mailto:${CONTACT.email}`}
                style={{ display: 'block', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink-2)' }}
              >
                {CONTACT.email}
              </a>
            </div>

            {/* WhatsApp card */}
            <div className="card" style={{ background: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' }}>
              <span className="eyebrow" style={{ color: 'rgba(246,241,232,.6)' }}>— fastest —</span>
              <h3 className="h-display h4" style={{ margin: '14px 0 8px', color: 'var(--paper)' }}>WhatsApp the studio</h3>
              <p style={{ color: 'rgba(246,241,232,.7)', fontSize: 14, marginBottom: 20 }}>
                Text us a few details. Replies usually inside the hour, 9am–9pm.
              </p>
              <a
                href={CONTACT.waUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-amber"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Open WhatsApp <span className="arrow">→</span>
              </a>
            </div>

            {/* Studio address card */}
            <div className="card">
              <span className="eyebrow">— visit —</span>
              <h3 className="h-display h4" style={{ margin: '14px 0 8px' }}>The studio</h3>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.4, color: 'var(--ink-2)', margin: '14px 0' }}>
                Above Bloom &amp; Petal<br />
                112 South Street<br />
                Isleworth, TW7 7BB
              </p>
              <p className="muted" style={{ fontSize: 13 }}>
                2 min from Isleworth station · Free street parking after 6pm
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section id="faq" style={{ padding: '100px 0 140px', background: 'var(--paper-2)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 120 }}>
            <span className="eyebrow">— FAQ —</span>
            <h2 className="h-display h2" style={{ marginTop: 18 }}>
              Before you<br />get in <em style={{ fontStyle: 'italic' }}>touch</em>.
            </h2>
          </div>
          <Reveal>
            {FAQS.map((faq, i) => (
              <details
                key={faq.q}
                style={{ borderBottom: '1px solid var(--line)', padding: '24px 0' }}
                open={i === 0}
              >
                <summary style={{
                  cursor: 'pointer', fontFamily: 'var(--serif)', fontSize: 22,
                  listStyle: 'none', display: 'flex', justifyContent: 'space-between',
                }}>
                  {faq.q}
                  <span style={{ color: 'var(--amber)', fontStyle: 'italic', fontSize: 28 }}>+</span>
                </summary>
                <p style={{ marginTop: 16, color: 'var(--ink-3)' }}>{faq.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
