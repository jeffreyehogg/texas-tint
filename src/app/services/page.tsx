import Image from 'next/image'
import { Container } from '@/components/Container'
import Logo from '@/images/tint-logo.png'

const services = [
  {
    title: 'Commercial Buildings',
    desc: 'Professionally installed window film addresses issues like high heat, excessive glare, privacy, and UV protection, all while being cost-effective.',
  },
  {
    title: 'Automotive',
    desc: 'Enhance your vehicle with high-grade tint film that offers 99% UV protection, reduces heat, minimizes glare, and comes with a lifetime warranty.',
  },
]

const ServiceItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="mb-6">
    <h3 className="mb-2 text-2xl font-bold text-blue-700">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
)

const ServicesPage = () => {
  return (
    <Container className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-blue-800 dark:text-white">
            Advanced Window Tint Solutions
          </h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
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
      </div>
    </Container>
  )
}

export default ServicesPage
