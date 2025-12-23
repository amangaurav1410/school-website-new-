'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Campus() {
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
            Campus & Infrastructure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Spaces that Inspire | Designed for Discovery | Purposefully Equipped
          </motion.p>
        </div>
      </section>

      {/* Infrastructure Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📘",
                title: "Classrooms",
                subtitle: "Smart, Bright, Engaging",
                description: "Our classrooms are designed to be open, bright, and technology-enabled—spaces where students learn with focus and comfort. Interactive boards, ergonomic seating, and natural light come together to create an environment that supports active engagement and clarity in thought."
              },
              {
                icon: "📚",
                title: "Library",
                subtitle: "A Quiet World of Imagination",
                description: "The library is a calm and inviting corner of the campus, offering students a rich collection of books, reference materials, and digital resources. Thoughtfully arranged reading areas allow learners to slow down, explore ideas, and build a lasting love for literature."
              },
              {
                icon: "💡",
                title: "STEAM & Innovation Labs",
                subtitle: "Ideas in Motion",
                description: "Our innovation spaces, including the STEAM and robotics labs, bring learning to life through experimentation and hands-on exploration. Equipped with modern tools and creative resources, these labs encourage students to imagine, design, and build with confidence."
              },
              {
                icon: "🖥️",
                title: "Digital Learning Lab",
                subtitle: "Skills for a New Age",
                description: "The digital lab integrates essential technological skills into daily learning. With updated systems, guided modules, and safe browsing protocols, students develop digital fluency and responsible online habits in a structured, supervised environment."
              },
              {
                icon: "📖",
                title: "Learning Resource Center",
                subtitle: "Research & Reflection",
                description: "The resource center provides a quiet, structured space for reading, research, and academic enrichment. Students use this space to clarify concepts, work independently, and explore subjects beyond the classroom."
              },
              {
                icon: "⚽",
                title: "Sports Arena",
                subtitle: "Fields for Strength & Spirit",
                description: "Our sports arena encourages movement, teamwork, and athletic discipline. The campus features a football field, badminton courts, a tennis court, and dedicated play zones, offering students a healthy balance of fitness, focus, and fun."
              },
              {
                icon: "🎨",
                title: "Creative Arts Studios",
                subtitle: "Expression Without Boundaries",
                description: "Art, music, and dance find their home in our creative studios. These spaces invite students to experiment with form, sound, and movement—nurturing imagination, confidence, and artistic curiosity."
              },
              {
                icon: "🎭",
                title: "Auditorium",
                subtitle: "Where Voices Rise and Talent Shines",
                description: "The auditorium is a vibrant, multi-purpose space designed for performances, cultural events, assemblies, and guest sessions. Equipped with modern acoustics and a professional ambiance, it offers students a meaningful platform to communicate, collaborate, and express their talents with confidence."
              },
              {
                icon: "🥗",
                title: "Cafeteria",
                subtitle: "Hygienic, Fresh, Nourishing",
                description: "The cafeteria offers wholesome, hygienic meals in a clean, welcoming setting. With nutritious menu options and regular quality checks, it ensures that students stay energized throughout their school day."
              },
              {
                icon: "🛡️",
                title: "Safety & Security",
                subtitle: "Protected at Every Step",
                description: "The campus is supported by 24/7 surveillance, controlled entry points, trained security staff, and comprehensive safety protocols. Every measure is in place to ensure a secure, reassuring environment for all learners."
              },
              {
                icon: "🚌",
                title: "Transportation",
                subtitle: "Safe, Seamless Commute",
                description: "Our GPS-enabled buses, trained drivers, and monitored routes ensure that students travel safely to and from school. The transport system is reliable, well-supervised, and designed with student comfort in mind."
              }
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl shadow-xl border border-blue-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                <h4 className="text-red-600 font-semibold mb-4">{facility.subtitle}</h4>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
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
              Experience Our Campus
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Discover the spaces that make learning extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors duration-300 shadow-lg"
              >
                Schedule a Visit
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