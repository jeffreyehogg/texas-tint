import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'

import Benz from '@/images/vehicles/benz.jpg'
import Tesla from '@/images/vehicles/tesla.jpg'
import CyberTruck from '@/images/vehicles/cyber-truck.jpg'
import C300 from '@/images/vehicles/c300.jpg'

import { ShieldCheckIcon, SunIcon, SparklesIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Automotive Window Tinting | Texas Tint Plus',
  description: 'Premium automotive window tinting in Houston. Protect your vehicle with high-quality ceramic, carbon, and dyed tint packages for maximum heat rejection.',
}

export default function AutomotivePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center">
        <Image
          src={Tesla}
          alt="Premium vehicle with tinted windows"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-zinc-900/60" />
        <Container className="relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Premium Automotive Tinting
            </h1>
            <p className="text-lg text-zinc-200 sm:text-xl mb-10">
              Enhance your vehicle&apos;s style, comfort, and privacy. Block the Texas heat with our advanced ceramic and carbon window films.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors"
            >
              Book Your Auto Tint
            </Link>
          </div>
        </Container>
      </section>

      {/* Tint Packages Section */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Our Tint Packages
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Choose the perfect level of protection and style for your ride.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ceramic */}
            <div className="flex flex-col p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-800/50 border-2 border-brand-500 relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Ceramic Tint</h3>
              <div className="text-brand-600 dark:text-brand-400 font-bold text-lg mb-6">Up to 98% Heat Rejection</div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow">
                The ultimate in heat rejection and UV protection. Nano-ceramic technology blocks infrared heat without interfering with electronics.
              </p>
              <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 mb-8">
                <li className="flex gap-2"><SunIcon className="h-5 w-5 text-brand-500 shrink-0" /> Maximum infrared heat block</li>
                <li className="flex gap-2"><ShieldCheckIcon className="h-5 w-5 text-brand-500 shrink-0" /> 99.9% UV protection</li>
                <li className="flex gap-2"><SparklesIcon className="h-5 w-5 text-brand-500 shrink-0" /> Crystal clear visibility</li>
              </ul>
            </div>

            {/* Carbon */}
            <div className="flex flex-col p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Carbon Tint</h3>
              <div className="text-brand-600 dark:text-brand-400 font-bold text-lg mb-6">Up to 70% Heat Rejection</div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow">
                Excellent heat rejection with a true black finish that won&apos;t fade over time. Great balance of performance and value.
              </p>
              <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 mb-8">
                <li className="flex gap-2"><SunIcon className="h-5 w-5 text-brand-500 shrink-0" /> Strong heat rejection</li>
                <li className="flex gap-2"><ShieldCheckIcon className="h-5 w-5 text-brand-500 shrink-0" /> 99% UV protection</li>
                <li className="flex gap-2"><SparklesIcon className="h-5 w-5 text-brand-500 shrink-0" /> Will never fade or turn purple</li>
              </ul>
            </div>

            {/* Dyed */}
            <div className="flex flex-col p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Standard Dyed</h3>
              <div className="text-brand-600 dark:text-brand-400 font-bold text-lg mb-6">Up to 30% Heat Rejection</div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow">
                The classic choice for privacy and style. Provides basic heat reduction and UV protection for a sleek look.
              </p>
              <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 mb-8">
                <li className="flex gap-2"><SunIcon className="h-5 w-5 text-brand-500 shrink-0" /> Basic heat reduction</li>
                <li className="flex gap-2"><ShieldCheckIcon className="h-5 w-5 text-brand-500 shrink-0" /> 99% UV protection</li>
                <li className="flex gap-2"><SparklesIcon className="h-5 w-5 text-brand-500 shrink-0" /> Enhanced privacy & style</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-zinc-100 dark:bg-zinc-950">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Recent Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image src={Benz} alt="Mercedes Benz window tint" fill className="object-cover" />
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image src={CyberTruck} alt="Tesla Cybertruck window tint" fill className="object-cover" />
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image src={C300} alt="Mercedes C300 window tint" fill className="object-cover" />
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image src={Tesla} alt="Tesla window tint" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
