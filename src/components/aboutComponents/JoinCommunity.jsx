'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function JoinCommunity() {
  return (
    <section className="py-12 px-4 bg-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join Our Paragliding Community
        </h2>
        <p className="text-gray-700 mb-6">
          Whether you’re looking for your first flight experience or want to
          become a certified pilot, we’re here to guide you on your paragliding
          journey.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <Link
            href="/book"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Book Your Adventure
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-gray-400 hover:bg-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-full transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Paraglider Icon */}
        <Image
          src="/images/paraglider-icon.png" // Replace with your icon path
          alt="Paraglider icon"
          width={48}
          height={48}
          className="mx-auto object-contain"
        />
      </div>
    </section>
  );
}