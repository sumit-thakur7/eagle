'use client';

export default function ParaglidingVideos() {
  const videos = [
    {
      title: 'Soaring Above Bir Billing',
      description:
        "Experience the magnificent views of the Himalayas from a paraglider's perspective.",
      url: '#', // Replace with actual video URL
    },
    {
      title: 'Learning to Paraglide',
      description:
        'Follow the journey of a student learning to paraglide with our experienced instructors.',
      url: '#', // Replace with actual video URL
    },
    {
      title: 'Sunset Paragliding Magic',
      description:
        'The best time to fly is during sunset, with golden light bathing the landscape.',
      url: '#', // Replace with actual video URL
    },
    {
      title: 'Cross Country Adventure',
      description:
        'Follow our advanced pilots as they navigate a challenging cross-country route.',
      url: '#', // Replace with actual video URL
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Paragliding Videos
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-700 mb-8">
          Experience the thrill of paragliding through our collection of videos.
          Feel the freedom of flight from the comfort of your screen.
        </p>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative bg-gray-900 h-48 flex items-center justify-center">
                <p className="text-white text-sm">Video unavailable</p>
                <a
                  href={video.url}
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
                  {video.title}
                </h3>
                <p className="text-gray-700 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}