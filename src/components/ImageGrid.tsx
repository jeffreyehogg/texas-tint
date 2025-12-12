import Image, { StaticImageData } from 'next/image'

const ImageGrid = ({ photos }: { photos: StaticImageData[] }) => {
  return (
    <div className="mt-8">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {photos.map((photo, index) => (
          <li 
            key={index} 
            className="group relative block w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl"
          >
            {/* 16:9 Aspect Ratio for a cinematic car look */}
            <div className="aspect-h-9 aspect-w-16 relative">
              <Image
                alt="Service example"
                src={photo}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageGrid