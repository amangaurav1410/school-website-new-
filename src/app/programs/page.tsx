import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Programs() {
  return (
    <div className="min-h-screen bg-white maple-leaf-bg relative">
      <Header />
      <div className="pt-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent text-center mb-8">Academic Programs</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Curriculum Highlights</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our curriculum is designed to foster critical thinking, creativity, and global awareness. We follow a balanced approach that integrates core subjects with interdisciplinary learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-navy-600">STEM Education</h3>
              <p className="text-gray-700">Hands-on science, technology, engineering, and math programs with state-of-the-art labs.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-navy-600">Language Arts</h3>
              <p className="text-gray-700">Comprehensive literacy programs including reading, writing, and communication skills.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-navy-600">Social Studies</h3>
              <p className="text-gray-700">Exploration of history, geography, and civics with a global perspective.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-navy-600">Arts & Humanities</h3>
              <p className="text-gray-700">Creative expression through visual arts, music, drama, and literature.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Extracurricular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-red-600">Sports</h3>
              <p className="text-gray-700">Basketball, soccer, swimming, and more to promote physical health and teamwork.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-red-600">Clubs</h3>
              <p className="text-gray-700">Debate, chess, robotics, and environmental clubs for diverse interests.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2 text-red-600">Community Service</h3>
              <p className="text-gray-700">Volunteering programs that teach empathy and social responsibility.</p>
            </div>
          </div>
        </section>
      </main>
      </div>
      <Footer />
    </div>
  );
}