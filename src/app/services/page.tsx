import { Container } from '@/components/Container'

const ServicesPage = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <h1>Services</h1>

        <p>
          Texas Tint specializes in commercial and residential building window
          tinting, paint protection film, and car window tinting. Check out our
          services below.
        </p>

        <h2>Commercial Building Window Tinting</h2>
        <p>
          We offer a variety of window tinting options for commercial buildings.
          Our window tinting services can help reduce glare, improve energy
          efficiency, and enhance the appearance of your building.
        </p>

        <h2>Residential Building Window Tinting</h2>
        <p>
          Our residential window tinting services can help reduce heat and
          glare, protect your furniture and flooring from fading, and enhance
          the privacy and security of your home.
        </p>

        <h2>Paint Protection Film</h2>
        <p>
          Our paint protection film can help protect your vehicle from
          scratches, chips, and other damage. It can also enhance the appearance
          of your car and improve its resale value.
        </p>

        <h2>Car Window Tinting</h2>
        <p>
          We offer a variety of window tinting options for cars, trucks, and
          SUVs. Our car window tinting services can help reduce heat and glare,
          protect your interior from fading, and enhance the appearance of your
          vehicle.
        </p>
      </div>
    </Container>
  )
}

export default ServicesPage
