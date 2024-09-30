import { type Metadata } from 'next'
import Container from '@/components/Container'
import { ContactInfo } from './ContacInfo'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Texas Tint specializes in commercial and residential building window tinting, paint protection film, and car window tinting. Contact us for a free quote or to schedule an appointment.',
}

const ContactPage = () => {
  return (
    <Container className="py-24 lg:py-32">
      <ContactInfo />
    </Container>
  )
}

export default ContactPage
