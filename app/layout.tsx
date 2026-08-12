import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display-var',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body-var',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-var',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://carbonahq.com'
  ),
  title: 'Carbona — The Intelligence Layer for Carbon',
  description:
    'Carbona is AI-native infrastructure for carbon measurement, reporting, and verification — turning satellite, drone, and sensor data into verified carbon truth in weeks, not months.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Carbona',
    title: 'Carbona — The Intelligence Layer for Carbon',
    description:
      'AI-native infrastructure for carbon measurement, reporting, and verification. Verified carbon truth in weeks, not months.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carbona — The Intelligence Layer for Carbon',
    description:
      'AI-native infrastructure for carbon measurement, reporting, and verification.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
