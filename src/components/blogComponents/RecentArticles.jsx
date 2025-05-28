import React from 'react';

const RecentArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding Weather Patterns for Safe Paragliding",
      excerpt: "Weather plays a crucial role in paragliding safety. Learn how to read weather forecasts and identify safe flying conditions to make informed decisions before taking off.",
      author: "Raj Malhotra",
      date: "April 10, 2023",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
      slug: "understanding-weather-patterns-paragliding"
    },
    {
      id: 2,
      title: "Choosing Your First Paragliding Equipment: A Comprehensive Guide",
      excerpt: "Investing in the right equipment is crucial for safety and enjoyment. This guide helps beginners navigate the complex world of paragliding gear with expert recommendations.",
      author: "Sarah Johnson",
      date: "March 28, 2023",
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop&crop=center",
      slug: "choosing-first-paragliding-equipment"
    },
    {
      id: 3,
      title: "Mental Preparation for Paragliding: Overcoming Fear and Building Confidence",
      excerpt: "The psychological aspects of paragliding are just as important as the technical skills. Discover strategies to manage fear, build confidence, and develop the right mindset for flying.",
      author: "Priya Sharma",
      date: "February 15, 2023",
      image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=300&fit=crop&crop=center",
      slug: "mental-preparation-paragliding"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Recent <span className="text-yellow-500">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Check out our latest blog posts to stay up-to-date with the paragliding world.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              
              {/* Article Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Circular overlay element for middle article */}
                {index === 1 && (
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-teal-600 rounded-full opacity-90 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Article Content */}
              <div className="p-8">
                {/* Meta Information */}
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-6">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    {article.author}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight hover:text-yellow-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <button className="inline-flex items-center text-gray-900 font-semibold hover:text-yellow-600 transition-colors group/btn">
                  Read More
                  <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Scroll to top button (yellow circle) */}
      <div className="fixed bottom-8 right-8">
        <button className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full shadow-lg flex items-center justify-center transition-colors group">
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default RecentArticles;