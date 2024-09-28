import { type Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Texas Tint Plus', // Assuming the brand name has been updated or could be updated for clarity
    default: 'Texas Tint Plus - Expert Window Tinting for Vehicles & Buildings',
  },
  description:
    'Elevate your space with Texas Tint Plus. Offering premier window tinting for automotive, residential, and commercial needs. Request your free quote today!',
  keywords: [
    'window tint',
    'car tint',
    'home tint',
    'office tint',
    'Texas Tint Plus',
    'UV protection',
    'privacy glass',
  ],
  openGraph: {
    title: 'Texas Tint Plus - Enhance Your Privacy and Style',
    description:
      'Discover top-tier window tinting services for all your needs at Texas Tint Plus. Protect, style, and enhance with us.',
    type: 'website',
    url: 'https://yourwebsite.com', // Replace with your domain
    images: ['/og-image.jpg'], // Path to your Open Graph image
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full bg-gray-50 text-zinc-800 dark:bg-zinc-900 dark:text-gray-200">
        <Providers>
          <div className="flex w-full flex-col">
            <Layout>{children}</Layout>
            <Analytics />
            {/* Only include GoogleTagManager in production */}
            {process.env.NODE_ENV === 'production' && (
              <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTAG_ID || ''} />
            )}
          </div>
        </Providers>
      </body>
    </html>
  )
}
