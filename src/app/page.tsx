'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [activeSubject, setActiveSubject] = useState(0);
  const [activePillar, setActivePillar] = useState(0);
  const [isPillarPaused, setIsPillarPaused] = useState(false);
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

  const heroImages = [
    'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1920&h=1080&fit=crop&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80',
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1920&h=1080&fit=crop&q=80'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Auto-rotate pillars
  useEffect(() => {
    if (!isPillarPaused) {
      const pillarInterval = setInterval(() => {
        setActivePillar((prev) => (prev + 1) % 4);
      }, 5000);
      return () => clearInterval(pillarInterval);
    }
  }, [isPillarPaused]);

  // Animate motto text sequence on each slide
  useEffect(() => {
    // Reset to French on slide change
    setShowFrenchMotto(true);

    // After 2.5 seconds, switch to English
    const timer = setTimeout(() => {
      setShowFrenchMotto(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-white">
      <Header />


      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen">
        <div className="relative h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Overlay content on slider */}
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl w-full"
            >
              {/* Content container */}
              <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 max-w-4xl mx-auto">
                {/* Animated Motto Sequence */}
                <div className="mb-10" style={{ minHeight: '200px' }}>
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
                          fontFamily: '"Playfair Display", serif',
                          background: 'linear-gradient(135deg, rgb(214, 178, 94) 0%, rgb(245, 242, 235) 50%, rgb(214, 178, 94) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          letterSpacing: '0.03em',
                          lineHeight: '1.3',
                          fontSize: '48px'
                        }}
                      >
                        Le Savoir | Intégrité | L'Excellence
                      </motion.h1>
                    ) : (
                      <motion.div
                        key="english"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-3"
                        style={{
                          fontFamily: '"Playfair Display", serif',
                          background: 'linear-gradient(135deg, rgb(214, 178, 94) 0%, rgb(245, 242, 235) 50%, rgb(214, 178, 94) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          letterSpacing: '0.03em',
                          lineHeight: '1.3',
                          fontSize: '48px',
                          fontWeight: 'bold'
                        }}
                      >
                        <div>Knowledge that Enlightens</div>
                        <div>Integrity that Endures</div>
                        <div>Excellence that Inspires</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA Buttons - compact modern style */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link
                    href="/about"
                    className="px-10 py-4 text-base font-semibold transition-all duration-300 font-['Inter']"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: '#8B1E1A',
                      borderRadius: '50px',
                      boxShadow: '0 8px 25px rgba(90, 20, 17, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 12px 35px rgba(214, 178, 94, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(90, 20, 17, 0.2)';
                    }}
                    aria-label="Explore Maple Ford"
                  >
                    Explore Maple Ford
                  </Link>
                  <button
                    onClick={() => setShowEnquiryPopup(true)}
                    className="px-10 py-4 text-base font-semibold transition-all duration-300 font-['Inter']"
                    style={{
                      background: 'linear-gradient(135deg, #9B2621, #6F1613)',
                      color: '#FFFFFF',
                      borderRadius: '50px',
                      boxShadow: '0 8px 25px rgba(90, 20, 17, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 12px 35px rgba(214, 178, 94, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(90, 20, 17, 0.3)';
                    }}
                    aria-label="Open admission enquiry form"
                  >
                    Admission Enquiry
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Slider dots */}
          <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col space-y-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Pillars / Core Values */}
      <section
        className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Core Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The foundational principles that guide every aspect of education at Maple Ford International School.
            </p>
          </motion.div>

          {/* Progress Indicators with Names */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12 px-4">
            {[
              { title: "Academic Excellence", shortTitle: "Academic", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-500" },
              { title: "Character Development", shortTitle: "Character", color: "from-green-500 to-green-600", bgColor: "bg-green-500" },
              { title: "Innovation & Creativity", shortTitle: "Innovation", color: "from-purple-500 to-purple-600", bgColor: "bg-purple-500" },
              { title: "Global Citizenship", shortTitle: "Global", color: "from-red-500 to-red-600", bgColor: "bg-red-500" }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 cursor-pointer group"
                onClick={() => setActivePillar(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`relative w-20 lg:w-24 h-1.5 rounded-full overflow-hidden transition-all duration-300 ${activePillar === index ? 'shadow-lg' : 'shadow-sm'}`}>
                  <div className={`absolute inset-0 bg-gray-200 rounded-full`}></div>
                  {activePillar === index ? (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${pillar.color} rounded-full`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: isPillarPaused ? 0 : 5, ease: 'linear' }}
                      key={`${activePillar}-${isPillarPaused}`}
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gray-200 rounded-full`}></div>
                  )}
                </div>
                <span className={`text-xs lg:text-sm font-semibold transition-all duration-300 ${activePillar === index ? `bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent` : 'text-gray-400 group-hover:text-gray-600'}`}>
                  {pillar.shortTitle}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Single Pillar Display */}
          <div className="relative h-[550px] lg:h-[450px]">
            {[
              {
                title: "Academic Excellence",
                description: "Rigorous curriculum ensuring mastery of core subjects and critical thinking skills.",
                icon: "🎓",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-500"
              },
              {
                title: "Character Development",
                description: "Fostering integrity, empathy, and leadership through values-based education.",
                icon: "💪",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-500"
              },
              {
                title: "Innovation & Creativity",
                description: "Encouraging creative expression and technological proficiency in all learners.",
                icon: "🚀",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-500"
              },
              {
                title: "Global Citizenship",
                description: "Preparing students to thrive in an interconnected world with cultural awareness.",
                icon: "🌍",
                color: "from-red-500 to-red-600",
                bgColor: "bg-red-500"
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activePillar === index ? 1 : 0,
                  scale: activePillar === index ? 1 : 0.9,
                  x: activePillar === index ? 0 : activePillar > index ? -100 : 100
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-center ${activePillar === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                {/* Content Side - Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: activePillar === index ? 1 : 0,
                    x: activePillar === index ? 0 : -50
                  }}
                  transition={{ duration: 0.8, delay: activePillar === index ? 0.2 : 0 }}
                  className="space-y-6 relative z-10 order-2 lg:order-1"
                  onMouseEnter={() => setIsPillarPaused(true)}
                  onMouseLeave={() => setIsPillarPaused(false)}
                >
                  <motion.div
                    className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: activePillar === index ? 1 : 0, y: activePillar === index ? 0 : -20 }}
                    transition={{ duration: 0.6, delay: activePillar === index ? 0.3 : 0 }}
                  >
                    <span className={`text-sm font-semibold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                      Pillar {index + 1} of 4
                    </span>
                  </motion.div>
                  <motion.h3
                    className={`text-4xl lg:text-6xl font-bold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent leading-tight`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: activePillar === index ? 1 : 0, y: activePillar === index ? 0 : 20 }}
                    transition={{ duration: 0.8, delay: activePillar === index ? 0.4 : 0 }}
                  >
                    {pillar.title}
                  </motion.h3>
                  <motion.p
                    className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: activePillar === index ? 1 : 0, y: activePillar === index ? 0 : 20 }}
                    transition={{ duration: 0.8, delay: activePillar === index ? 0.5 : 0 }}
                  >
                    {pillar.description}
                  </motion.p>
                  <motion.div
                    className={`w-32 h-1.5 bg-gradient-to-r ${pillar.color} rounded-full shadow-lg`}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: activePillar === index ? 128 : 0, opacity: activePillar === index ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: activePillar === index ? 0.6 : 0 }}
                  />
                </motion.div>

                {/* Animation Side - Right */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: activePillar === index ? 1 : 0,
                    x: activePillar === index ? 0 : 50
                  }}
                  transition={{ duration: 0.8, delay: activePillar === index ? 0.2 : 0 }}
                  className="relative h-64 lg:h-80 flex items-center justify-center order-1 lg:order-2"
                  onMouseEnter={() => setIsPillarPaused(true)}
                  onMouseLeave={() => setIsPillarPaused(false)}
                >
                  {/* Subtle Background Glow */}
                  <motion.div
                    className={`absolute w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-br ${pillar.color} rounded-full opacity-10 blur-3xl`}
                    animate={{
                      scale: activePillar === index && !isPillarPaused ? [1, 1.15, 1] : 1,
                    }}
                    transition={{
                      duration: 6,
                      repeat: activePillar === index && !isPillarPaused ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Main Icon Container */}
                  <motion.div
                    className={`relative w-40 h-40 lg:w-56 lg:h-56 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center shadow-xl`}
                    style={{
                      boxShadow: activePillar === index ? `0 0 40px rgba(${index === 0 ? '59, 130, 246' : index === 1 ? '34, 197, 94' : index === 2 ? '168, 85, 247' : '239, 68, 68'}, 0.3)` : 'none'
                    }}
                    animate={{
                      y: activePillar === index && !isPillarPaused ? [0, -12, 0] : 0,
                      scale: activePillar === index ? 1 : 0.8,
                    }}
                    transition={{
                      y: {
                        duration: 4,
                        repeat: activePillar === index && !isPillarPaused ? Infinity : 0,
                        ease: "easeInOut"
                      },
                      scale: {
                        duration: 0.5
                      }
                    }}
                  >
                    {/* Subtle Inner Ring */}
                    <motion.div
                      className="absolute inset-4 lg:inset-6 rounded-full bg-white/10"
                      animate={{
                        opacity: activePillar === index ? [0.1, 0.2, 0.1] : 0,
                      }}
                      transition={{
                        duration: 3,
                        repeat: activePillar === index && !isPillarPaused ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="text-6xl lg:text-9xl relative z-10"
                      animate={{
                        rotate: activePillar === index && !isPillarPaused ? [0, 5, -5, 0] : 0,
                        scale: activePillar === index && !isPillarPaused ? [1, 1.05, 1] : 1,
                      }}
                      transition={{
                        duration: 5,
                        repeat: activePillar === index && !isPillarPaused ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    >
                      {pillar.icon}
                    </motion.div>
                  </motion.div>

                  {/* Subtle Orbiting Particles - Reduced to 3 */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 lg:w-2.5 lg:h-2.5 ${pillar.bgColor} rounded-full opacity-50`}
                      animate={{
                        x: activePillar === index && !isPillarPaused ? [0, Math.cos(i * 120 * Math.PI / 180) * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 75 : 110), 0] : 0,
                        y: activePillar === index && !isPillarPaused ? [0, Math.sin(i * 120 * Math.PI / 180) * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 75 : 110), 0] : 0,
                      }}
                      transition={{
                        duration: 5 + i * 0.5,
                        repeat: activePillar === index && !isPillarPaused ? Infinity : 0,
                        ease: "linear",
                        delay: i * 0.5
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Maple Ford Edge (Introduction Section) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#3B1A17'
                }}
              >
                🍁 The Maple Ford Edge
              </h2>
              <div className="space-y-5 text-lg" style={{ color: '#4F4F4F', lineHeight: '1.8' }}>
                <p className="text-xl font-medium" style={{ color: '#3B1A17' }}>
                  Honoring the proud three-decade legacy of Megacity High School, Maple Ford International School marks a purposeful evolution in education.
                </p>
                <p>Redefining the future of learning</p>
                <p>Blending CBSE curriculum with global pathways</p>
                <p>Academic collaboration with Maple Bear Canadian School</p>
                <p className="italic font-medium text-xl mt-6" style={{ color: '#5A1411' }}>
                  This is not merely a transition — it is an evolution with purpose.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 aspect-square">
                <div className="bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=600&fit=crop"
                    alt="Modern School Building"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=600&fit=crop"
                    alt="Science Laboratory"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop"
                    alt="Library Reading Area"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=600&fit=crop"
                    alt="Sports Facilities"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Continuum of Learning (Academics Section) */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#3B1A17'
              }}
            >
              📚 The Continuum of Learning
            </h2>
            <p className="text-xl max-w-4xl mx-auto" style={{ color: '#4F4F4F', lineHeight: '1.8' }}>
              Every stage of learning is a milestone in growth — thoughtfully designed to nurture young minds into competent whizz-kids, enriched with wisdom and wonder.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stage: "Pre-School",
                grades: "(Nursery | Jr. KG | Sr. KG)",
                description: "The foundation years where curiosity blossoms and imagination leads learning. Through play-based exploration, storytelling, and creative discovery, children develop early confidence, communication skills, and a genuine joy for learning.",
                image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop"
              },
              {
                stage: "Elementary School",
                grades: "(Grades 1–5)",
                description: "The building years of knowledge and expression — where students strengthen academics, values, and creativity. Learning becomes meaningful through interactive classrooms, collaborative projects, and real-world applications.",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop"
              },
              {
                stage: "High School",
                grades: "(Grades 6–10 / 12)",
                description: "The transformation years that foster independence, discipline, and vision. Guided by CBSE's structured framework and global exposure, learners evolve into confident aspirants — ready to lead, innovate, and explore beyond boundaries.",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={stage.image}
                    alt={`${stage.stage} Class`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#3B1A17' }}>{stage.stage}</h3>
                  <p className="font-semibold mb-4" style={{ color: '#8B1E1A' }}>{stage.grades}</p>
                  <p style={{ color: '#4F4F4F', lineHeight: '1.7' }}>{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STEAM Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Animated STEAM Title */}
          <div className="text-center mb-12">
            <h1 className="text-6xl lg:text-8xl font-bold">
              {['S', 'T', 'E', 'A', 'M'].map((letter, index) => (
                <span
                  key={letter}
                  onClick={() => setActiveSubject(index)}
                  className={`cursor-pointer inline-block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 ${activeSubject === index ? 'scale-110' : ''}`}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          {/* Stacked Cards Container */}
          <div className="relative max-w-4xl mx-auto h-[600px]">
            {[
              {
                subject: "Science",
                description: "Hands-on experiments and inquiry-based learning to develop scientific thinking and curiosity about the natural world.",
                detailedInfo: "Our science program includes laboratory work, field studies, and research projects that encourage students to ask questions, design experiments, and analyze results.",
                icon: "🧪",
                color: "from-blue-500 to-blue-600",
                bgColor: "from-blue-50 to-blue-100",
                stats: "15+ Lab Experiments",
                image: "🔬"
              },
              {
                subject: "Technology",
                description: "Digital literacy, coding, and computational thinking to prepare students for the digital age.",
                detailedInfo: "From basic coding to advanced programming, our technology curriculum covers robotics, AI basics, and digital design tools.",
                icon: "💻",
                color: "from-green-500 to-green-600",
                bgColor: "from-green-50 to-green-100",
                stats: "8 Coding Languages",
                image: "🤖"
              },
              {
                subject: "Engineering",
                description: "Design thinking, prototyping, and problem-solving through engineering challenges and projects.",
                detailedInfo: "Students learn to identify problems, design solutions, and build prototypes using various materials and technologies.",
                icon: "⚙️",
                color: "from-orange-500 to-orange-600",
                bgColor: "from-orange-50 to-orange-100",
                stats: "20+ Projects",
                image: "🏗️"
              },
              {
                subject: "Arts",
                description: "Creative expression through visual arts, music, drama, and digital media to develop artistic skills.",
                detailedInfo: "Our arts program nurtures creativity through painting, sculpture, music composition, theater, and digital art creation.",
                icon: "🎨",
                color: "from-purple-500 to-purple-600",
                bgColor: "from-purple-50 to-purple-100",
                stats: "12 Art Forms",
                image: "🎭"
              },
              {
                subject: "Mathematics",
                description: "Applied mathematics and logical reasoning to develop analytical and problem-solving abilities.",
                detailedInfo: "Beyond traditional math, we teach data analysis, mathematical modeling, and real-world applications of mathematical concepts.",
                icon: "🔢",
                color: "from-red-500 to-red-600",
                bgColor: "from-red-50 to-red-100",
                stats: "Advanced Calculus",
                image: "📊"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 bg-gradient-to-r ${item.bgColor} rounded-3xl shadow-xl overflow-hidden border border-white/50 ${activeSubject === index ? 'z-10' : 'z-0'}`}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{
                  opacity: activeSubject === index ? 1 : 0.3,
                  scale: activeSubject === index ? 1 : 0.9,
                  rotateY: activeSubject === index ? 0 : 10,
                  x: activeSubject === index ? 0 : (index - (activeSubject || 0)) * 20
                }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: 'center' }}
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Content Side */}
                  <div className="flex-1 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl mr-6 shadow-lg`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{item.subject}</h3>
                        <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-full text-sm font-semibold`}>
                          {item.stats}
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.detailedInfo}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 bg-gradient-to-r ${item.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Learn More
                    </motion.button>
                  </div>

                  {/* Visual Side */}
                  <div className="flex-1 relative bg-gradient-to-br from-white/50 to-white/20 p-8 lg:p-12 flex items-center justify-center overflow-hidden">
                    {/* Science - Beaker with bubbles */}
                    {index === 0 && (
                      <div className="relative">
                        {/* Beaker */}
                        <motion.div
                          className="relative w-32 h-40 border-4 border-blue-400 rounded-b-3xl bg-gradient-to-b from-blue-100/50 to-blue-300/50"
                          style={{ borderTop: 'none' }}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {/* Liquid */}
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-400 to-cyan-300 rounded-b-3xl"
                            animate={{ height: ['6rem', '7rem', '6rem'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          {/* Bubbles */}
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                              style={{ left: `${20 + i * 15}%`, bottom: '10%' }}
                              animate={{
                                y: [-40, -80],
                                opacity: [0.6, 0],
                                scale: [1, 0.5]
                              }}
                              transition={{
                                duration: 2 + i * 0.3,
                                repeat: Infinity,
                                delay: i * 0.4
                              }}
                            />
                          ))}
                        </motion.div>
                        {/* Molecules */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-3 h-3 bg-blue-500 rounded-full"
                            style={{ top: `${i * 30}%`, right: `${-20 + i * 10}px` }}
                            animate={{
                              x: [0, 10, 0],
                              y: [0, -10, 0],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 3 + i,
                              repeat: Infinity,
                              delay: i * 0.5
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Technology - Binary code flow */}
                    {index === 1 && (
                      <div className="relative w-full h-full">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute text-2xl font-mono text-green-500 opacity-30"
                            style={{
                              left: `${i * 15}%`,
                              top: `${Math.random() * 80}%`
                            }}
                            animate={{
                              y: [-100, 300],
                              opacity: [0, 0.5, 0]
                            }}
                            transition={{
                              duration: 4 + i * 0.5,
                              repeat: Infinity,
                              delay: i * 0.8
                            }}
                          >
                            {Math.random() > 0.5 ? '1' : '0'}
                          </motion.div>
                        ))}
                        {/* Circuit board pattern */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.svg width="200" height="200" className="opacity-20">
                            <motion.circle
                              cx="100"
                              cy="100"
                              r="60"
                              stroke="#22c55e"
                              strokeWidth="2"
                              fill="none"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.line
                              x1="100"
                              y1="40"
                              x2="100"
                              y2="160"
                              stroke="#22c55e"
                              strokeWidth="2"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.line
                              x1="40"
                              y1="100"
                              x2="160"
                              y2="100"
                              stroke="#22c55e"
                              strokeWidth="2"
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.svg>
                        </div>
                      </div>
                    )}

                    {/* Engineering - Rotating gears */}
                    {index === 2 && (
                      <div className="relative">
                        {/* Large gear */}
                        <motion.div
                          className="w-32 h-32 rounded-full border-8 border-orange-400 relative"
                          style={{
                            background: 'conic-gradient(from 0deg, #fb923c, #f97316, #fb923c)'
                          }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-3 h-6 bg-orange-500"
                              style={{
                                left: '50%',
                                top: '50%',
                                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-70px)`
                              }}
                            />
                          ))}
                        </motion.div>
                        {/* Small gear */}
                        <motion.div
                          className="absolute -right-8 top-16 w-20 h-20 rounded-full border-6 border-orange-300"
                          style={{
                            background: 'conic-gradient(from 0deg, #fdba74, #fb923c, #fdba74)'
                          }}
                          animate={{ rotate: -360 }}
                          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-4 bg-orange-400"
                              style={{
                                left: '50%',
                                top: '50%',
                                transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-45px)`
                              }}
                            />
                          ))}
                        </motion.div>
                      </div>
                    )}

                    {/* Arts - Paint splashes */}
                    {index === 3 && (
                      <div className="relative w-full h-full">
                        {/* Color palette */}
                        <motion.div
                          className="relative"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          {['#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'].map((color, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-16 h-16 rounded-full"
                              style={{
                                backgroundColor: color,
                                left: `${Math.cos(i * 72 * Math.PI / 180) * 60 + 80}px`,
                                top: `${Math.sin(i * 72 * Math.PI / 180) * 60 + 80}px`
                              }}
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.6, 0.9, 0.6]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3
                              }}
                            />
                          ))}
                        </motion.div>
                        {/* Paint drops */}
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-4 h-6 bg-purple-400 rounded-full opacity-50"
                            style={{ left: `${20 + i * 20}%`, top: '10%' }}
                            animate={{
                              y: [0, 200],
                              opacity: [0.7, 0]
                            }}
                            transition={{
                              duration: 2 + i * 0.5,
                              repeat: Infinity,
                              delay: i * 0.7
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Mathematics - Geometric shapes & equations */}
                    {index === 4 && (
                      <div className="relative w-full h-full">
                        {/* Floating equations */}
                        <motion.div
                          className="absolute text-3xl font-serif text-red-500 opacity-40"
                          style={{ left: '20%', top: '20%' }}
                          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          π
                        </motion.div>
                        <motion.div
                          className="absolute text-2xl font-mono text-red-600 opacity-40"
                          style={{ right: '25%', top: '40%' }}
                          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                        >
                          x²
                        </motion.div>
                        <motion.div
                          className="absolute text-2xl font-mono text-red-500 opacity-40"
                          style={{ left: '30%', bottom: '30%' }}
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                        >
                          ∑
                        </motion.div>
                        {/* Geometric shapes */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="relative"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                          >
                            {/* Triangle */}
                            <svg width="120" height="120" className="absolute" style={{ left: -60, top: -60 }}>
                              <motion.polygon
                                points="60,10 110,100 10,100"
                                fill="none"
                                stroke="#ef4444"
                                strokeWidth="3"
                                opacity="0.3"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                              />
                            </svg>
                            {/* Circle */}
                            <motion.div
                              className="w-24 h-24 border-4 border-red-400 rounded-full opacity-30"
                              animate={{ scale: [1.1, 1, 1.1] }}
                              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Athletics Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#3B1A17'
                }}
              >
                ⚽ Sports & Physical Education
              </h2>
              <p className="text-2xl font-semibold mb-4" style={{ color: '#8B1E1A', fontFamily: "'Playfair Display', serif" }}>
                Chasing Goals. Soaring Spirits High.
              </p>
              <p className="text-lg mb-6" style={{ color: '#4F4F4F', lineHeight: '1.8' }}>
                Where passion charges the field — and every sport, a lesson in excellence.
              </p>
              <p className="mb-6" style={{ color: '#4F4F4F', lineHeight: '1.8' }}>
                Growth at Maple Ford extends far beyond classrooms. Every match played, every goal scored, and every serve perfected builds resilience, discipline, and determination.
              </p>
              <p className="mb-6 font-medium" style={{ color: '#3B1A17' }}>
                With a vibrant sporting culture, students thrive through:
              </p>
              <ul className="space-y-3 mb-8" style={{ color: '#4F4F4F' }}>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ background: '#D6B25E' }}></span>
                  Football
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ background: '#D6B25E' }}></span>
                  Badminton
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ background: '#D6B25E' }}></span>
                  Tennis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ background: '#D6B25E' }}></span>
                  Athletics
                </li>
              </ul>
              <p style={{ color: '#4F4F4F', lineHeight: '1.8' }}>
                Supported by state-of-the-art sports infrastructure, Maple Ford nurtures confidence, team spirit, and leadership.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&h=900&fit=crop"
                  alt="Sports Facilities"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chairman Message Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
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
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#3B1A17'
                }}
              >
                ✉️ Message from the Chairman
              </h2>
              <blockquote className="text-lg leading-relaxed mb-6 pl-6 italic" style={{ borderLeft: '4px solid #D6B25E', color: '#4F4F4F' }}>
                "Education is not merely the transfer of knowledge — it is the cultivation of character, curiosity, and compassion."
              </blockquote>
              <p className="mb-4" style={{ color: '#4F4F4F', lineHeight: '1.8' }}>
                For nearly three decades, our journey has been guided by the belief that schooling must prepare students for life, not just examinations. Maple Ford stands today as an evolution of that belief — blending global perspectives with timeless values.
              </p>
              <p className="mb-6 italic font-medium" style={{ color: '#5A1411' }}>
                Together, let us shape a future where every learning matters — the spark in a question, the pride in a goal, and the courage to try again.
              </p>
              <div className="mt-6">
                <p className="font-bold text-lg" style={{ color: '#3B1A17' }}>— P. Subba Reddy</p>
                <p style={{ color: '#7E7E7E' }}>Chairman, Maple Ford International School</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal Message Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#3B1A17'
                }}
              >
                ✉️ Message from the Principal
              </h2>
              <blockquote className="text-lg leading-relaxed mb-6 pl-6 italic" style={{ borderLeft: '4px solid #D6B25E', color: '#4F4F4F' }}>
                "Education is not a race, but a journey — guided by reflection, balance, and purpose."
              </blockquote>
              <p className="mb-6" style={{ color: '#4F4F4F', lineHeight: '1.8' }}>
                Our vision is to create a school where learning feels alive, relationships feel genuine, and every child leaves empowered to grow with confidence and character.
              </p>
              <div className="mt-6">
                <p className="font-bold text-lg" style={{ color: '#3B1A17' }}>— XYZ</p>
                <p style={{ color: '#7E7E7E' }}>Principal, Maple Ford International School</p>
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


      {/* Mini About Section Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer" style={{ textShadow: '2px 2px 4px rgba(239, 68, 68, 0.5)' }}>
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Maple Ford International School is dedicated to nurturing young minds through innovative education, fostering academic excellence, creativity, and global citizenship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "MISSION",
                description: "To provide exceptional education that empowers students to become confident, compassionate global citizens.",
                icon: (
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="2.5"/>
                    <circle cx="40" cy="40" r="16" stroke="currentColor" strokeWidth="2.5"/>
                    <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="2.5"/>
                    <circle cx="40" cy="40" r="3" fill="currentColor"/>
                    <path d="M56 24L44 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M58 22L56 24L54 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                outerRing: "bg-gradient-to-br from-[#F5B5B5] to-[#E89B9B]",
                textColor: "text-[#E85D5D]",
                iconColor: "text-gray-500"
              },
              {
                title: "VISION",
                description: "To be a leading international school recognized for excellence in education and holistic development.",
                icon: (
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="40" cy="40" rx="32" ry="20" stroke="currentColor" strokeWidth="2.5"/>
                    <circle cx="40" cy="40" r="12" stroke="currentColor" strokeWidth="2.5"/>
                    <circle cx="40" cy="40" r="6" fill="currentColor"/>
                    <circle cx="40" cy="40" r="3" fill="white"/>
                  </svg>
                ),
                outerRing: "bg-gradient-to-br from-[#A5D5F5] to-[#7DB9DE]",
                textColor: "text-[#4A9FD8]",
                iconColor: "text-gray-500"
              },
              {
                title: "VALUES",
                description: "Integrity, innovation, inclusivity, and excellence guide everything we do.",
                icon: (
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 16L50 32L48 52L40 64L32 52L30 32L40 16Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                    <path d="M40 28L44 36L43 46L40 52L37 46L36 36L40 28Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                    <path d="M40 30L42 35L47 37L42 39L40 44L38 39L33 37L38 35L40 30Z" fill="currentColor"/>
                    <circle cx="40" cy="40" r="2" fill="currentColor"/>
                  </svg>
                ),
                outerRing: "bg-gradient-to-br from-[#B5E7C3] to-[#90D7A7]",
                textColor: "text-[#5FBA7D]",
                iconColor: "text-gray-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pt-20 group h-full"
              >
                {/* Circular Icon Container - Overlapping the card */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10">
                  <div className="relative w-40 h-40">
                    {/* Outer colored ring with gradient */}
                    <div className={`absolute inset-0 rounded-full ${item.outerRing} shadow-xl group-hover:scale-105 transition-transform duration-300`}></div>

                    {/* Middle white ring */}
                    <div className="absolute inset-2.5 rounded-full bg-white shadow-lg"></div>

                    {/* Inner icon circle */}
                    <div className="absolute inset-7 rounded-full bg-gray-50 flex items-center justify-center">
                      <div className={`${item.iconColor} transform group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="bg-gradient-to-b from-gray-100 to-gray-50 pt-24 pb-10 px-8 rounded-[3rem] text-center hover:shadow-2xl transition-all duration-300 h-full flex flex-col min-h-[320px]">
                  {/* Title */}
                  <h3 className={`text-xl font-bold ${item.textColor} mb-3 tracking-wider uppercase`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Enquiry Form (Lead Form) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-6">
              Connect with Maple Ford
            </h2>
          </motion.div>

          {!formSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Parent / Guardian Name</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter parent/guardian name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Contact Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter contact number"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter email address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Child's Name</label>
                  <input
                    type="text"
                    required
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter child's name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Child's Date of Birth</label>
                  <input
                    type="date"
                    required
                    value={formData.childDob}
                    onChange={(e) => setFormData({ ...formData, childDob: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">Grade Applying For</label>
                <select
                  required
                  value={formData.gradeApplying}
                  onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="">Select grade</option>
                  <option value="nursery">Nursery</option>
                  <option value="jr-kg">Jr. KG</option>
                  <option value="sr-kg">Sr. KG</option>
                  <option value="grade-1">Grade 1</option>
                  <option value="grade-2">Grade 2</option>
                  <option value="grade-3">Grade 3</option>
                  <option value="grade-4">Grade 4</option>
                  <option value="grade-5">Grade 5</option>
                  <option value="grade-6">Grade 6</option>
                  <option value="grade-7">Grade 7</option>
                  <option value="grade-8">Grade 8</option>
                  <option value="grade-9">Grade 9</option>
                  <option value="grade-10">Grade 10</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 mb-2 font-medium">Message (Optional)</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Tell us about your interest in Maple Ford..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 px-8 text-lg"
              >
                Submit
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-green-50 p-12 rounded-2xl shadow-lg"
            >
              <div className="text-6xl mb-6">✅</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
              <p className="text-lg text-green-700">
                We appreciate your interest. Our team shall reach out to you promptly.
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl">📞</span>
              <span className="text-lg font-medium">WhatsApp: +91 90005 68416</span>
            </div>
            <a
              href="https://wa.me/919000568416"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Chat with us
            </a>
          </motion.div>
        </div>
      </section>


      {/* Enquiry Form Popup */}
      {showEnquiryPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-navy-600">Admission Enquiry</h3>
                <button
                  onClick={() => setShowEnquiryPopup(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Grade Applying For</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600">
                    <option value="">Select grade</option>
                    <option value="kg1">KG1</option>
                    <option value="kg2">KG2</option>
                    <option value="grade1">Grade 1</option>
                    <option value="grade2">Grade 2</option>
                    <option value="grade3">Grade 3</option>
                    <option value="grade4">Grade 4</option>
                    <option value="grade5">Grade 5</option>
                    <option value="grade6">Grade 6</option>
                    <option value="grade7">Grade 7</option>
                    <option value="grade8">Grade 8</option>
                    <option value="grade9">Grade 9</option>
                    <option value="grade10">Grade 10</option>
                    <option value="grade11">Grade 11</option>
                    <option value="grade12">Grade 12</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Tell us about your interest in Maple Ford..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
