'use client';

export default function VideoTestimonials() {
  const testimonials = [
    {
      title: "Rahul's First Flight Experience",
      description:
        '"I was nervous at first, but the instructors made me feel so comfortable. The views were absolutely breathtaking!"',
      rating: 5.0,
      url: "#", // Replace with actual video URL
    },
    {
      title: "Priya's P1 Training Journey",
      description:
        '"The comprehensive training helped me become confident in my skills. By the end of the course I was flying solo!"',
      rating: 5.0,
      url: "#", // Replace with actual video URL
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Video Testimonials
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-700 mb-8">
          Watch our customers share their paragliding experiences in their own
          words. These authentic stories capture the excitement and joy of
          flying with GEP Paragliding.
        </p>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative bg-gray-900 h-48 flex items-center justify-center">
                <p className="text-white text-sm">Video unavailable</p>
                <a
                  href={testimonial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4"
                >
                  <svg
                    className="w-8 h-8 text-white opacity-50 hover:opacity-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {testimonial.title}
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  {testimonial.description}
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(testimonial.rating)
                          ? 'text-yellow-500'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-900 font-semibold">
                    {testimonial.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}