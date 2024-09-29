import Image from 'next/image'
import Container from '@/components/Container'
import Logo from '@/images/tint-logo.png'
import { ServiceList } from './ServiceList'

const ServicesPage = () => {
  return (
    <Container className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Text Content */}
        <ServiceList />

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
