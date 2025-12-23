import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-[#3B1A17] relative overflow-hidden" style={{
      background: 'rgba(245, 242, 235, 0.95)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderTop: '1px solid rgba(214, 178, 94, 0.3)'
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-[#D6B25E] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#D6B25E] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-[#D6B25E] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/images/mmm.png"
                alt="Maple Ford International School Logo"
                className="h-20 w-auto mb-4"
              />
              <h3 className="text-xl font-bold text-[#8B1E1A] mb-2">Maple Ford International School</h3>
              <p className="text-[#5A1411] text-sm leading-relaxed">
                Honoring three decades of educational excellence in Hayathnagar, Hyderabad.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://wa.me/919000568416" className="w-12 h-12 bg-[#D6B25E]/20 rounded-full flex items-center justify-center hover:bg-[#D6B25E]/30 transition-all duration-300 hover:scale-110">
                <span className="text-[#8B1E1A] text-lg">📱</span>
              </a>
              <a href="tel:+919000568416" className="w-12 h-12 bg-[#D6B25E]/20 rounded-full flex items-center justify-center hover:bg-[#D6B25E]/30 transition-all duration-300 hover:scale-110">
                <span className="text-[#8B1E1A] text-lg">📞</span>
              </a>
              <a href="mailto:info@mapleford.edu.in" className="w-12 h-12 bg-[#D6B25E]/20 rounded-full flex items-center justify-center hover:bg-[#D6B25E]/30 transition-all duration-300 hover:scale-110">
                <span className="text-[#8B1E1A] text-lg">✉️</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#8B1E1A] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/admissions" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Admissions</Link></li>
              <li><Link href="/programs" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Programs</Link></li>
              <li><Link href="/vision" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Our Vision</Link></li>
              <li><Link href="/contact" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-bold text-[#8B1E1A] mb-6">Academics</h4>
            <ul className="space-y-3">
              <li><Link href="/programs" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Pre-School</Link></li>
              <li><Link href="/programs" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Elementary School</Link></li>
              <li><Link href="/programs" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">High School</Link></li>
              <li><Link href="/programs" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">STEAM Education</Link></li>
              <li><Link href="/programs" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Sports & Athletics</Link></li>
            </ul>
          </div>

          {/* Campus & Community */}
          <div>
            <h4 className="text-lg font-bold text-[#8B1E1A] mb-6">Campus Life</h4>
            <ul className="space-y-3">
              <li><Link href="/campus" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Facilities</Link></li>
              <li><Link href="/student-zone" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Student Zone</Link></li>
              <li><Link href="/student-zone" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">House System</Link></li>
              <li><Link href="/blogs" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Blogs</Link></li>
              <li><Link href="/careers" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/50 rounded-2xl p-8 mb-8 border border-[#D6B25E]/20 shadow-lg backdrop-blur-sm">
          <div className="text-center">
            <h4 className="text-xl font-bold text-[#8B1E1A] mb-2">Stay Connected</h4>
            <p className="text-[#5A1411] text-sm mb-6 max-w-md mx-auto">
              Join our community and receive updates on admissions, events, and school news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/70 border border-[#D6B25E]/30 text-[#3B1A17] placeholder-[#5A1411]/60 focus:outline-none focus:ring-2 focus:ring-[#D6B25E] focus:border-transparent"
              />
              <button className="px-8 py-3 bg-[#8B1E1A] text-white rounded-xl font-semibold hover:bg-[#5A1411] transition-all duration-300 hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-white/30 rounded-xl p-6 mb-8 border border-[#D6B25E]/20 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-[#8B1E1A] text-2xl mb-2">📍</div>
              <h5 className="font-semibold text-[#8B1E1A] mb-1">Location</h5>
              <p className="text-[#5A1411] text-sm">Hayathnagar, Hyderabad, Telangana</p>
            </div>
            <div>
              <div className="text-[#8B1E1A] text-2xl mb-2">📞</div>
              <h5 className="font-semibold text-[#8B1E1A] mb-1">Phone</h5>
              <p className="text-[#5A1411] text-sm">+91 90005 68416</p>
            </div>
            <div>
              <div className="text-[#8B1E1A] text-2xl mb-2">✉️</div>
              <h5 className="font-semibold text-[#8B1E1A] mb-1">Email</h5>
              <p className="text-[#5A1411] text-sm">info@mapleford.edu.in</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#D6B25E]/30">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-[#5A1411] text-sm mb-2">
                &copy; 2025 Maple Ford International School. All rights reserved.
              </p>
              <p className="text-[#8B1E1A] text-xs">
                Honoring the legacy of Megacity High School since 1995 • CBSE Affiliated • Maple Bear Collaboration
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              <Link href="#" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm">Privacy Policy</Link>
              <Link href="#" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm">Terms of Service</Link>
              <Link href="#" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm">Accessibility</Link>
              <Link href="#" className="text-[#5A1411] hover:text-[#D6B25E] transition-colors duration-300 text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
