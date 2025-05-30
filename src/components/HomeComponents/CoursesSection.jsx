import Image from 'next/image';
import Link from 'next/link';
const courses = [
  {
    title: 'Tandem Flight Experience',
    level: 'Beginner',
    price: '₹2,500',
    description:
      'Experience the thrill of paragliding with our certified pilots. No experience necessary – just bring your sense of adventure!',
    image: '/tandem.jpg',
  },
  {
    title: 'P1 Basic Course',
    level: 'Beginner',
    price: '₹15,000',
    description:
      'Learn the fundamentals of paragliding and experience your first solo flights under instructor supervision.',
    image: '/p1.jpg',
  },
  {
    title: 'P2 Intermediate Course',
    level: 'Intermediate',
    price: '₹25,000',
    description:
      'Take your skills to the next level with advanced techniques and longer mountain flights.',
    image: '/p2.jpg',
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-[#f9f9f9] py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-yellow-500">Courses & Services</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2 mb-4 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            From your first tandem flight to becoming a certified paragliding pilot, we offer a range
            of courses and services for all experience levels.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${course.level === 'Beginner'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                      }`}
                  >
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <p className="text-black font-semibold">{course.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link href="/courses">
            <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
              View All Courses →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
