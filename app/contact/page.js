'use client';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Contact Us</h1>
      <p className="text-gray-500 text-lg mb-10">We'd love to hear from you.</p>

      {submitted ? (
        <div className="bg-green-100 text-green-700 rounded-2xl p-8 text-center text-lg font-medium">
          ✅ Thank you! Your message has been sent.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-2xl p-8 flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" required placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" required placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea required rows={5} placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <button type="submit"
            className="bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}