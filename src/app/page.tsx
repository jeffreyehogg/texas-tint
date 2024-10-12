import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
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
      <section className="relative h-screen overflow-hidden">
        <Image
          src={Benz}
          alt="Luxurious car with scenic backdrop"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14223f] to-transparent"></div>
        <Container className="absolute inset-0 flex items-center justify-start">
          <div className="z-10 max-w-2xl space-y-6 text-left text-white">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              Elevate Your Ride & Space
            </h1>
            <p className="text-lg text-gray-200 sm:text-xl">
              Experience unparalleled privacy, style, and UV protection with
              Texas Tint Plus. Our expert team provides top-tier window tinting
              for all your needs.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-xl transition-colors duration-300 hover:bg-blue-700"
            >
              Discover Our Services{' '}
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Feature Highlights */}
      <div className="bg-gray-50 py-16 dark:bg-gray-800">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-semibold text-blue-600">
                UV Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                99% UV ray rejection to safeguard your skin and interiors.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-semibold text-blue-600">
                Enhanced Privacy
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keep prying eyes out while enjoying your personal space.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-semibold text-blue-600">
                Aesthetic Appeal
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transform your vehicle or building with a sleek, professional
                look.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Logo */}
      <div className="flex justify-center px-4">
        <div className="relative h-72 w-full max-w-lg">
          <Image
            src={Logo}
            alt="Texas Tint Logo"
            layout="fill"
            objectFit="contain"
            className="drop-shadow-xl"
          />
        </div>
      </div>

      {/* Embedded Sections */}
      <ServiceList />
      <div className="pt-16">
        <ContactInfo />
      </div>
    </>
  )
}

export default HomePage
