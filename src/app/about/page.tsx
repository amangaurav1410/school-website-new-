'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        {/* Hero Section - Who We Are */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#FDF6E3]/30"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#D6B25E]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8B1E1A]/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-sm font-bold tracking-[0.3em] text-[#8B1E1A] uppercase mb-4 block">Legacy & Excellence</span>
                <h1
                  className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
                  style={{
                    fontFamily: '"Raleway", sans-serif',
                    color: '#3B1A17'
                  }}
                >
                  Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1E1A] to-[#D6B25E]">Are</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold mb-8 border-l-4 border-[#D6B25E] pl-6" style={{ color: '#8B1E1A', fontFamily: '"Raleway", sans-serif' }}>
                  Rooted in Legacy. Ready for Tomorrow.
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-[#4F4F4F]" style={{ fontFamily: '"Lato", sans-serif' }}>
                  <p>
                    Located in the heart of Hayathnagar, Hyderabad, Mapleford International School
                    carries forward the distinguished three-decade legacy of Megacity High School — a
                    trusted institution known for its strong values and commitment to quality education.
                  </p>
                  <p>
                    Today, this legacy is reimagined for a new era—one that embraces innovation, global
                    horizons, and a future-ready learning experience. As a CBSE-affiliated co-education
                    institution, Mapleford offers a structured, meticulous, and value-driven academic
                    foundation.
                  </p>
                  <p>
                    Through our collaboration with Maple Bear Canadian School, we bring international
                    perspectives, modern pedagogy, holistic development, and global pathways to every
                    learner — creating a harmonious blend of Indian academic depth and world-class
                    educational insight.
                  </p>
                </div>

                <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-[#8B1E1A] to-[#5A1411] text-white shadow-xl">
                  <p className="text-2xl font-bold italic" style={{ fontFamily: '"Raleway", sans-serif' }}>
                    "Empowering Mapleites to rise with Erudition, Ethos, and Excellence"
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1523050335192-ce1dee71a011?w=800&h=1000&fit=crop"
                    alt="Mapleford Learning Environment"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B1A17]/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <p className="text-white font-bold text-xl">30 Years of Legacy</p>
                    <p className="text-[#D6B25E]">Hayathnagar, Hyderabad</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D6B25E]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#8B1E1A]/10 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our School of Thought */}
        <section className="py-32 bg-white relative overflow-hidden" id="school-of-thought">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 80 50 80 100 100 Z" fill="#8B1E1A" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="text-5xl mb-6 block">✨</span>
              <h2
                className="text-5xl lg:text-6xl font-bold mb-8"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                  color: '#3B1A17'
                }}
              >
                Our School of <span className="text-[#8B1E1A]">Thought</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold max-w-3xl mx-auto" style={{ color: '#8B1E1A', fontFamily: '"Raleway", sans-serif' }}>
                Knowledge in Pursuit of Integrity and Excellence
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                {
                  title: "Curiosity",
                  desc: "Discovering the courage to question and the wonder to explore.",
                  icon: "💡"
                },
                {
                  title: "Discipline",
                  desc: "The inner strength to grow and the commitment to stay consistent.",
                  icon: "🧭"
                },
                {
                  title: "Humility",
                  desc: "Grounded in values, always open to learning and growing together.",
                  icon: "🌱"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-[#FDF6E3]/50 p-10 rounded-3xl border border-[#D6B25E]/20 text-center hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-4xl mb-6 block">{item.icon}</span>
                  <h4 className="text-2xl font-bold text-[#3B1A17] mb-4" style={{ fontFamily: '"Raleway", sans-serif' }}>{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto text-center mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-white to-[#FDF6E3] border border-[#D6B25E]/30 relative shadow-2xl"
            >
              <p className="text-2xl leading-relaxed mb-8 text-[#3B1A17] font-medium" style={{ fontFamily: '"Lato", sans-serif' }}>
                At Mapleford International School, the euphony of intellect and integrity nurtures
                young talent to discover the courage to question, the discipline to grow, and the
                humility to keep learning.
              </p>
              <p className="text-xl leading-relaxed mb-10 text-[#5A1411] italic" style={{ fontFamily: '"Lato", sans-serif' }}>
                We strive to raise curious thinkers, compassionate leaders, and confident achievers —
                grounded in enduring values and inspired to excel beyond boundaries.
              </p>

              <Link
                href="/admissions"
                className="inline-block px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-[1.05] shadow-xl hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #8B1E1A 0%, #5A1411 100%)',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 25px rgba(139,30,26,0.2)',
                  fontFamily: '"Lato", sans-serif'
                }}
              >
                Begin Your Journey
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}