'use client';

import { useState, useEffect } from 'react';
import { Plane, X, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest('nav')) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-gray-100"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity z-60 relative"
              onClick={handleLinkClick}
            >
              <Plane className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8" />
              <span className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900">
                GEP <span className="text-yellow-500">Paragliding</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-6 xl:gap-8 items-center">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative group">
                    <Link
                      href={link.path}
                      className={`text-sm xl:text-base font-medium transition-all duration-300 relative py-2 ${
                        pathname === link.path
                          ? "text-yellow-500"
                          : "text-gray-700 hover:text-yellow-500"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-500 transition-all duration-300 ${
                          pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Book Now Button */}
              <Link
                href="/book"
                className="bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </Link>
            </div>

            {/* Tablet Navigation (md to lg) */}
            <div className="hidden md:flex lg:hidden items-center gap-4">
              <ul className="flex gap-4 items-center">
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.name} className="relative group">
                    <Link
                      href={link.path}
                      className={`text-sm font-medium transition-all duration-300 relative py-2 ${
                        pathname === link.path
                          ? "text-yellow-500"
                          : "text-gray-700 hover:text-yellow-500"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-500 transition-all duration-300 ${
                          pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              
              <button
                className="text-gray-700 hover:text-yellow-500 transition-colors p-2"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700 hover:text-yellow-500 transition-colors p-2 z-60 relative"
              onClick={() => setOpen(!open)}
              aria-label="Toggle mobile menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile/Tablet Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          

          {/* Menu Links */}
          <div className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-1 px-6">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    onClick={handleLinkClick}
                    className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                      pathname === link.path
                        ? "text-yellow-500 bg-yellow-50 border-l-4 border-yellow-500"
                        : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Footer */}
          <div className="p-6 border-t border-gray-100">
            <Link
              href="/book"
              onClick={handleLinkClick}
              className="w-full block text-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}