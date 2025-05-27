'use client';

import Image from 'next/image';

export default function OurStory() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/mountain-night-sky.jpg" // Replace with your image path
            alt="Snowy mountains under a starry sky"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2005, GEP Paragliding began with a simple mission: to share the incredible experience of paragliding with the world. What started as a small operation with just two instructors, Rajesh and Vikram, in the stunning valleys of Bir Billing, has grown into India’s premier paragliding destination.
            <br /><br />
            Over the years, we’ve expanded our operations to multiple locations across India, bringing the joy of flight to thousands of adventure seekers. Our team of certified instructors has decades of combined experience, ensuring that every flight is not only exhilarating but also safe.
            <br /><br />
            We’ve trained thousands of pilots and given countless tandem experiences to those looking to touch the sky. Our commitment to safety, quality equipment, and exceptional customer service has made us the trusted choice for paragliding in India.
          </p>
        </div>
      </div>
    </section>
  );
}