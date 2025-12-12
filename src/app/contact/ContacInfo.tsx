import Container from '@/components/Container'
import { EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/solid'

export const ContactInfo = () => (
  <Container>
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Text Section */}
      <div className="flex flex-col justify-center space-y-8">
        <div>
          <h2 className="text-4xl font-extrabold text-brand-800 dark:text-white">
            Get in Touch
          </h2>
          <div className="mt-4 h-1 w-20 rounded bg-brand-500"></div>
        </div>
        
        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            Texas Tint specializes in commercial and residential building window
            tinting, paint protection film, and car window tinting.
          </p>
          <p>
            Ready to upgrade your space? We are here to help. Contact us via phone or email, and we will get back to you promptly to schedule your service.
          </p>
        </div>
      </div>

      {/* Contact Card */}
      <div className="rounded-3xl bg-zinc-50 p-8 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800/50 dark:ring-white/10 lg:p-12">
        <ul role="list" className="space-y-8">
          <li className="flex items-start">
            <div className="flex-none rounded-lg bg-white p-2 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
              <ClockIcon className="h-6 w-6 text-brand-500" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-zinc-900 dark:text-white">Opening Hours</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">Mon - Sat: 9:00 AM - 5:00 PM</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="flex-none rounded-lg bg-white p-2 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
              <EnvelopeIcon className="h-6 w-6 text-brand-500" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-zinc-900 dark:text-white">Email Us</h3>
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
              <h3 className="font-semibold text-zinc-900 dark:text-white">Call Us</h3>
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