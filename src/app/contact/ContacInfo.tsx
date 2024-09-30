import Container from '@/components/Container'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

export const ContactInfo = () => (
  <Container className="py-24">
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="lg:order-first lg:row-span-2">
        <h2 className="text-4xl font-extrabold text-blue-800 dark:text-white">
          Contact Us
        </h2>
        <div className="mt-6 space-y-7 text-gray-600 dark:text-gray-300">
          <p>
            Texas Tint specializes in commercial and residential building window
            tinting, paint protection film, and car window tinting.
          </p>
          <p>
            If you have any questions or would like to make a reservation,
            please contact us by email at{' '}
            <a
              href="mailto:office@texastint.com"
              className="text-[#00205A] dark:text-blue-700"
            >
              office@texastint.com{' '}
            </a>
            {/* space */}
            or by phone at{' '}
            <a
              href="tel:+1-832-363-5100"
              className="text-[#00205A] dark:text-blue-700"
            >
              +1 (832) 363-5100
            </a>{' '}
            and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>
      <div className="lg:pl-20">
        <ul role="list">
          <div className="mt-8 flex space-x-4 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
            <EnvelopeIcon className="h-6 w-6 flex-none fill-blue-500" />
            <a
              href="tel:+1-832-363-5100"
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-[#00205A] dark:text-zinc-200 dark:hover:text-[#00205A]"
            >
              office@texastint.com
            </a>
          </div>
          <div className="mt-8 flex space-x-4 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
            <PhoneIcon className="h-6 w-6 flex-none fill-blue-500" />
            <a
              href="tel:+1-832-363-5100"
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-[#00205A] dark:text-zinc-200 dark:hover:text-[#00205A]"
            >
              +1 (832) 363-5100
            </a>
          </div>
        </ul>
      </div>
    </div>
  </Container>
)
