'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Facility {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

export default function Campus() {
  const facilities: Facility[] = [
    {
      icon: '📘',
      title: 'Classrooms',
      subtitle: 'Smart, Bright, Engaging',
      description:
        'Our classrooms are designed to be open, bright, and technology-enabled—spaces where students learn with focus and comfort. Interactive boards, ergonomic seating, and natural light come together to create an environment that supports active engagement and clarity in thought.',
      color: 'from-blue-50 to-blue-100'
    },
    {
      icon: '📚',
      title: 'Library',
      subtitle: 'A Quiet World of Imagination',
      description:
        'The library is a calm and inviting corner of the campus, offering students a rich collection of books, reference materials, and digital resources. Thoughtfully arranged reading areas allow learners to slow down, explore ideas, and build a lasting love for literature.',
      color: 'from-amber-50 to-amber-100'
    },
    {
      icon: '💡',
      title: 'STEAM & Innovation Labs',
      subtitle: 'Ideas in Motion',
      description:
        'Our innovation spaces, including the STEAM and robotics labs, bring learning to life through experimentation and hands-on exploration. Equipped with modern tools and creative resources, these labs encourage students to imagine, design, and build with confidence.',
      color: 'from-purple-50 to-purple-100'
    },
    {
      icon: '🖥️',
      title: 'Digital Learning Lab',
      subtitle: 'Skills for a New Age',
      description:
        'The digital lab integrates essential technological skills into daily learning. With updated systems, guided modules, and safe browsing protocols, students develop digital fluency and responsible online habits in a structured, supervised environment.',
      color: 'from-cyan-50 to-cyan-100'
    },
    {
      icon: '🏫',
      title: 'Learning Resource Center',
      subtitle: 'Research & Reflection',
      description:
        'The resource center provides a quiet, structured space for reading, research, and academic enrichment. Students use this space to clarify concepts, work independently, and explore subjects beyond the classroom.',
      color: 'from-green-50 to-green-100'
    },
    {
      icon: '⚽',
      title: 'Sports Arena',
      subtitle: 'Fields for Strength & Spirit',
      description:
        'Our sports arena encourages movement, teamwork, and athletic discipline. The campus features a football field, badminton courts, a tennis court, and dedicated play zones, offering students a healthy balance of fitness, focus, and fun.',
      color: 'from-orange-50 to-orange-100'
    },
    {
      icon: '🎨',
      title: 'Creative Arts Studios',
      subtitle: 'Expression Without Boundaries',
      description:
        'Art, music, and dance find their home in our creative studios. These spaces invite students to experiment with form, sound, and movement—nurturing imagination, confidence, and artistic curiosity.',
      color: 'from-pink-50 to-pink-100'
    },
    {
      icon: '🎭',
      title: 'Auditorium',
      subtitle: 'Where Voices Rise and Talent Shines',
      description:
        'The auditorium is a vibrant, multi-purpose space designed for performances, cultural events, assemblies, and guest sessions. Equipped with modern acoustics and a professional ambiance, it offers students a meaningful platform to communicate, collaborate, and express their talents with confidence.',
      color: 'from-indigo-50 to-indigo-100'
    },
    {
      icon: '🥗',
      title: 'Cafeteria',
      subtitle: 'Hygienic, Fresh, Nourishing',
      description:
        'The cafeteria serves wholesome, hygienic meals in a clean, welcoming setting. With nutritious menu options and regular quality checks, it ensures that students stay energized throughout their school day.',
      color: 'from-lime-50 to-lime-100'
    },
    {
      icon: '🛡️',
      title: 'Safety & Security',
      subtitle: 'Protected at Every Step',
      description:
        'The campus is supported by 24/7 surveillance, controlled entry points, trained security staff, and comprehensive safety protocols. Every measure is in place to ensure a secure, reassuring environment for all learners.',
      color: 'from-slate-50 to-slate-100'
    },
    {
      icon: '🚌',
      title: 'Transportation',
      subtitle: 'Safe, Seamless Commute',
      description:
        'Our GPS-enabled buses, trained drivers, and monitored routes ensure that students travel safely to and from school. The transport system is reliable, well-supervised, and designed with student comfort in mind.',
      color: 'from-yellow-50 to-yellow-100'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-32 lg:py-56 overflow-hidden">
          <div className="absolute inset-0 bg-[#1A1A1A]">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?w=1600&h=900&fit=crop"
              className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Campus Main View"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-sm font-bold tracking-[0.5em] text-[#D6B25E] uppercase mb-6 block">Experience the Space</span>
              <h1
                className="text-6xl lg:text-9xl font-bold text-white mb-8 leading-[0.9]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Our <span className="text-[#D6B25E]">Campus.</span>
              </h1>
              <p className="text-xl lg:text-3xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed italic">
                "A 4-acre sanctuary of learning where every corner inspires growth."
              </p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="w-[1px] h-20 bg-gradient-to-t from-[#D6B25E] to-transparent"></div>
            <span className="text-[#D6B25E] text-xs uppercase tracking-[0.3em] font-bold">Scroll</span>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <h2 className="text-4xl lg:text-6xl font-black leading-tight" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>
                  Modern Infrastructure <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Rooted in Comfort</span>
                </h2>
                <div className="w-20 h-2 bg-[#D6B25E] rounded-full"></div>
                <p className="text-xl text-[#4F4F4F] leading-relaxed">
                  Our campus in Hayathnagar is designed to be a home away from home — safe, stimulating, and technologically advanced.
                </p>

                <div className="space-y-8">
                  {[
                    { title: "Smart Classrooms", desc: "Digital connectivity and ergonomic design for modern learners." },
                    { title: "Safe & Secure", desc: "Comprehensive CCTV coverage and trained security personnel." },
                    { title: "Digital Hub", desc: "Equipped with high-speed internet and the latest computing technology." }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="w-14 h-14 rounded-2xl bg-[#FDF6E3] border border-[#D6B25E]/20 flex items-center justify-center shrink-0 group-hover:bg-[#8B1E1A] transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#8B1E1A] group-hover:bg-[#FDF6E3]"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 transition-colors group-hover:text-[#8B1E1A]">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl aspect-[9/11]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?w=1000&h=1200&fit=crop"
                    alt="Infrastructure"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute -top-12 -right-12 w-96 h-96 bg-[#D6B25E]/10 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#8B1E1A]/10 rounded-3xl rotate-12 -z-10"></div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "The Library",
                  icon: "📚",
                  desc: "A vast collection of wisdom ranging from classics to modern science fiction.",
                  img: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?w=600&h=400&fit=crop"
                },
                {
                  title: "Design Lab",
                  icon: "🎨",
                  desc: "Unleashing creative potential with dedicated studios for fine arts and digital design.",
                  img: "https://images.unsplash.com/photo-1547891269-05520fe3f447?w=600&h=400&fit=crop"
                },
                {
                  title: "Hygiene & Care",
                  icon: "🧴",
                  desc: "Pristine facilities and a dedicated sick-bay for immediate medical attention.",
                  img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&h=400&fit=crop"
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group"
                >
                  <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-xl mb-8">
                    <img src={card.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={card.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-10 left-10 text-white">
                      <span className="text-4xl mb-4 block">{card.icon}</span>
                      <h4 className="text-3xl font-bold mb-2" style={{ fontFamily: '"Raleway", sans-serif' }}>{card.title}</h4>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 px-6 italic transition-colors group-hover:text-[#1A1A1A]">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Arena - The Highlight */}
        <section className="py-32 bg-[#FDF6E3]/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
              <div className="text-left">
                <span className="text-sm font-bold tracking-[0.5em] text-[#8B1E1A] uppercase mb-4 block">Champions in Action</span>
                <h2 className="text-5xl lg:text-7xl font-black leading-tight" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>The Sports <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Arena</span></h2>
              </div>
              <p className="text-xl text-[#4F4F4F] max-w-xl lg:text-right leading-relaxed italic">
                Physical health is the foundation of mental agility. Our arena is where students learn resilience, teamwork, and the spirit of fair play.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  alt="Sports Field"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12">
                  <h4 className="text-4xl font-bold text-white mb-4">Multi-Purpose Field</h4>
                  <div className="flex gap-4">
                    <span className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-bold">Football</span>
                    <span className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-bold">Athletics</span>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                {[
                  { title: "Basketball Court", desc: "Flood-lit pro courts.", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop" },
                  { title: "Indoor Games", desc: "Table tennis, chess, and more.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" }
                ].map((item, i) => (
                  <div key={i} className="relative h-[284px] rounded-[3rem] overflow-hidden shadow-xl group">
                    <img src={item.img} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" alt={item.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1A1A1A] rounded-[4rem] p-16 lg:p-24 relative overflow-hidden text-center group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D6B25E]/20 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-5xl lg:text-7xl font-black text-white mb-10" style={{ fontFamily: '"Raleway", sans-serif' }}>Come, Witness it <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Yourself</span></h2>
                <p className="text-xl text-white/70 mb-14 max-w-2xl mx-auto italic">Book a personalized campus tour and experience the world of Mapleford.</p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <Link href="/contact" className="px-12 py-6 bg-[#D6B25E] text-[#1A1A1A] rounded-[2rem] font-bold text-xl hover:scale-105 transition-transform shadow-2xl">
                    Request a Tour
                  </Link>
                  <Link href="/" className="px-12 py-6 bg-transparent border-2 border-white/20 text-white rounded-[2rem] font-bold text-xl hover:bg-white/10 transition-colors">
                    Back to Home
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