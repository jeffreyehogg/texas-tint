import Image from 'next/image'
import {
  ChevronRightIcon,
  ShieldCheckIcon,
  EyeSlashIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid'
import Container from '@/components/Container'
import Link from 'next/link'
import Benz from '@/images/vehicles/benz.jpg'
import Building from '@/images/building.jpg' // Added this import
import Logo from '@/images/tint-logo.png'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <Image
          src={Benz}
          alt="Luxurious car with scenic backdrop"
          fill
          className="object-cover object-center brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>

        <Container className="absolute inset-0 flex items-center justify-start">
          <div className="z-10 max-w-3xl space-y-8 pl-4">
            {/* Logo Showcase */}
            <div className="bg-transparen">
              <div className="flex justify-center px-4">
                <div className="relative h-32 w-full max-w-lg">
                  <Image
                    src={Logo}
                    alt="Texas Tint Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Elevate Your <br />
              <span className="text-brand-400">Ride & Space</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-gray-200 sm:text-xl">
              Experience unparalleled privacy, style, and UV protection with
              Texas Tint Plus. We provide museum-quality window tinting for all
              your automotive and architectural needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center rounded-full bg-brand-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:scale-105 hover:bg-brand-500"
              >
                Discover Services
                <ChevronRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Highlights */}
      <div className="relative z-10 bg-gray-50 py-24 dark:bg-zinc-900">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-800">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                <ShieldCheckIcon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                UV Protection
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                Block up to 99% of harmful UV rays to safeguard your skin and
                prevent your interiors from fading.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-800">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                <EyeSlashIcon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Enhanced Privacy
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                Keep prying eyes out while maintaining clear visibility from the
                inside. Enjoy your personal space.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-800">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                <SparklesIcon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Aesthetic Appeal
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                Transform your vehicle or building with a sleek, professional
                look that turns heads.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* NEW: Services Overview (Teasers) */}
      <section className="bg-white py-24 dark:bg-zinc-950">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Our Expertise
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              Choose the solution that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Automotive Teaser */}
            <div className="group relative overflow-hidden rounded-3xl bg-gray-100 shadow-md dark:bg-zinc-800">
              <div className="aspect-h-9 aspect-w-16 relative h-64 sm:h-80">
                <Image
                  src={Benz}
                  alt="Automotive Window Tinting"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-bold text-white">Automotive</h3>
                  <p className="mt-2 text-gray-200">
                    Ceramic tinting for ultimate heat rejection and style.
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center text-brand-300 hover:text-white"
                  >
                    View Auto Services{' '}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Commercial/Residential Teaser */}
            <div className="group relative overflow-hidden rounded-3xl bg-gray-100 shadow-md dark:bg-zinc-800">
              <div className="aspect-h-9 aspect-w-16 relative h-64 sm:h-80">
                <Image
                  src={Building}
                  alt="Commercial and Residential Tinting"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-bold text-white">
                    Commercial & Home
                  </h3>
                  <p className="mt-2 text-gray-200">
                    Energy efficient films for buildings and residences.
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center text-brand-300 hover:text-white"
                  >
                    View Commercial Services{' '}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* NEW: Final CTA Section */}
      <div className="relative overflow-hidden bg-brand-700 py-24">
        {/* Decorative background pattern could go here */}
        <Container className="relative z-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to upgrade your space?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-brand-100">
            Get a free quote today and discover the difference professional
            tinting can make.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-700 shadow-xl transition-all hover:scale-105 hover:bg-brand-50"
            >
              Get Your Free Quote
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

export default HomePage
