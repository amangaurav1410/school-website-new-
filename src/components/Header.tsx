'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SubMenuItem {
  title: string;
  href?: string;
  children?: SubMenuItem[];
}

interface MenuItem {
  title: string;
  href?: string;
  submenu?: SubMenuItem[];
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleSubmenu = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const menuColumns = {
    column1: [
      { title: 'Home', href: '/' },
      {
        title: 'About Maple Ford',
        submenu: [
          { title: 'Who We Are', href: '/about' },
          { title: 'Our School of Thought', href: '/about' },
          {
            title: 'Leadership Messages',
            children: [
              { title: 'Chairman\'s Message', href: '/about' },
              { title: 'Principal\'s Message', href: '/about' }
            ]
          },
          { title: 'Our Team', href: '/about/team' }
        ]
      },
      {
        title: 'Legacy & Vision',
        submenu: [
          { title: 'Core Pillars: Knowledge | Integrity | Excellence', href: '/vision' },
          { title: 'The Maple Ford Edge', href: '/vision' }
        ]
      }
    ],
    column3: [
      {
        title: 'Campus & Infrastructure',
        submenu: [
          { title: 'Learning Spaces (Classrooms · Library · Labs)', href: '/campus' },
          { title: 'Innovation & Digital Learning', href: '/campus' },
          { title: 'Sports & Physical Education', href: '/campus' },
          { title: 'Creative Arts & Auditorium', href: '/campus' },
          { title: 'Safety, Transport & Cafeteria', href: '/campus' }
        ]
      },
      {
        title: 'Student Life',
        submenu: [
          { title: 'Maple Ford Houses', href: '/student-zone' },
          { title: 'House Arena', href: '/student-zone' },
          { title: 'Student Zone', href: '/student-zone' }
        ]
      }
    ]
  };

  const renderSubMenu = (items: SubMenuItem[], parentKey: string) => {
    return (
      <ul className="ml-4 mt-2 space-y-2">
        {items.map((item, index) => {
          const itemKey = `${parentKey}-${index}`;
          return (
            <li key={itemKey}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(itemKey)}
                    className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium flex items-center gap-2"
                  >
                    {item.title}
                    <span className="text-[#D6B25E]">→</span>
                  </button>
                  {expandedItems[itemKey] && (
                    <ul className="ml-6 mt-2 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          {child.href && (
                            <Link
                              href={child.href}
                              className="text-[#7E7E7E] hover:text-[#D6B25E] transition-all duration-300 text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                item.href && (
                  <Link
                    href={item.href}
                    className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderMenuItem = (item: MenuItem, columnKey: string, index: number) => {
    const itemKey = `${columnKey}-${index}`;
    return (
      <div key={itemKey} className="mb-6">
        {item.submenu ? (
          <>
            <button
              onClick={() => toggleSubmenu(itemKey)}
              className="text-[#3B1A17] hover:text-[#D6B25E] transition-all duration-300 text-lg font-semibold mb-2 flex items-center gap-2 font-['Playfair_Display']"
            >
              {item.title}
              <span className="text-sm text-[#D6B25E]">▾</span>
            </button>
            {expandedItems[itemKey] && renderSubMenu(item.submenu, itemKey)}
          </>
        ) : (
          <Link
            href={item.href || '#'}
            className="text-[#3B1A17] hover:text-[#D6B25E] transition-all duration-300 text-lg font-semibold font-['Playfair_Display']"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.title}
          </Link>
        )}
      </div>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-[0_10px_30px_rgba(90,20,17,0.18)]' : ''
        }`}
        style={{
          background: 'rgba(245, 242, 235, 0.85)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(214, 178, 94, 0.3)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            {/* Left - Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-3 text-[#3B1A17] hover:text-[#8B1E1A] transition-all duration-500 hover:scale-110 group"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-500 group-hover:rotate-180"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span className="font-bold text-lg font-['Inter'] tracking-wide group-hover:tracking-wider transition-all duration-500">
                MENU
              </span>
            </button>

            {/* Center - Logo */}
            <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
              <img
                src="/images/mmm.png"
                alt="Maple Ford International School Logo"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
              />
            </Link>

            {/* Right - CTA Button */}
            <Link
              href="/admissions"
              className="px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 font-['Inter'] hover:scale-105"
              style={{
                background: 'linear-gradient(145deg, #9B2621, #6F1613)',
                color: '#FFFFFF',
                boxShadow: '0 4px 12px rgba(90,20,17,0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(214,178,94,0.6), 0 4px 12px rgba(90,20,17,0.3)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(90,20,17,0.3)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              Admission Enquiry
            </Link>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto"
          style={{
            background: 'linear-gradient(135deg, rgba(245, 242, 235, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          {/* Menu Header */}
          <div
            className="sticky top-0 z-10 border-b"
            style={{
              background: 'rgba(245, 242, 235, 0.95)',
              backdropFilter: 'blur(14px)',
              borderBottom: '1px solid rgba(214, 178, 94, 0.3)'
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-1">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-[#3B1A17] hover:text-[#8B1E1A] transition-all duration-300 hover:scale-105"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span className="font-semibold text-sm font-['Inter']">Close</span>
                </button>

                <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/images/mmm.png"
                    alt="Maple Ford International School Logo"
                    className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
                  />
                </Link>

                <Link
                  href="/admissions"
                  className="px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 font-['Inter']"
                  style={{
                    background: 'linear-gradient(145deg, #9B2621, #6F1613)',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 12px rgba(90,20,17,0.3)'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admission Enquiry
                </Link>
              </div>
            </div>
          </div>

          {/* Menu Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-5xl font-bold text-[#3B1A17] mb-12 font-['Playfair_Display']">Contents</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Column 1 */}
              <div>
                <h3 className="text-2xl font-bold text-[#8B1E1A] mb-6 font-['Playfair_Display']">About Maple Ford</h3>
                {menuColumns.column1.map((item, index) => renderMenuItem(item, 'col1', index))}
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-2xl font-bold text-[#8B1E1A] mb-6 font-['Playfair_Display']">Academics & Learning</h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#3B1A17] mb-2 font-['Playfair_Display']">Academics</h4>
                  <ul className="ml-4 space-y-2">
                    <li><Link href="/programs" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Pre-School (Nursery · Jr. KG · Sr. KG)</Link></li>
                    <li><Link href="/programs" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Elementary School (Grades 1–5)</Link></li>
                    <li><Link href="/programs" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>High School (Grades 6–10/12)</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#3B1A17] mb-2 font-['Playfair_Display']">Learning Framework</h4>
                  <ul className="ml-4 space-y-2">
                    <li><Link href="/programs" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>The Continuum of Learning</Link></li>
                    <li><Link href="/programs" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>STEAM Education</Link></li>
                    <li><Link href="/programs" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Where Logic Meets Imagination</Link></li>
                  </ul>
                </div>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="text-2xl font-bold text-[#8B1E1A] mb-6 font-['Playfair_Display']">Campus Life</h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#3B1A17] mb-2 font-['Playfair_Display']">Campus & Infrastructure</h4>
                  <ul className="ml-4 space-y-2">
                    <li><Link href="/campus" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Learning Spaces (Classrooms · Library · Labs)</Link></li>
                    <li><Link href="/campus" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Innovation & Digital Learning</Link></li>
                    <li><Link href="/campus" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Sports & Physical Education</Link></li>
                    <li><Link href="/campus" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Creative Arts & Auditorium</Link></li>
                    <li><Link href="/campus" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Safety, Transport & Cafeteria</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#3B1A17] mb-2 font-['Playfair_Display']">Student Life</h4>
                  <ul className="ml-4 space-y-2">
                    <li><Link href="/student-zone" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Maple Ford Houses</Link></li>
                    <li><Link href="/student-zone" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>House Arena</Link></li>
                    <li><Link href="/student-zone" className="text-[#5A1411] hover:text-[#D6B25E] transition-all duration-300 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Student Zone</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sticky/Highlight Items */}
            <div className="mt-16 pt-8 border-t border-[#D6B25E]">
              <div className="flex flex-wrap gap-6 justify-center">
                <Link
                  href="/admissions"
                  className="text-[#8B1E1A] hover:text-[#D6B25E] font-semibold text-lg transition-all duration-300 font-['Inter']"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admissions
                </Link>
                <Link
                  href="/blogs"
                  className="text-[#8B1E1A] hover:text-[#D6B25E] font-semibold text-lg transition-all duration-300 font-['Inter']"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  href="/careers"
                  className="text-[#8B1E1A] hover:text-[#D6B25E] font-semibold text-lg transition-all duration-300 font-['Inter']"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="text-[#8B1E1A] hover:text-[#D6B25E] font-semibold text-lg transition-all duration-300 font-['Inter']"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <a
                  href="https://wa.me/919000568416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B1E1A] hover:text-[#D6B25E] font-semibold text-lg transition-all duration-300 font-['Inter']"
                >
                  Chat with Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
