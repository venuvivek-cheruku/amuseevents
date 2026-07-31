interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
}

/**
 * Marks content for scroll-reveal via the `.reveal` class. The actual
 * IntersectionObserver that adds `.in` (and reveals already-in-view content
 * on mount) lives once, globally, in <RevealObserver> — mounted in the root
 * layout so it covers every `.reveal` element site-wide, including ones
 * applied via a raw className instead of this component.
 */
export function Reveal({ children, delay, className = '', style, ...props }: RevealProps) {
  return (
    <div
      className={`reveal ${className}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...props}
    >
      {children}
    </div>
  )
}
