'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

/**
 * Mounts onto the events hero section and runs a staggered intro timeline.
 * Elements are targeted by data-hero-* attributes added to the markup.
 */
export function HeroIntro() {
  const ctx = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.1,
      })

      tl.from('[data-hero="eyebrow"]', {
        opacity: 0,
        y: 14,
        duration: 0.55,
      })
        .from(
          '[data-hero="title-1"]',
          { opacity: 0, y: 56, duration: 0.9, ease: 'power4.out' },
          '-=0.2'
        )
        .from(
          '[data-hero="title-2"]',
          { opacity: 0, y: 56, duration: 0.9, ease: 'power4.out' },
          '-=0.65'
        )
        .from(
          '[data-hero="lede"]',
          { opacity: 0, y: 20, duration: 0.65 },
          '-=0.4'
        )
        .from(
          '[data-hero="stat"]',
          { opacity: 0, y: 36, stagger: 0.14, duration: 0.6 },
          '-=0.35'
        )
    },
    { scope: ctx }
  )

  return <div ref={ctx} className="contents" />
}
