import Link from 'next/link'

interface ArticleCardProps {
  href?: string
  imageStyle?: 'amber-tint' | 'dark'
  imageTall?: boolean
  imageLabel: string
  category: string
  meta: string
  title: string
  body: string
}

export function ArticleCard({
  href,
  imageStyle,
  imageTall,
  imageLabel,
  category,
  meta,
  title,
  body,
}: ArticleCardProps) {
  const imgCls = ['ph', imageTall ? 'ph-tall' : '', imageStyle ?? ''].filter(Boolean).join(' ')

  const content = (
    <>
      <div className={imgCls} data-label={imageLabel} />
      <div className="meta">
        <span className="cat">— {category} —</span>
        <span>{meta}</span>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </>
  )

  if (href) {
    return <Link href={href} className="article">{content}</Link>
  }

  return <div className="article">{content}</div>
}
