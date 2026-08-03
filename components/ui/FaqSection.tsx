import type { ReactNode } from 'react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FaqList } from '@/components/ui/FaqList'
import { SITE_FAQS } from '@/lib/faqs'

interface FaqSectionProps {
  eyebrow?: string
  headline: ReactNode
  sectionClassName?: string
  id?: string
}

export function FaqSection({
  eyebrow = '— FAQ —',
  headline,
  sectionClassName = 'section-paper-2 section-page-md',
  id,
}: FaqSectionProps) {
  return (
    <section id={id} className={sectionClassName}>
      <div className="container">
        <Reveal className="content-split-start">
          <div className="sticky-aside">
            <SectionHeading eyebrow={eyebrow}>{headline}</SectionHeading>
          </div>
          <div>
            <FaqList items={SITE_FAQS} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
