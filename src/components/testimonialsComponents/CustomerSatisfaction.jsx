'use client';

import Image from 'next/image';

export default function CustomerSatisfaction() {
  const stats = [
    { value: '4.9/5', label: 'Overall Rating' },
    { value: '98%', label: 'Would Recommend' },
    { value: '5000+', label: 'Happy Customers' },
    { value: '85%', label: 'Return Customers' },
  ];

  return (
    <section className="py-12 px-4 bg-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Our Customer Satisfaction
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-50 p-6 rounded-lg text-center"
            >
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Paraglider Icon */}
        <Image
          src="/images/paraglider-icon.png" // Replace with your icon path
          alt="Paraglider icon"
          width={48}
          height={48}
          className="mx-auto mt-6 object-contain"
        />
      </div>
    </section>
  );
}