import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import type { ContactFormData } from '@/lib/types'

const FROM = process.env.RESEND_FROM_EMAIL ?? 'noreply@amuseevents.co.uk'
const TO   = process.env.RESEND_TO_EMAIL   ?? 'contact@amuseevents.co.uk'

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is not set')
  return new Resend(key)
}

export async function POST(request: Request) {
  let body: ContactFormData

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, email, phone, eventType, date, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 422 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 422 })
  }

  try {
    const resend = getResend()

    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New enquiry from ${name} — ${eventType ?? 'General'}`,
      html: buildEmailHtml({ name, email, phone, eventType, date, message }),
    })

    await resend.emails.send({
      from: FROM,
      to: email,
      subject: 'We got your message — Amuse Events',
      html: buildConfirmationHtml(name),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Resend error]', err)
    return NextResponse.json(
      { error: 'Failed to send email. Please try WhatsApp instead.' },
      { status: 500 }
    )
  }
}

/* ── Email templates ─────────────────────────────── */

function buildEmailHtml(data: ContactFormData): string {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#191614">New enquiry — Amuse Events</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#6B635B;width:140px">Name</td><td style="padding:8px 0"><strong>${esc(data.name)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#6B635B">Email</td><td style="padding:8px 0"><a href="mailto:${esc(data.email)}">${esc(data.email)}</a></td></tr>
        ${data.phone ? `<tr><td style="padding:8px 0;color:#6B635B">Phone</td><td style="padding:8px 0">${esc(data.phone)}</td></tr>` : ''}
        ${data.eventType ? `<tr><td style="padding:8px 0;color:#6B635B">Event type</td><td style="padding:8px 0">${esc(data.eventType)}</td></tr>` : ''}
        ${data.date ? `<tr><td style="padding:8px 0;color:#6B635B">Date</td><td style="padding:8px 0">${esc(data.date)}</td></tr>` : ''}
      </table>
      <hr style="border:none;border-top:1px solid #DCD2BE;margin:20px 0"/>
      <p style="color:#2B2622;line-height:1.6">${esc(data.message).replace(/\n/g, '<br/>')}</p>
      <hr style="border:none;border-top:1px solid #DCD2BE;margin:20px 0"/>
      <p style="color:#A39A8E;font-size:12px">Amuse Events · Isleworth, London</p>
    </div>
  `
}

function buildConfirmationHtml(name: string): string {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#191614">Thanks, ${esc(name)}</h2>
      <p style="color:#2B2622;line-height:1.6">
        We've got your message and will reply within 4 working hours. If it's
        urgent, WhatsApp us directly at
        <a href="https://wa.me/447449470276" style="color:#F26A2C">+44 7449 470 276</a>.
      </p>
      <p style="color:#6B635B;font-size:14px">— The Amuse Events team</p>
    </div>
  `
}

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
