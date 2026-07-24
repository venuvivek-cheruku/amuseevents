export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { NextStudio } = require('next-sanity/studio')
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const config = require('@/sanity.config').default
  return <NextStudio config={config} />
}
