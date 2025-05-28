'use client';

export default function StillHaveQuestions() {
  const handleContactClick = () => {
    // Handle contact form or navigation
    console.log('Contact us clicked');
  };

  const handleConsultationClick = () => {
    // Handle booking consultation
    console.log('Book consultation clicked');
  };

  return (
    <section className="bg-gray-400 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Still Have Questions?
        </h2>
        
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          If you couldn't find the answer you were looking for, our team is here to help. Feel free to 
          contact us, and we'll get back to you as soon as possible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleContactClick}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
          >
            Contact Us
          </button>
          
          <button
            onClick={handleConsultationClick}
            className="bg-gray-300 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}