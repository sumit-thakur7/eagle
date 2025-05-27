'use client';

import { useState } from 'react';

export default function FAQs() {
  const faqs = [
    {
      question: 'What should I wear for a paragliding session?',
      answer:
        'Wear comfortable clothing suitable for the weather, such as long pants, a jacket, and sturdy shoes. Avoid loose items like scarves that could get caught in equipment.',
    },
    {
      question: 'Do I need prior experience to try paragliding?',
      answer:
        'No prior experience is needed for tandem flights. Our certified pilots will handle everything. For solo flying, we offer beginner courses to get you started.',
    },
    {
      question: 'Is paragliding safe?',
      answer:
        'Yes, paragliding is safe when done with proper precautions. We use certified equipment, monitor weather conditions, and have experienced instructors to ensure your safety.',
    },
    {
      question: 'What happens if the weather is bad on my booked day?',
      answer:
        'Safety is our priority. If the weather is unsuitable, we’ll reschedule your flight for another day or provide a full refund if rescheduling isn’t possible.',
    },
    {
      question: 'Can I bring a camera or GoPro on my flight?',
      answer:
        'Yes, you can bring a camera or GoPro, but it must be securely mounted. We also offer photography flights with equipment setup for the best aerial shots.',
    },
    {
      question: 'What is the age and weight limit for paragliding?',
      answer:
        'Participants must be at least 12 years old for tandem flights (with parental consent for those under 18). The weight limit is typically between 30 kg and 100 kg, depending on wind conditions.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Tagline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">FAQs</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-700 mb-8">
          Have questions? We’ve got answers. Here are some of the most common
          queries about paragliding with GEP.
        </p>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto text-left space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-gray-900 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {openIndex === index && (
                <p className="text-gray-700 text-sm mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}