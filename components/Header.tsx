'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import {
  ButtonArrow,
  IconBars,
  IconPhone,
  IconWhatsApp,
  IconX,
} from '@/components/icons/AppIcons'

import { Btn } from '@/components/ui/Btn'
import { CONTACT } from '@/lib/utils'

import {
  FaHeart,
  FaBirthdayCake,
  FaChild,
  FaBuilding,
  FaMusic,
  FaCamera,
  FaChevronDown,
} from 'react-icons/fa'

import { GiPartyPopper } from 'react-icons/gi'
import { MdOutlineCelebration } from 'react-icons/md'

const { waUrl: WA_URL, phone: PHONE, phoneTel: PHONE_TEL } = CONTACT

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/corporate', label: 'Corporate' },
  { href: '/events', label: 'Tickets' },
  { href: '/about', label: 'Studio' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { name: 'Birthdays', href: '/services/birthdays', icon: FaBirthdayCake, desc: 'Unforgettable birthday celebrations.' },
  { name: 'Kids Entertainment', href: '/services/kids', icon: FaChild, desc: 'Fun-filled kids parties & shows.' },
  { name: 'DJ & Club Events', href: '/services/dj', icon: FaMusic, desc: 'Professional DJ & sound services.' },
  { name: 'Private Parties', href: '/services/private', icon: GiPartyPopper, desc: 'Exclusive private event planning.' },
  { name: 'Outdoor Events', href: '/services/outdoor', icon: MdOutlineCelebration, desc: 'Beautiful outdoor experiences.' },
  { name: 'Event Production', href: '/services/production', icon: FaBuilding, desc: 'Full-scale event production.' },
  { name: 'Art Work & Décor', href: '/services/decor', icon: FaHeart, desc: 'Stunning décor & styling.' },
  { name: 'Photography & Film', href: '/services/photography', icon: FaCamera, desc: 'Capture every special moment.' },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
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
    setMobileServicesOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdown on Escape
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
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150)
  }

  return (
    <>
      <header
        className={`site-header overflow-visible${scrolled ? ' scrolled' : ''}`}
        id="siteHeader"
      >
        <div className="container nav">
          {/* Brand */}
          <Link href="/" className="brand">
            <Image
              src="/assets/logo-mark.png"
              alt="Amuse Events"
              className="brand-mark h-auto"
              width={38}
              height={38}
              priority
            />
            <span className="brand-name">
              amuse <em className="brand-accent">events</em>
            </span>
          </Link>

          {/* ─── Desktop Navigation ─── */}
          <ul className="nav-links hidden items-center gap-1 lg:flex xl:gap-2">
            <li>
              <Link
                href="/"
                className={`nav-link${isActive('/') ? ' active' : ''}`}
              >
                Home
              </Link>
            </li>

            {/* Services mega-dropdown */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`nav-link inline-flex items-center gap-1 ${
                  isActive('/services') ? ' active' : ''
                }`}
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mega dropdown — responsive widths */}
              <div
                className={`absolute left-1/2 top-full z-50 w-[calc(100vw-2rem)] max-w-[1000px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                  servicesOpen
                    ? 'pointer-events-auto visible translate-y-0 opacity-100'
                    : 'pointer-events-none invisible -translate-y-2 opacity-0'
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:rounded-[36px]">
                  <div className="grid grid-cols-1 xl:grid-cols-[300px_1fr]">
                    {/* Left feature card — hidden on smaller desktops */}
                    <div className="hidden bg-black p-5 text-white xl:block">
                      <div className="rounded-[28px] border border-white/10 bg-black p-5">
                        <h3 className="text-2xl font-semibold leading-tight xl:text-3xl">
                          Celebrate Every Moment
                        </h3>
                        <p className="mt-3 text-sm text-white/70 xl:mt-4 xl:text-base">
                          Weddings, birthdays, corporate events and
                          unforgettable experiences.
                        </p>
                        <div className="mt-4 overflow-hidden rounded-[24px] xl:mt-6">
                          <Image
                            src="/assets/wedding-hero.jpg"
                            alt="Events"
                            width={500}
                            height={600}
                            className="h-48 w-full object-cover xl:h-72"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right content */}
                    <div className="flex flex-col justify-between p-4 lg:p-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                        {/* Column 1 */}
                        <div>
                          <h4 className="mb-3 text-base font-semibold text-black lg:mb-5 lg:text-lg">
                            Special Services
                          </h4>
                          <div className="space-y-2 lg:space-y-3">
                            {services.slice(0, 4).map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setServicesOpen(false)}
                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-neutral-900 transition hover:bg-neutral-100 lg:gap-4 lg:rounded-2xl lg:px-4 lg:py-3"
                              >
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-[#ff6b00] lg:h-14 lg:w-14 lg:rounded-2xl">
                                  <service.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                                </div>
                                <div className="min-w-0">
                                  <p className="truncate text-sm font-medium lg:text-base">
                                    {service.name}
                                  </p>
                                  <p className="hidden text-sm text-neutral-500 sm:block">
                                    {service.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 2 */}
                        <div>
                          <h4 className="mb-3 text-base font-semibold text-black lg:mb-5 lg:text-lg">
                            More Services
                          </h4>
                          <div className="space-y-2 lg:space-y-3">
                            {services.slice(4).map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setServicesOpen(false)}
                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-neutral-900 transition hover:bg-neutral-100 lg:gap-4 lg:rounded-2xl lg:px-4 lg:py-3"
                              >
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-[#ff6b00] lg:h-14 lg:w-14 lg:rounded-2xl">
                                  <service.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                                </div>
                                <div className="min-w-0">
                                  <p className="truncate text-sm font-medium lg:text-base">
                                    {service.name}
                                  </p>
                                  <p className="hidden text-sm text-neutral-500 sm:block">
                                    {service.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom CTA */}
                      <div className="mt-5 flex flex-col items-start gap-3 rounded-2xl bg-neutral-50 p-4 sm:flex-row sm:items-center sm:justify-between lg:mt-8 lg:rounded-3xl lg:p-5">
                        <div>
                          <p className="text-sm font-semibold text-neutral-900 lg:text-base">
                            Need help choosing a service?
                          </p>
                          <p className="text-xs text-neutral-500 lg:text-sm">
                            We can help you find the perfect event package.
                          </p>
                        </div>
                        <Btn
                          href="/contact"
                          variant="primary"
                          size="sm"
                          className="mt-2 w-full sm:mt-0 sm:w-auto"
                        >
                          Contact us
                        </Btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {NAV.slice(1).map((n) => (
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

          {/* ─── Right side CTA (desktop) ─── */}
          <div className="nav-cta hidden items-center gap-3 lg:flex">
            <a href={`tel:${PHONE_TEL}`} className="nav-phone hidden xl:flex">
              <IconPhone aria-hidden="true" /> {PHONE}
            </a>
            <Btn href="/contact" variant="amber" size="sm">
              Get a quote <ButtonArrow />
            </Btn>
          </div>

          {/* ─── Mobile toggle ─── */}
          <button
            className="menu-toggle lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <IconBars aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* ─── Mobile Overlay ─── */}
      <div
        className={`fixed inset-0 z-[998] bg-black/50 transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ─── Mobile Menu ─── */}
      <div
        className={`fixed inset-y-0 right-0 z-[999] w-full max-w-sm transform overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobileMenu"
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between border-b border-neutral-100 p-4">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <Image
              src="/assets/logo-mark.png"
              alt="Amuse Events"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold">
              amuse <em className="font-normal text-[#ff6b00]">events</em>
            </span>
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-100"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <IconX aria-hidden="true" />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition ${
                  isActive('/') ? 'bg-orange-50 text-[#ff6b00]' : 'text-neutral-800 hover:bg-neutral-50'
                }`}
              >
                Home
              </Link>
            </li>

            {/* Services accordion */}
            <li>
              <button
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${
                  isActive('/services')
                    ? 'bg-orange-50 text-[#ff6b00]'
                    : 'text-neutral-800 hover:bg-neutral-50'
                }`}
              >
                Services
                <FaChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileServicesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-1 pb-2 pl-2 pt-1">
                  <Link
                    href="/services"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#ff6b00] transition hover:bg-orange-50"
                  >
                    View All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-neutral-700 transition hover:bg-neutral-50"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[#ff6b00]">
                        <service.icon className="h-4 w-4" />
                      </div>
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {NAV.slice(1).map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition ${
                    isActive(n.href)
                      ? 'bg-orange-50 text-[#ff6b00]'
                      : 'text-neutral-800 hover:bg-neutral-50'
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile CTA */}
        <div className="border-t border-neutral-100 p-4">
          <div className="flex flex-col gap-3">
            <Btn
              href={WA_URL}
              variant="amber"
              external
              className="w-full justify-center"
            >
              <IconWhatsApp aria-hidden="true" /> WhatsApp us <ButtonArrow />
            </Btn>

            <Btn
              href={`tel:${PHONE_TEL}`}
              variant="ghost"
              className="w-full justify-center"
            >
              <IconPhone aria-hidden="true" /> {PHONE}
            </Btn>

            <Btn
              href="/contact"
              variant="primary"
              className="w-full justify-center"
            >
              Get a quote <ButtonArrow />
            </Btn>
          </div>
        </div>
      </div>
    </>
  )
}