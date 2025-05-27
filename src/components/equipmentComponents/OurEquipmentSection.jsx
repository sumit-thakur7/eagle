// components/OurEquipmentSection.jsx
import React from 'react';

const OurEquipmentSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-4 text-yellow-500">Our Equipment</h2>
      <p className="text-center mb-8">
        Safety & performance are our top priority. We use premium, internationally certified equipment that is inspected and maintained.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">PARAGLIDING WINGS</h3>
          <p>We use top brands like Ozone, Advance, and Nova with EN/LTF certification for all skill levels.</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Beginner-friendly options</li>
            <li>Intermediate wings</li>
            <li>Performance wings</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">HARNESSES</h3>
          <p>Comfortable, adjustable harnesses from Woody Valley, Advance, and Supair for optimal safety.</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Airbag protection</li>
            <li>Adjustable fit</li>
            <li>Lightweight design</li>
            <li>Multiple sizes available</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">HELMETS</h3>
          <p>Certified paragliding helmets that meet international safety standards for head protection.</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>EN 966 certification</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">FLIGHT INSTRUMENTS</h3>
          <p>Modern variometers, GPS, and radios for navigation and communication during flights.</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Flymaster GPS & varios</li>
            <li>Two-way radios</li>
            <li>Flight computers</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurEquipmentSection;