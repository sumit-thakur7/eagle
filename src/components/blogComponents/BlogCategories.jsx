import React from 'react';

const BlogCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Beginner Tips",
      description: "Essential knowledge for those new to the world of paragliding",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      color: "blue"
    },
    {
      id: 2,
      title: "Advanced Techniques",
      description: "Taking your paragliding skills to the next level",
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: "red"
    },
    {
      id: 3,
      title: "Equipment Reviews",
      description: "In-depth analysis of the latest paragliding gear",
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      color: "gray"
    },
    {
      id: 4,
      title: "Travel & Destinations",
      description: "Explore the best paragliding spots around the world",
      icon: (
        <svg className="w-12 h-12 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      color: "teal"
    },
    {
      id: 5,
      title: "Weather & Safety",
      description: "Understanding conditions and staying safe in the air",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      ),
      color: "blue"
    },
    {
      id: 6,
      title: "Competitions & Events",
      description: "Updates on paragliding competitions and community events",
      icon: (
        <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 16L3 5h5.5l.5 2h9.5c.8 0 1.5.7 1.5 1.5v10c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5V16z"/>
          <path d="M7 8h2v8H7zm4-3h2v11h-2zm4 6h2v5h-2z"/>
        </svg>
      ),
      color: "yellow"
    },
    {
      id: 7,
      title: "Training & Certification",
      description: "Information about courses and getting certified",
      icon: (
        <svg className="w-12 h-12 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      ),
      color: "gray"
    },
    {
      id: 8,
      title: "Pilot Stories",
      description: "Personal experiences and journeys from the paragliding community",
      icon: (
        <svg className="w-12 h-12 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      ),
      color: "orange"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Blog <span className="text-yellow-500">Categories</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Browse articles by category to find topics that interest you most.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {category.description}
              </p>

              {/* Browse Articles Button */}
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-yellow-500 hover:text-yellow-600 transition-colors duration-300 group-hover:border-yellow-500 group-hover:text-yellow-600">
                Browse Articles
              </button>
            </div>
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

export default BlogCategories;