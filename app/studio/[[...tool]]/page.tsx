import { isSanityConfigured } from '@/sanity/lib/client'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div style={{ padding: '80px 32px', fontFamily: 'monospace', maxWidth: 600, margin: '0 auto' }}>
        <h1 style={{ fontSize: 24, marginBottom: 16 }}>Sanity Studio</h1>
        <p style={{ color: '#6B635B', lineHeight: 1.6 }}>
          Studio is not available yet. Add{' '}
          <code style={{ background: '#EFE7D6', padding: '2px 6px', borderRadius: 4 }}>
            NEXT_PUBLIC_SANITY_PROJECT_ID
          </code>{' '}
          to your <code>.env.local</code> file, then restart the dev server.
        </p>
        <p style={{ marginTop: 16, color: '#6B635B' }}>
          See <code>.env.example</code> for all required variables.
        </p>
      </div>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { NextStudio } = require('next-sanity/studio')
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const config = require('@/sanity.config').default
  return <NextStudio config={config} />
}
