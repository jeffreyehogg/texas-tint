import { type Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Texas Tint',
    default:
      'Texas Tint specializes in Commercial and Automotive window tinting.',
  },
  description:
    'Texas Tint specializes in Commercial and Automotive window tinting. Contact us for a free quote or to schedule an appointment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>
              {children}
              <Analytics />
              <GoogleTagManager gtmId={process.env.GTAG_ID || ''} />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
