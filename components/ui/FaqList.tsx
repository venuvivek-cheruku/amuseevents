interface FaqItem {
  q: string
  a: string
}

interface FaqListProps {
  items: FaqItem[]
  defaultOpen?: number
}

export function FaqList({ items, defaultOpen = 0 }: FaqListProps) {
  return (
    <>
      {items.map((faq, i) => (
        <details key={faq.q} className="faq-item" open={i === defaultOpen}>
          <summary className="faq-summary items-center tracking-[-.015em]">
            {faq.q}
            <span className="faq-plus">+</span>
          </summary>
          <p className="faq-answer">{faq.a}</p>
        </details>
      ))}
    </>
  )
}
