'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function PhotoGallery() {
  const photos = [
    {
      src: '/images/paraglider-mountains.jpg',
      alt: 'Paraglider over mountains with sun rays',
      width: 200,
      height: 200,
    },
    {
      src: '/images/paraglider-sunset.jpg',
      alt: 'Paraglider silhouette during sunset',
      width: 200,
      height: 200,
    },
    {
      src: '/images/mountain-view.jpg',
      alt: 'Mountain landscape view from paraglider perspective',
      width: 400,
      height: 200,
    },
    {
      src: '/images/equipment-setup.jpg',
      alt: 'Paragliding equipment and gear setup',
      width: 200,
      height: 200,
    },
    {
      src: '/images/training-session.jpg',
      alt: 'Paragliding training session on hillside',
      width: 200,
      height: 200,
    },
    {
      src: '/images/multiple-paragliders.jpg',
      alt: 'Multiple paragliders soaring together in blue sky',
      width: 400,
      height: 200,
    },
    {
      src: '/images/cityscape.jpg',
      alt: 'Cityscape view from above',
      width: 200,
      height: 200,
    },
    {
      src: '/images/pilot-training.jpg',
      alt: 'Pilot during training session',
      width: 200,
      height: 200,
    },
    {
      src: '/images/sunset-landscape.jpg',
      alt: 'Sunset landscape with paraglider',
      width: 200,
      height: 200,
    },
    {
      src: '/images/ocean-view.jpg',
      alt: 'Ocean and mountain view from paraglider',
      width: 200,
      height: 200,
    },
    {
      src: '/images/snowy-mountains.jpg',
      alt: 'Snowy mountains from paraglider perspective',
      width: 200,
      height: 200,
    },
    {
      src: '/images/pilot-preparation.jpg',
      alt: 'Pilot preparing for flight',
      width: 200,
      height: 200,
    },
    {
      src: '/images/night-sky.jpg',
      alt: 'Night sky with lightning and paraglider',
      width: 200,
      height: 200,
    },
    {
      src: '/images/valley-forest.jpg',
      alt: 'Green valley and forest seen from above',
      width: 400,
      height: 200,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Photo Gallery
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-700 mb-8">
          Browse through moments of pure joy and breathtaking views from
          paragliding adventures. Click on any image to view in full size.
        </p>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity">
                <p className="text-white text-sm opacity-0 hover:opacity-100">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl w-full p-4">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}