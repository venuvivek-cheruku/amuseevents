import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: ReactNode
  center?: boolean
  lede?: string
  children: ReactNode
}

export function SectionHeading({
  eyebrow,
  center = false,
  lede,
  children,
}: SectionHeadingProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <div className={`eyebrow ${center ? 'center' : ''}`}>
          {eyebrow}
        </div>
      )}

      <h2 className="h-display h2 title-gap">{children}</h2>

      {lede && (
        <p className={`lede lede-gap ${center ? 'mx-auto' : ''}`}>
          {lede}
        </p>
      )}
    </div>
  )
}