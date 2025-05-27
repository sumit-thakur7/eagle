'use client';

export default function MoreReviews() {
  const reviews = [
    {
      rating: 5.0,
      text: "As a nervous first-timer, the team made me feel completely at ease. The pre-flight briefing was thorough, and the pilot was professional and reassuring. An unforgettable experience!",
      name: "Sarah Thompson",
      location: "London, UK",
    },
    {
      rating: 4.5,
      text: "Took the P2 course after completing P1 last year. The progression was perfect – challenging but achievable. The thermal flying training was particularly excellent.",
      name: "Michael Rodriguez",
      location: "San Francisco, USA",
    },
    {
      rating: 5.0,
      text: "Third time flying with GEP and they never disappoint. The equipment is top-notch and well-maintained. The instructors are patient and knowledgeable.",
      name: "Amit Kumar",
      location: "Bangalore, India",
    },
    {
      rating: 4.0,
      text: "Beautiful location and professional staff. The only reason for 4 stars is we had to wait a bit due to weather, but safety comes first, so I understand.",
      name: "Emma Williams",
      location: "Melbourne, Australia",
    },
    {
      rating: 5.0,
      text: "As an experienced pilot, I was impressed by the quality of the SIV training over the lake – particularly valuable for improving my skills.",
      name: "David Chen",
      location: "Toronto, Canada",
    },
    {
      rating: 5.0,
      text: "Travelled all the way from Dubai for this experience and it was worth every mile! The views of the Himalayas are indescribable. Will be back for the P1 course.",
      name: "Aisha Khan",
      location: "Dubai, UAE",
    },
    {
      rating: 4.5,
      text: "Very professional setup with clear emphasis on safety. The equipment is modern and well-maintained. The instructors speak good English, making it easy for international visitors.",
      name: "Thomas Müller",
      location: "Berlin, Germany",
    },
    {
      rating: 5.0,
      text: "Completed my P3 certification with GEP. The comprehensive training prepared me well for the assessment. I particularly appreciated the personalized attention from the instructors.",
      name: "Lakshmi Reddy",
      location: "Hyderabad, India",
    },
    {
      rating: 4.5,
      text: "The private lessons were excellent value for money. My instructor tailored the training to focus on my weak areas, which helped me progress much faster.",
      name: "Pierre Dubois",
      location: "Paris, France",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">More Reviews</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-700 mb-8">
          Here are more stories from our customers about their experiences with
          GEP Paragliding.
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