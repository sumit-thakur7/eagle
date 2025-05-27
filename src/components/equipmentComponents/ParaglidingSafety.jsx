'use client';

export default function ParaglidingSafety() {
  const safetyPoints = [
    {
      title: 'Certified Instructors',
      description:
        'All our instructors are certified and have years of experience to ensure your safety.',
    },
    {
      title: 'Top-Notch Equipment',
      description:
        'We use industry-leading gear, regularly inspected and maintained for optimal performance.',
    },
    {
      title: 'Pre-Flight Briefings',
      description:
        'Every flight begins with a detailed safety briefing to prepare you for a secure experience.',
    },
    {
      title: 'Weather Monitoring',
      description:
        'We closely monitor weather conditions to ensure safe flying conditions at all times.',
    },
    {
      title: 'Emergency Protocols',
      description:
        'Our team is trained in emergency procedures to handle any situation swiftly and safely.',
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Paragliding Safety
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-700 mb-8">
          Your safety is our top priority. We follow strict protocols to ensure
          every flight is as safe as it is thrilling.
        </p>

        {/* Safety Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {safetyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-700 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}