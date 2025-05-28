import Image from 'next/image';
import { FaCheckCircle, FaMountain, FaClock, FaUserFriends } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 pt-35 py-12 px-4 sm:px-6 lg:px-20">
      {/* Custom container-like wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Experience the <span className="text-yellow-400">Freedom</span> of Flight
            </h1>
            <p className="text-white mt-4 text-base sm:text-lg">
              Discover the thrill of paragliding with India's premier paragliding destination.
              Professional training, breathtaking views, and unforgettable experiences await you.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition">
                Book Your Flight
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition">
                Explore Courses
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/paragliding.jpg"
              alt="Paragliding"
              width={500}
              height={300}
              className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          <Feature
            icon={<FaCheckCircle size={24} />}
            title="Certified Trainers"
            desc="Learn from internationally certified paragliding professionals"
          />
          <Feature
            icon={<FaMountain size={24} />}
            title="Scenic Locations"
            desc="Fly over breathtaking landscapes and mountain views"
          />
          <Feature
            icon={<FaClock size={24} />}
            title="Safety First"
            desc="Top-tier equipment and rigorous safety protocols"
          />
          <Feature
            icon={<FaUserFriends size={24} />}
            title="5000+ Happy Flyers"
            desc="Join thousands who’ve experienced the thrill with us"
          />
        </div>
      </div>
    </section>
  );
}

// Reusable Feature Card Component
const Feature = ({ icon, title, desc }) => (
  <div className="bg-white/10 p-5 rounded-xl backdrop-blur-md text-white shadow-md">
    <div className="mb-2 text-yellow-300">{icon}</div>
    <h3 className="font-bold mb-1 text-base sm:text-lg">{title}</h3>
    <p className="text-sm">{desc}</p>
  </div>
);
