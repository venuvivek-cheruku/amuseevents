import { RatingStars } from '@/components/icons/AppIcons'

interface TestimonialProps {
  imageStyle?: 'amber-tint' | 'dark'
  imageLabel: string
  quote: string
  initials: string
  name: string
  where: string
}

export function Testimonial({ imageStyle, imageLabel, quote, initials, name, where }: TestimonialProps) {
  return (
    <div className="testimonial">
      <div className={`ph${imageStyle ? ` ${imageStyle}` : ''}`} data-label={imageLabel} />
      <div>
        <div className="stars"><RatingStars /></div>
        <p className="quote mt-3.5">{quote}</p>
        <div className="meta">
          <div className="av">{initials}</div>
          <div>
            <div className="name">{name}</div>
            <div className="where">{where}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
