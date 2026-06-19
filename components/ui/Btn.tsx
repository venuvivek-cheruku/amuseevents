import Link from 'next/link'

type Variant = 'amber' | 'primary' | 'ghost' | 'light'
type Size = 'sm' | 'md' | 'lg'

function cls(variant: Variant, size: Size, extra?: string) {
  return ['btn', `btn-${variant}`, size !== 'md' ? `btn-${size}` : '', extra ?? '']
    .filter(Boolean)
    .join(' ')
}

interface BtnBase {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

interface BtnAsLink extends BtnBase {
  href: string
  external?: boolean
  type?: never
  disabled?: never
  onClick?: never
}

interface BtnAsButton extends BtnBase {
  href?: never
  external?: never
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type BtnProps = BtnAsLink | BtnAsButton

export function Btn(props: BtnProps) {
  const { variant = 'primary', size = 'md', className, children } = props
  const c = cls(variant, size, className)

  if ('href' in props && props.href) {
    const { href, external } = props as BtnAsLink
    if (external) {
      return (
        <a href={href} className={c} target="_blank" rel="noreferrer">
          {children}
        </a>
      )
    }
    return <Link href={href} className={c}>{children}</Link>
  }

  const { type, disabled, onClick } = props as BtnAsButton
  return (
    <button className={c} type={type ?? 'button'} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
