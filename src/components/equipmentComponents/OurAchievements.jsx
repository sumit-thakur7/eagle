'use client';

export default function OurAchievements() {
  const achievements = [
    {
      number: '5000+',
      label: 'Flights Completed',
    },
    {
      number: '1000+',
      label: 'Pilots Trained',
    },
    {
      number: '15+',
      label: 'Years of Experience',
    },
    {
      number: '10+',
      label: 'Awards Won',
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Achievements
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-50 p-6 rounded-lg text-center"
            >
              <h3 className="text-3xl font-bold text-gray-900">
                {achievement.number}
              </h3>
              <p className="text-gray-700 mt-2">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}