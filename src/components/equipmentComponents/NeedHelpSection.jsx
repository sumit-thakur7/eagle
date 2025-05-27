// components/NeedHelpSection.jsx
import React from 'react';

const NeedHelpSection = () => {
  return (
    <section className="bg-gray-400 py-12 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">NEED HELP CHOOSING EQUIPMENT?</h2>
      <p className="text-white mb-6">
        Our experienced staff can help you select the right equipment for your skill level, flying style, and budget. Contact us for personalized advice.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition">
          GET EQUIPMENT ADVICE
        </button>
        <button className="border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-black transition">
          EXPLORE OUR COURSES
        </button>
      </div>
    </section>
  );
};

export default NeedHelpSection;