'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Brochure() {
    return (
        <div className="min-h-screen bg-white text-[#3B1A17]">
            <Header />
            <div className="pt-24 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FDF6E3]/50 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#8B1E1A]/5 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm font-bold tracking-[0.3em] text-[#8B1E1A] uppercase mb-4 block"
                    >
                        Digital Prospectus
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl lg:text-7xl font-bold mb-8"
                        style={{ fontFamily: '"Raleway", sans-serif' }}
                    >
                        School <span className="text-[#8B1E1A]">Brochure</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 mb-12 leading-relaxed"
                    >
                        Download our comprehensive brochure to learn more about our academic programs,
                        world-class facilities, and the unique Mapleford edge.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="p-10 rounded-[3rem] bg-white shadow-2xl border border-[#D6B25E]/20 relative group"
                    >
                        <div className="text-6xl mb-8">📄</div>
                        <h2 className="text-2xl font-bold mb-6">Prospectus 2024-25</h2>

                        <button
                            className="px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                            style={{
                                background: 'linear-gradient(135deg, #8B1E1A 0%, #5A1411 100%)',
                                color: '#FFFFFF',
                                boxShadow: '0 8px 25px rgba(139,30,26,0.3)'
                            }}
                            onClick={() => {
                                alert('Brochure download will be available soon!');
                            }}
                        >
                            Download PDF
                        </button>

                        <p className="mt-6 text-sm text-gray-400 italic">File size: ~5.4 MB</p>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
