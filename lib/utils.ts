/** Format pence/decimal as GBP: £18, £1.20 */
export function fmt(n: number): string {
  return '£' + n.toFixed(2).replace(/\.00$/, '')
}

/** Format decimal fee always to 2dp: + £1.20 fee */
export function fmtFee(n: number): string {
  return '+ £' + n.toFixed(2) + ' fee'
}

/** Zero-pad number to 2 digits */
export function pad2(n: number): string {
  return String(n).padStart(2, '0')
}

/** Format ISO date as e.g. "Sat 11 Apr 2026" */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Build a countdown object from a target ISO datetime string */
export function calcCountdown(targetIso: string) {
  const diff = Math.max(0, new Date(targetIso).getTime() - Date.now())
  const d = Math.floor(diff / 86_400_000)
  const h = Math.floor((diff % 86_400_000) / 3_600_000)
  const m = Math.floor((diff % 3_600_000) / 60_000)
  const s = Math.floor((diff % 60_000) / 1_000)
  return { d, h, m, s }
}

/** Shared contact details */
export const CONTACT = {
  phone: '+44 7449 470 276',
  phoneTel: '+447449470276',
  email: 'contact@amuseevents.co.uk',
  waUrl:
    'https://api.whatsapp.com/send?phone=447449470276&text=Hi%20Amuse%20Events%2C%20I%27d%20like%20to%20chat%20about%20an%20event',
}
