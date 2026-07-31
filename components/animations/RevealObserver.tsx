'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Global fallback for `.reveal` elements that aren't wrapped in the <Reveal>
 * component (many pages apply the class directly via className="... reveal ...").
 * <Reveal> only observes its own DOM node, so anything using the raw class
 * name had no observer at all once the old GSAP-based catch-all was removed.
 *
 * Re-runs per route change since the root layout persists across client-side
 * navigations and each page mounts its own fresh `.reveal` elements.
 */
export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)')
    )
    if (elements.length === 0) return

    const reveal = (el: HTMLElement) => el.classList.add('in')

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement)
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.05 }
    )

    for (const el of elements) {
      if (el.getBoundingClientRect().top < window.innerHeight * 1.1) {
        reveal(el)
      } else {
        io.observe(el)
      }
    }

    return () => io.disconnect()
  }, [pathname])

  return null
}
