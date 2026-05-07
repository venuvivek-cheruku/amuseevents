'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Global scroll-triggered animations. Mounted once in the root layout.
 * Targets elements by data-scroll-* attributes and standard class names.
 */
export function ScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Section reveals ───────────────────────────── */
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      /* ── Event card stagger ──────────────────────────── */
      const cardList = document.getElementById('eventList')
      if (cardList) {
        const cards = cardList.querySelectorAll<HTMLElement>('.event-card')
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.09,
            scrollTrigger: {
              trigger: cardList,
              start: 'top 85%',
            },
          }
        )
      }

      /* ── Lineup cards stagger ───────────────────────── */
      const lineupCards = gsap.utils.toArray<HTMLElement>('.lineup-card')
      if (lineupCards.length > 0) {
        gsap.fromTo(
          lineupCards,
          { opacity: 0, scale: 0.95, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.2)',
            stagger: 0.1,
            scrollTrigger: {
              trigger: lineupCards[0].parentElement,
              start: 'top 80%',
            },
          }
        )
      }

      /* ── CTA dark section ───────────────────────────── */
      const ctaSection = document.querySelector<HTMLElement>('[data-scroll="cta"]')
      if (ctaSection) {
        const children = ctaSection.querySelectorAll<HTMLElement>(
          '.eyebrow, .h-display, p, .btn'
        )
        gsap.fromTo(
          children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: ctaSection,
              start: 'top 78%',
            },
          }
        )
      }

      /* ── Visisto widget entrance ────────────────────── */
      const widget = document.querySelector<HTMLElement>('.visisto')
      if (widget) {
        gsap.fromTo(
          widget,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: widget,
              start: 'top 82%',
            },
          }
        )
      }

      /* ── Tier rows stagger (inside widget) ──────────── */
      const tiers = gsap.utils.toArray<HTMLElement>('.tier')
      if (tiers.length > 0) {
        gsap.fromTo(
          tiers,
          { opacity: 0, x: -16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            ease: 'power2.out',
            stagger: 0.07,
            scrollTrigger: {
              trigger: tiers[0].parentElement,
              start: 'top 80%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return null
}
