import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import FaqSection from '@/components/FaqSection'
import Building from '@/images/building.jpg'
import HomeImage from '@/images/home.jpg'
import Benz from '@/images/vehicles/benz.jpg'
import Logo from '@/images/tint-logo.png'
import {
  ShieldCheckIcon,
  EyeSlashIcon,
  LockClosedIcon,
  BriefcaseIcon,
  DocumentCheckIcon,
  StarIcon,
  SunIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      {/* 1. Commercial Authority Hero */}
      <div className="relative isolate overflow-hidden bg-zinc-900 pt-14">
        <Image
          src={Building}
          alt="Commercial window tinting on a modern glass building"
          fill
          sizes="100vw"
          priority
          className="absolute inset-0 -z-10 object-cover opacity-30 mix-blend-multiply"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-zinc-900/10" />

        <Container>
          <div className="py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="mb-8 w-48 sm:w-64 h-24 relative">
                <Image
                  src={Logo}
                  alt="Texas Tint Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Houston&apos;s Premier Commercial Window Film Authority
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Enhance your commercial property with advanced window film solutions. Reduce energy costs, improve tenant comfort, and elevate security and privacy for offices, retail spaces, and facilities across Houston.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/quote"
                  className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all duration-300"
                >
                  Request a Commercial Bid
                </Link>
                <Link href="/commercial" className="text-sm font-semibold leading-6 text-white hover:text-brand-300 transition-colors">
                  Explore Our Solutions <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>

        {/* Stat Badges */}
        <div className="absolute bottom-0 w-full bg-zinc-900/80 backdrop-blur-sm border-t border-white/10 hidden md:block">
          <Container>
            <div className="grid grid-cols-3 gap-8 py-6 text-center text-sm font-semibold text-white">
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-3xl font-bold text-brand-400">30%</span>
                <span>Energy Savings</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-3xl font-bold text-brand-400">99%</span>
                <span>UV Blocked</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-3xl font-bold text-brand-400">15-Year</span>
                <span>Warranty</span>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* 2. B2B Value Propositions */}
      <div className="bg-gray-50 dark:bg-zinc-900 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Why Commercial Window Film?
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Engineered solutions that deliver immediate ROI for property owners and managers.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-4">
            <div className="flex flex-col rounded-3xl bg-white dark:bg-zinc-800 p-8 shadow-sm ring-1 ring-zinc-200 dark:ring-white/10 hover:-translate-y-1 transition-transform duration-300">
              <ShieldCheckIcon className="h-10 w-10 text-brand-600 dark:text-brand-400 mb-6" />
              <h3 className="text-lg font-semibold leading-8 text-zinc-900 dark:text-white">Energy Cost Reduction</h3>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Reduce HVAC costs by up to 30% with solar control films that reject solar heat and insulate against cold.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl bg-white dark:bg-zinc-800 p-8 shadow-sm ring-1 ring-zinc-200 dark:ring-white/10 hover:-translate-y-1 transition-transform duration-300">
              <LockClosedIcon className="h-10 w-10 text-brand-600 dark:text-brand-400 mb-6" />
              <h3 className="text-lg font-semibold leading-8 text-zinc-900 dark:text-white">Security & Safety</h3>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Anti-shatter and blast-mitigation films protect people and property from forced entry, severe weather, and accidents.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl bg-white dark:bg-zinc-800 p-8 shadow-sm ring-1 ring-zinc-200 dark:ring-white/10 hover:-translate-y-1 transition-transform duration-300">
              <EyeSlashIcon className="h-10 w-10 text-brand-600 dark:text-brand-400 mb-6" />
              <h3 className="text-lg font-semibold leading-8 text-zinc-900 dark:text-white">Privacy & Aesthetics</h3>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Frosted and decorative films for conference rooms, storefronts, and interior glass partitions.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl bg-white dark:bg-zinc-800 p-8 shadow-sm ring-1 ring-zinc-200 dark:ring-white/10 hover:-translate-y-1 transition-transform duration-300">
              <SunIcon className="h-10 w-10 text-brand-600 dark:text-brand-400 mb-6" />
              <h3 className="text-lg font-semibold leading-8 text-zinc-900 dark:text-white">UV & Glare Control</h3>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Block 99% of UV rays to prevent fading of furnishings, and reduce screen glare for tenant comfort and productivity.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* 3. Three-Way Service Bifurcation */}
      <div className="py-24 sm:py-32 bg-white dark:bg-zinc-950">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Solutions for Every Space
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Expert installation across commercial, residential, and automotive sectors.
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            <Link href="/commercial" className="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-zinc-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 ring-2 ring-brand-500 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <Image src={Building} alt="Commercial Window Tinting" fill sizes="(min-width: 1024px) 33vw, 100vw" className="absolute inset-0 -z-10 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-900 via-zinc-900/60" />
              <div className="absolute inset-0 -z-10 rounded-3xl ring-1 ring-inset ring-white/10" />
              <h3 className="mt-3 text-2xl font-bold leading-6 text-white group-hover:text-brand-300 transition-colors">Commercial</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">Office buildings, retail, healthcare, and government facilities.</p>
              <span className="mt-4 text-brand-400 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">Learn More <span aria-hidden="true">→</span></span>
            </Link>

            <Link href="/residential" className="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-zinc-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <Image src={HomeImage} alt="Residential Window Tinting" fill sizes="(min-width: 1024px) 33vw, 100vw" className="absolute inset-0 -z-10 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-900 via-zinc-900/60" />
              <div className="absolute inset-0 -z-10 rounded-3xl ring-1 ring-inset ring-white/10" />
              <h3 className="mt-3 text-2xl font-bold leading-6 text-white group-hover:text-brand-300 transition-colors">Residential</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">Home comfort, UV protection, and energy savings.</p>
              <span className="mt-4 text-brand-400 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">Learn More <span aria-hidden="true">→</span></span>
            </Link>

            <Link href="/automotive" className="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-zinc-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <Image src={Benz} alt="Automotive Window Tinting" fill sizes="(min-width: 1024px) 33vw, 100vw" className="absolute inset-0 -z-10 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-900 via-zinc-900/60" />
              <div className="absolute inset-0 -z-10 rounded-3xl ring-1 ring-inset ring-white/10" />
              <h3 className="mt-3 text-2xl font-bold leading-6 text-white group-hover:text-brand-300 transition-colors">Automotive</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">Premium ceramic and carbon tinting for all vehicles.</p>
              <span className="mt-4 text-brand-400 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">Learn More <span aria-hidden="true">→</span></span>
            </Link>
          </div>
        </Container>
      </div>

      {/* 4. Commercial Proof / Trust Section */}
      <div className="bg-zinc-900 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl lg:max-w-none text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by Houston&apos;s Leading Businesses
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Professional installation backed by industry-leading warranties and certifications.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl ring-1 ring-white/10">
              <DocumentCheckIcon className="h-12 w-12 text-brand-400 mb-4" />
              <h3 className="text-lg font-semibold text-white">Licensed & Fully Insured</h3>
              <p className="mt-2 text-sm text-zinc-400">COI and references provided upon request for commercial projects.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl ring-1 ring-white/10">
              <StarIcon className="h-12 w-12 text-brand-400 mb-4" />
              <h3 className="text-lg font-semibold text-white">Certified Installers</h3>
              <p className="mt-2 text-sm text-zinc-400">Manufacturer-certified experts for premium film brands.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl ring-1 ring-white/10">
              <ShieldCheckIcon className="h-12 w-12 text-brand-400 mb-4" />
              <h3 className="text-lg font-semibold text-white">Commercial Warranties</h3>
              <p className="mt-2 text-sm text-zinc-400">Comprehensive manufacturer warranties up to 15 years.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl ring-1 ring-white/10">
              <BriefcaseIcon className="h-12 w-12 text-brand-400 mb-4" />
              <h3 className="text-lg font-semibold text-white">LEED Eligible</h3>
              <p className="mt-2 text-sm text-zinc-400">Films qualify for LEED and energy efficiency tax credits.</p>
            </div>
          </div>
        </Container>
      </div>

      {/* 5. Houston Service Area */}
      <div className="py-16 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Proudly serving the Greater Houston Metropolitan Area</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Including Houston, The Woodlands, Katy, Sugar Land, Cypress, Spring, Pearland, and Missouri City. 
              Available for regional commercial projects across Texas.
            </p>
          </div>
        </Container>
      </div>

      {/* 6. Frequently Asked Questions */}
      <FaqSection />

      {/* 7. Final CTA Section */}
      <div className="bg-brand-700">
        <Container>
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Reduce Energy Costs &<br />Upgrade Your Property?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-100">
                Get a comprehensive commercial estimate tailored to your facility&apos;s unique needs. Contact us today for a free consultation.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/quote"
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-sm hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
                >
                  Get Your Free Commercial Estimate
                </Link>
                <a href="tel:8323635100" className="text-sm font-semibold leading-6 text-white hover:text-brand-100 transition-colors">
                  Call (832) 363-5100 <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
