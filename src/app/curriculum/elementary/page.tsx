'use client';

import { motion } from 'framer-motion';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function ElementarySchool() {
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
                            Grades 1–5
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl lg:text-8xl font-bold mb-8 leading-tight"
                            style={{ fontFamily: '"Raleway", sans-serif' }}
                        >
                            Elementary <span className="text-[#8B1E1A]">School</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl lg:text-3xl text-[#4F4F4F] max-w-4xl mx-auto leading-relaxed italic"
                            style={{ fontFamily: '"Lato", sans-serif' }}
                        >
                            "Building knowledge and strengthening values through real-world applications."
                        </motion.p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1 space-y-8"
                            >
                                <h2 className="text-4xl lg:text-5xl font-black" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>The Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Years</span></h2>
                                <div className="w-20 h-1.5 bg-[#D6B25E] rounded-full"></div>
                                <p className="text-xl text-[#4F4F4F] leading-relaxed">
                                    The building years of knowledge and expression — where students strengthen academics, values, and creativity.
                                    Learning becomes meaningful through interactive classrooms and pedagogical methods that encourage deep understanding.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Inquiry Led", desc: "Developing analytical and reasoning skills." },
                                        { title: "Value Centric", desc: "Grounded in character and ethical responsibility." },
                                        { title: "Collaborative", desc: "Learning through teamwork and shared goals." },
                                        { title: "Skill Focused", desc: "Emphasizing digital fluency and communication." }
                                    ].map((item, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-[#FDF6E3]/50 border border-[#D6B25E]/10">
                                            <h4 className="font-bold text-[#8B1E1A] mb-2">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2"
                            >
                                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
                                    <img
                                        src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop"
                                        alt="Elementary Learning"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Holistic Expansion */}
                <section className="py-32 bg-[#1A1A1A] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Textbooks</span></h2>
                            <p className="text-xl text-white/70 max-w-3xl mx-auto text-center">We ensure students have a balanced exposure to academics, arts, and physical education.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { title: "Languages", icon: "🗣️" },
                                { title: "Sciences", icon: "🔬" },
                                { title: "Mathematics", icon: "📐" },
                                { title: "Visual Arts", icon: "🎨" }
                            ].map((subject, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                                    <div className="text-5xl mb-6">{subject.icon}</div>
                                    <h4 className="text-xl font-bold">{subject.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="bg-[#D6B25E] p-16 rounded-[4rem] text-[#1A1A1A] shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-4xl lg:text-5xl font-black mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>Secure Your Child's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Future</span></h2>
                                <p className="text-xl mb-12 opacity-90 italic">Nurturing competent whizz-kids with wisdom and wonder.</p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Link href="/admissions" className="px-10 py-5 bg-[#1A1A1A] text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                                        Admissions Open
                                    </Link>
                                    <Link href="/contact" className="px-10 py-5 bg-transparent border-2 border-[#1A1A1A]/30 text-[#1A1A1A] rounded-2xl font-bold text-lg hover:bg-[#1A1A1A]/5 transition-colors">
                                        Enquire Now
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
