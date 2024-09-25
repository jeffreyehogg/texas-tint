import Image from 'next/image'
import { Container } from '@/components/Container'
import Logo from '@/images/tint-logo.png'

const ServicesPage = () => {
  return (
    <Container className="py-20">
      <div className="flex flex-col p-2 lg:flex-row lg:p-8">
        <div className="text-center lg:w-2/3">
          <h2 className="mb-8 text-5xl font-bold tracking-wide md:text-5xl dark:text-white">
            Window Tint Solutions
          </h2>
          <div className="space-y-8 text-black dark:text-white">
            {[
              {
                title: 'Commercial buildings',
                desc: 'Professionally installed window film is a simple, cost-effective solution for a wide range of window-related problems such as high heat, excessive glare, lack of privacy, and exposure to harmful UV rays',
              },
              {
                title: 'Automotive',
                desc: 'high grade automotive tint film to enhance the look and comfort of your car or truck. Our professional grade products offer 99% UVA/UVB protection as well as keeping out heat and reduce glare. Our products come with a lifetime guarantee.',
              },
            ].map((item, index) => (
              <div className="text-left" key={index}>
                <h3 className="md:textxl mb-2 text-3xl font-bold tracking-wide">
                  {item.title}
                </h3>
                <p className="text-md tracking-wide md:text-xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center lg:ml-24 lg:mt-16">
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
  )
}

export default ServicesPage
