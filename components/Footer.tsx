'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import {
  ButtonArrow,
  IconEmail,
  IconFacebook,
  IconInstagram,
  IconWhatsApp,
} from '@/components/icons/AppIcons'
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
                  amuse <em className="brand-accent">events</em>
                </span>
              </Link>
              <p>
                A small London studio crafting weddings, parties and corporate moments
                since 2014. Calm planning. Joyful days.
              </p>
              <div className="footer-social">
                <a href="https://www.instagram.com/amuseeventsuk/" aria-label="Instagram" target="_blank" rel="noreferrer">
                  <IconInstagram aria-hidden="true" />
                </a>
                <a href="https://m.facebook.com/AmuseEventsUK/" aria-label="Facebook" target="_blank" rel="noreferrer">
                  <IconFacebook aria-hidden="true" />
                </a>
                <a href={WA_URL} aria-label="WhatsApp" target="_blank" rel="noreferrer">
                  <IconWhatsApp aria-hidden="true" />
                </a>
                <a href="mailto:contact@amuseevents.co.uk" aria-label="Email">
                  <IconEmail aria-hidden="true" />
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
          <IconWhatsApp aria-hidden="true" />
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
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`sticky-bar${show ? ' show' : ''}`} id="stickyBar">
      <span className="text">
        Ready to plan? <b>Free consultation, no card needed.</b>
      </span>
      <Link href="/contact" className="btn btn-amber btn-sm">
        Start now <ButtonArrow />
      </Link>
    </div>
  )
}
