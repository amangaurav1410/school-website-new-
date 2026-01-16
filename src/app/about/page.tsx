'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">

        {/* Hero Section */}
        <section className="relative py-32 lg:py-48 overflow-hidden bg-[#FDF6E3]/30">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D6B25E]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#8B1E1A]/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-5xl lg:text-7xl font-black mb-6 text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">We Are</span>
              </h1>
              <p className="text-xl lg:text-2xl text-[#4F4F4F] max-w-3xl mx-auto leading-relaxed italic" style={{ fontFamily: '"Lato", sans-serif' }}>
                "Rooted in a 30-year legacy of educational excellence, we are shaping the future leaders of tomorrow."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Foundation / Legacy Section - Comparable to Homepage "Mapleford Edge" */}
        <section className="py-24 bg-white" id="our-legacy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
              >
                <span className="text-5xl mb-4 block">🏛️</span>
                <h2
                  className="text-5xl lg:text-6xl font-black mb-8 leading-tight text-[#1A1A1A]"
                  style={{ fontFamily: '"Raleway", sans-serif' }}
                >
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Legacy</span>
                </h2>
                <div className="space-y-6 text-lg text-[#4F4F4F] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                  <p>
                    Mapleford International School stands on the strong shoulders of a three-decade-long journey in education. Founded by <strong className="text-[#8B1E1A]">P. Subba Reddy</strong>, the visionary behind Maple Bear Global Schools (Hyderabad), our institution is a testament to enduring quality and commitment.
                  </p>
                  <p>
                    From humble beginnings to a sprawling <strong>4-acre campus</strong> in Hayathnagar, we have evolved into a sanctuary for holistic learning. Our history is not just about time passed, but about the thousands of lives touched, minds ignited, and futures built.
                  </p>
                  <div className="p-6 bg-amber-50 rounded-2xl border-l-4 border-[#D6B25E]">
                    <p className="italic font-medium text-[#8B1E1A]">
                      "We blend the best of global pedagogy with the richness of Indian values to create a truly world-class learning environment."
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&h=800&fit=crop"
                    alt="Our Legacy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                      <div className="flex justify-between items-center text-center">
                        <div>
                          <div className="text-3xl font-black text-[#8B1E1A]">30+</div>
                          <div className="text-xs uppercase font-bold text-gray-600">Years</div>
                        </div>
                        <div className="w-px h-10 bg-gray-300"></div>
                        <div>
                          <div className="text-3xl font-black text-[#D6B25E]">4</div>
                          <div className="text-xs uppercase font-bold text-gray-600">Acres</div>
                        </div>
                        <div className="w-px h-10 bg-gray-300"></div>
                        <div>
                          <div className="text-3xl font-black text-[#1A1A1A]">1K+</div>
                          <div className="text-xs uppercase font-bold text-gray-600">Students</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission - Comparable to Homepage "Continuum of Learning" Cards */}
        <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-5xl mb-4 block">🎯</span>
              <h2
                className="text-5xl lg:text-6xl font-black mb-8 leading-tight text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Mission</span>
              </h2>
              <p className="text-xl text-[#4F4F4F] max-w-3xl mx-auto" style={{ fontFamily: '"Lato", sans-serif' }}>
                Guided by a clear purpose, we strive to create an educational ecosystem that inspires excellence and nurtures character.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Our Vision',
                  icon: '👁️',
                  desc: 'To be a beacon of educational excellence where every child is empowered to discover their potential and become a responsible global citizen.',
                  color: 'border-l-4 border-[#8B1E1A]'
                },
                {
                  title: 'Our Mission',
                  icon: '🚀',
                  desc: 'To provide a stimulating learning environment that fosters critical thinking, creativity, and integrity through a blend of innovative pedagogy and traditional values.',
                  color: 'border-l-4 border-[#D6B25E]'
                },
                {
                  title: 'Core Values',
                  icon: '💎',
                  desc: 'Integrity, Empathy, Excellence, and Respect form the bedrock of our culture. We believe in educating the heart as much as the mind.',
                  color: 'border-l-4 border-[#1A1A1A]'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ${item.color}`}
                >
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>{item.title}</h3>
                  <p className="text-[#4F4F4F] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Way We Think / Philosophy - Comparable to Homepage STEAM Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { t: "Curiosity", i: "✨", d: "Sparking the desire to know" },
                    { t: "Discipline", i: "⚖️", d: "Framing success with focus" },
                    { t: "Humility", i: "🙏", d: "Learning with an open heart" },
                    { t: "Excellence", i: "🏆", d: "Striving for the best, always" }
                  ].map((val, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#D6B25E]/30 hover:shadow-lg transition-all"
                    >
                      <div className="text-4xl mb-3">{val.i}</div>
                      <h4 className="text-xl font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: '"Raleway", sans-serif' }}>{val.t}</h4>
                      <p className="text-sm text-[#4F4F4F]">{val.d}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <span className="text-5xl mb-4 block">🧠</span>
                <h2
                  className="text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#1A1A1A]"
                  style={{ fontFamily: '"Raleway", sans-serif' }}
                >
                  The Way We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Think</span>
                </h2>
                <p className="text-xl font-medium text-[#8B1E1A] mb-6">
                  "Igniting curiosity, instilling integrity, and inspiring excellence through an inquiry-driven culture."
                </p>
                <p className="text-lg text-[#4F4F4F] mb-8 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                  We believe that education is not just about filling a bucket, but lighting a fire. Our philosophy centers on the child as an active participant in their own learning journey. By fostering a culture of inquiry, we encourage students to question, explore, and discover.
                </p>
                <button className="px-8 py-4 bg-[#1A1A1A] text-white rounded-xl font-bold hover:bg-[#8B1E1A] transition-colors shadow-lg">
                  Read Our Philosophy
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership / Team Teaser */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-5xl lg:text-6xl font-black mb-12 leading-tight text-[#1A1A1A]"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Team</span>
            </h2>
            <p className="text-xl text-[#4F4F4F] max-w-2xl mx-auto mb-16">
              The passionate educators and visionaries driving the Mapleford mission forward.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-4 rounded-3xl shadow-lg hover:shadow-xl transition-all group">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gray-200">
                    <img
                      src={`https://images.unsplash.com/photo-${i === 1 ? '1560250097-0b93528c311a' : i === 2 ? '1573496359142-b8d87734a5a2' : i === 3 ? '1519085360753-af0119f7cbe7' : '1507003211169-0a1dd7228f2d'}?w=600&h=800&fit=crop`}
                      alt="Team Member"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">Leader Name</h3>
                  <p className="text-[#8B1E1A] text-sm font-bold uppercase tracking-wider">Position</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}