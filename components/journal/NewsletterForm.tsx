'use client'

import { useState } from 'react'
import { IconCheck } from '@/components/icons/AppIcons'

export function NewsletterForm() {
  const [done, setDone] = useState(false)

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setDone(true) }}
      className="newsletter-form"
    >
      <input
        type="email"
        placeholder="your@email.co.uk"
        required
        disabled={done}
        className="newsletter-input"
      />
      <button type="submit" className="btn btn-amber btn-lg whitespace-nowrap" disabled={done}>
        {done ? <><IconCheck aria-hidden="true" /> Subscribed</> : 'Subscribe'}
      </button>
    </form>
  )
}
