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
    <p className="text-gray-600 dark:text-gray-300">{desc}</p>
  </div>
)

export const ServiceList = () => (
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
)
