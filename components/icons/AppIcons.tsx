import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBars,
  FaBuilding,
  FaCakeCandles,
  FaCalendarDays,
  FaCamera,
  FaCheck,
  FaChevronDown,
  FaChildReaching,
  FaCircle,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaGear,
  FaHeart,
  FaInstagram,
  FaLocationDot,
  FaLock,
  FaMartiniGlassCitrus,
  FaMusic,
  FaPalette,
  FaPhone,
  FaPlay,
  FaShieldHalved,
  FaStar,
  FaTree,
  FaWandMagicSparkles,
  FaWhatsapp,
  FaXmark,
  FaYoutube,
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
export const IconBuilding = FaBuilding
export const IconCake = FaCakeCandles
export const IconCalendar = FaCalendarDays
export const IconCamera = FaCamera
export const IconCheck = FaCheck
export const IconChevronDown = FaChevronDown
export const IconChild = FaChildReaching
export const IconClock = FaClock
export const IconEmail = FaEnvelope
export const IconFacebook = FaFacebookF
export const IconGear = FaGear
export const IconHeart = FaHeart
export const IconInstagram = FaInstagram
export const IconLocation = FaLocationDot
export const IconLock = FaLock
export const IconMartiniGlass = FaMartiniGlassCitrus
export const IconMusic = FaMusic
export const IconPalette = FaPalette
export const IconPhone = FaPhone
export const IconSeparatorDot = FaCircle
export const IconShield = FaShieldHalved
export const IconSparkle = FaWandMagicSparkles
export const IconStar = FaStar
export const IconTree = FaTree
export const IconWhatsApp = FaWhatsapp
export const IconX = FaXmark
