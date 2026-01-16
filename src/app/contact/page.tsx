'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="pt-24 min-h-screen bg-white text-[#1A1A1A]">
          {/* Immersive Hero */}
          <section className="relative py-32 lg:py-52 overflow-hidden bg-[#1A1A1A] text-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-1/4 h-full bg-[#8B1E1A]/40 blur-3xl rounded-full translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-full bg-[#D6B25E]/20 blur-3xl rounded-full -translate-x-1/2"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1
                  className="text-6xl lg:text-9xl font-bold mb-8 leading-none"
                  style={{ fontFamily: '"Raleway", sans-serif' }}
                >
                  Let's <span className="text-[#D6B25E]">Talk.</span>
                </h1>
                <p className="text-xl lg:text-3xl text-white/70 max-w-3xl mx-auto font-light italic leading-relaxed">
                  "Every great journey begins with a conversation. We’re here to listen, guide, and welcome you."
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Grid */}
          <section className="py-32 bg-white relative -mt-10 rounded-t-[4rem] z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                {/* Left: Contact Info Cards */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="mb-12">
                    <span className="text-sm font-bold tracking-[0.5em] text-[#8B1E1A] uppercase mb-4 block">Get in Touch</span>
                    <h2 className="text-5xl lg:text-6xl font-black" style={{ fontFamily: '"Raleway", sans-serif' }}>Reach Out <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Directly</span></h2>
                  </div>

                  {[
                    { icon: "📍", title: "Visit Us", content: "Hayathnagar, Hyderabad, Telangana - 500070", label: "Open in Maps", link: "#" },
                    { icon: "📞", title: "Call Us", content: "+91 90005 68416", label: "Tap to Call", link: "tel:+919000568416" },
                    { icon: "✉️", title: "Email Us", content: "info@mapleford.edu.in", label: "Send an Email", link: "mailto:info@mapleford.edu.in" },
                    { icon: "🕙", title: "Office Hours", content: "Mon - Sat: 8:30 AM - 4:30 PM", label: "Closed on Sundays" }
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex items-center p-8 rounded-[2.5rem] bg-[#FDF6E3]/30 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all cursor-pointer"
                    >
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">{card.icon}</div>
                      <div className="ml-8 outline-none">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{card.title}</h4>
                        <p className="text-lg font-bold mb-1">{card.content}</p>
                        {card.link ? (
                          <a href={card.link} className="text-[#8B1E1A] text-sm font-bold inline-flex items-center gap-2">
                            {card.label} <span>→</span>
                          </a>
                        ) : (
                          <span className="text-gray-400 text-sm font-medium">{card.label}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right: Message Form */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-7"
                >
                  <div className="bg-white p-12 lg:p-16 rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-50">
                    <h2 className="text-3xl lg:text-5xl font-black mb-10" style={{ fontFamily: '"Raleway", sans-serif' }}>Send a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Message</span></h2>

                    {!formSubmitted ? (
                      <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#8B1E1A]">Full Name</label>
                            <input
                              type="text"
                              className="w-full px-6 py-4 rounded-2xl bg-[#FDF6E3]/20 border border-transparent focus:bg-white focus:border-[#8B1E1A] focus:outline-none transition-all"
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#8B1E1A]">Email Address</label>
                            <input
                              type="email"
                              className="w-full px-6 py-4 rounded-2xl bg-[#FDF6E3]/20 border border-transparent focus:bg-white focus:border-[#8B1E1A] focus:outline-none transition-all"
                              placeholder="john@example.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-xs font-bold uppercase tracking-widest text-[#8B1E1A]">Subject</label>
                          <select className="w-full px-6 py-4 rounded-2xl bg-[#FDF6E3]/20 border border-transparent focus:bg-white focus:border-[#8B1E1A] focus:outline-none transition-all">
                            <option>General Inquiry</option>
                            <option>Admissions</option>
                            <option>Academics</option>
                            <option>Careers</option>
                          </select>
                        </div>

                        <div className="space-y-3">
                          <label className="text-xs font-bold uppercase tracking-widest text-[#8B1E1A]">Your Message</label>
                          <textarea
                            rows={4}
                            className="w-full px-6 py-4 rounded-2xl bg-[#FDF6E3]/20 border border-transparent focus:bg-white focus:border-[#8B1E1A] focus:outline-none transition-all resize-none"
                            placeholder="How can we help you today?"
                            required
                          ></textarea>
                        </div>

                        <button className="w-full py-6 bg-[#8B1E1A] text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-[1.02] transition-all relative overflow-hidden group">
                          <span className="relative z-10">Send Message</span>
                          <div className="absolute inset-0 bg-[#1A1A1A] translate-y-full group-hover:translate-y-0 transition-transform"></div>
                        </button>
                      </form>
                    ) : (
                      <div className="text-center py-12">
                        <div className="text-7xl mb-6">📩</div>
                        <h3 className="text-3xl font-bold mb-4">Message Sent</h3>
                        <p className="text-gray-500 text-lg mb-10">Thank you for reaching out. We've received your message and will respond shortly.</p>
                        <button onClick={() => setFormSubmitted(false)} className="text-[#8B1E1A] font-bold border-b-2 border-[#8B1E1A]">Send another message</button>
                      </div>
                    )}
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* Dynamic Map - Aesthetic Placeholder */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[500px] relative group border-8 border-white">
                <div className="absolute inset-0 bg-gray-200">
                  {/* Placeholder for real map */}
                  <div className="w-full h-full bg-[#1A1A1A]/5 flex flex-col items-center justify-center">
                    <div className="text-5xl mb-4">🗺️</div>
                    <p className="text-xl font-bold text-[#1A1A1A]/40 uppercase tracking-widest">Interactive Campus Map</p>
                    <p className="text-sm text-[#1A1A1A]/30 mt-2 italic">Hayathnagar, Hyderabad</p>
                  </div>
                </div>
                <div className="absolute bottom-10 left-10 p-8 bg-white rounded-[2rem] shadow-2xl max-w-sm hidden lg:block">
                  <h4 className="text-xl font-bold mb-2">Mapleford Campus</h4>
                  <p className="text-gray-500 mb-6">Discover our state-of-the-art infrastructure in person.</p>
                  <button className="px-8 py-3 bg-[#D6B25E] text-white rounded-xl font-bold">Get Directions</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}