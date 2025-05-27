// components/AboutBanner.jsx
import Image from 'next/image';
// import Paraglider from '../public/paraglider.png'; // adjust path if needed

export default function AboutBanner() {
  return (
    <div className="relative bg-gradient-to-r from-gray-500 to-gray-300 py-24 text-center">
      <h1 className="text-white text-4xl font-extrabold mb-4">About Us</h1>
      <p className="text-white max-w-3xl mx-auto text-lg px-4">
        Learn about our journey, mission, and passion for bringing the experience of paragliding to adventure enthusiasts around the world.
      </p>

      {/* Centered paraglider image overlay */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {/* <Image src={Paraglider} alt="Paraglider" width={80} height={80} className="opacity-90" /> */}
      </div>
    </div>
  );
}
