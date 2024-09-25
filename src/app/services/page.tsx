import { Container } from '@/components/Container'

const ServicesPage = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <h1>Services</h1>

        <p>
          Texas Tint specializes in Commercial building window
          tinting, and Automotive window tinting. Check out our
          services below.
        </p>

        <h2>Commercial Buildings</h2>
        <p>
          We offer a variety of window tinting options for commercial buildings.
          Our window tinting services can help reduce glare, improve energy
          efficiency, and enhance the appearance of your building.
        </p>

    
        <h2>Automotive</h2>
        <p>
        Texas Tint Plus specializes in expert application of high grade automotive tint 
        film to enhance the look and comfort of your car or truck. Our professional grade products 
        offer 99% UVA/UVB protection as well as keeping out heat and reduce glare. Our products come with a lifetime guarantee.
        </p>

        {/* <h3>Paint Protection Film</h3>
        <p>
          Our paint protection film can help protect your Automotive from
          scratches, chips, and other damage. It can also enhance the appearance
          of your car and improve its resale value.
        </p> */}
      </div>
    </Container>
  )
}

export default ServicesPage
