import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import FaqSection from '@/components/FaqSection'
import ModernGlassTower from '@/images/commercial/modern-glass-tower.jpg'
import Building from '@/images/building.jpg'
import HomeImage from '@/images/home.jpg'
import Benz from '@/images/vehicles/benz.jpg'
import {
  ShieldCheckIcon,
  EyeSlashIcon,
  LockClosedIcon,
  BriefcaseIcon,
  DocumentCheckIcon,
  StarIcon,
  SunIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      {/* 1. Commercial Authority Hero */}
      <div className="relative isolate overflow-hidden bg-zinc-950 pt-20 lg:pt-24">
        {/* High-Resolution Architectural Glass Background */}
        <Image
          src={ModernGlassTower}
          alt="Modern commercial architectural glass office building with solar window film"
          fill
          sizes="100vw"
          priority
          className="absolute inset-0 -z-10 object-cover object-center brightness-[0.72] contrast-[1.08] saturate-[1.12]"
        />
        {/* Directional Gradients for Maximum Readability and Image Visibility */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/20 lg:to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        <Container>
          <div className="py-16 sm:py-24 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headlines & Call to Actions */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2.5 rounded-full bg-brand-500/15 border border-brand-400/30 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-300 backdrop-blur-md mb-6 shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500" />
                  </span>
                  Commercial Window Film Authority • Houston &amp; The Woodlands
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
                  Houston&apos;s Premier{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-sky-200">
                    Commercial Window Film
                  </span>{' '}
                  Authority
                </h1>

                <p className="mt-6 text-lg sm:text-xl leading-8 text-zinc-200 max-w-2xl font-normal drop-shadow-sm">
                  Engineered solar heat reduction, 3M security, and privacy films tailored for office buildings, storefronts, and facilities across Houston and Montgomery County. Lower HVAC cooling costs by up to 30% while protecting your tenants and assets.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>Request a Commercial Bid</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>

                  <a
                    href="tel:8323635100"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300"
                  >
                    <PhoneIcon className="h-4 w-4 text-brand-300" />
                    <span>(832) 363-5100</span>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-zinc-300">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircleIcon className="h-4 w-4 text-brand-400" /> Licensed &amp; Fully Insured (COI Provided)
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircleIcon className="h-4 w-4 text-brand-400" /> Manufacturer Certified (3M &amp; XPEL)
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircleIcon className="h-4 w-4 text-brand-400" /> Zero-Disruption After-Hours Installs
                  </span>
                </div>
              </div>

              {/* Right Column: Executive Frosted Glass Performance Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl bg-zinc-900/65 backdrop-blur-xl border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black/60">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-5 border-b border-white/10">
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-brand-400">Architectural Specifications</span>
                      <h3 className="text-xl font-bold text-white mt-1">Facility Performance Impact</h3>
                    </div>
                    <SparklesIcon className="h-6 w-6 text-brand-400" />
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-brand-500/30 transition-colors">
                      <div className="p-2 rounded-xl bg-brand-500/10 text-brand-400 shrink-0">
                        <SunIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>Up to 75% Solar Heat Blocked</span>
                          <span className="text-[10px] uppercase font-bold bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded-full">High ROI</span>
                        </div>
                        <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                          Eliminates tenant hot spots and dramatically curtails building perimeter cooling strain.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-brand-500/30 transition-colors">
                      <div className="p-2 rounded-xl bg-brand-500/10 text-brand-400 shrink-0">
                        <LockClosedIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>3M Security (7, 8 &amp; 14 mil)</span>
                          <span className="text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">Anti-Shatter</span>
                        </div>
                        <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                          Micro-layered tear resistance protects against forced entry, smash-and-grabs, and storms.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-brand-500/30 transition-colors">
                      <div className="p-2 rounded-xl bg-brand-500/10 text-brand-400 shrink-0">
                        <ShieldCheckIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>99% UV Radiation Defense</span>
                          <span className="text-[10px] uppercase font-bold bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-full">Asset Protection</span>
                        </div>
                        <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                          Preserves office furnishings, artwork, and computer screens while reducing glare by 93%.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-300">
                    <span>Warranty: <strong className="text-white">10–15 Yrs (Interior)</strong></span>
                    <Link href="/commercial" className="font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1 transition-colors">
                      View All Specs <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Responsive Commercial Stat Badges Bar */}
        <div className="w-full bg-zinc-950/90 backdrop-blur-md border-t border-white/10">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 text-center text-white">
              <div className="flex flex-col items-center justify-center p-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-400 tracking-tight">30%</span>
                <span className="text-xs sm:text-sm font-medium text-zinc-300 mt-1">HVAC Energy Savings</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-400 tracking-tight">75%</span>
                <span className="text-xs sm:text-sm font-medium text-zinc-300 mt-1">Solar Heat Blocked</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-400 tracking-tight">99%</span>
                <span className="text-xs sm:text-sm font-medium text-zinc-300 mt-1">UV Rays Blocked</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-400 tracking-tight">15-Year</span>
                <span className="text-xs sm:text-sm font-medium text-zinc-300 mt-1">Commercial Warranty</span>
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
