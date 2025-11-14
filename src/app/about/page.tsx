import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white maple-leaf-bg relative">
      <Header />
      <div className="pt-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/hero-campus.jpg"
                  alt="Maplewood Canadian International School"
                  className="w-full h-auto rounded-lg shadow-2xl"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              <div className="cm-section-header">
                {/* Maple Leaf Icon */}
                <div className="flex items-center mb-4">
                  <img
                    className="icon w-8 h-11 mr-3"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 44' fill='%23ec2027'%3E%3Cpath d='M16 2c-2 6-6 5-8 13s2 11 0 18c-2 7-4 6-6 12s-2 9 0 15c2 6 8 3 13 0s5-5 11-3c6 2 9-3 13-6s3-11 0-17c-3-6-9-3-13-9s-3-15-5-18z'/%3E%3C/svg%3E"
                    alt="Maplewood Canadian School Alberta Curriculum"
                    width="32"
                    height="44"
                  />
                  <div className="top-heading text-red-600 font-semibold uppercase tracking-wide">
                    about us
                  </div>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent mb-6 leading-tight">
                  Maplewood Canadian International School<br/>
                  <span className="text-red-600">in Hyderabad</span>
                </h1>

                {/* Description */}
                <div className="text-gray-700 leading-relaxed mb-6 text-lg">
                  <p className="mb-4">
                    Welcome to Maplewood Canadian International School in Hyderabad. MCIS is an educational leader in the Alberta curriculum delivery, offering an exceptional Canadian program opening the doors of opportunity for all students.
                  </p>

                  {/* Alberta Education Logo */}
                  <div className="flex justify-end mb-4">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 50' fill='%23000000'%3E%3Ctext x='10' y='30' font-family='Arial, sans-serif' font-size='16' font-weight='bold'%3EAlberta Education%3C/text%3E%3C/svg%3E"
                      width="208"
                      height="49"
                      alt="Alberta Education"
                      className="h-auto max-w-full"
                      style={{ width: '208px', marginLeft: '10px', marginRight: '0px' }}
                    />
                  </div>
                </div>

                {/* Additional Content Sections */}
                <div className="space-y-8 mt-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-red-600">Our History</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Founded in 2020, Maplewood International School has been dedicated to providing a world-class education inspired by Canadian values. Our institution combines the best of international curricula with a focus on holistic development, preparing students for global citizenship.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-red-600">Our Values</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Excellence in education and character development</li>
                      <li>Inclusivity and respect for diversity</li>
                      <li>Innovation in teaching and learning</li>
                      <li>Community engagement and global awareness</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-red-600">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Dr. Jane Smith</h3>
                        <p className="text-gray-600">Principal</p>
                        <p className="text-gray-700 mt-2">With over 20 years of experience in international education, Dr. Smith leads our school with a vision for excellence.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Mr. John Doe</h3>
                        <p className="text-gray-600">Vice Principal</p>
                        <p className="text-gray-700 mt-2">Mr. Doe oversees academic programs and ensures our curriculum meets the highest standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}