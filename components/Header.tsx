'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { CONTACT } from '@/lib/utils'
const { waUrl: WA_URL, phone: PHONE, phoneTel: PHONE_TEL } = CONTACT

const NAV = [
  { href: '/',           label: 'Home',      key: '' },
  { href: '/services',   label: 'Services',  key: 'services' },
  { href: '/weddings',   label: 'Weddings',  key: 'weddings' },
  { href: '/corporate',  label: 'Corporate', key: 'corporate' },
  { href: '/events',     label: 'Tickets',   key: 'events' },
  { href: '/about',      label: 'Studio',    key: 'about' },
  { href: '/journal',    label: 'Journal',   key: 'journal' },
  { href: '/contact',    label: 'Contact',   key: 'contact' },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
        <div className="container nav">
          <Link href="/" className="brand">
            <Image
              src="/assets/logo-mark.png"
              alt="Amuse Events"
              className="brand-mark"
              width={38}
              height={38}
              priority
            />
            <span className="brand-name">
              amuse <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>events</em>
            </span>
          </Link>

          <ul className="nav-links">
            {NAV.map(n => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`nav-link${isActive(n.href) ? ' active' : ''}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <a href={`tel:${PHONE_TEL}`} className="nav-phone">
              📞 {PHONE}
            </a>
            <Link href="/contact" className="btn btn-amber btn-sm">
              Get a quote <span className="arrow">→</span>
            </Link>
          </div>

          <button
            className="menu-toggle"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <button
          className="close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        <ul>
          {NAV.map(n => (
            <li key={n.href}>
              <Link href={n.href}>{n.label}</Link>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn btn-amber" style={{ width: '100%' }}>
            WhatsApp us →
          </a>
          <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost" style={{ width: '100%' }}>
            {PHONE}
          </a>
        </div>
      </div>
    </>
  )
}
