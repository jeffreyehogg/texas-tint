import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import Building from '@/images/building.jpg'
import { CheckCircleIcon, ShieldCheckIcon, SunIcon, SparklesIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Commercial Window Film Solutions | Texas Tint Plus',
  description: 'Expert commercial window tinting for Houston businesses. Improve energy efficiency, enhance security, and add privacy to your building.',
}

export default function CommercialPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center">
        <Image
          src={Building}
          alt="Modern commercial building with tinted windows in Houston"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-zinc-900/70" />
        <Container className="relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Commercial Window Film Solutions
            </h1>
            <p className="text-lg text-zinc-300 sm:text-xl">
              Professional window tinting for Houston businesses. Maximize energy savings, upgrade security, and enhance privacy across your facilities.
            </p>
            <div className="mt-10">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors"
              >
                Request Your Commercial Bid
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Why Upgrade Your Building&apos;s Glass?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
              <SunIcon className="h-12 w-12 text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Energy Cost Reduction</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Cut cooling costs by reducing solar heat gain. Achieve up to 30% HVAC savings.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
              <ShieldCheckIcon className="h-12 w-12 text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Security & Safety</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Anti-shatter and blast mitigation films to protect tenants and assets.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
              <SparklesIcon className="h-12 w-12 text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Privacy & Decorative</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Frosted conference rooms and custom branded glass solutions for modern offices.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
              <CheckCircleIcon className="h-12 w-12 text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">UV & Glare Reduction</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Block 99% of harmful UV rays to protect interiors and improve tenant comfort.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Film Types Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Commercial Window Film Options
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Solar Control Films</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Maximize energy ROI with premium solar films including 3M Prestige, Llumar SelectPro, and SunTek CIR. Reject heat without sacrificing natural light.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-brand-600" /> Lower energy bills</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-brand-600" /> Eliminate hot spots</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-brand-600" /> Glare reduction</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Security & Safety Films</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Fortify glass against forced entry, severe weather, and accidents. Featuring 3M Ultra Series and Llumar safety films with high protection ratings.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-brand-600" /> Tear-resistant micro-layers</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-brand-600" /> Blast mitigation</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-brand-600" /> Delay forced entry</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Decorative & Privacy Films</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Enhance aesthetics and create private spaces with frosted, gradient, and custom patterned films for interior glass and storefronts.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-brand-600" /> Custom branding</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-brand-600" /> Conference room privacy</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-brand-600" /> Distraction bands</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-brand-900 text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Industries We Serve
            </h2>
            <p className="mt-4 text-brand-100 max-w-2xl mx-auto">
              We provide tailored solutions for all types of commercial properties in the Greater Houston area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-lg font-medium text-brand-50">
            <div className="p-4 bg-brand-800/50 rounded-xl">Office Buildings</div>
            <div className="p-4 bg-brand-800/50 rounded-xl">Retail & Storefronts</div>
            <div className="p-4 bg-brand-800/50 rounded-xl">Healthcare Facilities</div>
            <div className="p-4 bg-brand-800/50 rounded-xl">Educational Institutions</div>
            <div className="p-4 bg-brand-800/50 rounded-xl">Government Buildings</div>
            <div className="p-4 bg-brand-800/50 rounded-xl">Restaurants & Hospitality</div>
          </div>
        </Container>
      </section>

      {/* Trust Signals */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl mb-12">
              Why Choose Texas Tint Plus?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              <div className="flex items-start gap-4">
                <CheckCircleIcon className="h-8 w-8 text-brand-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-100">Licensed & Insured</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">Fully covered for large commercial projects. COI available upon request.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircleIcon className="h-8 w-8 text-brand-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-100">Certified Installers</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">Manufacturer-certified team ensuring flawless, lasting applications.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircleIcon className="h-8 w-8 text-brand-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-100">Commercial Warranties</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">Peace of mind with comprehensive film warranties up to 15 years.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircleIcon className="h-8 w-8 text-brand-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-100">LEED & Energy Credits</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">Our solar films can contribute toward LEED certification and energy rebates.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-100 dark:bg-zinc-800">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl mb-6">
              Ready to Upgrade Your Commercial Space?
            </h2>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors"
            >
              Request Your Commercial Bid
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
