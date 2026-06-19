import { Eyebrow } from '@/components/ui/Eyebrow'

type Level = 'h1' | 'h2' | 'h3'

interface SectionHeadingProps {
  eyebrow: string
  level?: Level
  center?: boolean
  lede?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export function SectionHeading({
  eyebrow,
  level = 'h2',
  center,
  lede,
  className,
  children,
}: SectionHeadingProps) {
  const Tag = level
  const titleGap = level === 'h1' ? 'hero-title-gap' : 'title-gap'

  return (
    <div className={['section-heading-block', center && 'mx-auto max-w-[720px] text-center', className].filter(Boolean).join(' ')}>
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      <Tag className={`h-display ${level} ${titleGap}`}>{children}</Tag>
      {lede && (
        <p className={`lede ${center ? 'mx-auto mt-6' : 'mt-5'}`}>{lede}</p>
      )}
    </div>
  )
}
