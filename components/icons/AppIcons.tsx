import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBars,
  FaCalendarDays,
  FaCheck,
  FaCircle,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaLock,
  FaPhone,
  FaShieldHalved,
  FaStar,
  FaWandMagicSparkles,
  FaWhatsapp,
  FaXmark,
} from 'react-icons/fa6'
import type { SVGProps } from 'react'

function withClass(base: string, className?: string) {
  return className ? `${base} ${className}` : base
}

export function ButtonArrow({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <FaArrowRight aria-hidden="true" focusable="false" className={withClass('arrow', className)} {...props} />
}

export function RatingStars({ count = 5 }: { count?: number }) {
  return (
    <span className="icon-rating" aria-label={`${count} star rating`}>
      {Array.from({ length: count }, (_, index) => (
        <FaStar key={index} aria-hidden="true" focusable="false" />
      ))}
    </span>
  )
}

export const IconArrowUpRight = FaArrowUpRightFromSquare
export const IconBars = FaBars
export const IconCalendar = FaCalendarDays
export const IconCheck = FaCheck
export const IconClock = FaClock
export const IconEmail = FaEnvelope
export const IconFacebook = FaFacebookF
export const IconInstagram = FaInstagram
export const IconLocation = FaLocationDot
export const IconLock = FaLock
export const IconPhone = FaPhone
export const IconSeparatorDot = FaCircle
export const IconShield = FaShieldHalved
export const IconSparkle = FaWandMagicSparkles
export const IconStar = FaStar
export const IconWhatsApp = FaWhatsapp
export const IconX = FaXmark
