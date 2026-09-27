import { type Metadata } from 'next'
import { Inter } from 'next/font/google' // Import the font
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

// Configure the font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://texastint.com'),
  title: {
    template: '%s - Texas Tint Plus',
    default: 'Texas Tint Plus | Commercial Window Tinting Houston TX - Energy, Security & Privacy Films',
  },
  description:
    'Houston\'s premier commercial window tinting company. Solar control films, security films, and decorative privacy films for offices, retail, and commercial properties. Serving Houston, The Woodlands, Katy, Sugar Land & the greater Houston metro. Call (832) 363-5100.',
  keywords: [
    'commercial window tinting Houston',
    'commercial window film Houston TX',
    'office window tinting',
    'solar control film Houston',
    'security window film',
    'decorative window film',
    'energy saving window tint',
    'anti-shatter film Houston',
    'privacy window film',
    'car window tinting Houston',
    'residential window tinting',
    'window tint The Woodlands',
    'window tint Katy TX',
    'window tint Sugar Land',
    'Texas Tint Plus',
    'UV protection film',
    '3M window film Houston',
    'Llumar window tint',
  ],
  openGraph: {
    title: 'Texas Tint Plus | Commercial & Automotive Window Tinting Houston TX',
    description:
      'Houston\'s leading commercial window film installer. Reduce energy costs up to 30%, enhance security, and improve privacy. Licensed, insured, manufacturer-certified. Free estimates.',
    type: 'website',
    url: 'https://texastint.com',
    images: ['/images/building.jpg'],
    siteName: 'Texas Tint Plus',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@texastintplus',
    images: [
      {
        url: 'https://texastint.com/images/building.jpg',
        alt: 'Texas Tint Plus - Commercial Window Film Solutions Houston TX',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://texastint.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`h-full scroll-smooth antialiased ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Texas Tint Plus',
              description: 'Houston\'s premier commercial window tinting company specializing in solar control films, security films, and decorative privacy films for commercial properties, offices, and retail.',
              url: 'https://texastint.com',
              telephone: '+1-832-363-5100',
              email: 'office@texastint.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Houston',
                addressRegion: 'TX',
                addressCountry: 'US',
              },
              areaServed: [
                { '@type': 'City', name: 'Houston' },
                { '@type': 'City', name: 'The Woodlands' },
                { '@type': 'City', name: 'Katy' },
                { '@type': 'City', name: 'Sugar Land' },
                { '@type': 'City', name: 'Cypress' },
                { '@type': 'City', name: 'Spring' },
                { '@type': 'City', name: 'Pearland' },
                { '@type': 'City', name: 'Missouri City' },
              ],
              openingHours: 'Mo-Sa 09:00-17:00',
              priceRange: '$$',
              image: 'https://texastint.com/images/building.jpg',
              sameAs: [
                'https://www.facebook.com/TexasTintPlusLLC/',
                'https://www.instagram.com/texastintplus/',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Window Tinting Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Commercial Window Tinting',
                      description: 'Solar control, security, and decorative window films for commercial properties',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Residential Window Tinting',
                      description: 'Energy-saving and privacy window films for homes',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Automotive Window Tinting',
                      description: 'Premium ceramic and carbon window tints for vehicles',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="flex min-h-full bg-gray-50 text-zinc-800 dark:bg-zinc-900 dark:text-gray-200 font-sans">
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