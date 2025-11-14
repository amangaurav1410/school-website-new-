import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Vision() {
  return (
    <div className="min-h-screen bg-white maple-leaf-bg relative">
      <Header />
      <div className="pt-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent text-center mb-8">Our Vision</h1>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Mission Statement</h2>
          <p className="text-gray-700 leading-relaxed">
            To foster a nurturing environment where students from diverse backgrounds thrive academically, socially, and emotionally, becoming responsible global citizens equipped with the skills and values to make a positive impact on the world.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-navy-600">Integrity</h3>
              <p className="text-gray-700">We uphold honesty, fairness, and ethical behavior in all our actions.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-navy-600">Excellence</h3>
              <p className="text-gray-700">We strive for the highest standards in education and personal growth.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-navy-600">Respect</h3>
              <p className="text-gray-700">We value diversity and treat everyone with dignity and kindness.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-navy-600">Innovation</h3>
              <p className="text-gray-700">We embrace creativity and forward-thinking approaches to learning.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Educational Philosophy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our educational philosophy is rooted in the belief that every child has unique potential. We provide a balanced curriculum that integrates academic rigor with character development, critical thinking, and real-world application. Inspired by Canadian educational principles, we emphasize inclusivity, environmental stewardship, and community service.
          </p>
        </section>
      </main>
      </div>
      <Footer />
    </div>
  );
}