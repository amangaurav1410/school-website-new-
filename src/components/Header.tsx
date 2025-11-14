'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-red-600 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-red-600'
            }`}>
              Maplewood International School Hyderabad
            </Link>
          </div>
          <nav className="custom-menu-primary hidden md:flex space-x-8">
            <Link
              href="/"
              style={{ color: isScrolled ? '#ffffff' : '#ec2027' }}
              className="transition-all duration-300 hover:underline hover:underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="/about"
              style={{ color: isScrolled ? '#ffffff' : '#ec2027' }}
              className="transition-all duration-300 hover:underline hover:underline-offset-4"
            >
              About Us
            </Link>
            <Link
              href="/vision"
              style={{ color: isScrolled ? '#ffffff' : '#ec2027' }}
              className="transition-all duration-300 hover:underline hover:underline-offset-4"
            >
              Vision
            </Link>
            <Link
              href="/admissions"
              style={{ color: isScrolled ? '#ffffff' : '#ec2027' }}
              className="transition-all duration-300 hover:underline hover:underline-offset-4"
            >
              Admissions & Fees
            </Link>
            <Link
              href="/programs"
              style={{ color: isScrolled ? '#ffffff' : '#ec2027' }}
              className="transition-all duration-300 hover:underline hover:underline-offset-4"
            >
              Academic Programs
            </Link>
            <Link
              href="/contact"
              style={{ color: isScrolled ? '#ffffff' : '#ec2027' }}
              className="transition-all duration-300 hover:underline hover:underline-offset-4"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}