import { type Metadata } from 'next'
import Container from '@/components/Container'
import { QuoteForm } from '@/components/QuoteForm'
import { ShieldCheckIcon, UserGroupIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Request a Commercial Quote',
  description:
    'Get a free estimate for commercial window tinting in Houston, TX. Solar films, security films, decorative films for offices, retail, and more.',
}

export default function QuotePage() {
  return (
    <Container className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Request Your Commercial Estimate
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          Fill out the form below and we&apos;ll prepare a detailed bid within 1 business day. 
          For immediate assistance, call <a href="tel:+1-832-363-5100" className="font-semibold text-brand-600 hover:text-brand-500">(832) 363-5100</a>.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <QuoteForm />
      </div>

      <div className="mx-auto mt-24 max-w-5xl rounded-3xl bg-zinc-50 p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-800/50 dark:ring-white/10 sm:p-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
              <ShieldCheckIcon className="h-6 w-6 text-brand-600 dark:text-brand-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Licensed & Insured</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Fully compliant with commercial requirements.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
              <UserGroupIcon className="h-6 w-6 text-brand-600 dark:text-brand-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Certified Installers</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Factory-trained professionals for flawless results.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
              <MagnifyingGlassIcon className="h-6 w-6 text-brand-600 dark:text-brand-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Free On-Site Consultations</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Expert assessment of your facility&apos;s needs.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
