'use client';

import { useState } from 'react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email) {
      // Handle subscription logic here
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-gray-400 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Subscribe to Our Newsletter
        </h2>
        
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Get the latest paragliding articles, tips, and updates delivered directly to your inbox. We
          promise not to spam you – only valuable content related to paragliding.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-6 py-3 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
          />
          
          <button
            onClick={handleSubmit}
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
          >
            Subscribe
          </button>
        </div>

        {isSubscribed && (
          <div className="mt-4 p-3 bg-green-500 text-white rounded-lg max-w-md mx-auto">
            Thank you for subscribing! Check your email for confirmation.
          </div>
        )}
      </div>
    </section>
  );
}