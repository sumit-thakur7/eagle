'use client';

export default function WhatOurFlyersSay() {
  const reviews = [
    {
      rating: 5.0,
      text: "One of the most exhilarating experiences of my life! The instructors were incredibly knowledgeable and made me feel safe throughout the entire flight. The views were absolutely breathtaking. I can’t wait to come back!",
      name: "Rahul Sharma",
      location: "Delhi, India",
    },
    {
      rating: 5.0,
      text: "I took the P1 Basic Course and it exceeded all my expectations. The training was comprehensive and I felt my skills improve every day. By the end, I was confidently flying solo under supervision. Amazing experience!",
      name: "Priya Patel",
      location: "Mumbai, India",
    },
    {
      rating: 4.5,
      text: "The photography flight was worth every penny! I got some incredible shots of the mountains and valleys below. The pilot knew exactly where to go for the best photo opportunities. Will definitely be back!",
      name: "Alex Johnson",
      location: "Sydney, Australia",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          What Our Flyers Say
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-700 mb-8">
          Read the experiences of our customers who have soared through the
          skies with us. Their stories inspire us to continue providing
          unforgettable paragliding adventures.
        </p>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-left"
            >
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(review.rating)
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
                  {review.rating}
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-4">{review.text}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p className="text-gray-900 font-semibold">{review.name}</p>
                  <p className="text-gray-600 text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}