'use client'

import { useEffect, useRef } from 'react'

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
}

export function Reveal({ children, delay, className = '', style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => el.classList.add('in')
    const rect = el.getBoundingClientRect()

    if (rect.top < window.innerHeight * 1.1) {
      if (delay) {
        setTimeout(reveal, delay)
      } else {
        reveal()
      }
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { reveal(); io.disconnect() } },
      { threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}
