'use client';

export default function EquipmentOurTeam() {
  const teamMembers = [
    {
      name: 'Vikram Singh',
      role: 'Chief Instructor',
      experience: '15+ years of paragliding experience',
      description:
        'Vikram is a certified instructor with a passion for teaching. He has trained over 500 students and specializes in advanced flight techniques.',
    },
    {
      name: 'Anjali Sharma',
      role: 'Tandem Pilot',
      experience: '10+ years of tandem flying',
      description:
        'Anjali ensures every tandem flight is a memorable experience. Her calm demeanor makes first-timers feel at ease.',
    },
    {
      name: 'Rohan Gupta',
      role: 'Safety Officer',
      experience: '12+ years in paragliding safety',
      description:
        'Rohan oversees all safety protocols, ensuring every flight adheres to the highest standards.',
    },
    {
      name: 'Priya Mehra',
      role: 'Customer Support Lead',
      experience: '8+ years in customer service',
      description:
        'Priya assists with bookings and inquiries, making sure every customer has a smooth experience.',
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Team</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-700 mb-8">
          Meet the passionate individuals who make GEP Paragliding a trusted
          name in the sport. Our team is dedicated to your safety and
          enjoyment.
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-700 text-sm mb-1">{member.role}</p>
              <p className="text-gray-600 text-sm mb-2">{member.experience}</p>
              <p className="text-gray-700 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}