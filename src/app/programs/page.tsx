'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-red-700/5 to-red-800/10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-300/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6"
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Explore Maple Ford's comprehensive educational offerings, from preschool to high school, designed to nurture young minds with excellence and innovation.
          </motion.p>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Program Categories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Preschool",
                icon: "🌱",
                description: "Foundation building through play-based learning",
                programs: "KG1, KG2"
              },
              {
                category: "Primary",
                icon: "📚",
                description: "Core academic development and skill building",
                programs: "Grades 1-5"
              },
              {
                category: "Middle School",
                icon: "🎯",
                description: "Advanced learning with specialization options",
                programs: "Grades 6-8"
              },
              {
                category: "High School",
                icon: "🎓",
                description: "College preparation and career guidance",
                programs: "Grades 9-12"
              }
            ].map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-xl border border-orange-200/50 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-6">{cat.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{cat.category}</h3>
                <p className="text-gray-600 mb-4">{cat.description}</p>
                <div className="text-orange-600 font-medium">{cat.programs}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STEAM Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Animated STEAM Title */}
          <div className="text-center mb-12">
            <h1 className="text-6xl lg:text-8xl font-bold">
              {['S', 'T', 'E', 'A', 'M'].map((letter, index) => (
                <span
                  key={letter}
                  className={`cursor-pointer inline-block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300`}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <p className="text-xl text-gray-600 mt-4">Where Logic Meets Imagination</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Maple Ford International School, STEAM education blends Science, Technology, Engineering, Arts, and Mathematics to cultivate learners who can think critically, design creatively, and innovate purposefully.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our classrooms are spaces of exploration — where scientific curiosity merges with artistic creativity, and technology becomes a canvas for expression.
            </p>
            <p className="text-lg font-semibold text-red-600 mt-6">
              Students engage in hands-on design projects, robotics, visual arts, coding, and creative problem-solving learning to see challenges from multiple perspectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                subject: "Science",
                description: "Hands-on experiments and inquiry-based learning to develop scientific thinking and curiosity about the natural world.",
                icon: "🧪",
                color: "from-blue-500 to-blue-600"
              },
              {
                subject: "Technology",
                description: "Digital literacy, coding, and computational thinking to prepare students for the digital age.",
                icon: "💻",
                color: "from-green-500 to-green-600"
              },
              {
                subject: "Engineering",
                description: "Design thinking, prototyping, and problem-solving through engineering challenges and projects.",
                icon: "⚙️",
                color: "from-orange-500 to-orange-600"
              },
              {
                subject: "Arts",
                description: "Creative expression through visual arts, music, drama, and digital media to develop artistic skills.",
                icon: "🎨",
                color: "from-purple-500 to-purple-600"
              },
              {
                subject: "Mathematics",
                description: "Applied mathematics and logical reasoning to develop analytical and problem-solving abilities.",
                icon: "🔢",
                color: "from-red-500 to-red-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl mr-6 mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.subject}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Athletics Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
                ⚽ Sports & Physical Education
              </h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Chasing Goals. Soaring Spirits High.
              </h3>
              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                Where passion charges the field — and every sport, a lesson in excellence.
              </p>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Growth at Maple Ford extends far beyond classrooms. Every match played, every goal scored, and every serve perfected builds resilience, discipline, and determination.
              </p>
              <p className="mb-6 font-medium text-gray-800">
                With a vibrant sporting culture, students thrive through:
              </p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3 bg-red-600"></span>
                  Football
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3 bg-red-600"></span>
                  Badminton
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3 bg-red-600"></span>
                  Tennis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3 bg-red-600"></span>
                  Athletics
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Supported by state-of-the-art sports infrastructure, Maple Ford nurtures confidence, team spirit, and leadership.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&h=900&fit=crop"
                  alt="Sports Facilities"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Individual Program Cards */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Featured Programs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "STEM Excellence Program",
                duration: "Grades 6-12",
                description: "Advanced science, technology, engineering, and mathematics curriculum with hands-on projects and research opportunities.",
                highlights: ["Robotics Lab", "Coding Bootcamps", "Science Research", "Math Olympiad Prep"],
                icon: "🚀"
              },
              {
                name: "International Baccalaureate",
                duration: "Grades 11-12",
                description: "Globally recognized diploma program preparing students for top universities worldwide.",
                highlights: ["Worldwide Recognition", "Critical Thinking", "Community Service", "Research Project"],
                icon: "🌍"
              },
              {
                name: "Arts & Humanities",
                duration: "Grades 9-12",
                description: "Comprehensive program blending creative arts, literature, and social sciences for well-rounded development.",
                highlights: ["Visual Arts Studio", "Theater Productions", "Debate Club", "Creative Writing"],
                icon: "🎨"
              },
              {
                name: "Sports Excellence",
                duration: "Grades 6-12",
                description: "Elite athletic training combined with academic excellence for student-athletes.",
                highlights: ["Professional Coaching", "Sports Scholarships", "Fitness Training", "Competition Teams"],
                icon: "⚽"
              },
              {
                name: "Leadership Development",
                duration: "Grades 10-12",
                description: "Specialized program for future leaders with entrepreneurship and community service focus.",
                highlights: ["Leadership Workshops", "Entrepreneurship", "Public Speaking", "Community Projects"],
                icon: "👑"
              },
              {
                name: "Language Immersion",
                duration: "Grades 1-12",
                description: "Multilingual education program with focus on global communication skills.",
                highlights: ["French Immersion", "Spanish Program", "Cultural Exchange", "Language Labs"],
                icon: "🗣️"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-6">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.name}</h3>
                <div className="text-orange-600 font-medium mb-4">{program.duration}</div>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Curriculum Approach
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Practical Learning",
                icon: "🔬",
                description: "Hands-on experiences and real-world applications that bring learning to life."
              },
              {
                title: "Research-Based",
                icon: "📊",
                description: "Evidence-based teaching methods grounded in educational research and best practices."
              },
              {
                title: "Industry Integration",
                icon: "🏭",
                description: "Partnerships with leading organizations providing insights into current industry trends."
              },
              {
                title: "Expert Faculty",
                icon: "👨‍🏫",
                description: "Highly qualified educators with advanced degrees and extensive teaching experience."
              }
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-red-200/50 text-center"
              >
                <div className="text-5xl mb-6">{approach.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Learning Outcomes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What your child will achieve through our comprehensive educational programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Develop critical thinking and problem-solving skills",
              "Master effective communication in multiple languages",
              "Demonstrate scientific inquiry and research abilities",
              "Exhibit creativity and innovation in various fields",
              "Show leadership and teamwork in collaborative settings",
              "Apply ethical decision-making in complex situations",
              "Utilize technology effectively for learning and productivity",
              "Contribute positively to community and global issues"
            ].map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/30"
              >
                <div className="w-4 h-4 bg-orange-500 rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Student Success Stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                achievement: "Accepted to MIT with Full Scholarship",
                quote: "The STEM program here ignited my passion for engineering and gave me the skills to pursue my dreams.",
                image: "https://via.placeholder.com/300x300/dc2626/ffffff?text=PS"
              },
              {
                name: "Ahmed Khan",
                achievement: "National Science Olympiad Gold Medalist",
                quote: "The research opportunities and mentorship helped me excel in competitions and build confidence.",
                image: "https://via.placeholder.com/300x300/2563eb/ffffff?text=AK"
              },
              {
                name: "Sarah Johnson",
                achievement: "Published Research Paper at Age 16",
                quote: "The inquiry-based learning approach encouraged me to explore and contribute to scientific knowledge.",
                image: "https://via.placeholder.com/300x300/16a34a/ffffff?text=SJ"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-xl border border-orange-200/50 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {story.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{story.name}</h3>
                <div className="text-orange-600 font-medium mb-4">{story.achievement}</div>
                <blockquote className="text-gray-600 italic">"{story.quote}"</blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-600 via-red-600 to-orange-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Explore Our Programs?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Discover the perfect educational pathway for your child's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors duration-300 shadow-lg"
              >
                Explore Admissions
              </Link>
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg"
              >
                Schedule a Tour
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}