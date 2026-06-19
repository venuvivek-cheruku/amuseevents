type PillVariant = 'default' | 'dot' | 'dark' | 'amber'

interface PillProps {
  variant?: PillVariant
  className?: string
  children: React.ReactNode
}

export function Pill({ variant = 'default', className, children }: PillProps) {
  const modifier = variant !== 'default' ? variant : ''
  const c = ['pill', modifier, className].filter(Boolean).join(' ')
  return <span className={c}>{children}</span>
}
