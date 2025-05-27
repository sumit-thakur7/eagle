// src/components/Hero.jsx
import Image from 'next/image';
import { FaCheckCircle, FaMountain, FaClock, FaUserFriends } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 py-12 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Experience the <span className="text-yellow-400">Freedom</span> of Flight
          </h1>
          <p className="text-white mt-4">
            Discover the thrill of paragliding with India's premier paragliding destination.
            Professional training, breathtaking views, and unforgettable experiences await you.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-yellow-400 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition">
              Book Your Flight
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/paragliding.jpg" // Replace with your own image path
            alt="Paragliding"
            width={500}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-14">
        <Feature icon={<FaCheckCircle size={24} />} title="Certified Trainers" desc="Learn from internationally certified paragliding professionals" />
        <Feature icon={<FaMountain size={24} />} title="Scenic Locations" desc="Fly over breathtaking landscapes and mountain views" />
        <Feature icon={<FaClock size={24} />} title="Safety First" desc="Top-tier equipment and rigorous safety protocols" />
        <Feature icon={<FaUserFriends size={24} />} title="5000+ Happy Flyers" desc="Join thousands who’ve experienced the thrill with us" />
      </div>
    </section>
  );
}

// Feature Card Component
const Feature = ({ icon, title, desc }) => (
  <div className="bg-white/10 p-5 rounded-xl backdrop-blur-md text-white shadow-md">
    <div className="mb-2 text-yellow-300">{icon}</div>
    <h3 className="font-bold mb-1">{title}</h3>
    <p className="text-sm">{desc}</p>
  </div>
);
