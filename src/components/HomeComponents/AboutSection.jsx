import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-yellow-500">GEP Paragliding</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2 mb-4 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Learn about our journey, mission, and passion for bringing the experience of paragliding to
            adventure enthusiasts around the world.
          </p>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div>
            <Image
              src="/mountains.jpg"
              alt="Mountain at Night"
              width={600}
              height={400}
              className="rounded-2xl shadow-md w-full h-auto object-cover"
            />
          </div>

          {/* Right Text */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Founded in 2005, GEP Paragliding began with a simple mission: to share the incredible
              experience of paragliding with the world. What started as a small operation with just two
              instructors has grown into India's premier paragliding destination.
            </p>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Our team of certified instructors has decades of combined experience, ensuring that every
              flight is not only exhilarating but also safe. We've trained thousands of pilots and given
              countless tandem experiences to those looking to touch the sky.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-10 mt-6">
              <Stat number="15+" label="Years Experience" />
              <Stat number="50+" label="Instructors" />
              <Stat number="5000+" label="Students Trained" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stat Subcomponent
const Stat = ({ number, label }) => (
  <div className="min-w-[100px]">
    <h4 className="text-yellow-500 text-xl sm:text-2xl font-bold">{number}</h4>
    <p className="text-gray-600 text-xs sm:text-sm">{label}</p>
  </div>
);
