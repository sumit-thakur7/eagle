'use client';

import { useState } from 'react';
import { FaBars, FaTimes, FaParachuteBox } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

  return (
    <nav className="bg-gradient-to-r from-gray-400 to-gray-300 px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-2">
          <FaParachuteBox className="text-yellow-500 text-2xl" />
          <span className="font-bold text-xl text-gray-900">
            GEP <span className="text-yellow-500">Paragliding</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-800">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group cursor-pointer">
              <Link
                href={link.path}
                className={`${
                  link.name === 'Home'
                    ? 'text-yellow-500'
                    : 'hover:text-yellow-500'
                }`}
              >
                {link.name}
              </Link>
              {link.name === 'Home' && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-500"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Book Now Button */}
        <Link
          href="/book"
          className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded-full transition"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <ul className="md:hidden mt-4 space-y-2 text-gray-800 font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="py-1 px-2 hover:text-yellow-500">
              <Link href={link.path} onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/book"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-full transition"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}