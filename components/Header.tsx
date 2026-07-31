'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import {
  ButtonArrow,
  IconBars,
  IconCake,
  IconCamera,
  IconChevronDown,
  IconChild,
  IconGear,
  IconMartiniGlass,
  IconMusic,
  IconPalette,
  IconPhone,
  IconTree,
  IconWhatsApp,
  IconX,
} from '@/components/icons/AppIcons'

import { Btn } from '@/components/ui/Btn'
import { CONTACT } from '@/lib/utils'

const { waUrl: WA_URL, phone: PHONE, phoneTel: PHONE_TEL } = CONTACT

const NAV = [
  { href: '/weddings', label: 'Weddings' },
  { href: '/corporate', label: 'Corporate' },
  { href: '/events', label: 'Events' },
]

const NAV_MORE = [
  { href: '/about', label: 'About us' },
  { href: '/journal', label: 'Blogs' },
]

const SIGNATURE_SERVICES = [
  { name: 'Birthdays', href: '/services/birthdays', icon: IconCake, desc: 'Unforgettable birthday celebrations.' },
  { name: 'Kids entertainment', href: '/services/kids', icon: IconChild, desc: 'Fun-filled kids parties & shows.' },
  { name: 'DJ & club events', href: '/services/dj', icon: IconMusic, desc: 'Professional DJ & sound services.' },
  { name: 'Private parties', href: '/services/private', icon: IconMartiniGlass, desc: 'Exclusive private event planning.' },
]

const MORE_SERVICES = [
  { name: 'Outdoor events', href: '/services/outdoor', icon: IconTree, desc: 'Beautiful outdoor experiences.' },
  { name: 'Event production', href: '/services/production', icon: IconGear, desc: 'Full-scale event production.' },
  { name: 'Art work & décor', href: '/services/decor', icon: IconPalette, desc: 'Stunning décor & styling.' },
  { name: 'Photography & film', href: '/services/photography', icon: IconCamera, desc: 'Capture every special moment.' },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const megaRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node
      const insideTrigger = dropdownRef.current?.contains(target)
      const insideMega = megaRef.current?.contains(target)
      if (!insideTrigger && !insideMega) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 140)
  }

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
        <div className="container nav">
          <Link href="/" className="brand">
            <Image
              src="/assets/logo-a.png"
              alt="Amuse Events"
              className="brand-mark"
              width={33}
              height={38}
              priority
            />
          </Link>

          <ul className="nav-links">
            <li
              ref={dropdownRef}
              className={`has-mega${servicesOpen ? ' open' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setServicesOpen(true)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`nav-link${isActive('/services') ? ' active' : ''}`}
              >
                Services
                <IconChevronDown aria-hidden="true" className="chev" />
              </button>
            </li>

            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={`nav-link${isActive(n.href) ? ' active' : ''}`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            ref={megaRef}
            className={`mega${servicesOpen ? ' open' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mega-inner">
              <div className="mega-promo">
                <span className="eyebrow">What we do</span>
                <h3>Celebrate every moment</h3>
                <p>Weddings, birthdays, corporate events and unforgettable experiences.</p>
                <Link href="/services" className="btn btn-amber btn-sm" onClick={() => setServicesOpen(false)}>
                  All services <ButtonArrow />
                </Link>
              </div>

              <div className="mega-cols">
                <div>
                  <h4>Signature services</h4>
                  <div className="mega-list">
                    {SIGNATURE_SERVICES.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className="mega-item"
                      >
                        <span className="mega-ico">
                          <service.icon aria-hidden="true" />
                        </span>
                        <span className="mega-text">
                          <b>{service.name}</b>
                          <small>{service.desc}</small>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4>More services</h4>
                  <div className="mega-list">
                    {MORE_SERVICES.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className="mega-item"
                      >
                        <span className="mega-ico">
                          <service.icon aria-hidden="true" />
                        </span>
                        <span className="mega-text">
                          <b>{service.name}</b>
                          <small>{service.desc}</small>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mega-foot">
              <Link href="/services" className="mega-all" onClick={() => setServicesOpen(false)}>
                Explore all services <ButtonArrow />
              </Link>
              <div className="mega-foot-help">
                <b>Not sure which one you need?</b>
                <small>
                  <Link
                    href="/contact"
                    onClick={() => setServicesOpen(false)}
                    className="mega-all"
                  >
                    Talk to us <ButtonArrow />
                  </Link>
                </small>
              </div>
            </div>
          </div>

          <div className="nav-cta">
            <a href={`tel:${PHONE_TEL}`} className="nav-phone">
              <IconPhone aria-hidden="true" /> {PHONE}
            </a>
            <Btn href="/contact" variant="amber" size="sm">
              Get a quote <ButtonArrow />
            </Btn>
          </div>

          <button className="menu-toggle" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <IconBars aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <button className="close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <IconX aria-hidden="true" />
        </button>

        <ul>
          {[...NAV, { href: '/services', label: 'Services' }, ...NAV_MORE, { href: '/contact', label: 'Contact' }].map(
            (n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setMenuOpen(false)}>
                  {n.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="stack-20 mt-8">
          <Btn href={WA_URL} variant="amber" external className="w-full justify-center">
            <IconWhatsApp aria-hidden="true" /> WhatsApp us <ButtonArrow />
          </Btn>
          <Btn href={`tel:${PHONE_TEL}`} variant="ghost" className="w-full justify-center">
            <IconPhone aria-hidden="true" /> {PHONE}
          </Btn>
        </div>
      </div>
    </>
  )
}
