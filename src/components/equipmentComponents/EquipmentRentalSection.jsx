// components/EquipmentRentalSection.jsx
import React from 'react';

const EquipmentRentalSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">EQUIPMENT RENTAL & SALES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            We offer equipment rental for our students and visiting pilots. We also have a pro shop where you can purchase your own paragliding gear from leading brands like Ozone, Advance, Nova, and Supair.
          </p>
          <ul className="list-disc list-inside text-sm">
            <li>Daily and weekly rental options</li>
            <li>Complete equipment sets available</li>
            <li>New and used equipment for sale</li>
            <li>Expert advice on selecting the right gear</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="font-semibold">EQUIPMENT TESTING</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="font-semibold">EQUIPMENT ADJUSTMENT</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="font-semibold">EQUIPMENT MAINTENANCE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentRentalSection;