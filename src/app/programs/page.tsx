'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 min-h-screen bg-white text-[#1A1A1A]">
        {/* Curated Hero */}
        <section className="relative py-32 lg:py-52 overflow-hidden bg-[#FDF6E3]/30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')] opacity-30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1A1A1A]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-sm font-bold tracking-[0.5em] text-[#8B1E1A] uppercase mb-6 block">Our Academic Ethos</span>
              <h1
                className="text-6xl lg:text-9xl font-bold mb-8 leading-[0.9]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Wisdom & <br />
                <span className="text-[#8B1E1A]">Wonder.</span>
              </h1>
              <p className="text-xl lg:text-3xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed italic">
                "Where the rigor of the CBSE curriculum meets the creative inquiry of Canadian pedagogy."
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Mapleford Edge */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>The Global <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Advantage</span></h2>
                <div className="w-24 h-2 bg-[#8B1E1A] rounded-full mb-12"></div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Mapleford International School is a proud partner of <strong>Maple Bear Global Schools</strong>, spanning 35+ countries. We bring the world-renowned Canadian education system—consistently ranked among the top 5 globally—to India.
                </p>
                <div className="flex gap-8">
                  <div className="text-center p-6 rounded-3xl bg-[#FDF6E3] border border-[#D6B25E]/20">
                    <div className="text-3xl font-bold text-[#8B1E1A]">35+</div>
                    <div className="text-xs uppercase tracking-widest font-bold text-gray-500 mt-2">Countries</div>
                  </div>
                  <div className="text-center p-6 rounded-3xl bg-[#FDF6E3] border border-[#D6B25E]/20">
                    <div className="text-3xl font-bold text-[#8B1E1A]">500+</div>
                    <div className="text-xs uppercase tracking-widest font-bold text-gray-500 mt-2">Schools</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                  <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop" className="w-full h-full object-cover" alt="Student success" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#D6B25E] rounded-full -z-0 blur-3xl opacity-20"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Learning Levels */}
        <section className="py-32 bg-[#1A1A1A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-5xl lg:text-7xl font-black mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>Our Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Paths</span></h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto italic">A seamless continuum from early discovery to future leadership.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Pre-School",
                  href: "/curriculum/pre-school",
                  icon: "🌱",
                  desc: "Nursery to Sr. KG. Focusing on play, wonder, and sensory discovery.",
                  color: "bg-[#8B1E1A]"
                },
                {
                  title: "Elementary",
                  href: "/curriculum/elementary",
                  icon: "📖",
                  desc: "Grades 1 to 5. Building blocks of core knowledge and character.",
                  color: "bg-[#D6B25E]"
                },
                {
                  title: "High School",
                  href: "/curriculum/high-school",
                  icon: "🎓",
                  desc: "Grades 6 to 10. Rigorous academic excellence and future vision.",
                  color: "bg-white text-[#1A1A1A]"
                }
              ].map((path, i) => (
                <Link key={i} href={path.href} className="group">
                  <motion.div
                    whileHover={{ y: -20 }}
                    className="bg-white/5 border border-white/10 p-12 rounded-[4rem] h-full hover:bg-white/10 transition-all flex flex-col"
                  >
                    <div className={`w-20 h-20 ${path.color} rounded-3xl flex items-center justify-center text-4xl mb-10 shadow-xl group-hover:scale-110 transition-transform`}>{path.icon}</div>
                    <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>{path.title}</h3>
                    <p className="text-lg text-white/60 mb-12 flex-grow leading-relaxed">{path.desc}</p>
                    <div className="text-[#D6B25E] font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                      Explore Curriculum <span>→</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* STEAM - Redesigned Component */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-black mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>The STEAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Spirit</span></h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto italic">Where logic meets intuition, and science meets soul.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-20">
              {[
                { l: "S", c: "#2563eb", name: "Science" },
                { l: "T", c: "#16a34a", name: "Tech" },
                { l: "E", c: "#ea580c", name: "Engg" },
                { l: "A", c: "#9333ea", name: "Arts" },
                { l: "M", c: "#dc2626", name: "Math" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-32 h-32 rounded-full border-2 border-gray-100 flex flex-col items-center justify-center bg-white shadow-xl"
                >
                  <span className="text-4xl font-black mb-1" style={{ color: item.c }}>{item.l}</span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-gray-400">{item.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-[#FDF6E3]/30 p-12 lg:p-20 rounded-[4rem] border border-[#D6B25E]/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <p className="text-2xl font-light text-[#1A1A1A] leading-relaxed italic">
                  "Not just subjects, but lenses. Our STEAM approach encourages students to look at a problem from five different perspectives, fostering a mind that is both analytical and empathetic."
                </p>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#8B1E1A] mt-3"></div>
                    <p className="text-lg text-gray-600">Hands-on robotics and coding labs</p>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#8B1E1A] mt-3"></div>
                    <p className="text-lg text-gray-600">Visual arts integrated into scientific inquiry</p>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#8B1E1A] mt-3"></div>
                    <p className="text-lg text-gray-600">Design thinking workshops for real-world solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admission CTA */}
        <section className="py-32 bg-[#8B1E1A] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>Invest in Their <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Future.</span></h2>
            <p className="text-xl text-white/70 mb-12">Our admissions for the upcoming academic year are now open. Secure your child's seat today.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/admissions" className="px-10 py-5 bg-white text-[#8B1E1A] font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all">Begin Admission</Link>
              <Link href="/contact" className="px-10 py-5 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">Schedule a Tour</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}