import Image from 'next/image'
import clsx from 'clsx'
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Container } from '@/components/Container'
import Link from 'next/link'
import Logo from '@/images/tint-logo.png'
import Benz from '@/images/vehicles/benz.jpg';

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[67vh]">
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
        
        <div className="absolute inset-0 z-20 flex justify-center items-center px-8">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest text-white mb-4">
              Premiere Window Tint Solutions
            </h1>
            <p className="text-lg tracking-right md:text-xl text-gray-300 mb-4">
            Texas Tint specializes in expert application of high grade tint film to enhance the look and comfort of your office, car or truck.
            </p>
            <Link href="/services" className="bg-[#1E90FF] text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out inline-flex items-center" passHref>
                Services  <ChevronRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* About Us */}
      <Container className="py-20">
        <div className='flex flex-col lg:flex-row p-2 lg:p-8'>
          <div className="text-center lg:w-2/3">
            <h2 className="text-5xl md:text-5xl font-bold tracking-wide dark:text-[#d9ab69] mb-8">
              At Texas Tint
            </h2>
            <div className="text-zinc-600 dark:text-zinc-400 space-y-8">
              {[
                { title: "Expect quality", desc: "We choose quality vehicles to ensure your drive is as wonderful as your journey." },
                { title: "Tailored convenience", desc: "We ensure flexibile services with delivery and pickup options." },
                { title: "Hospitality you expect", desc: "With us, every trip handled with the best service in mind." }
              ].map((item, index) => (
                <div className="text-left" key={index}>
                  <h3 className="text-3xl font-bold md:textxl text-black tracking-wide mb-2">{item.title}</h3>
                  <p className="text-zinc-600 text-md md:text-xl tracking-wide">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-24 lg:mt-16 flex justify-center">
            <div className="relative h-52 w-36 lg:h-72 lg:w-56">
              <Image
                src={Logo}
                alt="Texas Tint Logo"
                layout="fill"
                priority
                objectFit="contain"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
      
            {/* Business Solutions */}
      <Container className="bg-[#14223f] text-white pb-12 p-1">
        {/* <BusinessSolutionsPage /> */}
      </Container>  

      {/* Contact */}
      <Container className="pb-12">
        {/* <ContactPage /> */}
      </Container>

      {/* Testimonials */}
      <Container className="bg-gray-200 py-12">
        {/* <Testimonials /> */}
      </Container>



    </>
  );
};

const Home = async () => {
  return (
    <>
      <Container className="mt-9">
        <div className="mb-6 mt-24 flex w-full justify-center rounded-full bg-white p-2">
          <Image
            src={Logo}
            alt="Texas Tint"
            width={600}
            height={600}
            unoptimized
          />
        </div>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Texas Tint LLC is located in The Woodlands, Texas. We specialize in
          commercial and residential building window tinting, paint protection
          film, and car window tinting. We offer a variety of window tinting
          options for commercial and residential buildings, as well as cars,
          trucks, and SUVs. Our window tinting services can help reduce glare,
          improve energy efficiency, protect your interior from fading, and
          enhance the appearance of your building or vehicle. We also offer
          paint protection film to help protect your vehicle from scratches,
          chips, and other damage. Our team of experienced professionals is
          dedicated to providing high-quality products and exceptional service
          to our customers. Contact us for a free quote or to schedule an
          appointment.
        </p>
        <div className="mt-12">
          <button
            type="button"
            className={clsx(
              'inline-flex items-center justify-center rounded-md border border-transparent bg-[#00205A] px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700',
              'focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2',
            )}
          >
            <Link href="/services">Learn More</Link>
            <svg
              className="-mr-1 ml-2 h-6 w-6 flex-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </Container>
    </>
  )
}

export default HomePage
