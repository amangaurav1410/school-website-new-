'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface FormData {
  studentName: string;
  parentContact: string;
  grade: string;
  previousSchool: string;
  specialRequirements: string;
}

export default function Admissions() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white maple-leaf-bg relative">
      <Header />
      <div className="pt-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent text-center mb-8">Admissions & Fees</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Admission Inquiry Form</h2>
          {submitted ? (
            <p className="text-green-600">Thank you for your inquiry. We will contact you soon!</p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <label className="block text-gray-700">Student Name</label>
                <input {...register('studentName', { required: true })} className="w-full p-2 border rounded" />
                {errors.studentName && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Parent Contact</label>
                <input {...register('parentContact', { required: true })} className="w-full p-2 border rounded" />
                {errors.parentContact && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Grade Applying For</label>
                <select {...register('grade', { required: true })} className="w-full p-2 border rounded">
                  <option value="">Select Grade</option>
                  <option value="Preschool">Preschool</option>
                  <option value="Elementary">Elementary</option>
                  <option value="Middle School">Middle School</option>
                  <option value="High School">High School</option>
                </select>
                {errors.grade && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Previous School</label>
                <input {...register('previousSchool')} className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Special Requirements</label>
                <textarea {...register('specialRequirements')} className="w-full p-2 border rounded" rows={3}></textarea>
              </div>
              <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Submit Inquiry</button>
            </form>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Fee Structure</h2>
          <div className="space-y-4">
            <details className="bg-gray-50 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-navy-600">Preschool</summary>
              <p className="mt-2 text-gray-700">Annual Fee: $5,000 | Monthly: $450</p>
            </details>
            <details className="bg-gray-50 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-navy-600">Elementary</summary>
              <p className="mt-2 text-gray-700">Annual Fee: $7,000 | Monthly: $600</p>
            </details>
            <details className="bg-gray-50 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-navy-600">Middle School</summary>
              <p className="mt-2 text-gray-700">Annual Fee: $9,000 | Monthly: $750</p>
            </details>
            <details className="bg-gray-50 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-navy-600">High School</summary>
              <p className="mt-2 text-gray-700">Annual Fee: $11,000 | Monthly: $950</p>
            </details>
          </div>
        </section>
      </main>
      </div>
      <Footer />
    </div>
  );
}