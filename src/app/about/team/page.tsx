'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-red-700/5 to-red-800/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-300/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Meet the dedicated professionals who make Maple Ford International School a place of excellence and inspiration.
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Leadership Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "P. Subba Reddy",
                role: "Chairman",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
                bio: "Visionary leader with three decades of experience in education, guiding Maple Ford's transformation and growth."
              },
              {
                name: "Dr. Sarah Johnson",
                role: "Principal",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
                bio: "Experienced educator dedicated to fostering academic excellence and holistic development in every student."
              },
              {
                name: "Mr. David Kumar",
                role: "Vice Principal",
                image: "https://via.placeholder.com/400x400/dc2626/ffffff?text=Mr.+Kumar",
                bio: "Committed to maintaining high academic standards and supporting student success across all grade levels."
              },
              {
                name: "Ms. Priya Sharma",
                role: "Academic Director",
                image: "https://via.placeholder.com/400x400/2563eb/ffffff?text=Ms.+Sharma",
                bio: "Oversees curriculum development and ensures innovative teaching methodologies are implemented effectively."
              },
              {
                name: "Mr. James Wilson",
                role: "Sports Coordinator",
                image: "https://via.placeholder.com/400x400/16a34a/ffffff?text=Mr.+Wilson",
                bio: "Passionate about developing well-rounded students through comprehensive sports and physical education programs."
              },
              {
                name: "Dr. Emily Chen",
                role: "Head of Science",
                image: "https://via.placeholder.com/400x400/ea580c/ffffff?text=Dr.+Chen",
                bio: "Leads the science department with a focus on inquiry-based learning and hands-on experimentation."
              },
              {
                name: "Ms. Lisa Brown",
                role: "Student Counselor",
                image: "https://via.placeholder.com/400x400/059669/ffffff?text=Ms.+Brown",
                bio: "Provides guidance and support to help students navigate academic and personal challenges."
              },
              {
                name: "Mr. Robert Davis",
                role: "Head of Humanities",
                image: "https://via.placeholder.com/400x400/7c3aed/ffffff?text=Mr.+Davis",
                bio: "Inspires students to explore literature, history, and social sciences with passion and critical thinking."
              },
              {
                name: "Ms. Maria Garcia",
                role: "Arts Coordinator",
                image: "https://via.placeholder.com/400x400/dc2626/ffffff?text=Ms.+Garcia",
                bio: "Nurtures creativity through visual arts, music, drama, and other artistic expressions."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Teaching Faculty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated educators bring expertise, passion, and innovation to every classroom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Mathematics Teachers",
              "Science Educators",
              "Language Arts Specialists",
              "Social Studies Experts",
              "Physical Education Coaches",
              "Arts & Music Instructors",
              "Special Education Support",
              "Technology Integration Specialists"
            ].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-4">👨‍🏫</div>
                <h3 className="text-lg font-bold text-gray-800">{role}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Support Staff
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind every great school are the dedicated professionals who ensure smooth operations and student well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Administrative Support",
                roles: ["Office Administrators", "Admission Counselors", "IT Support Specialists", "Librarians"]
              },
              {
                category: "Student Services",
                roles: ["School Nurses", "Counselors", "Cafeteria Staff", "Security Personnel"]
              },
              {
                category: "Facilities & Maintenance",
                roles: ["Maintenance Technicians", "Groundskeepers", "Transportation Coordinators", "Housekeeping Staff"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl shadow-xl border border-blue-200/50"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.category}</h3>
                <ul className="space-y-3">
                  {category.roles.map((role, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{role}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Be part of a community dedicated to shaping young minds and creating future leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors duration-300 shadow-lg"
              >
                View Career Opportunities
              </Link>
              <Link
                href="/contact"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}