'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function StudentZone() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-32 lg:py-48 overflow-hidden bg-[#1A1A1A]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#8B1E1A]/40 blur-3xl rounded-full translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#D6B25E]/20 blur-3xl rounded-full -translate-x-1/2"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1
                className="text-6xl lg:text-9xl font-bold text-white mb-8 leading-none"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Student <span className="text-[#D6B25E]">Zone.</span>
              </h1>
              <p className="text-xl lg:text-3xl text-white/80 max-w-3xl mx-auto font-light italic">
                "Where talent meets opportunity and spirit meets action."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Monthly Action Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-8">
              <div className="text-left">
                <span className="text-sm font-bold tracking-[0.5em] text-[#8B1E1A] uppercase mb-4 block">What's Happening</span>
                <h2 className="text-5xl lg:text-7xl font-black leading-tight" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>Monthly <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Action</span></h2>
              </div>
              <div className="w-24 h-24 rounded-full bg-[#FDF6E3] border-4 border-[#D6B25E] flex items-center justify-center animate-bounce">
                <span className="text-3xl">🔥</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Literary Week",
                  date: "Jan 2024",
                  desc: "Celebrating the power of words through debates, storytelling, and poetry slams.",
                  img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop"
                },
                {
                  title: "Science Fair",
                  date: "Feb 2024",
                  desc: "Young innovators showcasing sustainable solutions and scientific discoveries.",
                  img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop"
                },
                {
                  title: "Sports Meet",
                  date: "Mar 2024",
                  desc: "The battlefield of houses where grit and glory meet on the track.",
                  img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop"
                }
              ].map((action, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group rounded-[3rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={action.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={action.title} />
                    <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-[#8B1E1A] text-xs font-bold uppercase tracking-widest">
                      {action.date}
                    </div>
                  </div>
                  <div className="p-10">
                    <h4 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A' }}>{action.title}</h4>
                    <p className="text-gray-600 leading-relaxed mb-6 italic">{action.desc}</p>
                    <Link href="/admissions" className="text-[#8B1E1A] font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                      Read More <span className="text-xl">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* House Arena - Vibrant & Bold */}
        <section className="py-32 bg-[#FDF6E3]/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-5xl lg:text-7xl font-black mb-8" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>The House <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Arena</span></h2>
              <p className="text-xl text-[#8B1E1A] font-semibold italic">Identity. Loyalty. Excellence.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Astra", color: "bg-[#F1C40F]", text: "Yellow House", motto: "Rise Beyond the Horizon", icon: "⭐" },
                { name: "Nova", color: "bg-[#E74C3C]", text: "Red House", motto: "Ignite the Future", icon: "🔥" },
                { name: "Verta", color: "bg-[#27AE60]", text: "Green House", motto: "Stand True, Grow Strong", icon: "🌿" },
                { name: "Cresta", color: "bg-[#2980B9]", text: "Blue House", motto: "To the Summit, Always", icon: "⛰️" }
              ].map((house, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group cursor-pointer"
                >
                  <div className={`aspect-[3/4] rounded-[3rem] ${house.color} p-10 flex flex-col items-center justify-center text-white text-center shadow-2xl transition-transform group-hover:-rotate-3 group-hover:scale-105`}>
                    <div className="text-6xl mb-8 group-hover:animate-bounce">{house.icon}</div>
                    <h4 className="text-4xl font-black mb-2 uppercase tracking-tighter" style={{ fontFamily: '"Raleway", sans-serif' }}>{house.name}</h4>
                    <p className="text-sm font-bold opacity-80 mb-6">{house.text}</p>
                    <div className="w-12 h-1 bg-white/30 rounded-full mb-6"></div>
                    <p className="text-lg font-bold italic">"{house.motto}"</p>
                  </div>
                  <div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[#1A1A1A] font-bold text-sm tracking-[0.2em] uppercase">Enter the House</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Life */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-black mb-10" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>Life at Mapleford is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">more than lessons.</span></h2>
            <div className="flex gap-4 justify-center">
              <Link href="/campus" className="px-10 py-5 bg-[#8B1E1A] text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all">Explore Campus</Link>
              <Link href="/contact" className="px-10 py-5 border-2 border-[#8B1E1A] text-[#8B1E1A] rounded-2xl font-bold text-lg hover:bg-[#8B1E1A]/5 transition-all">Join the Community</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}