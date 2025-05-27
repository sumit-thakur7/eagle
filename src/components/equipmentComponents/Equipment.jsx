// pages/equipment.js
import React from 'react';

const Equipment = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Section 1: Need Help Choosing Equipment */}
      <section className="bg-gray-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">NEED HELP CHOOSING EQUIPMENT?</h1>
        <p className="text-lg mb-6">
          Our experienced staff can help you select the right equipment for your skill level, flying style, and budget. Contact us for personalized advice.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600">
            GET EQUIPMENT ADVICE
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black">
            EXPLORE OUR COURSES
          </button>
        </div>
      </section>

      {/* Section 2: Brands We Trust */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Brands We Trust</h2>
        <p className="text-center text-gray-600 mb-12">
          We partner with the world's leading paragliding equipment manufacturers to provide you with the best and safest gear available.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-green-500 mb-2">🟦</div>
            <h3 className="font-semibold">OZONE</h3>
            <p className="text-gray-600">Performance Wings</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-green-500 mb-2">🟦</div>
            <h3 className="font-semibold">ADVANCE</h3>
            <p className="text-gray-600">Premium Harnesses</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-green-500 mb-2">🟦</div>
            <h3 className="font-semibold">SUPAIR</h3>
            <p className="text-gray-600">Comprehensive Equipment</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-green-500 mb-2">🟦</div>
            <h3 className="font-semibold">FLYMASTER</h3>
            <p className="text-gray-600">Flight Instruments</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-green-500 mb-2">🟦</div>
            <h3 className="font-semibold">WOODY VALLEY</h3>
            <p className="text-gray-600">Innovative Harnesses</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-green-500 mb-2">🟦</div>
            <h3 className="font-semibold">NOVA</h3>
            <p className="text-gray-600">Safe & Stable Wings</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-green-500 mb-2">🟦</div>
            <h3 className="font-semibold">GIN GLIDERS</h3>
            <p className="text-gray-600">High-Performance Wings</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-green-500 mb-2">🟦</div>
            <h3 className="font-semibold">SKYWALK</h3>
            <p className="text-gray-600">Versatile Equipment</p>
          </div>
        </div>
      </section>

      {/* Section 3: Equipment Maintenance */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Equipment Maintenance</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Regular maintenance and proper care of paragliding equipment is essential for safety and longevity. Our on-site workshop offers comprehensive maintenance services performed by certified technicians.
          We recommend annual inspections for all paragliding equipment, especially wings, harnesses, and reserve parachutes. Our technicians can identify potential issues before they become safety hazards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">WING INSPECTIONS</h3>
            <p className="text-gray-600">Porosity testing, line measurements, trim checks, and repair services for all brands of paragliders.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">RESERVE REPACKING</h3>
            <p className="text-gray-600">Professional reserve parachute inspection and repacking services, recommended every 6-12 months.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">HARNESS REPAIRS</h3>
            <p className="text-gray-600">Harness inspections, airbag testing, and repairs to ensure your safety and comfort in flight.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Equipment Rental & Sales */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Equipment Rental & Sales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div>
            <p className="text-gray-600 mb-6">
              We offer equipment rental for our students and visiting pilots. We also have a pro shop where you can purchase your own paragliding gear from leading brands like Ozone, Advance, Nova, and Supair.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Daily and weekly rental options
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Complete equipment sets available
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> New and used equipment for sale
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Expert advice on selecting the right gear
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center">
            <div className="text-center">
              <div className="text-green-500 mb-2">🟦</div>
              <p className="text-gray-600">Image placeholder for a person with paragliding equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Equipment */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-yellow-500">Our Equipment</h2>
        <p className="text-center text-gray-600 mb-12">
          Safety and performance are our top priorities. We use premium, internationally certified equipment and maintain it to the highest standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">PARAGLIDING WINGS</h3>
            <p className="text-gray-600 mb-4">
              We use top brands like Ozone, Advance, and Nova with EN/LTF certification for all levels.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Beginner-friendly options
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Intermediate wings
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Performance wings
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">HARNESSES</h3>
            <p className="text-gray-600 mb-4">
              Comfortable, adjustable harnesses from Woody Valley, Advance, and Supair for optimal safety.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Airbag protection
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Adjustable fit
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Storage compartments
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">HELMETS</h3>
            <p className="text-gray-600 mb-4">
              Certified paragliding helmets that meet international safety standards for head protection.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> EN 966 certification
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Lightweight design
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Multiple sizes available
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">FLIGHT INSTRUMENTS</h3>
            <p className="text-gray-600 mb-4">
              Modern variometers, GPS, and radios for navigation and communication during flights.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Flymaster GPS & varios
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Two-way radios
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔</span> Flight computers
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;