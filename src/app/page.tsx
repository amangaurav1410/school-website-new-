'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    const [showFrenchMotto, setShowFrenchMotto] = useState(true);
    const [formData, setFormData] = useState({
        parentName: '',
        contactNumber: '',
        email: '',
        childName: '',
        childDob: '',
        gradeApplying: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Animate motto text sequence
    useEffect(() => {
        const interval = setInterval(() => {
            setShowFrenchMotto(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Fade in animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section with Video */}
            <section className="relative overflow-hidden h-screen">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/WhatsApp Video 2026-01-16 at 09.02.08.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                </div>

                <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center max-w-5xl w-full"
                    >
                        <div className="flex items-center justify-center" style={{ minHeight: '120px' }}>
                            <AnimatePresence mode="wait">
                                {showFrenchMotto ? (
                                    <motion.h1
                                        key="french"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.8 }}
                                        className="font-bold"
                                        style={{
                                            fontFamily: '"Raleway", Arial, Helvetica, sans-serif',
                                            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                                            letterSpacing: '0.05em',
                                            lineHeight: '1.2',
                                            fontSize: 'clamp(28px, 5vw, 56px)',
                                            background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 50%, #D6B25E 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                                        }}
                                    >
                                        Le Savoir | Intégrité | L&apos;Excellence
                                    </motion.h1>
                                ) : (
                                    <motion.h1
                                        key="english"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.8 }}
                                        className="font-bold"
                                        style={{
                                            fontFamily: '"Raleway", Arial, Helvetica, sans-serif',
                                            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                                            letterSpacing: '0.05em',
                                            lineHeight: '1.2',
                                            fontSize: 'clamp(28px, 5vw, 56px)',
                                            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 50%, #FFA500 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                                        }}
                                    >
                                        Knowledge | Integrity | Excellence
                                    </motion.h1>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
                    >
                        <motion.div className="w-1.5 h-3 bg-white/70 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Motto Section - Scrolling Marquee */}
            {/* Motto Section - Modern Marquee */}
            <section className="py-6 bg-gradient-to-r from-amber-50 via-white to-red-50 border-y border-[#D6B25E]/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                <div className="relative z-0 flex whitespace-nowrap overflow-hidden">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                        className="inline-flex items-center"
                    >
                        {[1, 2, 3, 4].map((i) => (
                            <span
                                key={i}
                                className="text-xl md:text-2xl font-bold px-8 uppercase tracking-widest text-[#8B1E1A]"
                                style={{
                                    fontFamily: '"Raleway", sans-serif',
                                    textShadow: '0 2px 4px rgba(139,30,26,0.1)'
                                }}
                            >
                                Igniting Knowledge <span className="text-[#D6B25E] px-2">•</span> Inspiring Integrity <span className="text-[#D6B25E] px-2">•</span> Instilling Excellence <span className="text-[#D6B25E] px-2">•</span>
                            </span>
                        ))}
                    </motion.div>
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                        className="inline-flex items-center"
                    >
                        {[1, 2, 3, 4].map((i) => (
                            <span
                                key={i}
                                className="text-xl md:text-2xl font-bold px-8 uppercase tracking-widest text-[#8B1E1A]"
                                style={{
                                    fontFamily: '"Raleway", sans-serif',
                                    textShadow: '0 2px 4px rgba(139,30,26,0.1)'
                                }}
                            >
                                Igniting Knowledge <span className="text-[#D6B25E] px-2">•</span> Inspiring Integrity <span className="text-[#D6B25E] px-2">•</span> Instilling Excellence <span className="text-[#D6B25E] px-2">•</span>
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* The Mapleford Edge */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-5xl mb-4 block">🍁</span>
                            <h2
                                className="text-4xl lg:text-5xl font-bold mb-6"
                                style={{
                                    fontFamily: "'Raleway', Arial, Helvetica, sans-serif",
                                    color: '#3B1A17'
                                }}
                            >
                                The Mapleford Edge
                            </h2>
                            <div className="space-y-5 text-lg" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                <p className="text-xl font-medium" style={{ color: '#8B1E1A', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                    Honoring the three-decade legacy of Megacity High School
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Redefining the future of learning',
                                        'Blending CBSE curriculum with global pathways',
                                        'Academic collaboration with Maple Bear Canadian School'
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15, duration: 0.5 }}
                                            className="flex items-start"
                                        >
                                            <span className="w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0" style={{ background: 'linear-gradient(145deg, #D6B25E, #C4A24E)' }}></span>
                                            <span className="text-lg">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <p className="italic font-medium text-xl mt-8 p-6 rounded-2xl" style={{ color: '#5A1411', background: 'linear-gradient(135deg, rgba(214,178,94,0.1), rgba(139,30,26,0.05))' }}>
                                    &quot;This is not just a transition — it&apos;s an evolution with purpose.&quot;
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-3xl overflow-hidden shadow-2xl relative"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=800&fit=crop" // New Campus/Edge Image
                                    alt="The Mapleford Edge"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B1E1A] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D6B25E] rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-5xl mb-4 block">📚</span>
                            <h2
                                className="text-4xl lg:text-5xl font-bold mb-6"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#3B1A17' }}
                            >
                                Curriculum
                            </h2>
                            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#8B1E1A' }}>
                                A Seamless Blend of Two Powerful Systems
                            </h3>

                            <div
                                className="inline-flex items-center gap-4 px-8 py-4 rounded-full mb-8"
                                style={{ background: 'linear-gradient(135deg, rgba(214,178,94,0.2), rgba(139,30,26,0.1))' }}
                            >
                                <span className="text-xl font-semibold" style={{ color: '#5A1411' }}>Canadian Pedagogy</span>
                                <span className="text-2xl">+</span>
                                <span className="text-xl font-semibold" style={{ color: '#5A1411' }}>CBSE Curriculum</span>
                            </div>

                            <p className="text-lg leading-relaxed mb-8" style={{ color: '#4F4F4F', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                At Mapleford International School, learning is shaped by a powerful collaboration with{' '}
                                <span className="font-semibold" style={{ color: '#8B1E1A' }}>Maple Bear Global Schools, Canada</span>
                                —a world leader in bilingual, inquiry-based education operating across 35+ countries
                                and 450+ schools. Through this framework, our students benefit from the proven strengths
                                of the Canadian education system, consistently ranked among the world&apos;s best, while staying
                                firmly aligned to India&apos;s robust CBSE curriculum.
                            </p>


                        </motion.div>

                        {/* Right Side - Visual Elements */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-3xl overflow-hidden shadow-2xl relative aspect-square lg:aspect-auto h-full"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1000&h=1200&fit=crop" // Students studying / Canadian + CBSE vibe
                                    alt="Canadian Pedagogy + CBSE Curriculum"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#D6B25E]/20">
                                    <p className="font-bold text-[#8B1E1A]">Global Standards.</p>
                                    <p className="font-bold text-[#3B1A17]">Indian Values.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Continuum of Learning */}
            <section className="py-24 bg-white" id="continuum">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-5xl mb-4 block">🎓</span>
                        <h2
                            className="text-4xl lg:text-5xl font-bold mb-6"
                            style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#3B1A17' }}
                        >
                            The Continuum of Learning
                        </h2>
                        <p className="text-xl max-w-4xl mx-auto" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                            Every stage of learning is a milestone in growth — thoughtfully designed to nurture young minds
                            into competent whizz-kids with wisdom and wonder.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                stage: 'Pre-School',
                                grades: '(Nursery, Jr. KG, Sr. KG)',
                                description: 'The foundation years where curiosity blossoms and imagination leads learning. Through play-based exploration, storytelling, and creative discovery.',
                                image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop',
                                color: '#E8F5E9'
                            },
                            {
                                stage: 'Elementary',
                                grades: '(Grades 1–5)',
                                description: 'The building years of knowledge and expression — where students strengthen academics, values, and creativity through interactive classrooms.',
                                image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
                                color: '#E3F2FD'
                            },
                            {
                                stage: 'High School',
                                grades: '(Grades 6–10)',
                                description: "The transformation years that foster independence, discipline, and vision. With CBSE's structured framework and global exposure.",
                                image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
                                color: '#FFF3E0'
                            }
                        ].map((stage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={stage.image}
                                        alt={`${stage.stage} Class`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 text-center" style={{ background: stage.color }}>
                                    <h3
                                        className="text-2xl font-bold mb-2"
                                        style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#3B1A17' }}
                                    >
                                        {stage.stage}
                                    </h3>
                                    <p className="font-semibold mb-4" style={{ color: '#8B1E1A' }}>
                                        {stage.grades}
                                    </p>
                                    <p style={{ color: '#4F4F4F', lineHeight: '1.7', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>{stage.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <Link
                        href="/programs"
                        className="inline-block px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                        style={{
                            background: 'linear-gradient(135deg, #8B1E1A 0%, #5A1411 100%)',
                            color: '#FFFFFF',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        Explore Our Curriculum
                    </Link>
                </div>
            </section>

            {/* STEAM Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50/50 to-transparent -z-10"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column: Interactive Cards */}
                        <div className="space-y-5">
                            {[
                                { title: 'Science', query: 'with Imagination', icon: '🔬', color: 'from-blue-50 to-blue-100', border: 'border-blue-200', delay: 0 },
                                { title: 'Technology', query: 'with Innovation', icon: '💻', color: 'from-purple-50 to-purple-100', border: 'border-purple-200', delay: 0.1 },
                                { title: 'Engineering', query: 'with Design', icon: '⚙️', color: 'from-orange-50 to-orange-100', border: 'border-orange-200', delay: 0.2 },
                                { title: 'Arts', query: 'with Purpose', icon: '🎨', color: 'from-pink-50 to-pink-100', border: 'border-pink-200', delay: 0.3 },
                                { title: 'Mathematics', query: 'with Vision', icon: '📐', color: 'from-green-50 to-green-100', border: 'border-green-200', delay: 0.4 }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`flex items-center p-6 rounded-2xl border ${item.border} bg-white relative overflow-hidden group cursor-default transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
                                    initial={{ x: -40, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: item.delay, duration: 0.5, ease: "easeOut" }}
                                >
                                    {/* Card Hover Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    <div className="relative z-10 flex items-center w-full">
                                        <span className="text-4xl mr-6 bg-gray-50 group-hover:bg-white w-16 h-16 flex items-center justify-center rounded-full shadow-sm group-hover:shadow-md transition-all duration-500 group-hover:scale-110">{item.icon}</span>
                                        <div className="text-left flex-grow">
                                            <h4 className="text-2xl font-bold text-[#3B1A17] group-hover:text-black transition-colors duration-300" style={{ fontFamily: "'Raleway', sans-serif" }}>{item.title}</h4>
                                            <p className="text-[#8B1E1A] font-medium italic text-sm group-hover:text-[#5A1411] transition-colors duration-300" style={{ fontFamily: '"Lato", sans-serif' }}>{item.query}</p>
                                        </div>
                                        <motion.div
                                            className="ml-4 opacity-0 group-hover:opacity-100 text-[#8B1E1A]"
                                            initial={{ x: -10 }}
                                            whileHover={{ x: 0 }}
                                        >
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Column: Description */}
                        <motion.div
                            className="text-left relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.span
                                className="text-6xl mb-6 block"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, repeatDelay: 2 }}
                            >
                                💡
                            </motion.span>

                            <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight" style={{ color: '#3B1A17', fontFamily: "'Raleway', sans-serif" }}>
                                Where Logic Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Imagination</span>
                            </h2>

                            <div className="space-y-6 text-lg leading-relaxed text-[#4F4F4F]" style={{ fontFamily: '"Lato", sans-serif' }}>
                                <p className="border-l-4 border-[#D6B25E] pl-6 py-1">
                                    At Mapleford International School, <strong>STEAM education</strong> blends Science, Technology, Engineering, Arts, and Mathematics to cultivate learners who can think critically, design creatively, and innovate purposefully.
                                </p>
                                <p>
                                    Our classrooms are spaces of exploration — where scientific curiosity merges with artistic creativity, and technology becomes a canvas for expression.
                                </p>
                                <p>
                                    Students engage in hands-on design projects, robotics, visual arts, coding, and creative problem-solving learning to see challenges from multiple perspectives.
                                </p>
                            </div>

                            <div className="mt-10">
                                <Link href="/programs" className="group inline-flex items-center text-[#8B1E1A] font-bold text-lg hover:text-[#D6B25E] transition-colors duration-300">
                                    Discover our Labs
                                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Campus Section */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-5xl mb-4 block">🏫</span>
                            <h2
                                className="text-4xl lg:text-5xl font-bold mb-6"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#3B1A17' }}
                            >
                                Campus
                            </h2>
                            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#8B1E1A' }}>
                                A Space That Opens Horizons
                            </h3>
                            <p className="text-lg mb-6" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                Set across a sprawling 4-acre campus, Mapleford International School offers students
                                the freedom to explore, learn, and thrive in an open, thoughtfully designed environment.
                            </p>
                            <p className="mb-8" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                Lush green landscapes, modern classrooms, innovation labs, sports arenas, and creative
                                spaces come together to create an environment that supports academic focus, physical
                                vitality, and overall well-being.
                            </p>
                            <Link
                                href="/campus"
                                className="inline-block px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                                style={{
                                    background: 'linear-gradient(135deg, #8B1E1A 0%, #5A1411 100%)',
                                    color: '#FFFFFF',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}
                            >
                                Explore Our Campus
                            </Link>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="aspect-video rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&h=900&fit=crop"
                                    alt="Campus Overview"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D6B25E]/20 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sports Arena Section */}
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
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="aspect-video rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="aspect-video rounded-3xl overflow-hidden shadow-2xl"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1577412647305-991150c7d163?w=1600&h=900&fit=crop"
                                        alt="Sports Facilities - Students Playing"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="order-1 lg:order-2"
                        >
                            <span className="text-5xl mb-4 block">⚽</span>
                            <h2
                                className="text-4xl lg:text-5xl font-bold mb-6"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#3B1A17' }}
                            >
                                Sports Arena
                            </h2>
                            <p
                                className="text-2xl font-semibold mb-4"
                                style={{ color: '#8B1E1A', fontFamily: "'Raleway', Arial, Helvetica, sans-serif" }}
                            >
                                Chasing Goals! Soaring Spirits High!
                            </p>
                            <p className="text-lg mb-6 italic" style={{ color: '#5A1411', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                Where passion charges the field — and every sport, a lesson in excellence
                            </p>
                            <p className="mb-6" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                At Mapleford International School, growth isn&apos;t limited to books and classrooms — it
                                thrives on the field, on the court, and in every challenge that builds spirit and strength.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {['Football', 'Badminton', 'Tennis', 'Athletics'].map((sport, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="flex items-center p-3 rounded-xl bg-gradient-to-r from-[#D6B25E]/10 to-transparent"
                                    >
                                        <span className="w-3 h-3 rounded-full mr-3" style={{ background: '#D6B25E' }}></span>
                                        <span style={{ color: '#4F4F4F' }}>{sport}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Admission Enquiry Form - Image Left, Form Right */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-100">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#D6B25E]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#8B1E1A]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Image and Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                            className="text-[#3B1A17]"
                        >
                            <span className="text-5xl mb-4 block">📝</span>
                            <h2
                                className="text-4xl lg:text-5xl font-bold mb-4"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif" }}
                            >
                                Admission Enquiry
                            </h2>
                            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#8B1E1A' }}>
                                Connect with Mapleford
                            </h3>
                            <p className="text-[#4F4F4F] mb-8 text-lg leading-relaxed" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                Do you have questions about admissions, curriculum, or campus visits? We&apos;re here to
                                assist you at every step of your child&apos;s educational journey.
                            </p>

                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop"
                                    alt="Students at Mapleford"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <a
                                    href="https://wa.me/919000568416"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl w-full sm:w-auto"
                                    style={{
                                        background: 'linear-gradient(135deg, #8B1E1A 0%, #5A1411 100%)',
                                        color: '#FFFFFF',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}
                                >
                                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                    <div className="flex flex-col items-start leading-tight">
                                        <span className="text-sm font-medium opacity-90">WhatsApp Us</span>
                                        <span className="text-lg font-bold">+91 90005 68416</span>
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Side - Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {!formSubmitted ? (
                                <form
                                    className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl"
                                    style={{ border: '1px solid rgba(214,178,94,0.3)' }}
                                    onSubmit={async (e) => {
                                        e.preventDefault();
                                        try {
                                            const res = await fetch('/api/inquiries', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify(formData)
                                            });
                                            if (res.ok) {
                                                setFormSubmitted(true);
                                                setFormData({
                                                    parentName: '',
                                                    contactNumber: '',
                                                    email: '',
                                                    childName: '',
                                                    childDob: '',
                                                    gradeApplying: '',
                                                    message: ''
                                                });
                                            } else {
                                                alert('Failed to submit. Please try again.');
                                            }
                                        } catch (error) {
                                            console.error('Submission error:', error);
                                            alert('An error occurred. Please try again.');
                                        }
                                    }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label className="block text-gray-700 mb-2 font-medium text-sm">Parent / Guardian Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.parentName}
                                                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                                                placeholder="Enter name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2 font-medium text-sm">Contact Number</label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.contactNumber}
                                                onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                                                placeholder="Enter number"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2 font-medium text-sm">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                                            placeholder="Enter email"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label className="block text-gray-700 mb-2 font-medium text-sm">Child&apos;s Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.childName}
                                                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                                                placeholder="Enter child&apos;s name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2 font-medium text-sm">Date of Birth</label>
                                            <input
                                                type="date"
                                                required
                                                value={formData.childDob}
                                                onChange={(e) => setFormData({ ...formData, childDob: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2 font-medium text-sm">Grade Applying For</label>
                                        <select
                                            required
                                            value={formData.gradeApplying}
                                            onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                                        >
                                            <option value="">Select grade</option>
                                            <option value="toddler">Toddler</option>
                                            <option value="nursery">Nursery</option>
                                            <option value="jr-kg">Jr. KG</option>
                                            <option value="sr-kg">Sr. KG</option>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => (
                                                <option key={g} value={`grade-${g}`}>Grade {g}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-gray-700 mb-2 font-medium text-sm">Message (Optional)</label>
                                        <textarea
                                            rows={3}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all resize-none"
                                            placeholder="Any specific questions?"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 px-8 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
                                        style={{
                                            background: 'linear-gradient(135deg, #8B1E1A 0%, #5A1411 100%)',
                                            color: '#FFFFFF',
                                            boxShadow: '0 8px 24px rgba(90,20,17,0.3)',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        Submit Enquiry
                                    </button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-center bg-white p-12 rounded-3xl shadow-2xl"
                                >
                                    <div className="text-6xl mb-6">✅</div>
                                    <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
                                    <p className="text-lg text-gray-600">
                                        We appreciate your interest. Our team shall reach out to you promptly.
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
