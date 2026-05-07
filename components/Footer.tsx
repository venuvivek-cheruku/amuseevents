import Link from 'next/link'
import Image from 'next/image'

import { CONTACT } from '@/lib/utils'
const { waUrl: WA_URL, phone: PHONE, phoneTel: PHONE_TEL } = CONTACT

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="brand">
                <Image src="/assets/logo-mark.png" alt="" width={38} height={38} />
                <span className="brand-name">
                  amuse <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>events</em>
                </span>
              </Link>
              <p>
                A small London studio crafting weddings, parties and corporate moments
                since 2014. Calm planning. Joyful days.
              </p>
              <div className="footer-social">
                <a href="https://www.instagram.com/amuseeventsuk/" aria-label="Instagram" target="_blank" rel="noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://m.facebook.com/AmuseEventsUK/" aria-label="Facebook" target="_blank" rel="noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 21v-7h2.5l.5-3H13V9c0-1 .3-1.5 1.5-1.5H16V5h-2.5C11 5 10 6 10 8v3H8v3h2v7h3z" />
                  </svg>
                </a>
                <a href={WA_URL} aria-label="WhatsApp" target="_blank" rel="noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm5.6 14.3c-.2.6-1.2 1.2-1.7 1.3-.4.1-1 .1-1.6-.1-1.5-.5-3.7-1.7-5.1-3.4-.6-.7-1.1-1.5-1.5-2.4-.4-1-.4-1.8 0-2.5.2-.4.5-.6.8-.6h.6c.2 0 .4 0 .5.4l.7 1.7c.1.2.1.4 0 .5l-.4.5c-.1.1-.2.2-.1.4.4 1 1.1 1.7 2.1 2.2.2.1.3 0 .4-.1l.4-.5c.1-.2.3-.2.5-.1l1.6.7c.2.1.3.2.3.3 0 .3 0 .8-.5 1.2z" />
                  </svg>
                </a>
                <a href="mailto:contact@amuseevents.co.uk" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4>Services</h4>
              <ul>
                <li><Link href="/weddings">Weddings</Link></li>
                <li><Link href="/services#birthdays">Birthdays</Link></li>
                <li><Link href="/services#kids">Kids parties</Link></li>
                <li><Link href="/corporate">Corporate</Link></li>
                <li><Link href="/services#dj">DJ &amp; club</Link></li>
                <li><Link href="/services#production">Production</Link></li>
              </ul>
            </div>

            <div>
              <h4>Studio</h4>
              <ul>
                <li><Link href="/studio">About us</Link></li>
                <li><Link href="/services">All services</Link></li>
                <li><Link href="/journal">Journal</Link></li>
                <li><Link href="/studio#team">The team</Link></li>
              </ul>
            </div>

            <div>
              <h4>Help</h4>
              <ul>
                <li><Link href="/contact">Get a quote</Link></li>
                <li><Link href="/contact#faq">FAQ</Link></li>
                <li><a href={WA_URL} target="_blank" rel="noreferrer">WhatsApp</a></li>
                <li><a href={`tel:${PHONE_TEL}`}>Call us</a></li>
              </ul>
            </div>

            <div>
              <h4>Visit</h4>
              <ul>
                <li>Isleworth</li>
                <li>London, UK</li>
                <li><a href="mailto:contact@amuseevents.co.uk">contact@amuseevents.co.uk</a></li>
                <li><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Amuse Events UK Ltd. All rights reserved.</span>
            <span>Crafted with care in London</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a href={WA_URL} target="_blank" rel="noreferrer" className="wa-fab" aria-label="WhatsApp us">
        <span className="ico">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm5.6 14.3c-.2.6-1.2 1.2-1.7 1.3-.4.1-1 .1-1.6-.1-1.5-.5-3.7-1.7-5.1-3.4-.6-.7-1.1-1.5-1.5-2.4-.4-1-.4-1.8 0-2.5.2-.4.5-.6.8-.6h.6c.2 0 .4 0 .5.4l.7 1.7c.1.2.1.4 0 .5l-.4.5c-.1.1-.2.2-.1.4.4 1 1.1 1.7 2.1 2.2.2.1.3 0 .4-.1l.4-.5c.1-.2.3-.2.5-.1l1.6.7c.2.1.3.2.3.3 0 .3 0 .8-.5 1.2z" />
          </svg>
        </span>
        <span className="label-line">
          <strong>Chat on WhatsApp</strong>
          <small>Replies in 4 hours</small>
        </span>
      </a>

      {/* Sticky bar — rendered, shown via scroll in client component */}
      <StickyBar />
    </>
  )
}

function StickyBar() {
  return (
    <div className="sticky-bar" id="stickyBar">
      <span className="text">
        Ready to plan? <b>Free consultation, no card needed.</b>
      </span>
      <Link href="/contact" className="btn btn-amber btn-sm">
        Start now <span className="arrow">→</span>
      </Link>
    </div>
  )
}
