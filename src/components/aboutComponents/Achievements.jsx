'use client';

export default function Achievements() {
  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '50+', label: 'Certified Instructors' },
    { value: '5000+', label: 'Students Trained' },
    { value: '10+', label: 'Flying Locations' },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <h3 className="text-3xl font-bold text-yellow-500">{stat.value}</h3>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}