'use client';

import { useState } from 'react';

export default function FaqQuestions() {
  const [openQuestion, setOpenQuestion] = useState(0); // First question open by default

  const faqs = [
    {
      question: "Is paragliding safe?",
      answer: "When conducted with proper training, equipment, and weather conditions, paragliding is very safe. At GEP Paragliding, safety is our top priority. All our pilots are certified professionals, our equipment is regularly inspected and maintained, and we strictly adhere to weather guidelines. We won't fly if conditions aren't optimal for safety."
    },
    {
      question: "Do I need any prior experience for a tandem flight?",
      answer: "No prior experience is required for tandem flights. Our certified instructors will handle all the technical aspects while you enjoy the experience. We'll provide a brief safety briefing before takeoff to ensure you're comfortable and know what to expect."
    },
    {
      question: "What should I wear for paragliding?",
      answer: "Wear comfortable, weather-appropriate clothing and closed-toe shoes with good grip. Avoid loose clothing that might flap in the wind. We recommend layers as temperatures can vary with altitude. We'll provide all necessary safety equipment including helmets and harnesses."
    },
    {
      question: "How long does a typical paragliding flight last?",
      answer: "A typical tandem flight lasts between 15-30 minutes, depending on weather conditions and thermal activity. The entire experience, including briefing, preparation, and landing, usually takes 2-3 hours. Flight duration can vary based on wind conditions and thermals on the day of your flight."
    },
    {
      question: "What are the age and weight restrictions?",
      answer: "Participants must be at least 16 years old (with parental consent) and weigh between 40-100kg (88-220lbs). These restrictions ensure safe operation of our equipment and proper weight distribution during flight. Medical conditions that might affect your ability to participate should be discussed with us beforehand."
    },
    {
      question: "What happens if the weather is bad on my booking date?",
      answer: "Safety is our priority, so we don't fly in poor weather conditions. If weather conditions are unsuitable on your booking date, we'll reschedule your flight at no extra cost. We monitor weather conditions closely and will contact you if changes are needed. Your safety and enjoyment are more important than keeping to a schedule."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? -1 : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Common <span className="text-yellow-500">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We've compiled answers to the most frequently asked questions about paragliding with GEP 
            Paragliding. If you can't find the answer you're looking for, please{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-800 underline">
              contact us
            </a>.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openQuestion === index && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}