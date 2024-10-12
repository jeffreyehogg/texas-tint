import Image, { StaticImageData } from 'next/image'

const ImageGrid = ({ photos }: { photos: StaticImageData[] }) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {photos.map((photo) => (
        <li key={photo.src} className="relative">
          <div className="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <Image
              alt={photo.src}
              src={photo}
              layout="fill"
              objectFit="cover"
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ImageGrid
