'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

/**
 * Global hover micro-interactions: buttons, event cards, nav links, WA FAB.
 * Mounted once in the layout — uses event delegation to avoid per-component overhead.
 */
export function MicroInteractions() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Primary / amber / ghost buttons ─────────────── */
      const btnSelectors = '.btn-amber, .btn-primary, .btn-ghost, .btn-light'

      document.querySelectorAll<HTMLElement>(btnSelectors).forEach((btn) => {
        const enter = () =>
          gsap.to(btn, { scale: 1.04, duration: 0.25, ease: 'power2.out' })
        const leave = () =>
          gsap.to(btn, { scale: 1, duration: 0.3, ease: 'elastic.out(1,0.5)' })

        btn.addEventListener('mouseenter', enter)
        btn.addEventListener('mouseleave', leave)
        ;(btn as EventTarget & { _gsapEnter?: () => void; _gsapLeave?: () => void })._gsapEnter = enter
        ;(btn as EventTarget & { _gsapEnter?: () => void; _gsapLeave?: () => void })._gsapLeave = leave
      })

      /* ── Pay button pulse (draw attention) ───────────── */
      const payBtn = document.querySelector<HTMLElement>('.pay-btn:not(:disabled)')
      if (payBtn) {
        gsap.to(payBtn, {
          boxShadow: '0 0 0 8px rgba(242,106,44,0)',
          repeat: -1,
          duration: 1.4,
          ease: 'power2.out',
          yoyo: true,
        })
      }

      /* ── Event card hover: subtle lift + glow ────────── */
      document.querySelectorAll<HTMLElement>('.event-card').forEach((card) => {
        const enter = () =>
          gsap.to(card, {
            y: -4,
            boxShadow: '0 16px 40px rgba(45,45,45,.1)',
            duration: 0.3,
            ease: 'power2.out',
          })
        const leave = () =>
          gsap.to(card, {
            y: 0,
            boxShadow: '0 0px 0px rgba(45,45,45,0)',
            duration: 0.4,
            ease: 'power2.out',
          })

        card.addEventListener('mouseenter', enter)
        card.addEventListener('mouseleave', leave)
      })

      /* ── WhatsApp FAB pulse glow ──────────────────────── */
      const fab = document.querySelector<HTMLElement>('.wa-fab')
      if (fab) {
        gsap.to(fab, {
          boxShadow:
            '0 12px 32px -8px rgba(37,211,102,.7), 0 4px 12px rgba(0,0,0,.15)',
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: 'sine.inOut',
        })
      }

      /* ── Lineup card hover: tilt + scale ─────────────── */
      document.querySelectorAll<HTMLElement>('.lineup-card').forEach((card) => {
        const enter = () =>
          gsap.to(card, {
            scale: 1.03,
            y: -4,
            duration: 0.3,
            ease: 'power2.out',
          })
        const leave = () =>
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'elastic.out(1,0.6)',
          })

        card.addEventListener('mouseenter', enter)
        card.addEventListener('mouseleave', leave)
      })

      /* ── Countdown units: flip on value change ────────── */
      // Watches for text changes in countdown .unit b elements
      const countdownUnits = document.querySelectorAll<HTMLElement>(
        '.countdown .unit b'
      )
      countdownUnits.forEach((unit) => {
        let last = unit.textContent
        const observer = new MutationObserver(() => {
          if (unit.textContent !== last) {
            last = unit.textContent
            gsap.fromTo(
              unit,
              { y: -8, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.3, ease: 'back.out(2)' }
            )
          }
        })
        observer.observe(unit, { childList: true, characterData: true, subtree: true })
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
