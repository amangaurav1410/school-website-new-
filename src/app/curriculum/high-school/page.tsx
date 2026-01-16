'use client';

import { motion } from 'framer-motion';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function HighSchool() {
    return (
        <div className="min-h-screen bg-white text-[#1A1A1A]">
            <Header />
            <div className="pt-24">
                {/* Hero Section */}
                <section className="relative py-32 lg:py-48 overflow-hidden bg-[#FDF6E3]/30">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D6B25E]/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#8B1E1A]/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm font-bold tracking-[0.3em] text-[#8B1E1A] uppercase mb-4 block"
                        >
                            Grades 6–10
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl lg:text-8xl font-bold mb-8 leading-tight"
                            style={{ fontFamily: '"Raleway", sans-serif' }}
                        >
                            High <span className="text-[#8B1E1A]">School</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl lg:text-3xl text-[#4F4F4F] max-w-4xl mx-auto leading-relaxed italic"
                            style={{ fontFamily: '"Lato", sans-serif' }}
                        >
                            "Fostering independence, discipline, and vision for the leaders of tomorrow."
                        </motion.p>
                    </div>
                </section>

                {/* Transition Section */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5] relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=1500&fit=crop"
                                        alt="High School Learning"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#8B1E1A]/40 to-transparent"></div>
                                    <div className="absolute bottom-12 left-12 right-12 text-white">
                                        <p className="text-2xl font-bold italic">"Ready to lead, innovate, and explore the world beyond boundaries."</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <h2 className="text-4xl lg:text-5xl font-black leading-tight" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>The Transformation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Years</span></h2>
                                <div className="w-20 h-1.5 bg-[#D6B25E] rounded-full"></div>
                                <p className="text-xl text-[#4F4F4F] leading-relaxed">
                                    With CBSE's structured framework and global exposure, learners evolve into confident aspirants.
                                    We focus on critical thinking, career readiness, and the development of a lifelong learning mindset.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: "CBSE Curriculum Excellence", desc: "Rigorous academic preparation following national standards." },
                                        { title: "Global Perspective", desc: "Integrating international insights and cross-cultural awareness." },
                                        { title: "Career & Life Skills", desc: "Guidance and workshops for future academic and professional pathways." }
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-6 items-start">
                                            <div className="w-12 h-12 rounded-2xl bg-[#8B1E1A]/5 flex items-center justify-center text-[#8B1E1A] font-bold shrink-0">0{i + 1}</div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                                <p className="text-gray-600">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* STEAM Focus */}
                <section className="py-32 bg-[#FDF6E3]/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl lg:text-5xl font-black mb-8" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>STEAM & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Innovation</span></h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-20 text-center">Where logic meets imagination across every discipline.</p>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                { label: "Science", icon: "🔬" },
                                { label: "Technology", icon: "💻" },
                                { label: "Engineering", icon: "⚙️" },
                                { label: "Arts", icon: "🎨" },
                                { label: "Maths", icon: "📐" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-[#D6B25E]/10 hover:shadow-2xl transition-all hover:-translate-y-2">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h4 className="font-bold text-[#8B1E1A]">{item.label}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="bg-[#1A1A1A] p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8B1E1A] to-transparent opacity-30"></div>
                            <div className="relative z-10">
                                <h2 className="text-4xl font-black mb-8" style={{ fontFamily: '"Raleway", sans-serif', color: '#FFFFFF' }}>The Journey into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Leadership</span></h2>
                                <p className="text-xl mb-12 opacity-90">Prepare for a future without limits.</p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Link href="/admissions" className="px-10 py-5 bg-[#D6B25E] text-[#1A1A1A] rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                                        Enquire Now
                                    </Link>
                                    <Link href="/contact" className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
                                        Visit Campus
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
