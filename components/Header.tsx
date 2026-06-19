'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { ButtonArrow, IconBars, IconPhone, IconWhatsApp, IconX } from '@/components/icons/AppIcons'
import { Btn } from '@/components/ui/Btn'
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
              amuse <em className="brand-accent">events</em>
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
              <IconPhone aria-hidden="true" /> {PHONE}
            </a>
            <Btn href="/contact" variant="amber" size="sm">
              Get a quote <ButtonArrow />
            </Btn>
          </div>

          <button
            className="menu-toggle"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <IconBars aria-hidden="true" />
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
          <IconX aria-hidden="true" />
        </button>

        <ul>
          {NAV.map(n => (
            <li key={n.href}>
              <Link href={n.href}>{n.label}</Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3">
          <Btn href={WA_URL} variant="amber" external className="w-full">
            <IconWhatsApp aria-hidden="true" /> WhatsApp us <ButtonArrow />
          </Btn>
          <Btn href={`tel:${PHONE_TEL}`} variant="ghost" className="w-full">
            {PHONE}
          </Btn>
        </div>
      </div>
    </>
  )
}
