'use client'

import { useState, useEffect } from 'react'
import { fmt, fmtFee, pad2, formatDate, calcCountdown } from '@/lib/utils'
import type { Event, TicketTier } from '@/lib/types'
import { IconCalendar, IconClock, IconLocation, IconLock, IconShield } from '@/components/icons/AppIcons'

/* ── Countdown ────────────────────────────────────── */

function useCountdown(targetIso: string) {
  const [tick, setTick] = useState(() => calcCountdown(targetIso))

  useEffect(() => {
    const id = setInterval(() => setTick(calcCountdown(targetIso)), 1000)
    return () => clearInterval(id)
  }, [targetIso])

  return tick
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="unit">
      <b suppressHydrationWarning>{pad2(value)}</b>
      <small>{label}</small>
    </div>
  )
}

/* ── Tier stepper ─────────────────────────────────── */

function TierRow({
  tier,
  qty,
  onStep,
}: {
  tier: TicketTier
  qty: number
  onStep: (delta: number) => void
}) {
  const classes = [
    'tier',
    tier.soldOut ? 'sold' : '',
    tier.tagStyle === 'amber' ? 'amber-tag' : '',
    qty > 0 ? 'active' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {tier.tag && <span className="tag">{tier.tag}</span>}

      <div>
        <div className="name">{tier.name}</div>
        <div className="desc">{tier.description}</div>
      </div>

      <div className="price-col">
        <div className="num">
          {tier.isSoldOutBundle ? `£${tier.price}` : fmt(tier.price)}
        </div>
        <div className="fee">
          {tier.isSoldOutBundle ? 'bundle' : fmtFee(tier.fee)}
        </div>
      </div>

      {!tier.soldOut && (
        <div className="stepper">
          <button onClick={() => onStep(-1)} disabled={qty === 0} aria-label="Remove ticket">
            −
          </button>
          <span className="qty">{qty}</span>
          <button
            onClick={() => onStep(1)}
            disabled={qty >= (tier.maxPerOrder ?? 10)}
            aria-label="Add ticket"
          >
            +
          </button>
        </div>
      )}
    </div>
  )
}

/* ── Main widget ──────────────────────────────────── */

interface CartState {
  [tierId: string]: number
}

export function VisistoWidget({ event }: { event: Event }) {
  const [cart, setCart] = useState<CartState>({})
  const countdown = useCountdown(`${event.date}T21:00:00`)

  // Reset cart when event changes
  useEffect(() => setCart({}), [event.id])

  function step(tierId: string, delta: number) {
    setCart((prev) => {
      const next = Math.max(0, Math.min(10, (prev[tierId] ?? 0) + delta))
      if (next === 0) {
        const { [tierId]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [tierId]: next }
    })
  }

  const lineItems = event.ticketTiers
    .filter((t) => (cart[t.id] ?? 0) > 0)
    .map((t) => ({ tier: t, qty: cart[t.id] }))

  const subtotal = lineItems.reduce((s, { tier, qty }) => s + qty * tier.price, 0)
  const feesTotal = lineItems.reduce((s, { tier, qty }) => s + qty * tier.fee, 0)
  const ticketCount = lineItems.reduce((s, { qty }) => s + qty, 0)
  const hasItems = ticketCount > 0

  const payLabel = hasItems
    ? `Pay ${fmt(subtotal + feesTotal)} · ${ticketCount} ticket${ticketCount > 1 ? 's' : ''}`
    : 'Continue to secure checkout'

  return (
    <div className="visisto">
      {/* Header bar */}
      <div className="visisto-head">
        <span className="brand-tag">
          <span className="dot" /> Live · accepting bookings
        </span>
        <span>Secure checkout · SSL encrypted</span>
      </div>

      {/* Event info + countdown */}
      <div className="visisto-event-head">
        <div>
          <h2>{event.title}</h2>
          <div className="meta">
            <span className="inline-flex items-center gap-1.5">
              <IconLocation className="icon-meta" aria-hidden="true" />
              <b>{event.venue}</b> · {event.address}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconCalendar className="icon-meta" aria-hidden="true" />
              <b>{formatDate(event.date)}</b>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconClock className="icon-meta" aria-hidden="true" />
              <b>
                {event.startTime} – {event.endTime}
              </b>{' '}
              · {event.ageRestriction ?? '18+'}
            </span>
          </div>
        </div>

        <div className="countdown">
          <CountdownUnit value={countdown.d} label="days" />
          <CountdownUnit value={countdown.h} label="hrs" />
          <CountdownUnit value={countdown.m} label="min" />
          <CountdownUnit value={countdown.s} label="sec" />
        </div>
      </div>

      {/* Tiers + checkout */}
      <div className="visisto-body">
        <div className="tiers">
          {event.ticketTiers.map((tier) => (
            <TierRow
              key={tier.id}
              tier={tier}
              qty={cart[tier.id] ?? 0}
              onStep={(delta) => step(tier.id, delta)}
            />
          ))}
        </div>

        <div className="checkout">
          <h4>Your order</h4>

          <div className="order-list">
            {!hasItems ? (
              <div className="order-empty">
                No tickets selected yet — pick a tier on the left.
              </div>
            ) : (
              lineItems.map(({ tier, qty }) => (
                <div key={tier.id} className="order-item">
                  <span className="label-l">
                    <span className="qty">{qty}×</span>
                    {tier.name}
                  </span>
                  <span className="amount">{fmt(qty * tier.price)}</span>
                </div>
              ))
            )}
          </div>

          {hasItems && (
            <div className="totals">
              <div className="line">
                <span>Subtotal</span>
                <span>{fmt(subtotal)}</span>
              </div>
              <div className="line">
                <span>
                  Booking fee <small>(Visisto)</small>
                </span>
                <span>{fmt(feesTotal)}</span>
              </div>
              <div className="line">
                <span>VAT included</span>
                <span>—</span>
              </div>
              <div className="grand">
                <span>Total</span>
                <b>{fmt(subtotal + feesTotal)}</b>
              </div>
            </div>
          )}

          <PromoField />

          <button className="pay-btn" disabled={!hasItems}>
            <IconLock aria-hidden="true" />
            {payLabel}
          </button>

          <div className="pay-meta">
            <IconShield aria-hidden="true" />
            Apple Pay · Google Pay · Visa · Mastercard · AmEx
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="visisto-foot">
        <span>Tickets &amp; refunds processed by Visisto · Order ref TBC</span>
        <span className="vstamp">
          <span className="v">V</span>
          Powered by Visisto
        </span>
      </div>
    </div>
  )
}

/* ── Small sub-components ─────────────────────────── */

function PromoField() {
  const [code, setCode] = useState('')
  return (
    <div className="promo">
      <input
        value={code}
        onChange={(e) => setCode(e.target.value.toUpperCase())}
        placeholder="Promo code (e.g. AMUSE10)"
        aria-label="Promo code"
      />
      <button type="button" disabled={!code}>
        Apply
      </button>
    </div>
  )
}
