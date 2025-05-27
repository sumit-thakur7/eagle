'use client';

import Image from 'next/image';

export default function ParaglidingCourses() {
  const courses = [
    {
      title: 'Tandem Flight Experience',
      level: 'Beginner',
      description:
        'Experience the thrill of paragliding with our certified pilots. No experience necessary, just bring your sense of adventure!',
      features: [
        '20-30 minute flight',
        'HD video recording available',
        'All safety equipment provided',
      ],
      price: '₹2,500',
    },
    {
      title: 'P1 Basic Course',
      level: 'Beginner',
      description:
        'Learn the fundamentals of paragliding and experience your first solo flights under instructor supervision.',
      features: [
        '5-day course',
        'Ground handling techniques',
        'Basic flight theory',
        'Supervised solo flights',
      ],
      price: '₹15,000',
    },
    {
      title: 'P2 Intermediate Course',
      level: 'Intermediate',
      description:
        'Take your skills to the next level with advanced techniques and longer mountain flights.',
      features: [
        '7-day course',
        'Advanced flight maneuvers',
        'Thermal flying techniques',
        'Cross-country flying',
      ],
      price: '₹25,000',
    },
    {
      title: 'P3 Pilot Certification',
      level: 'Advanced',
      description:
        'Become a certified paraglider pilot with comprehensive training and international certification.',
      features: [
        '10-day intensive course',
        'SIV simulation of incidents in flight',
        'Cross-country flying',
        'International certification tests',
      ],
      price: '₹45,000',
    },
    {
      title: 'Private Lessons',
      level: 'All Levels',
      description:
        'One-on-one instruction tailored to your skill level and learning style for rapid progress.',
      features: [
        'Personalized training',
        'Flexible scheduling',
        'Targeted skill development',
        'All equipment provided',
      ],
      price: '₹5,000/day',
    },
    {
      title: 'Photography Flights',
      level: 'Special',
      description:
        'Capture stunning aerial photography while experiencing the thrill of paragliding.',
      features: [
        'Extended flight time',
        'Camera mounting equipment',
        'Expert pilot guidance',
        'Best photo spots',
      ],
      price: '₹5,500',
      image: '/images/mountain-landscape.jpg', // Replace with actual image path
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Paragliding Courses
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-700 mb-8">
          We offer comprehensive training programs for all skill levels, from
          beginners to advanced pilots. All courses are taught by certified
          instructors with years of experience.
        </p>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {course.image && (
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-6 text-left">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      course.level === 'Beginner'
                        ? 'bg-green-100 text-green-800'
                        : course.level === 'Intermediate'
                        ? 'bg-blue-100 text-blue-800'
                        : course.level === 'Advanced'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{course.description}</p>
                <ul className="text-gray-700 text-sm mb-4 space-y-1">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-bold text-gray-900">{course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}