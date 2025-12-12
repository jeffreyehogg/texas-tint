import Image, { StaticImageData } from 'next/image'
import Container from '@/components/Container'
import ImageGrid from '@/components/ImageGrid'
import tesla from '@/images/vehicles/tesla.jpg'
import cybertruck from '@/images/vehicles/cyber-truck.jpg'
import c300 from '@/images/vehicles/c300.jpg'
import building from '@/images/building.jpg'
import home from '@/images/home.jpg'

const services = [
  {
    title: 'Commercial & Residential',
    desc: 'Professionally installed window film addresses issues like high heat, excessive glare, privacy, and UV protection, all while being cost-effective.',
    photos: [building, home],
  },
  {
    title: 'Automotive Tinting',
    desc: 'Enhance your vehicle with high-grade tint film that offers 99% UV protection, reduces heat, minimizes glare, and comes with a lifetime warranty.',
    photos: [tesla, cybertruck, c300],
  },
]

const ServiceItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="max-w-3xl">
    <h3 className="text-3xl font-bold text-brand-700 dark:text-brand-400">
      {title}
    </h3>
    <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
      {desc}
    </p>
  </div>
)

export const ServiceList = () => (
  <Container>
    <div className="flex flex-col gap-20">
      <div className="text-center lg:text-left">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Advanced Window <span className="text-brand-600">Solutions</span>
        </h2>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
          Explore our premium services designed for every glass surface.
        </p>
      </div>

      <div className="space-y-24">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-8 border-t border-gray-100 pt-16 dark:border-gray-800">
            <ServiceItem title={service.title} desc={service.desc} />
            <ImageGrid photos={service.photos} />
          </div>
        ))}
      </div>
    </div>
  </Container>
)