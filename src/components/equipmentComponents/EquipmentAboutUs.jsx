'use client';

import Image from 'next/image';

export default function EquipmentAboutUs() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">About Us</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-700 mb-8">
          Learn more about our passion for paragliding and our commitment to
          providing safe, unforgettable experiences in the skies.
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Soaring Dreams Since 2010
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              GEP Paragliding was founded in 2010 with a mission to make the
              exhilarating sport of paragliding accessible to everyone. Based in
              the stunning Bir Billing, Himachal Pradesh – often referred to as
              the paragliding capital of India – we’ve grown into a trusted name
              for both beginners and seasoned pilots.
            </p>
            <p className="text-gray-700 text-sm mb-4">
              Our team of certified instructors brings decades of collective
              experience, ensuring that every flight and training session is safe,
              educational, and thrilling. We pride ourselves on offering a range
              of services, from tandem flights for first-timers to advanced pilot
              certification courses.
            </p>
            <p className="text-gray-700 text-sm">
              At GEP, we believe in creating memories that last a lifetime.
              Whether you're chasing the thrill of your first flight or aiming to
              master the skies, we’re here to guide you every step of the way.
            </p>
          </div>
          <div>
            <Image
              src="/images/paraglider-mountains.jpg" // Replace with your image path
              alt="Paraglider soaring over mountains"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}