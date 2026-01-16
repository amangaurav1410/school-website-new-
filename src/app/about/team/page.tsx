'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="pt-24">
            <div className="min-h-screen bg-white">
              {/* Hero Section */}
              <section className="relative py-32 overflow-hidden bg-[#FDF6E3]/30">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D6B25E]/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#8B1E1A]/5 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-bold tracking-[0.3em] text-[#8B1E1A] uppercase mb-4 block"
                  >
                    Leadership & Vision
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
                    style={{ fontFamily: '"Raleway", sans-serif', color: '#3B1A17' }}
                  >
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1E1A] to-[#D6B25E]">Team</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl lg:text-2xl text-[#4F4F4F] max-w-4xl mx-auto leading-relaxed"
                    style={{ fontFamily: '"Lato", sans-serif' }}
                  >
                    The heart of Mapleford is an empathetic, compassionate, dynamic, and visionary team committed to nurturing future leaders.
                  </motion.p>
                </div>
              </section>

              {/* Leadership Messages */}
              <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Chairman's Message */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative order-2 lg:order-1"
                    >
                      <div className="absolute -inset-4 bg-[#FDF6E3] rounded-[2rem] -z-10 transform rotate-3"></div>
                      <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-[#D6B25E]/20">
                        <span className="text-4xl mb-6 block">✉️</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: '"Raleway", sans-serif', color: '#3B1A17' }}>Chairman's Message</h2>
                        <div className="space-y-6 text-lg text-[#4F4F4F] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                          <p>
                            "At Mapleford International School, we believe that education is not merely the transfer of knowledge but the cultivation of character, curiosity, and compassion. Children learn best when they feel valued and inspired to discover who they are."
                          </p>
                          <p>
                            "I remains deeply committed to fostering a school community where every child feels empowered to learn, lead, and contribute meaningfully to society. Together, let us shape a future where every learning matters."
                          </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-[#D6B25E]/30">
                          <p className="font-bold text-xl text-[#3B1A17]">P. Subba Reddy</p>
                          <p className="text-[#8B1E1A] font-medium">Chairman, Mapleford International School</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="order-1 lg:order-2"
                    >
                      <div className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[4/5]">
                        <img
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
                          alt="Chairman"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Principal's Message */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[4/5]">
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                          alt="Principal"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute -inset-4 bg-[#FDF6E3] rounded-[2rem] -z-10 transform -rotate-2"></div>
                      <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-[#D6B25E]/20">
                        <span className="text-4xl mb-6 block">🎓</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: '"Raleway", sans-serif', color: '#3B1A17' }}>Principal's Message</h2>
                        <div className="space-y-6 text-lg text-[#4F4F4F] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                          <p>
                            "Education, to us, is not a race but a journey. It is augmented through attentive listening, thoughtful guidance, and learning experiences that encourage children to think independently."
                          </p>
                          <p>
                            "Our faculty brings together expertise and empathy, ensuring that every learner is seen not just for their academic abilities, but for the individual they are becoming. We aim to shape individuals who enrich the world with their integrity."
                          </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-[#D6B25E]/30">
                          <p className="font-bold text-xl text-[#3B1A17]">Ms. Sarah Thompson</p>
                          <p className="text-[#8B1E1A] font-medium">Principal, Mapleford International School</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Team Members Grid */}
              <section className="py-24 bg-[#FDF6E3]/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                  >
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#3B1A17] mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>
                      Leadership Team
                    </h2>
                    <div className="w-24 h-1.5 bg-[#D6B25E] mx-auto rounded-full"></div>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      {
                        name: "P. Subba Reddy",
                        role: "Chairman",
                        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
                        bio: "Visionary leader with three decades of experience in education, guiding Mapleford's transformation and growth."
                      },
                      {
                        name: "Ms. Sarah Thompson",
                        role: "Principal",
                        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
                        bio: "Experienced educator dedicated to fostering academic excellence and holistic development in every student."
                      },
                      {
                        name: "Mr. David Kumar",
                        role: "Vice Principal",
                        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
                        bio: "Committed to maintaining high academic standards and supporting student success across all grade levels."
                      }
                    ].map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-[2rem] shadow-lg overflow-hidden border border-[#D6B25E]/10 group hover:shadow-2xl transition-all duration-500"
                      >
                        <div className="aspect-[4/5] overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-8 text-center bg-white">
                          <h3 className="text-2xl font-bold text-[#3B1A17] mb-2">{member.name}</h3>
                          <p className="text-[#8B1E1A] font-bold uppercase tracking-widest text-sm mb-4">{member.role}</p>
                          <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#8B1E1A] to-[#5A1411] rounded-[3rem] p-16 shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="relative z-10">
                      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>
                        Join Our Mission
                      </h2>
                      <p className="text-xl text-[#FDF6E3]/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Be part of a community dedicated to shaping young minds and creating future leaders grounded in integrity.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                          href="/careers"
                          className="bg-white text-[#8B1E1A] px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                          View Opportunities
                        </Link>
                        <Link
                          href="/contact"
                          className="bg-transparent text-white border-2 border-white/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}