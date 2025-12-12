import Container from '@/components/Container'
import {
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/solid'

// --- Custom Social Icons ---

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

function InstagramIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.451 2.535c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function YelpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12.002 1.996c-.33 0-.64.16-.84.44l-2.02 2.84 2.87 1.09c.39.15.82-.01 1.05-.36.23-.36.2-.82-.09-1.15l-1.97-2.86zM9.6 6.89l-2.87-1.1-1.32 2.76c-.19.39-.06.86.3 1.12l.06.04c.36.24.84.21 1.17-.07l2.66-2.25zM6.92 9.17c-.36-.21-.82-.16-1.13.13l-2.27 2.1c-.28.26-.35.68-.17 1.02l1.37 2.65 2.2-2.1c.29-.28.32-.73.12-1.08zm4.33 2.08l-1.12 2.89c-.15.39.02.84.38 1.06l.04.02c.38.22.86.13 1.14-.21l1.66-2.15-2.1-1.61zm2.93-1.66l-2.12 1.62 1.65 2.16c.25.33.72.41 1.09.2l2.69-1.55c.36-.21.49-.66.29-1.02l-1.43-2.48z"
        clipRule="evenodd"
      />
    </svg>
  )
}

// --- Main Component ---

export const ContactInfo = () => (
  <Container>
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
      {/* Left Column: Text & Socials */}
      <div className="flex flex-col justify-start space-y-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-extrabold text-brand-800 dark:text-white">
              Get in Touch
            </h2>
            <div className="mt-4 h-1.5 w-24 rounded-full bg-brand-500"></div>
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              Texas Tint specializes in premium window tinting for automotive,
              residential, and commercial applications.
            </p>
            <p>
              Ready to upgrade your space? Contact us today to schedule your
              free consultation.
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm dark:border-white/5 dark:bg-white/5">
          <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
            Connect With Us
          </h3>
          <div className="flex flex-col gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/TexasTintPlusLLC/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/30 dark:bg-zinc-800"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-colors group-hover:bg-white group-hover:text-[#1877F2]">
                  <FacebookIcon className="h-5 w-5" />
                </div>
                <span className="font-semibold text-gray-700 transition-colors group-hover:text-white dark:text-gray-200">
                  Facebook
                </span>
              </div>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white/80" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/texastintplus/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:shadow-lg hover:shadow-[#FD1D1D]/30 dark:bg-zinc-800"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white transition-opacity group-hover:opacity-100">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <span className="font-semibold text-gray-700 transition-colors group-hover:text-white dark:text-gray-200">
                  Instagram
                </span>
              </div>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white/80" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Details Card */}
      <div className="h-fit rounded-3xl bg-zinc-50 p-8 shadow-sm ring-1 ring-zinc-900/5 lg:p-12 dark:bg-zinc-800/50 dark:ring-white/10">
        <ul role="list" className="space-y-8">
          <li className="flex items-start">
            <div className="flex-none rounded-xl bg-white p-3 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
              <ClockIcon className="h-6 w-6 text-brand-600" />
            </div>
            <div className="ml-5">
              <h3 className="font-bold text-zinc-900 dark:text-white">
                Business Hours
              </h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Mon - Sat: 9:00 AM - 5:00 PM
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="flex-none rounded-xl bg-white p-3 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
              <EnvelopeIcon className="h-6 w-6 text-brand-600" />
            </div>
            <div className="ml-5">
              <h3 className="font-bold text-zinc-900 dark:text-white">
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
            <div className="flex-none rounded-xl bg-white p-3 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
              <PhoneIcon className="h-6 w-6 text-brand-600" />
            </div>
            <div className="ml-5">
              <h3 className="font-bold text-zinc-900 dark:text-white">
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
