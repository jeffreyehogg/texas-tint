import { type Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import { ContactInfo } from './ContacInfo'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Texas Tint in Houston, TX for a free quote or to schedule an appointment. We specialize in commercial and residential window tinting, and more.',
}

const ContactPage = () => {
  return (
    <Container className="py-24 lg:py-32">
      <div className="mb-16 rounded-3xl bg-brand-50 p-8 ring-1 ring-brand-900/5 dark:bg-brand-900/10 dark:ring-brand-400/20 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Looking for a Commercial Estimate?
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Get a detailed, customized bid for your office, retail space, or facility.
          </p>
        </div>
        <Link
          href="/quote"
          className="whitespace-nowrap rounded-xl bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          Request a Quote
        </Link>
      </div>

      <ContactInfo />
    </Container>
  )
}

export default ContactPage
