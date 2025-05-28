import Head from 'next/head';

export default function BirMap() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <Head>
        <title>Bir, Himachal Pradesh Map</title>
        <meta name="description" content="Map of Bir, Himachal Pradesh, a popular paragliding destination." />
      </Head>

      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Map of Bir, Himachal Pradesh
      </h1>

      <div className="w-full max-w-4xl h-[500px] rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.773297723075!2d76.69782531514453!3d32.0500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAzJzAwLjAiTiA3NsKwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1698754321987!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="mt-4 text-gray-600 text-center">
        Bir, located in Kangra district, is known as the paragliding capital of India.
      </p>
    </div>
  );
}