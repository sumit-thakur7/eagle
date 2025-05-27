// components/Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoPaperPlaneSharp } from 'react-icons/io5';

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 pt-12 pb-6 px-4 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-yellow-500">🪂</span>
            <span className="text-black">GEP <span className="text-yellow-500">Paragliding</span></span>
          </div>
          <p className="mt-4 text-sm text-gray-700">
            Experience the freedom of flight with India's premier paragliding destination. Professional training,
            breathtaking views, and unforgettable experiences await you.
          </p>
          <div className="flex gap-4 mt-4 text-xl text-gray-800">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Courses & Services</li>
            <li>Gallery</li>
            <li>Testimonials</li>
            <li>Equipment</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Tandem Flights</li>
            <li>Basic Training (P1)</li>
            <li>Intermediate Course (P2)</li>
            <li>Pilot Certification (P3)</li>
            <li>Private Lessons</li>
            <li>Photography Flights</li>
            <li>Equipment Rental</li>
            <li>Pro Shop</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-gray-700 mb-4">
            Subscribe to our newsletter for the latest updates, offers, and paragliding tips.
          </p>
          <div className="flex items-center border border-gray-300 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 text-sm outline-none"
            />
            <button className="bg-yellow-400 px-4 py-2 text-white text-lg">
              <IoPaperPlaneSharp />
            </button>
          </div>
          <div className="mt-6 space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2"><FaPhoneAlt className="text-yellow-500" /> +91 98765 43210</div>
            <div className="flex items-center gap-2"><FaEnvelope className="text-yellow-500" /> info@geparagliding.org</div>
            <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-yellow-500" /> Bir Billing, Himachal Pradesh, India</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t pt-6 text-sm text-gray-600 gap-4">
        <p>© 2025 GEP Paragliding. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
