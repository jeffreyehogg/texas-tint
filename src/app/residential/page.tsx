import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import HomeImage from '@/images/home.jpg'
import { CheckCircleIcon, ShieldCheckIcon, SunIcon, EyeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Residential Window Tinting | Texas Tint Plus',
  description: 'Expert residential window tinting for Houston homes. Improve energy savings, protect furnishings from UV rays, and enhance your home\'s privacy and comfort.',
}

export default function ResidentialPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center">
        <Image
          src={HomeImage}
          alt="Beautiful home in Houston with tinted windows"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-zinc-900/60" />
        <Container className="relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Home Comfort & Energy Savings
            </h1>
            <p className="text-lg text-zinc-200 sm:text-xl mb-10">
              Premium residential window tinting. Lower your energy bills, reduce glare, and protect your family and furnishings with our advanced films.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors"
            >
              Contact Us for a Home Estimate
            </Link>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Benefits of Home Window Tinting
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl">
              <SunIcon className="h-12 w-12 text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Energy Savings</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Block solar heat and keep your home cooler in the Houston summer, reducing AC costs.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl">
              <ShieldCheckIcon className="h-12 w-12 text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">UV Protection</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Block 99% of harmful UV rays to prevent fading of furniture, floors, and artwork.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl">
              <EyeIcon className="h-12 w-12 text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Privacy & Glare</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Enjoy natural light without the harsh glare, and enhance daytime privacy for your family.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl">
              <CheckCircleIcon className="h-12 w-12 text-brand-600 dark:text-brand-400 mb-4" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Curb Appeal</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Give your home a sleek, uniform exterior look while adding a layer of security.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Film Options Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Our Residential Film Options
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              We offer a variety of high-quality films to suit your specific home needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">Solar Control Films</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Designed primarily to block heat and UV rays, these films come in various shades from virtually clear to highly reflective, keeping your home comfortable year-round.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">Decorative & Privacy</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Perfect for bathrooms, front doors, and glass partitions. Options include frosted, etched, and patterned films that let light in while keeping prying eyes out.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">Security & Safety</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Thicker films designed to hold shattered glass together in the event of an impact, severe weather, or break-in attempt, providing peace of mind for your family.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
