import Image from 'next/image'
import clsx from 'clsx'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import Link from 'next/link'
import Benz from '@/images/vehicles/benz.jpg'
import ServicesPage from './services/page'

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[67vh] w-full">
        <Image
          src={Benz}
          alt="Car on a scenic road"
          layout="fill"
          loading="eager" // Eager loading for hero images
          objectFit="cover"
          priority // Prioritize for faster loading
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizes
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#14223f] to-transparent brightness-50"></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center px-8">
          <div className="text-left">
            <h1 className="mb-4 text-5xl font-extrabold tracking-widest text-white md:text-6xl">
              Premiere Tint Solutions
            </h1>
            <p className="tracking-right mb-4 text-lg text-gray-300 md:text-xl">
              Texas Tint specializes in expert application of high grade tint
              film to enhance the look and comfort of your office, car or truck.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full bg-[#1E90FF] px-6 py-3 text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-600"
              passHref
            >
              Services <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Services */}
      <ServicesPage />
    </>
  )
}

export default HomePage
