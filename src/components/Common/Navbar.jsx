'use client';
import { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-100/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Plane className="text-yellow-500 w-8 h-8" />
          <span className="font-bold text-2xl text-gray-900">
            GEP <span className="text-yellow-500">Paragliding</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-800">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group cursor-pointer">
              <a
                href={link.path}
                className={`${
                  link.path === "/"
                    ? "text-yellow-500"
                    : "hover:text-yellow-500"
                } transition-colors`}
              >
                {link.name}
              </a>
              {link.path === "/" && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-500 transition-all duration-300"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Book Now Button (Desktop) */}
        <a
          href="/book"
          className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full transition"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setOpen(!open)}>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <ul className="md:hidden mt-4 space-y-2 text-gray-800 font-medium bg-gray-100 px-4 py-3">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="py-2 px-2 hover:text-yellow-500 transition-colors"
            >
              <a href={link.path} onClick={() => setOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/book"
              className="w-full block text-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-full transition"
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}