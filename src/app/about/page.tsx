'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
                Who We Are
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
                Rooted in Legacy. Ready for Tomorrow.
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Located in the heart of Hayathnagar, Hyderabad, Maple Ford International School carries forward the distinguished three-decade legacy of Megacity High School - a trusted institution known for its strong values and commitment to quality education.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, this legacy is reimagined for a new era—one that embraces innovation, global horizons, and a future-ready learning experience. As a CBSE-affiliated co-education institution, Maple Ford offers a structured, meticulous, and value-driven academic foundation. Through our collaboration with Maple Bear Canadian School, we bring international perspectives, modern pedagogy, holistic development, and global pathways to every learner — creating a harmonious blend of Indian academic depth and world-class educational insight.
              </p>
              <p className="text-lg font-semibold text-red-600 mt-6">
                Empowering Mapleites to rise with Erudition, Ethos, and Excellence
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-red-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-red-500/20"></div>
                <div className="relative z-10 text-8xl">🏫</div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our School of Thought */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Our School of Thought
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Knowledge in Pursuit of Integrity and Excellence
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Maple Ford International School, the euphony of intellect and integrity nurtures young talent to discover the courage to question, the discipline to grow, and the humility to keep learning.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach fosters disciplined thinking, ethical actions, and purposeful ambitions, shaping individuals to excel with conviction and contribute with conscience.
            </p>
            <p className="text-lg font-semibold text-red-600 mt-6">
              We strive to raise curious thinkers, compassionate leaders, and confident achievers— grounded in enduring values and inspired to excel beyond boundaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Message from the Chairman */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
                ✉️ Message from the Chairman
              </h2>
              <blockquote className="text-lg leading-relaxed mb-6 pl-6 italic border-l-4 border-red-600 text-gray-700">
                "Education is not merely the transfer of knowledge — it is the cultivation of character, curiosity, and compassion."
              </blockquote>
              <p className="mb-4 text-gray-600 leading-relaxed">
                For nearly three decades, our journey has been guided by the belief that schooling must prepare students for life, not just examinations. Maple Ford stands today as an evolution of that belief — blending global perspectives with timeless values.
              </p>
              <p className="mb-6 italic font-medium text-red-600">
                Together, let us shape a future where every learning matters — the spark in a question, the pride in a goal, and the courage to try again.
              </p>
              <div className="mt-6">
                <p className="font-bold text-lg text-gray-800">— P. Subba Reddy</p>
                <p className="text-gray-600">Chairman, Maple Ford International School</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&h=1200&fit=crop"
                  alt="Chairman"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Message from the Principal */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
                ✉️ Message from the Principal
              </h2>
              <blockquote className="text-lg leading-relaxed mb-6 pl-6 italic border-l-4 border-red-600 text-gray-700">
                "Education is not a race, but a journey — guided by reflection, balance, and purpose."
              </blockquote>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Our vision is to create a school where learning feels alive, relationships feel genuine, and every child leaves empowered to grow with confidence and character.
              </p>
              <div className="mt-6">
                <p className="font-bold text-lg text-gray-800">— XYZ</p>
                <p className="text-gray-600">Principal, Maple Ford International School</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=1200&fit=crop"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}