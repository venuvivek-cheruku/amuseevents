'use client'

import { useState } from 'react'

export function NewsletterForm() {
  const [done, setDone] = useState(false)

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setDone(true) }}
      style={{ display: 'flex', gap: 12 }}
    >
      <input
        type="email"
        placeholder="your@email.co.uk"
        required
        disabled={done}
        style={{
          flex: 1, padding: '18px 20px', borderRadius: 14,
          border: '1px solid rgba(246,241,232,.2)',
          background: 'rgba(246,241,232,.06)', color: 'var(--paper)',
          font: '400 15px var(--sans)',
        }}
      />
      <button type="submit" className="btn btn-amber btn-lg" style={{ whiteSpace: 'nowrap' }} disabled={done}>
        {done ? '✓ Subscribed' : 'Subscribe'}
      </button>
    </form>
  )
}
