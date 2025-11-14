import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Part 1: Logo and Description */}
           <div className="md:flex-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-red-600 font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Maplewood International School</h3>
                <p className="text-white text-sm">Hyderabad</p>
              </div>
            </div>
            <p className="text-white leading-relaxed text-sm mb-4">
              MCIS is a Canadian Curriculum School in Hyderabad that follows the Alberta Education Curriculum for KG1 to Grade 12.
            </p>
          </div>

          {/* Part 2: Links */}
           <div className="md:flex-1">
            <h4 className="text-lg font-bold mb-6 text-white">Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white hover:text-red-200 transition duration-300 text-sm">About Us</Link></li>
              <li><Link href="/admissions" className="text-white hover:text-red-200 transition duration-300 text-sm">Admissions</Link></li>
              <li><Link href="/programs" className="text-white hover:text-red-200 transition duration-300 text-sm">Curriculum</Link></li>
              <li><Link href="/programs" className="text-white hover:text-red-200 transition duration-300 text-sm">Facilities & Activities</Link></li>
              <li><Link href="/contact" className="text-white hover:text-red-200 transition duration-300 text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Part 3: Quick Links */}
           <div className="md:flex-1">
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-white hover:text-red-200 transition duration-300 text-sm">Book a Visit</Link></li>
              <li><Link href="#" className="text-white hover:text-red-200 transition duration-300 text-sm">News & Events</Link></li>
              <li><Link href="#" className="text-white hover:text-red-200 transition duration-300 text-sm">School Policies</Link></li>
              <li><Link href="#" className="text-white hover:text-red-200 transition duration-300 text-sm">Parents Hub</Link></li>
            </ul>
          </div>

          {/* Part 4: Newsletter */}
           <div className="md:flex-1">
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter Your Email*"
                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-sm"
              />
              <button className="w-full bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-100 transition duration-300 text-sm">
                Subscribe
              </button>
              <div className="flex items-start">
                <input type="checkbox" id="privacy" className="mr-2 mt-1 w-3 h-3 text-red-600 bg-white border-white rounded focus:ring-white" />
                <label htmlFor="privacy" className="text-xs text-white leading-tight">
                  I agree to the <Link href="#" className="text-white underline hover:text-red-200">Privacy Policy</Link>.
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-red-500 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-center md:text-left text-sm">&copy; 2025 Maplewood International School Hyderabad. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-white hover:text-red-200 text-sm transition duration-300">Terms & Conditions</Link>
            <Link href="#" className="text-white hover:text-red-200 text-sm transition duration-300">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}