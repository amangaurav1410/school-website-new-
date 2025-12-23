'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Vision() {
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
            Our Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            To be a leading international school recognized for excellence in education and holistic development.
          </motion.p>
        </div>
      </section>

      {/* Core Vision Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-3xl shadow-xl border border-blue-200/50"
          >
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-8">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              At Maple Ford International School, we envision an educational ecosystem that transcends traditional boundaries, where learning becomes a lifelong adventure of discovery and growth. Our commitment extends beyond academic achievement to encompass the holistic development of each student's potential.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We strive to be pioneers in educational innovation, creating environments where curiosity thrives, creativity flourishes, and every student emerges as a confident leader ready to contribute meaningfully to society and the world at large.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars of Vision */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Pillars of Our Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four fundamental pillars that form the foundation of our educational philosophy and guide our journey forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌍",
                title: "Global Citizenship",
                description: "Fostering understanding and respect for diverse cultures while developing skills for global collaboration."
              },
              {
                icon: "🚀",
                title: "Innovation",
                description: "Encouraging creative thinking and technological proficiency to prepare students for future challenges."
              },
              {
                icon: "💪",
                title: "Character Development",
                description: "Building integrity, resilience, and leadership qualities that last a lifetime."
              },
              {
                icon: "🤝",
                title: "Community Impact",
                description: "Instilling values of service and social responsibility for positive societal change."
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 text-center"
              >
                <div className="text-5xl mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Goals */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Long-term Goals
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Establish partnerships with 50+ international institutions by 2030",
              "Achieve 100% digital literacy and coding proficiency for all students",
              "Develop sustainable campus initiatives reducing environmental impact by 50%",
              "Launch global exchange programs reaching students in 20+ countries",
              "Create innovation hubs fostering entrepreneurship and research",
              "Build comprehensive alumni network supporting lifelong learning"
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg border border-blue-200/50"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{goal}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Plan to Achieve This */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Our Path Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strategic roadmap guiding our journey towards realizing this ambitious vision.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {[
              { step: "01", title: "Research", description: "Continuous study of educational trends and student needs" },
              { step: "02", title: "Development", description: "Creating innovative programs and learning methodologies" },
              { step: "03", title: "Implementation", description: "Rolling out new initiatives across all grade levels" },
              { step: "04", title: "Growth", description: "Scaling successful programs and measuring impact" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{phase.title}</h3>
                <p className="text-gray-600 max-w-xs">{phase.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-8"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measuring our success through the lives we touch and the communities we strengthen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Student Impact",
                icon: "👨‍🎓",
                points: [
                  "95% university acceptance rate",
                  "Students leading 200+ community projects annually",
                  "International award winners in STEM and arts",
                  "Alumni network of 5000+ successful professionals"
                ]
              },
              {
                title: "Community Impact",
                icon: "🏘️",
                points: [
                  "Annual community service hours: 10,000+",
                  "Partnerships with 50+ local organizations",
                  "Environmental initiatives reducing carbon footprint",
                  "Educational outreach programs for underprivileged youth"
                ]
              },
              {
                title: "Industry Impact",
                icon: "🏭",
                points: [
                  "Graduates leading innovation in tech and healthcare",
                  "Research collaborations with global universities",
                  "Entrepreneurship programs creating 100+ startups",
                  "Industry partnerships providing real-world experience"
                ]
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl shadow-xl border border-purple-200/50"
              >
                <div className="text-5xl mb-6 text-center">{impact.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{impact.title}</h3>
                <ul className="space-y-3">
                  {impact.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Be a Part of Our Journey
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Join us in shaping the future of education and creating lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors duration-300 shadow-lg"
              >
                View Programs
              </Link>
              <Link
                href="/contact"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg"
              >
                Contact Us
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