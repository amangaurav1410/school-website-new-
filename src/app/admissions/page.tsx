'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Admissions() {
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
            Admission Enquiry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Connect with Maple Ford. Have questions about admissions, curriculum, or campus visits? We're here to assist you at every step.
          </motion.p>
        </div>
      </section>

      {/* Admission Enquiry Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
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
                  placeholder="Please share your query."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105"
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

      {/* Admission Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, transparent process designed to make joining our school family as smooth as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application Form",
                description: "Submit online application with basic family and student information.",
                icon: "📝"
              },
              {
                step: "02",
                title: "Document Submission",
                "description": "Provide academic records, birth certificate, and identification documents.",
                icon: "📄"
              },
              {
                step: "03",
                title: "Entrance Evaluation",
                description: "Assessment of academic readiness and personal interview.",
                icon: "🎯"
              },
              {
                step: "04",
                title: "Final Enrollment",
                description: "Complete registration and secure your place in our community.",
                icon: "🎓"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-xl border border-green-200/50 text-center relative"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {process.step}
                </div>
                <div className="text-4xl mb-6">{process.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Eligibility Criteria
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                program: "Preschool (KG1-KG2)",
                criteria: [
                  "Age: 3-5 years",
                  "Basic communication skills",
                  "Social interaction readiness",
                  "No prior academic requirements"
                ]
              },
              {
                program: "Primary (Grades 1-5)",
                criteria: [
                  "Age: 6-10 years",
                  "Basic literacy and numeracy",
                  "Previous preschool education preferred",
                  "English language proficiency"
                ]
              },
              {
                program: "Secondary (Grades 6-12)",
                criteria: [
                  "Age: 11-17 years",
                  "Strong academic foundation",
                  "English proficiency assessment",
                  "Interview and entrance exam"
                ]
              }
            ].map((eligibility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{eligibility.program}</h3>
                <ul className="space-y-3">
                  {eligibility.criteria.map((criterion, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Fee Structure
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                program: "Preschool",
                annualFee: "₹2,50,000",
                monthlyFee: "₹22,000",
                additionalCharges: "₹50,000",
                installments: "4 installments"
              },
              {
                program: "Primary",
                annualFee: "₹3,50,000",
                monthlyFee: "₹30,000",
                additionalCharges: "₹75,000",
                installments: "4 installments"
              },
              {
                program: "Middle School",
                annualFee: "₹4,50,000",
                monthlyFee: "₹38,000",
                additionalCharges: "₹1,00,000",
                installments: "4 installments"
              },
              {
                program: "High School",
                annualFee: "₹5,50,000",
                monthlyFee: "₹47,000",
                additionalCharges: "₹1,25,000",
                installments: "4 installments"
              }
            ].map((fee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-xl border border-green-200/50"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{fee.program}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600">Annual Fee</div>
                    <div className="text-2xl font-bold text-green-600">{fee.annualFee}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Monthly Fee</div>
                    <div className="text-lg font-semibold text-blue-600">{fee.monthlyFee}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Additional Charges</div>
                    <div className="text-lg text-gray-700">{fee.additionalCharges}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Installments</div>
                    <div className="text-lg text-gray-700">{fee.installments}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships & Financial Aid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Scholarships & Financial Aid
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe education should be accessible to all deserving students. Explore our scholarship opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Merit Scholarship",
                eligibility: "90%+ in previous exams",
                highlights: ["Up to 50% tuition waiver", "Renewable annually", "Academic excellence recognition"]
              },
              {
                title: "Need-Based Aid",
                eligibility: "Demonstrated financial need",
                highlights: ["Partial fee assistance", "Flexible payment plans", "Case-by-case assessment"]
              },
              {
                title: "Sports Scholarship",
                eligibility: "Exceptional athletic talent",
                highlights: ["Full/partial waiver", "Training support", "Competition opportunities"]
              },
              {
                title: "Arts Scholarship",
                eligibility: "Outstanding artistic ability",
                highlights: ["Creative talent recognition", "Resource support", "Performance opportunities"]
              }
            ].map((scholarship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{scholarship.title}</h3>
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Eligibility:</div>
                  <div className="text-green-600 font-medium">{scholarship.eligibility}</div>
                </div>
                <ul className="space-y-2">
                  {scholarship.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-6">
              Important Dates
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Application Start", date: "January 15, 2025", description: "Online applications open" },
              { title: "Application Deadline", date: "March 31, 2025", description: "Last date for submissions" },
              { title: "Entrance Exams", date: "April 15-30, 2025", description: "Assessment period" },
              { title: "Merit List Release", date: "May 15, 2025", description: "Results announcement" },
              { title: "Fee Payment", date: "May 16-31, 2025", description: "Secure admission" },
              { title: "Orientation Day", date: "June 15, 2025", description: "Welcome program" },
              { title: "Classes Begin", date: "July 1, 2025", description: "Academic year starts" },
              { title: "Late Admissions", date: "Ongoing", description: "Limited seats available" }
            ].map((date, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl shadow-lg border border-blue-200/50 text-center"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">{date.title}</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">{date.date}</div>
                <p className="text-gray-600 text-sm">{date.description}</p>
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Take the first step towards a brighter future for your child.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors duration-300 shadow-lg"
              >
                Apply Now
              </Link>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg"
              >
                Download Prospectus
              </button>
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