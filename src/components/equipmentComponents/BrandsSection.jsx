// components/BrandsSection.jsx
import React from 'react';

const BrandsSection = () => {
  const brands = [
    { name: 'OZONE', description: 'Performance Wings' },
    { name: 'ADVANCE', description: 'Premium Harnesses' },
    { name: 'SUPAIR', description: 'Comprehensive Equipment' },
    { name: 'FLYMASTER', description: 'Flight Instruments' },
    { name: 'WOODY VALLEY', description: 'Innovative Harnesses' },
    { name: 'NOVA', description: 'Safe & Stable Wings' },
    { name: 'GIN GLIDERS', description: 'High-Performance Wings' },
    { name: 'SKYWALK', description: 'Versatile Equipment' },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Brands We Trust</h2>
      <p className="text-center mb-8">
        We partner with the world’s leading paragliding equipment manufacturers to provide you with the best and safest gear available.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {brands.map((brand, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="font-semibold">{brand.name}</p>
            <p className="text-sm text-gray-600">{brand.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;