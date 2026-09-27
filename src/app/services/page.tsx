import { type Metadata } from 'next'
import Container from '@/components/Container'
import { ServiceList } from './ServiceList'

export const metadata: Metadata = {
  title: 'Window Tinting Services',
  description:
    'Explore Texas Tint Plus window tinting services in Houston, TX. Commercial solar films, security films, residential tinting, and premium automotive ceramic tints. Free estimates available.',
}

const ServicesPage = () => {
  return (
    <Container className="py-24 lg:py-32">
      <ServiceList />
    </Container>
  )
}

export default ServicesPage
