import Image from 'next/image'
import { ChevronRightIcon, ShieldCheckIcon, EyeSlashIcon, SparklesIcon } from '@heroicons/react/24/solid'
import Container from '@/components/Container'
import Link from 'next/link'
import Benz from '@/images/vehicles/benz.jpg'
import { ServiceList } from './services/ServiceList'
import { ContactInfo } from './contact/ContacInfo'
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
        {/* Advanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
        
        <Container className="absolute inset-0 flex items-center justify-start">
          <div className="z-10 max-w-3xl space-y-8 pl-4">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Elevate Your <br />
              <span className="text-brand-400">Ride & Space</span>
            </h1>
            <p className="max-w-xl text-lg text-gray-200 sm:text-xl leading-relaxed">
              Experience unparalleled privacy, style, and UV protection with
              Texas Tint Plus. We provide museum-quality window tinting for 
              all your automotive and architectural needs.
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
                className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-8 py-4 text-lg font-semibold text-white border border-white/20 transition-all duration-300 hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Highlights - Polished Cards */}
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
              <p className="mt-4 text-gray-600 leading-relaxed dark:text-gray-300">
                Block up to 99% of harmful UV rays to safeguard your skin and prevent your interiors from fading.
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
              <p className="mt-4 text-gray-600 leading-relaxed dark:text-gray-300">
                Keep prying eyes out while maintaining clear visibility from the inside. Enjoy your personal space.
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
              <p className="mt-4 text-gray-600 leading-relaxed dark:text-gray-300">
                Transform your vehicle or building with a sleek, professional look that turns heads.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Logo Showcase */}
      <div className="bg-white py-12 dark:bg-zinc-900">
        <div className="flex justify-center px-4">
          <div className="relative h-48 w-full max-w-lg transition-transform hover:scale-105">
            <Image
              src={Logo}
              alt="Texas Tint Logo"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Embedded Sections */}
      <div className="bg-gray-50 py-24 dark:bg-zinc-900">
        <ServiceList />
      </div>
      
      <div className="bg-white py-24 dark:bg-zinc-950">
        <ContactInfo />
      </div>
    </>
  )
}

export default HomePage