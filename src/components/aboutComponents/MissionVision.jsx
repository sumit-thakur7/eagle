'use client';

import Image from 'next/image';

export default function MissionVision() {
  const content = [
    {
      title: 'Our Mission',
      description:
        'To provide safe, professional, and unforgettable paragliding experiences while promoting the sport in India and around the world. We aim to inspire a love for flight and adventure in everyone who visits us.',
    },
    {
      title: 'Our Vision',
      description:
        "To be the world’s most trusted paragliding training center and to make the joy of flight accessible to everyone. We envision a future where paragliding is recognized as a safe and accessible adventure sport for all.",
    },
    {
      title: 'Our Values',
      description:
        'Safety, excellence, environmental responsibility, and a passion for sharing the freedom of flight with others. We believe in creating a supportive community where people can discover the joy of paragliding in a responsible way.',
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Mission & Vision
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <div className="flex justify-center items-center gap-2 mb-8">
          <Image
            src="/images/paraglider-icon.png" // Replace with your icon path
            alt="Paraglider icon"
            width={24}
            height={24}
            className="object-contain"
          />
          <p className="text-gray-700 italic">
            Guided by our core values, we strive to make paragliding accessible,
            safe, and unforgettable for everyone.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-left"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}