import { Reveal } from '@/components/Reveal'

interface CtaPanelProps {
  variant?: 'amber' | 'dark'
  size?: 'default' | 'sm'
  center?: boolean
  sectionClass?: string
  children: React.ReactNode
}

export function CtaPanel({
  variant = 'amber',
  size = 'default',
  center = true,
  sectionClass = 'section-page',
  children,
}: CtaPanelProps) {
  const panelBase = size === 'sm' ? 'panel-cta-sm' : 'panel-cta'
  const panelVariant = variant === 'amber' ? 'panel-cta-amber' : 'panel-cta-dark'
  const panelClass = [panelBase, panelVariant, center ? 'panel-center' : ''].filter(Boolean).join(' ')

  return (
    <section className={sectionClass}>
      <div className="container">
        <Reveal data-scroll="cta" className={panelClass}>
          {children}
        </Reveal>
      </div>
    </section>
  )
}
