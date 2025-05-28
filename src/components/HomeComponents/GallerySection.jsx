import Image from 'next/image';

const galleryImages = [
  {
    src: '/gallery1.jpg',
    alt: 'Paraglider over mountains',
  },
  {
    src: '/gallery2.jpg',
    alt: 'Paraglider in sunset',
  },
  {
    src: '/gallery3.jpg',
    alt: 'Icy mountains and paraglider',
  },
  {
    src: '/gallery4.jpg',
    alt: 'Mountain landscape view',
  },
];

export default function GallerySection() {
  return (
    <section className="bg-white py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-yellow-500">Gallery</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2 mb-4 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore stunning moments captured during our paragliding adventures. Each image tells a
            story of freedom, adventure, and the beauty of flight.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative w-full rounded-lg overflow-hidden shadow-md ${
                index === 2 ? 'md:col-span-2 row-span-2' : ''
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
