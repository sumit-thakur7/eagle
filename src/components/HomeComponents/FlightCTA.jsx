import Link from "next/link";

// components/FlightCTA.jsx
export default function FlightCTA() {
  return (
    <div className="bg-gradient-to-r from-gray-400 to-gray-200 py-20 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Experience the Thrill of Flight?
      </h2>
      <p className="text-white text-lg max-w-2xl mx-auto mb-2">
        Join thousands of adventure seekers who have discovered the freedom of paragliding with us.
      </p>
      <p className="text-white text-lg max-w-2xl mx-auto mb-8">
        Book your adventure today and create memories that will last a lifetime.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/booking"
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Book Your Flight
        </Link>

        <Link
          href="/contact"
          className="border border-white hover:bg-white hover:text-gray-800 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
}
