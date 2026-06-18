'use client'

import { useState } from 'react'
import { ButtonArrow, IconCheck } from '@/components/icons/AppIcons'

const EVENT_TYPES = ['Wedding', 'Birthday', 'Kids party', 'Corporate', 'DJ / club', 'Other'] as const

export function ContactForm() {
  const [eventType, setEventType] = useState('Wedding')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      eventType,
      date: (form.elements.namedItem('date') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Send failed')
      setSent(true)
    } catch {
      setError('Something went wrong — please try WhatsApp or email directly.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="form-success">
        <div className="success-mark flex justify-center"><IconCheck aria-hidden="true" /></div>
        <h2 className="h-display h3 mb-3">Sent — we'll reply tonight.</h2>
        <p className="muted">Check your inbox for a confirmation. We usually reply same evening.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="h-display h3 mb-2">Quick brief</h2>
      <p className="muted mb-8">
        Don't worry if you don't have answers yet — leave it blank.
      </p>

      <div className="stack-20">
        <div className="grid-two-fields">
          <div className="field">
            <label>Your name</label>
            <input name="name" placeholder="Priya Singh" required />
          </div>
          <div className="field">
            <label>Email</label>
            <input name="email" type="email" placeholder="you@example.co.uk" required />
          </div>
        </div>

        <div className="grid-two-fields">
          <div className="field">
            <label>Phone (optional)</label>
            <input name="phone" placeholder="+44 7xxx xxx xxx" />
          </div>
          <div className="field">
            <label>Approx. date</label>
            <input name="date" placeholder="June 2026 / TBC" />
          </div>
        </div>

        <div className="field">
          <label>Type of event</label>
          <div className="pill-row mt-1">
            {EVENT_TYPES.map((t) => (
              <button
                key={t}
                type="button"
                className={`pill-radio${eventType === t ? ' active' : ''}`}
                onClick={() => setEventType(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid-two-fields">
          <div className="field">
            <label>Approx. guests</label>
            <select name="guests">
              <option>I don't know yet</option>
              <option>Up to 30</option>
              <option>30 – 80</option>
              <option>80 – 150</option>
              <option>150 – 300</option>
              <option>300 +</option>
            </select>
          </div>
          <div className="field">
            <label>Approx. budget (£)</label>
            <select name="budget">
              <option>I don't know yet</option>
              <option>Under £2k</option>
              <option>£2k – £5k</option>
              <option>£5k – £15k</option>
              <option>£15k – £50k</option>
              <option>£50k +</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label>Tell us about it</label>
          <textarea
            name="message"
            placeholder="Anything you'd like us to know — vibes, must-haves, the awkward bits, the dream version. The more, the better."
          />
        </div>

        <div className="field">
          <label>How did you hear about us?</label>
          <select name="source">
            <option>Google search</option>
            <option>Instagram</option>
            <option>Word of mouth</option>
            <option>Wedding directory</option>
            <option>Other</option>
          </select>
        </div>

        <div className="checkbox-row">
          <input type="checkbox" id="wa-ok" className="checkbox-input" />
          <label htmlFor="wa-ok" className="text-[13px] text-ink-2">
            Yes, you can text me on WhatsApp — usually faster than email.
          </label>
        </div>

        {error && <p className="text-sm text-amber-2">{error}</p>}

        <button
          type="submit"
          className="btn btn-amber btn-lg mt-3"
          disabled={loading}
        >
          {loading ? 'Sending...' : <>Send the brief <ButtonArrow /></>}
        </button>
        <p className="mono muted form-submit-note">
          We reply within 4 hours, including weekends.
        </p>
      </div>
    </form>
  )
}
