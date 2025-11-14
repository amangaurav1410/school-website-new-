'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: ContactData) => {
    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white maple-leaf-bg relative">
      <Header />
      <div className="pt-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-navy-600 via-red-600 to-navy-600 bg-clip-text text-transparent text-center mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Get in Touch</h2>
            {submitted ? (
              <p className="text-green-600">Thank you for your message. We will get back to you soon!</p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input {...register('name', { required: true })} className="w-full p-2 border rounded" />
                  {errors.name && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} className="w-full p-2 border rounded" />
                  {errors.email && <span className="text-red-500">Valid email required</span>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Message</label>
                  <textarea {...register('message', { required: true })} className="w-full p-2 border rounded" rows={5}></textarea>
                  {errors.message && <span className="text-red-500">This field is required</span>}
                </div>
                <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Send Message</button>
              </form>
            )}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Location & Hours</h2>
            <div className="mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiA3M8KwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Staff Directory</h3>
              <ul className="space-y-2">
                <li><strong>Principal:</strong> Dr. Jane Smith - principal@maplefordschool.com</li>
                <li><strong>Admissions:</strong> Mr. John Doe - admissions@maplefordschool.com</li>
                <li><strong>General:</strong> info@maplefordschool.com</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      </div>
      <Footer />
    </div>
  );
}