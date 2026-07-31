'use client'

import { useState } from 'react'
import {
  ButtonArrow,
  IconFacebook,
  IconInstagram,
  IconPlay,
  IconYoutube,
} from '@/components/icons/AppIcons'

type Platform = 'instagram' | 'youtube' | 'facebook'

interface WallItem {
  platform: Platform
  image: 'square' | 'image-4-3' | 'image-3-4' | 'image-4-5' | 'image-16-9' | 'image-9-16'
  imageStyle?: 'amber-tint' | 'dark'
  label: string
  caption: string
  stat: string
  duration?: string
  more?: boolean
}

const ITEMS: WallItem[] = [
  { platform: 'instagram', image: 'image-4-5', imageStyle: 'amber-tint', label: 'Wedding · carousel', caption: '"The tent lighting though"', stat: '2,140 likes' },
  { platform: 'youtube', image: 'image-16-9', imageStyle: 'dark', label: 'Aftermovie', caption: 'Richmond Hill aftermovie', stat: '18.4k views', duration: '2:14' },
  { platform: 'facebook', image: 'square', label: 'Guest photo · tagged', caption: 'Tagged by Priya & Daniel', stat: '86 reactions' },
  { platform: 'instagram', image: 'image-3-4', label: 'Birthday styling', caption: '"Obsessed with this palette"', stat: '958 likes' },
  { platform: 'youtube', image: 'image-9-16', imageStyle: 'dark', label: 'Behind the scenes · short', caption: 'Set-up, sped up 10x', stat: '4,980 views', duration: '0:42' },
  { platform: 'facebook', image: 'image-4-3', label: 'Corporate launch', caption: 'Shared by a guest', stat: '54 reactions' },
  { platform: 'instagram', image: 'square', imageStyle: 'amber-tint', label: 'Garden party · Twickenham', caption: '"Best garden party we\'ve been to"', stat: '1,320 likes' },
  { platform: 'youtube', image: 'image-16-9', imageStyle: 'dark', label: 'Client interview', caption: 'Priya on the day itself', stat: '6.2k views', duration: '0:58' },
  { platform: 'facebook', image: 'image-3-4', label: 'Anniversary dinner', caption: '"Thank you Amuse team"', stat: '41 reactions' },
  { platform: 'instagram', image: 'square', label: 'Private party · dessert table', caption: '"That dessert table"', stat: '1,675 likes' },
  { platform: 'youtube', image: 'image-4-5', imageStyle: 'dark', label: 'DJ set · highlight', caption: 'DJ set highlight · club night', stat: '3.1k views', duration: '1:20' },
  { platform: 'facebook', image: 'image-4-3', imageStyle: 'amber-tint', label: 'Marquee build', caption: '"Watching this go up was a treat"', stat: '63 reactions' },
  { platform: 'instagram', image: 'image-4-5', label: 'Rooftop drinks reception', caption: '"That view over the Thames"', stat: '1,208 likes', more: true },
  { platform: 'youtube', image: 'image-16-9', imageStyle: 'dark', label: 'Full ceremony recap', caption: 'Full ceremony recap', stat: '9.7k views', duration: '3:42', more: true },
  { platform: 'facebook', image: 'square', imageStyle: 'amber-tint', label: 'Retirement party', caption: '"40 years, one incredible send-off"', stat: '72 reactions', more: true },
  { platform: 'instagram', image: 'image-3-4', label: 'Floral install', caption: '"The florals stopped me in my tracks"', stat: '2,830 likes', more: true },
  { platform: 'youtube', image: 'image-9-16', imageStyle: 'dark', label: 'Guest reactions · short', caption: 'Guest reactions, unscripted', stat: '5.4k views', duration: '0:35', more: true },
]

const FILTERS: { key: 'all' | Platform; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'youtube', label: 'YouTube' },
]

const BADGE_ICON: Record<Platform, typeof IconInstagram> = {
  instagram: IconInstagram,
  facebook: IconFacebook,
  youtube: IconYoutube,
}

export function WallOfLove() {
  const [filter, setFilter] = useState<'all' | Platform>('all')
  const [showMore, setShowMore] = useState(false)

  const visible = ITEMS.filter((item) => {
    if (!showMore && item.more) return false
    if (filter !== 'all' && item.platform !== filter) return false
    return true
  })

  return (
    <>
      <div className="filter-pills mt-8 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-pill${filter === f.key ? ' active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="wall-grid">
        {visible.map((item, i) => {
          const Badge = BADGE_ICON[item.platform]
          return (
            <a href="#" key={`${item.label}-${i}`} className="wall-item">
              <div className={`wall-media ${item.image === 'square' ? 'image-square' : item.image}`}>
                <div className={`ph ${item.imageStyle ?? ''}`} data-label={item.label} />
                {item.duration && <IconPlay aria-hidden="true" className="wall-play" />}
                {item.duration && <span className="wall-duration">{item.duration}</span>}
                <span className={`wall-badge ${item.platform === 'instagram' ? 'ig' : item.platform === 'youtube' ? 'yt' : 'fb'}`}>
                  <Badge aria-hidden="true" />
                </span>
              </div>
              <div className="wall-cap">
                <p>{item.caption}</p>
                <span className="wall-stat">{item.stat}</span>
              </div>
            </a>
          )
        })}
      </div>

      {!showMore && (
        <div className="row justify-center mt-9">
          <button className="btn btn-ghost" onClick={() => setShowMore(true)}>
            Load more <ButtonArrow />
          </button>
        </div>
      )}

      <p className="mono muted text-center mt-8 text-[11px] tracking-[.12em] uppercase">
        Synced hourly from @amuseevents — real posts, real guests, unedited
      </p>
    </>
  )
}
