'use client';

import { useState } from 'react';

export default function QuestionsByCategory() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = [
    {
      title: "For Beginners",
      questions: [
        {
          question: "Will I feel scared or get motion sickness during the flight?",
          answer: "Most people don't experience motion sickness during paragliding as the movement is gentle and smooth. Initial nervousness is normal, but our experienced instructors will help you feel comfortable and secure throughout the flight."
        },
        {
          question: "How do I prepare for my first paragliding experience?",
          answer: "Get a good night's sleep, eat a light meal, wear appropriate clothing and closed-toe shoes. We'll provide all safety equipment and a thorough briefing before your flight. Just bring your sense of adventure!"
        },
        {
          question: "What's the difference between paragliding and hang gliding?",
          answer: "Paragliding uses a flexible fabric wing that inflates with air, while hang gliding uses a rigid frame wing. Paragliding is easier to learn, more portable, and offers a gentler flying experience compared to hang gliding."
        },
        {
          question: "Can I bring my camera or phone during the flight?",
          answer: "For safety reasons, we don't allow personal cameras or phones during tandem flights. However, our instructors can take photos and videos for you using secure, professional equipment designed for aerial photography."
        }
      ]
    },
    {
      title: "About Courses",
      questions: [
        {
          question: "How long does it take to learn to paraglide solo?",
          answer: "Our complete certification course typically takes 8-12 days, depending on weather conditions and your learning pace. This includes ground school, practice flights, and supervised solo flights until you're ready to fly independently."
        },
        {
          question: "What's included in the training courses?",
          answer: "Our courses include all equipment rental, comprehensive ground school, hands-on training, supervision during practice flights, and certification upon completion. We also provide ongoing support and advice after graduation."
        },
        {
          question: "Do I need to be physically fit to learn paragliding?",
          answer: "Basic fitness is helpful but you don't need to be an athlete. You should be able to run a short distance for takeoff and landing. We'll assess your fitness during the initial consultation and provide guidance if needed."
        },
        {
          question: "What certification do I receive after completing a course?",
          answer: "Upon successful completion, you'll receive an internationally recognized paragliding pilot certificate. This allows you to fly solo at appropriate sites and rent equipment from certified operators worldwide."
        }
      ]
    },
    {
      title: "About Equipment",
      questions: [
        {
          question: "What kind of equipment do you use for training and tandem flights?",
          answer: "We use only certified, regularly inspected equipment from leading manufacturers. This includes EN-certified paragliders, comfortable harnesses, helmets, and reserve parachutes. All equipment is maintained to the highest safety standards."
        },
        {
          question: "How long does paragliding equipment last?",
          answer: "With proper care and regular use, paragliders typically last 300-500 flight hours or 3-5 years. Harnesses can last much longer with proper maintenance. We regularly inspect and replace equipment to ensure optimal safety and performance."
        },
        {
          question: "Do you sell equipment for students who want to purchase their own?",
          answer: "Yes, we offer a range of new and certified used equipment suitable for different skill levels. We provide expert advice to help you choose the right gear for your experience level and flying goals."
        },
        {
          question: "Can I rent equipment after completing a course?",
          answer: "Absolutely! Once certified, you can rent our equipment for solo flights. We offer competitive rental rates and can recommend the best equipment for different flying conditions and locations."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestion(openQuestion === key ? null : key);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Questions by <span className="text-yellow-500">Category</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Browse questions organized by topic to find specific information about our courses, 
            equipment, safety protocols, and more.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => (
                  <div
                    key={questionIndex}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                    >
                      <h4 className="text-base font-medium text-gray-800 pr-4">
                        {faq.question}
                      </h4>
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-4 h-4 text-gray-500 transform transition-transform duration-200 ${
                            openQuestion === `${categoryIndex}-${questionIndex}` ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {openQuestion === `${categoryIndex}-${questionIndex}` && (
                      <div className="px-5 pb-4">
                        <div className="border-t border-gray-100 pt-3">
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}