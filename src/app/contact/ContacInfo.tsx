import Container from '@/components/Container'
import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/solid'

function FacebookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const ContactInfo = () => (
  <Container>
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Left Column: Text & Socials */}
      <div className="flex flex-col justify-center space-y-10">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-extrabold text-brand-800 dark:text-white">
              Get in Touch
            </h2>
            <div className="mt-4 h-1 w-20 rounded bg-brand-500"></div>
          </div>

          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Texas Tint specializes in commercial and residential building
              window tinting, paint protection film, and car window tinting.
            </p>
            <p>
              Ready to upgrade your space? We are here to help. Contact us via
              phone or email to schedule your service.
            </p>
          </div>
        </div>

        {/* NEW: Dedicated Social Media Section */}
        <div className="border-t border-gray-100 pt-10 dark:border-white/10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Connect With Us
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Follow our latest projects and updates on social media.
          </p>
          <div className="mt-6">
            <a
              href="https://www.facebook.com/TexasTintPlusLLC/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-[#1877F2] px-5 py-3 text-base font-semibold text-white shadow-md shadow-[#1877F2]/20 transition-transform hover:scale-105 hover:bg-[#166fe5]"
            >
              <FacebookIcon className="h-6 w-6" />
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Details Card */}
      <div className="rounded-3xl bg-zinc-50 p-8 shadow-sm ring-1 ring-zinc-900/5 lg:p-12 dark:bg-zinc-800/50 dark:ring-white/10">
        <ul role="list" className="space-y-8">
          <li className="flex items-start">
            <div className="flex-none rounded-lg bg-white p-2 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
              <ClockIcon className="h-6 w-6 text-brand-500" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Opening Hours
              </h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Mon - Sat: 9:00 AM - 5:00 PM
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="flex-none rounded-lg bg-white p-2 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
              <EnvelopeIcon className="h-6 w-6 text-brand-500" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Email Us
              </h3>
              <a
                href="mailto:office@texastint.com"
                className="mt-1 block text-zinc-600 transition hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
              >
                office@texastint.com
              </a>
            </div>
          </li>

          <li className="flex items-start">
            <div className="flex-none rounded-lg bg-white p-2 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
              <PhoneIcon className="h-6 w-6 text-brand-500" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Call Us
              </h3>
              <a
                href="tel:+1-832-363-5100"
                className="mt-1 block text-zinc-600 transition hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
              >
                +1 (832) 363-5100
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Container>
)
