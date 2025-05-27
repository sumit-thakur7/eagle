'use client';

import Image from 'next/image';

export default function MeetOurTeam() {
  const team = [
    {
      name: 'Rajesh Kumar',
      title: 'Founder & Chief Instructor',
      description:
        'With over 20 years of paragliding experience, Rajesh is a certified international instructor and has trained hundreds of pilots.',
      image: '/images/rajesh-kumar.jpg', // Replace with actual image path
    },
    {
      name: 'Vikram Singh',
      title: 'Co-Founder & Operations Manager',
      description:
        'Vikram oversees all operations, ensuring that every aspect of your experience with us is smooth and memorable.',
      image: '/images/vikram-singh.jpg', // Replace with actual image path
    },
    {
      name: 'Priya Sharma',
      title: 'Senior Instructor',
      description:
        'Priya specializes in beginner training and is known for her patient and encouraging teaching style.',
      image: '/images/priya-sharma.jpg', // Replace with actual image path
    },
    {
      name: 'Alex Johnson',
      title: 'International Instructor',
      description:
        'With experience flying in over 20 countries, Alex brings international expertise to our advanced training programs.',
      image: '/images/alex-johnson.jpg', // Replace with actual image path
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Meet Our Team
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-700 mb-8">
          Our experienced instructors and staff are dedicated to providing you
          with a safe and memorable paragliding experience.
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-yellow-500 mb-2">{member.title}</p>
                <p className="text-gray-700 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}