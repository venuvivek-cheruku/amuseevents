import { RatingStars } from '@/components/icons/AppIcons'

interface ReviewCardProps {
  text: string
  initials: string
  name: string
  where: string
}

export function ReviewCard({ text, initials, name, where }: ReviewCardProps) {
  return (
    <div className="review">
      <div className="stars"><RatingStars /></div>
      <p className="text">{text}</p>
      <div className="who">
        <div className="av">{initials}</div>
        <div>
          <div className="name">{name}</div>
          <div className="where">{where}</div>
        </div>
      </div>
    </div>
  )
}
