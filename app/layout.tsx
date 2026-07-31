import type { Metadata } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { JsonLd, buildOrganizationSchema } from '@/components/JsonLd'
import { ScrollAnimations } from '@/components/animations/ScrollAnimations'
import { MicroInteractions } from '@/components/animations/MicroInteractions'
import { RevealObserver } from '@/components/animations/RevealObserver'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Amuse Events — London Event Planning & DJ Nights',
    template: '%s — Amuse Events',
  },
  description:
    'A London studio crafting weddings, parties, corporate events and DJ club nights since 2014. Calm planning. Joyful days.',
  metadataBase: new URL('https://amuseevents.co.uk'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://amuseevents.co.uk',
    siteName: 'Amuse Events',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <body>
        <JsonLd data={buildOrganizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollAnimations />
        <MicroInteractions />
        <RevealObserver />
      </body>
    </html>
  )
}
