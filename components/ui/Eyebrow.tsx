interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  center?: boolean
}

export function Eyebrow({ center, className, children, ...rest }: EyebrowProps) {
  const c = ['eyebrow', center ? 'center' : '', className].filter(Boolean).join(' ')
  return <span className={c} {...rest}>{children}</span>
}
