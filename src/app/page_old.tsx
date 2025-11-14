'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  const heroImages = [
    '/images/Screenshot 2025-11-13 at 6.45.06 PM.png',
    '/images/Screenshot 2025-11-13 at 6.45.28 PM.png',
    '/images/Screenshot 2025-11-13 at 6.45.38 PM.png',
    'https://via.placeholder.com/1920x1080/16a34a/ffffff?text=Maple+Ford+Campus'
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
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
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 flex items-center justify-start h-full px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              Nurturing Excellence at Maple Ford International School
            </h1>
            <p className="text-xl lg:text-2xl mb-2 text-red-400">
              Where Tradition Meets Innovation
            </p>
            <p className="text-lg mb-8">
              A premier educational institution blending Canadian excellence with Indian values, fostering global citizens through comprehensive learning experiences from preschool to Grade 12.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowEnquiryPopup(true)}
                className="btn-primary inline-block text-center"
              >
                Enquire Now
              </button>
              <Link href="/about" className="btn-secondary inline-block text-center">
                Discover Our Legacy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Pillars / Core Values */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent mb-6">
              Our Core Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The foundational principles that guide every aspect of education at Maple Ford International School.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Academic Excellence",
                description: "Rigorous curriculum ensuring mastery of core subjects and critical thinking skills.",
                icon: "🎓",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Character Development",
                description: "Fostering integrity, empathy, and leadership through values-based education.",
                icon: "💪",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Innovation & Creativity",
                description: "Encouraging creative expression and technological proficiency in all learners.",
                icon: "🚀",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Global Citizenship",
                description: "Preparing students to thrive in an interconnected world with cultural awareness.",
                icon: "🌍",
                color: "from-red-500 to-red-600"
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-6 text-3xl`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-600 mb-4">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy + Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent mb-6">
                From Megacity to Maple Ford: A Legacy of Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Maple Ford International School emerges from the esteemed legacy of Megacity International School, bringing over two decades of educational excellence to Hyderabad. Our evolution represents a commitment to progressive education that honors tradition while embracing innovation.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Rooted in Canadian educational philosophy and enriched by Indian cultural values, we provide a holistic learning environment where every student discovers their potential and pursues their passions.
              </p>
              <Link href="/about" className="btn-primary">
                Explore Our Journey
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x600/2563eb/ffffff?text=Maple+Ford+Legacy"
                  alt="Maple Ford Legacy"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Continuum of Learning */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent mb-6">
              Continuum of Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A seamless educational journey from early childhood to adolescence, nurturing growth at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stage: "Preschool",
                grades: "KG1 - KG2",
                description: "Foundational learning through play-based activities, fostering curiosity and social skills in a nurturing environment.",
                icon: "🌱",
                color: "from-green-400 to-green-500"
              },
              {
                stage: "Primary",
                grades: "Grade 1 - 5",
                description: "Building strong academic foundations with integrated learning approaches that develop critical thinking and creativity.",
                icon: "📚",
                color: "from-blue-400 to-blue-500"
              },
              {
                stage: "Secondary",
                grades: "Grade 6 - 12",
                description: "Advanced curriculum preparing students for higher education and global opportunities through specialized programs.",
                icon: "🎯",
                color: "from-purple-400 to-purple-500"
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-500"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl`}>
                  {stage.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-600 mb-2">{stage.stage}</h3>
                <p className="text-red-600 font-semibold mb-4">{stage.grades}</p>
                <p className="text-gray-600">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STEAM Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent mb-6">
              STEAM Education
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Integrating Science, Technology, Engineering, Arts, and Mathematics to foster innovation and problem-solving skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                subject: "Science",
                description: "Hands-on experiments and inquiry-based learning",
                icon: "🧪",
                color: "from-blue-500 to-blue-600"
              },
              {
                subject: "Technology",
                description: "Digital literacy and coding fundamentals",
                icon: "💻",
                color: "from-green-500 to-green-600"
              },
              {
                subject: "Engineering",
                description: "Design thinking and problem-solving projects",
                icon: "⚙️",
                color: "from-orange-500 to-orange-600"
              },
              {
                subject: "Arts",
                description: "Creative expression through various mediums",
                icon: "🎨",
                color: "from-purple-500 to-purple-600"
              },
              {
                subject: "Mathematics",
                description: "Applied math in real-world contexts",
                icon: "🔢",
                color: "from-red-500 to-red-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-xl`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-600 mb-2">{item.subject}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent mb-6">
                Sports & Athletics
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Physical education is integral to our holistic approach, promoting health, teamwork, and leadership through diverse sporting activities.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Olympic-standard facilities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Professional coaching staff
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Competitive and recreational sports
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Health and wellness programs
                </li>
              </ul>
              <Link href="/programs" className="btn-primary">
                Explore Sports Programs
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://via.placeholder.com/800x450/16a34a/ffffff?text=Sports+Facilities"
                  alt="Sports Facilities"
                  className="w-full h-full object-cover rounded-2xl"
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
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x600/dc2626/ffffff?text=Chairman"
                  alt="Chairman"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent mb-6">
                Chairman's Message
              </h2>
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 border-l-4 border-red-600 pl-6 italic">
                "At Maple Ford International School, we believe that education is the foundation of a brighter future. Our commitment to excellence, innovation, and character development ensures that every student not only achieves academic success but also grows into compassionate, responsible global citizens."
              </blockquote>
              <p className="text-gray-700 mb-4">
                As Chairman, I am proud to lead an institution that seamlessly blends the best of Canadian educational standards with the rich cultural heritage of India. Our focus on holistic development prepares students for the challenges and opportunities of the 21st century.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-navy-600">Dr. Rajesh Kumar</p>
                <p className="text-gray-600">Chairman, Maple Ford International School</p>
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
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent mb-6">
                Principal's Message
              </h2>
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 border-l-4 border-red-600 pl-6 italic">
                "Welcome to Maple Ford International School, where we cultivate minds and hearts. Our dedicated faculty and innovative programs create an environment where students thrive academically, socially, and emotionally."
              </blockquote>
              <p className="text-gray-700 mb-4">
                As Principal, I am committed to providing personalized attention to each student, ensuring they receive the guidance needed to reach their full potential. Our Alberta Curriculum, combined with enriching extracurricular activities, prepares students for success in higher education and beyond.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-navy-600">Ms. Sarah Johnson</p>
                <p className="text-gray-600">Principal, Maple Ford International School</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x600/2563eb/ffffff?text=Principal"
                  alt="Principal"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission Enquiry Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent mb-6">
              Start Your Child's Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Join our community of learners where excellence meets opportunity. Enquire now to begin the admission process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-navy-600 mb-6">Why Choose Maple Ford?</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  Internationally recognized Alberta Curriculum
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  Experienced Canadian-trained faculty
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  State-of-the-art facilities and technology
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  Comprehensive extracurricular programs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                  Focus on holistic development
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <form className="space-y-6">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Strip */}
      <section className="py-12 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Have Questions? Chat with Us!</h3>
            <p className="text-green-100 mb-6">Get instant answers about admissions, programs, and more.</p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Connect on WhatsApp
            </a>
          </motion.div>
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
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Maple Ford International School is dedicated to nurturing young minds through innovative education, fostering academic excellence, creativity, and global citizenship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                description: "To provide exceptional education that empowers students to become confident, compassionate global citizens.",
                icon: "🎯"
              },
              {
                title: "Our Vision",
                description: "To be a leading international school recognized for excellence in education and holistic development.",
                icon: "👁️"
              },
              {
                title: "Our Values",
                description: "Integrity, innovation, inclusivity, and excellence guide everything we do.",
                icon: "💎"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy-600 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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

      {/* Team/Faculty Preview Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent mb-6">
              Meet Our Faculty
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our dedicated educators bring expertise, passion, and innovation to every classroom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Emily Chen",
                role: "Head of Science",
                image: "https://via.placeholder.com/300x300/2563eb/ffffff?text=Dr.+Chen"
              },
              {
                name: "Mr. David Kumar",
                role: "Mathematics Coordinator",
                image: "https://via.placeholder.com/300x300/dc2626/ffffff?text=Mr.+Kumar"
              },
              {
                name: "Ms. Priya Sharma",
                role: "English Literature Teacher",
                image: "https://via.placeholder.com/300x300/16a34a/ffffff?text=Ms.+Sharma"
              },
              {
                name: "Mr. James Wilson",
                role: "Physical Education Coach",
                image: "https://via.placeholder.com/300x300/7c3aed/ffffff?text=Mr.+Wilson"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-navy-600 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faculty" className="btn-primary">
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Final Banner */}
      <section className="py-24 bg-gradient-to-r from-navy-600 via-red-600 to-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Child's Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
              Join the Maple Ford family and give your child the gift of world-class education. Spaces are limited – secure your place now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowEnquiryPopup(true)}
                className="bg-white text-navy-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Enquire Now
              </button>
              <Link
                href="/admissions"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-navy-600 transition-colors duration-300"
              >
                Apply Online
              </Link>
            </div>
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
                </div
