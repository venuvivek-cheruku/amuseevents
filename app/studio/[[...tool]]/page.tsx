import { isSanityConfigured } from '@/sanity/lib/client'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="mx-auto max-w-[600px] px-8 py-20 font-mono">
        <h1 className="mb-4 text-2xl">Sanity Studio</h1>
        <p className="leading-relaxed text-ink-3">
          Studio is not available yet. Add{' '}
          <code className="rounded bg-paper-2 px-1.5 py-0.5">
            NEXT_PUBLIC_SANITY_PROJECT_ID
          </code>{' '}
          to your <code>.env.local</code> file, then restart the dev server.
        </p>
        <p className="mt-4 text-ink-3">
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
