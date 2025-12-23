'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function StudentZone() {
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
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6"
          >
            Student Zone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Celebrating Character, Community, and Champions in the Making
          </motion.p>
        </div>
      </section>

      {/* Monthly Action */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Monthly Action
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-3xl shadow-xl border border-blue-200/50 text-center"
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              Each house embodies a distinct value that shapes the character of every Mapleite, encouraging them to grow with purpose and pride.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The House Arena */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              The House Arena
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Astra",
                icon: "⭐",
                color: "Yellow",
                motto: "Rise Beyond the Horizon",
                description: "Astra represents the spirit of aiming higher and dreaming boldly. Inspired by the luminosity of a star, this house nurtures visionaries—students who explore with curiosity, think creatively, and pursue excellence with optimism."
              },
              {
                name: "Nova",
                icon: "🔥",
                color: "Red",
                motto: "Ignite the Future",
                description: "Nova stands for the spark that ignites change. Like a burst of new light in the universe, Nova inspires students to take initiative, lead with confidence, and transform challenges into opportunities."
              },
              {
                name: "Verta",
                icon: "🌿",
                color: "Green",
                motto: "Stand True, Grow Strong",
                description: "Verta symbolizes sincerity, responsibility, and strong moral grounding. It encourages students to make choices rooted in integrity, to act with empathy, and to grow steadily with wisdom and purpose."
              },
              {
                name: "Cresta",
                icon: "⛰️",
                color: "Blue",
                motto: "To the Summit, Always",
                description: "Cresta reflects the drive to reach one's highest potential. Like a mountain peak that stands tall and unwavering, this house instills discipline, persistence, and an unwavering commitment to achieving one's best."
              }
            ].map((house, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{house.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{house.name}</h3>
                <div className="text-sm text-gray-600 mb-4">{house.color}</div>
                <div className="text-red-600 font-semibold mb-4">{house.motto}</div>
                <p className="text-gray-600 leading-relaxed">{house.description}</p>
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
              Join Your House
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Be part of a community that celebrates your unique strengths and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors duration-300 shadow-lg"
              >
                Join Maple Ford
              </Link>
              <Link
                href="/contact"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg"
              >
                Learn More
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