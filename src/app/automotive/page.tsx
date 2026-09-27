import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'

// Vehicle Assets
import Benz from '@/images/vehicles/benz.jpg'
import Tesla from '@/images/vehicles/tesla.jpg'
import CyberTruck from '@/images/vehicles/cyber-truck.jpg'
import C300 from '@/images/vehicles/c300.jpg'

// XPEL Brand Assets
import XpelLogo from '@/images/brands/xpel-logo.webp'
import PrimeXr from '@/images/brands/prime-xr.webp'
import PrimeCs from '@/images/brands/prime-cs.webp'

// Icons
import {
  ShieldCheckIcon,
  SunIcon,
  SparklesIcon,
  CheckCircleIcon,
  PhoneIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  SignalIcon,
  ArrowRightIcon,
  StarIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'XPEL Certified Automotive Window Tinting | Texas Tint Plus Houston',
  description:
    'Houston&apos;s Authorized XPEL window film dealer. Protect your vehicle with XPEL PRIME XR PLUS, PRIME XR, HP, and CS ceramic packages. Up to 96% IR heat rejection and transferable lifetime warranty.',
}

export default function AutomotivePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Hero Section */}
      <section className="relative min-h-[640px] lg:min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image
          src={Tesla}
          alt="Tesla with XPEL ceramic window tint installed in Houston, Texas"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />

        <Container className="relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            {/* Authorized XPEL Badge */}
            <div className="inline-flex items-center gap-3 rounded-full bg-zinc-900/90 border border-zinc-700/80 px-4 py-2 shadow-2xl backdrop-blur-md mb-8">
              <div className="flex items-center justify-center bg-white rounded-md px-2 py-0.5 h-6">
                <Image
                  src={XpelLogo}
                  alt="Authorized XPEL Window Film Dealer"
                  width={46}
                  height={20}
                  className="h-4 w-auto object-contain"
                />
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-200 sm:text-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Authorized XPEL Installer</span>
                <span className="text-zinc-500">•</span>
                <span className="text-brand-400">Houston, TX</span>
              </div>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-tight">
              Factory-Certified XPEL Automotive Window Film
            </h1>
            <p className="text-lg text-zinc-300 sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Defend your vehicle against extreme Texas heat. Experience up to 96% infrared heat rejection, 99% UV protection, and crystal-clear optical clarity backed by a nationwide transferable lifetime warranty.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all duration-200 hover:scale-[1.02]"
              >
                Book Your Tint Appointment
              </Link>
              <a
                href="tel:8323635100"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <PhoneIcon className="h-5 w-5 text-brand-400" />
                <span>Call (832) 363-5100</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-brand-400">96%</div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1">Max IR Heat Block</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-brand-400">99%</div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1">UV Ray Defense</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-brand-400">100%</div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1">Signal Friendly</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-brand-400">Lifetime</div>
                <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1">Transferable Warranty</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. XPEL Tint Packages Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-800 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
              Authentic XPEL Film Lineup
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Certified XPEL Window Film Packages
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Engineered for extreme performance under the Texas sun. Compare our four certified XPEL window film packages to find the ideal balance of heat rejection, optical clarity, and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Card 1: XPEL PRIME XR PLUS (Flagship) */}
            <div className="flex flex-col rounded-3xl bg-white dark:bg-zinc-900 p-6 sm:p-7 border-2 border-brand-500 dark:border-brand-500 shadow-xl relative ring-4 ring-brand-500/10">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-brand-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                Most Popular in Texas
              </div>

              {/* Brand Badge */}
              <div className="flex items-center justify-between h-14 bg-white rounded-xl px-4 py-2 border border-zinc-200 shadow-xs mb-5">
                <div className="relative h-8 w-28">
                  <Image
                    src={PrimeXr}
                    alt="XPEL PRIME XR PLUS Flagship Nano-Ceramic Film Badge"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded">
                  XR PLUS
                </span>
              </div>

              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  Flagship Nano-Ceramic
                </span>
                <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1">
                  XPEL PRIME XR PLUS
                </h3>
              </div>

              {/* Heat Metric Callout */}
              <div className="my-4 p-4 rounded-2xl bg-brand-50/70 dark:bg-brand-950/40 border border-brand-100 dark:border-brand-900/40">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-800 dark:text-brand-300">
                  Infrared Heat Rejection
                </div>
                <div className="text-3xl font-black text-brand-600 dark:text-brand-400 mt-1">
                  Up to 96%
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                  99% UV Block • SPF 1,000+ Protection
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
                The ultimate in automotive heat rejection. Multi-layer nano-ceramic technology blocks scorching infrared rays without interfering with 5G, cell phones, GPS, or keyless entry signals.
              </p>

              <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-3">
                  Package Performance:
                </h4>
                <ul className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Up to 96% infrared heat rejection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>99% UV protection (Skin Cancer Foundation Seal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Nano-ceramic multilayer construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Zero cellular, GPS, or toll pass interference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Nationwide transferable lifetime warranty</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/quote"
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-bold bg-brand-600 hover:bg-brand-500 text-white shadow-md hover:shadow-brand-500/20 transition-all duration-200"
              >
                Choose PRIME XR PLUS
              </Link>
            </div>

            {/* Card 2: XPEL PRIME XR (Ceramic) */}
            <div className="flex flex-col rounded-3xl bg-white dark:bg-zinc-900 p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800 shadow-sm relative">
              {/* Brand Badge */}
              <div className="flex items-center justify-between h-14 bg-white rounded-xl px-4 py-2 border border-zinc-200 shadow-xs mb-5">
                <div className="relative h-8 w-28">
                  <Image
                    src={PrimeXr}
                    alt="XPEL PRIME XR Nano-Ceramic Film Badge"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded">
                  CERAMIC
                </span>
              </div>

              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Premium Ceramic
                </span>
                <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1">
                  XPEL PRIME XR
                </h3>
              </div>

              {/* Heat Metric Callout */}
              <div className="my-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Infrared Heat Rejection
                </div>
                <div className="text-3xl font-black text-zinc-900 dark:text-white mt-1">
                  Up to 88%
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                  99% UV Block • Advanced Heat Defense
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
                High-performance nano-ceramic film that pairs strong infrared heat rejection with flawless optical clarity. Keeps your vehicle significantly cooler with no electronic disruption.
              </p>

              <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-3">
                  Package Performance:
                </h4>
                <ul className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Up to 88% infrared heat rejection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>99% UV protection against interior sun rot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Flawless optical clarity day & night</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Non-metallic construction protects signals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Nationwide transferable lifetime warranty</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/quote"
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
              >
                Choose PRIME XR
              </Link>
            </div>

            {/* Card 3: XPEL PRIME HP (Hybrid) */}
            <div className="flex flex-col rounded-3xl bg-white dark:bg-zinc-900 p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800 shadow-sm relative">
              {/* Brand Badge */}
              <div className="flex items-center justify-between h-14 bg-white rounded-xl px-4 py-2 border border-zinc-200 shadow-xs mb-5">
                <div className="relative h-7 w-20">
                  <Image
                    src={XpelLogo}
                    alt="XPEL PRIME HP Badge"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider text-zinc-900 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded">
                  PRIME HP™
                </span>
              </div>

              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Hybrid Metal-Dye
                </span>
                <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1">
                  XPEL PRIME HP
                </h3>
              </div>

              {/* Heat Metric Callout */}
              <div className="my-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Infrared Heat Rejection
                </div>
                <div className="text-3xl font-black text-zinc-900 dark:text-white mt-1">
                  Up to 32%
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                  99% UV Block • Performance & Value
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
                Hybrid dye-metal construction that elevates heat reduction well beyond standard dyed films, offering a distinctive charcoal finish at an exceptional value.
              </p>

              <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-3">
                  Package Performance:
                </h4>
                <ul className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Up to 32% infrared heat rejection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>99% UV radiation block for upholstery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Hybrid metal-dye matrix for durability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Sleek charcoal appearance and glare reduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>XPEL nationwide lifetime warranty</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/quote"
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
              >
                Choose PRIME HP
              </Link>
            </div>

            {/* Card 4: XPEL PRIME CS (Color-Stable) */}
            <div className="flex flex-col rounded-3xl bg-white dark:bg-zinc-900 p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800 shadow-sm relative">
              {/* Brand Badge */}
              <div className="flex items-center justify-between h-14 bg-white rounded-xl px-4 py-2 border border-zinc-200 shadow-xs mb-5">
                <div className="relative h-8 w-28">
                  <Image
                    src={PrimeCs}
                    alt="XPEL PRIME CS Color-Stable Film Badge"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded">
                  COLOR-STABLE
                </span>
              </div>

              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Color-Stable Dye
                </span>
                <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1">
                  XPEL PRIME CS
                </h3>
              </div>

              {/* Heat Metric Callout */}
              <div className="my-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Infrared Heat Rejection
                </div>
                <div className="text-3xl font-black text-zinc-900 dark:text-white mt-1">
                  Up to 12%
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                  99% UV Block • Never Turns Purple
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
                Advanced dye technology that delivers timeless privacy, glare reduction, and UV protection. Guaranteed never to turn purple, crack, or bubble over the life of your vehicle.
              </p>

              <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-3">
                  Package Performance:
                </h4>
                <ul className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Blocks up to 12% infrared heat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>99% UV protection for skin & upholstery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Guaranteed never to turn purple or bubble</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>Deep neutral black OEM appearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>XPEL nationwide lifetime warranty</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/quote"
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
              >
                Choose PRIME CS
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. The XPEL Technology & Precision Advantage */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Why Choose XPEL Window Film?
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Manufactured with proprietary ceramic nano-technology and installed with computer-cut precision for flawless results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
              <SunIcon className="h-10 w-10 text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                Extreme Texas Heat Block
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                XPEL multi-layer ceramic technology targets and deflects infrared heat, keeping vehicle cabins dramatically cooler during 100°+ Houston summers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
              <SignalIcon className="h-10 w-10 text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                100% Signal Friendly
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Zero metallic interference. Your 5G cellular signal, GPS navigation, satellite radio, radar detectors, and EZ TAG toll passes will never be interrupted.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
              <WrenchScrewdriverIcon className="h-10 w-10 text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                Computer-Cut Precision (DAP)
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Patterns are pre-cut by computer software to exact millimeter specifications. Zero razor blades ever touch your vehicle&apos;s glass or rubber seals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
              <ShieldCheckIcon className="h-10 w-10 text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                Transferable Lifetime Warranty
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Guaranteed against peeling, bubbling, cracking, or color degradation. Backed by XPEL and honored at thousands of authorized dealers nationwide.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Vehicle Wraps & Paint Protection Callout Section */}
      <section className="py-24 bg-zinc-100 dark:bg-zinc-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-800 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
              Comprehensive Automotive Services
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Paint Protection Film & Commercial Fleet Wraps
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Protect your personal investment with self-healing clear bra technology or turn your company vehicles into 24/7 mobile billboards across Houston.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature 1: XPEL ULTIMATE PLUS Paint Protection */}
            <div className="flex flex-col justify-between rounded-3xl bg-white dark:bg-zinc-900 p-8 sm:p-10 border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    <SparklesIcon className="h-4 w-4" />
                    Self-Healing PPF
                  </span>
                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    10-Year Factory Warranty
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
                  XPEL ULTIMATE PLUS™ Paint Protection Film
                </h3>
                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Houston freeways are unforgiving on front bumpers and hoods. XPEL ULTIMATE PLUS™ is an advanced elastomeric polyurethane film that shields vulnerable factory paint against high-speed rock chips, highway gravel, bug splatter, bird droppings, and abrasive road debris.
                </p>

                <div className="space-y-3 mb-8 text-sm text-zinc-700 dark:text-zinc-300">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900 dark:text-zinc-100">Self-Healing Clear Coat:</strong> Light swirl marks and scratches disappear automatically under engine heat or sunlight.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900 dark:text-zinc-100">Mirror-Like Clarity:</strong> Virtually invisible protection that elevates depth without orange peel texture.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900 dark:text-zinc-100">Custom Coverage Packages:</strong> Available in Partial Front, Full Front Track Pack, or Full Vehicle Wraps.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-600 hover:bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200"
                >
                  <span>Request PPF Estimate</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  Factory-Certified XPEL Installers
                </span>
              </div>
            </div>

            {/* Feature 2: Commercial Vehicle & Fleet Wraps */}
            <div className="flex flex-col justify-between rounded-3xl bg-white dark:bg-zinc-900 p-8 sm:p-10 border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-800 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
                    <TruckIcon className="h-4 w-4" />
                    Commercial Fleet Wraps
                  </span>
                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    High-Durability Cast Vinyl
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
                  Commercial Vehicle & Fleet Wraps
                </h3>
                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Transform your service vans, pickup trucks, box trucks, and commercial trailers into high-impact mobile advertisements. Texas Tint designs, prints, and installs commercial-grade wraps engineered to withstand intense Houston heat while building continuous local brand recognition.
                </p>

                <div className="space-y-3 mb-8 text-sm text-zinc-700 dark:text-zinc-300">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900 dark:text-zinc-100">Premium 3M & XPEL Vinyl:</strong> Long-lasting UV laminate resists fading, cracking, and weather degradation.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900 dark:text-zinc-100">Versatile Branding:</strong> Full wraps, partial wraps, contour decals, door logos, and perforated window vision.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900 dark:text-zinc-100">Minimal Fleet Downtime:</strong> Efficient turnaround to get your service vehicles back generating revenue.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 px-6 py-3 text-sm font-semibold transition-all duration-200"
                >
                  <span>Request Fleet Wrap Quote</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  Volume Fleet Discounts Available
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Recent Projects Gallery */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-800 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
                Precision Craftsmanship
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                Recent Automotive Projects
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                A showcase of recent ceramic tint installations on luxury, electric, and performance vehicles at our Houston studio.
              </p>
            </div>
            <div className="mt-6 sm:mt-0">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-brand-400 hover:text-brand-500"
              >
                <span>Book your vehicle</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Project 1: Mercedes Benz */}
            <div className="group relative rounded-3xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-900 aspect-[4/3]">
              <Image
                src={Benz}
                alt="Mercedes-Benz with XPEL PRIME XR PLUS ceramic window tint"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute top-3 right-3 bg-zinc-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                XPEL PRIME XR PLUS
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base font-bold text-white">Mercedes-Benz S-Class</h3>
                <p className="text-xs text-zinc-300 mt-0.5">
                  15% ceramic heat barrier with maximum solar IR rejection.
                </p>
              </div>
            </div>

            {/* Project 2: Tesla Cybertruck */}
            <div className="group relative rounded-3xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-900 aspect-[4/3]">
              <Image
                src={CyberTruck}
                alt="Tesla Cybertruck with XPEL window film"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute top-3 right-3 bg-zinc-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                XPEL Ceramic
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base font-bold text-white">Tesla Cybertruck</h3>
                <p className="text-xs text-zinc-300 mt-0.5">
                  Full cabin ceramic shield and roof UV defense package.
                </p>
              </div>
            </div>

            {/* Project 3: Mercedes C300 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-900 aspect-[4/3]">
              <Image
                src={C300}
                alt="Mercedes C300 with XPEL PRIME XR window tinting"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute top-3 right-3 bg-zinc-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                XPEL PRIME XR
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base font-bold text-white">Mercedes-Benz C300</h3>
                <p className="text-xs text-zinc-300 mt-0.5">
                  88% IR heat reduction with factory charcoal optical clarity.
                </p>
              </div>
            </div>

            {/* Project 4: Tesla Model 3 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-900 aspect-[4/3]">
              <Image
                src={Tesla}
                alt="Tesla Model 3 with XPEL automotive ceramic tint"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute top-3 right-3 bg-zinc-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                XPEL PRIME XR PLUS
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base font-bold text-white">Tesla Model 3</h3>
                <p className="text-xs text-zinc-300 mt-0.5">
                  Complete heat barrier reducing HVAC battery draw.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Texas Window Tint Law & FAQ */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Clear answers regarding Texas state tint regulations, heat performance, and our certified installation process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                What are the legal window tint limits in Texas?
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Texas law allows a minimum visible light transmission (VLT) of 25% on the driver and front passenger windows. Rear side windows and back windshields may be tinted to any shade (including 5% limo tint). Windshields may have non-reflective tint along the top AS-1 line or top 5 inches.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                Will ceramic tint interfere with my phone or toll tag?
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                No. XPEL PRIME XR and XR PLUS use proprietary non-metallic nano-ceramic particles. They are 100% transparent to radio frequencies, meaning zero signal interference with 5G cellular, GPS, EZ TAG, radar detectors, keyless fobs, or satellite radio.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                How long does automotive tint installation take?
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Most full vehicle tint installations take between 2 to 3 hours. Because we use XPEL DAP computer-cut patterns, every piece is precision-cut before touching your vehicle, ensuring a fast, flawless, bubble-free finish.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                What does the XPEL Lifetime Warranty cover?
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                XPEL films are backed by a nationwide transferable lifetime warranty protecting against peeling, bubbling, delaminating, cracking, and color change. Should you ever encounter an issue, the warranty is honored by any authorized XPEL installer in the USA.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Final Call to Action Section */}
      <section className="bg-brand-700 dark:bg-brand-900 text-white relative isolate overflow-hidden">
        <Container>
          <div className="px-6 py-20 sm:py-28 lg:px-8 text-center max-w-3xl mx-auto">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-brand-100 text-xs font-semibold mb-6">
              <StarIcon className="h-4 w-4 text-brand-300" />
              <span>Houston&apos;s Trusted XPEL Installation Center</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl leading-tight">
              Ready for a Cooler, More Comfortable Ride?
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-brand-100 leading-relaxed">
              Stop suffering through brutal Texas heat. Reserve your automotive window tint appointment today or speak directly with our certified XPEL specialists.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-brand-900 shadow-xl hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-[1.02]"
              >
                Book Tint Appointment
              </Link>
              <a
                href="tel:8323635100"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-800/80 hover:bg-brand-800 px-8 py-4 text-base font-bold text-white border border-brand-400/40 shadow-sm transition-all duration-200"
              >
                <PhoneIcon className="h-5 w-5 text-brand-300" />
                <span>Call (832) 363-5100</span>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-brand-200">
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="h-4 w-4 text-brand-300" />
                Authorized XPEL Installer
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="h-4 w-4 text-brand-300" />
                Computer-Cut Precision (XPEL DAP)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="h-4 w-4 text-brand-300" />
                Transferable Lifetime Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="h-4 w-4 text-brand-300" />
                Houston, TX Studio
              </span>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
