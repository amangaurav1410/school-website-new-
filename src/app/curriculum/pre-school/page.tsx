'use client';

import { motion } from 'framer-motion';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function PreSchool() {
    return (
        <div className="min-h-screen bg-white text-[#1A1A1A]">
            <Header />
            <div className="pt-24">
                {/* Hero Section */}
                <section className="relative py-32 lg:py-48 overflow-hidden bg-[#FDF6E3]/30">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D6B25E]/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#8B1E1A]/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm font-bold tracking-[0.3em] text-[#8B1E1A] uppercase mb-4 block"
                        >
                            Nursery | Jr. KG | Sr. KG
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl lg:text-8xl font-bold mb-8 leading-tight"
                            style={{ fontFamily: '"Raleway", sans-serif' }}
                        >
                            Pre-<span className="text-[#8B1E1A]">School</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl lg:text-2xl text-[#4F4F4F] max-w-4xl mx-auto leading-relaxed italic"
                            style={{ fontFamily: '"Lato", sans-serif' }}
                        >
                            "Where curiosity blossoms and imagination leads learning."
                        </motion.p>
                    </div>
                </section>

                {/* Core Philosophy */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square">
                                    <img
                                        src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=800&fit=crop"
                                        alt="Pre-School Learning"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#8B1E1A]/10"></div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <h2 className="text-4xl lg:text-5xl font-black" style={{ fontFamily: '"Raleway", sans-serif' }}>The Foundation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Years</span></h2>
                                <div className="w-20 h-1.5 bg-[#D6B25E] rounded-full"></div>
                                <p className="text-xl text-[#4F4F4F] leading-relaxed">
                                    Through play-based exploration, storytelling, and creative discovery, pre-schoolers
                                    develop early confidence, communication skills, and joy in learning. Our curriculum is designed
                                    to nurture the whole child, focusing on cognitive, social, emotional, and physical growth.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Play-based inquiry approach",
                                        "Creative expression through arts & music",
                                        "Early literacy and mathematical thinking",
                                        "Social-emotional development focus",
                                        "Safe and stimulating environment"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-lg font-semibold">
                                            <span className="w-10 h-10 rounded-full bg-[#FDF6E3] flex items-center justify-center text-[#8B1E1A]">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Curriculum Pillars */}
                <section className="py-32 bg-[#FDF6E3]/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl lg:text-6xl font-black mb-20" style={{ fontFamily: '"Raleway", sans-serif' }}>Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Pillars</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { title: "Cognitive", icon: "🧠", desc: "Developing problem-solving skills and logical reasoning through hands-on activities." },
                                { title: "Physical", icon: "🏃", desc: "Enhancing gross and fine motor skills in our dedicated play arenas and creative zones." },
                                { title: "Socio-Emotional", icon: "❤️", desc: "Building empathy, confidence, and strong interpersonal bonds with peers and mentors." }
                            ].map((pillar, i) => (
                                <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-[#D6B25E]/10 group hover:-translate-y-2 transition-transform">
                                    <div className="text-6xl mb-8 transform transition-transform group-hover:scale-110">{pillar.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="bg-[#8B1E1A] p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                            <div className="relative z-10">
                                <h2 className="text-4xl font-black mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>Start Your Child's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Journey</span></h2>
                                <p className="text-xl mb-12 opacity-90">Experience the unique blend of wisdom and wonder at Mapleford.</p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Link href="/admissions" className="px-10 py-5 bg-white text-[#8B1E1A] rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                                        Admissions Open
                                    </Link>
                                    <Link href="/contact" className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
                                        Visit Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
