'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Careers() {
  const jobOpenings = [
    {
      title: "Primary School Teacher",
      department: "Academics",
      type: "Full-time",
      location: "Hyderabad",
      description: "We are seeking passionate primary school teachers to join our dedicated faculty."
    },
    {
      title: "STEAM Coordinator",
      department: "Innovation",
      type: "Full-time",
      location: "Hyderabad",
      description: "Lead our Science, Technology, Engineering, Arts, and Mathematics programs."
    },
    {
      title: "Sports Coach",
      department: "Physical Education",
      type: "Full-time",
      location: "Hyderabad",
      description: "Develop and lead our comprehensive sports and physical education programs."
    },
    {
      title: "School Counselor",
      department: "Student Services",
      type: "Full-time",
      location: "Hyderabad",
      description: "Provide guidance and support to students for academic and personal development."
    },
    {
      title: "Administrative Assistant",
      department: "Administration",
      type: "Full-time",
      location: "Hyderabad",
      description: "Support our administrative team in maintaining smooth school operations."
    },
    {
      title: "IT Support Specialist",
      department: "Technology",
      type: "Full-time",
      location: "Hyderabad",
      description: "Maintain and support our educational technology infrastructure."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
          {/* Hero Section */}
          <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-red-700/5 to-red-800/10"></div>
            <div className="absolute top-20 left-20 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-300/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl lg:text-8xl font-black mb-6"
                style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}
              >
                Careers at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Mapleford</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              >
                Join our mission to shape young minds and create future leaders. Be part of a community dedicated to excellence in education.
              </motion.p>
            </div>
          </section>

          {/* Why Join Us */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>
                  Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Mapleford?</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: "🌟",
                    title: "Professional Growth",
                    description: "Continuous learning opportunities and career development programs."
                  },
                  {
                    icon: "🤝",
                    title: "Collaborative Environment",
                    description: "Work with passionate educators and supportive colleagues."
                  },
                  {
                    icon: "🎓",
                    title: "Impact Lives",
                    description: "Make a meaningful difference in students' lives and futures."
                  },
                  {
                    icon: "💼",
                    title: "Competitive Benefits",
                    description: "Comprehensive benefits package and work-life balance."
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl shadow-xl border border-blue-200/50 text-center hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-4xl mb-6">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Current Openings */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>
                  Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Openings</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore exciting career opportunities with us.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {jobOpenings.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                        <p className="text-red-600 font-medium">{job.department}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">📍 {job.location}</span>
                      <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
                        Apply Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>
                  How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Apply</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Review Openings", description: "Browse current positions and find the right fit for you." },
                  { step: "02", title: "Submit Application", description: "Send your resume and cover letter through our portal." },
                  { step: "03", title: "Interview Process", description: "Participate in interviews and assessments." },
                  { step: "04", title: "Join Our Team", description: "Welcome to Maple Ford International School!" }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>
                  Ready to Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Difference?</span>
                </h2>
                <p className="text-xl text-red-100 mb-8">
                  Join our team and help shape the future of education.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors duration-300 shadow-lg"
                  >
                    Contact HR
                  </Link>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg">
                    Download Application
                  </button>
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