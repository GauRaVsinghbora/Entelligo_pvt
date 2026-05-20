'use client';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="px-6 md:px-20 py-32 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-6">Contact Us</p>
        <h1 className="text-6xl md:text-7xl font-extrabold leading-none tracking-tight mb-8">
          Let's build something<br />
          <span className="text-gray-300">great together.</span>
        </h1>
        <p className="text-gray-500 text-xl max-w-lg">
          Reach out to schedule a strategy call or ask us anything about your project.
        </p>
      </section>

      {/* CONTENT */}
      <section className="pb-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

          {/* INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-10">Get in touch</h2>
            <div className="space-y-6 mb-12">
              {[
                {  label: 'Email', value: 'sujeetmishra@entelligo.com' },
                { label: 'Phone', value: '+91 81309 83929' },
                {  label: 'Location', value: 'Bangalore, India' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 border-b border-gray-100 pb-5">
                  
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-0.5">{c.label}</div>
                    <div className="font-medium text-sm">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
            <div className="flex gap-3 flex-wrap">
              {['LinkedIn', 'Twitter / X', 'Instagram', 'Facebook'].map((s) => (
                <span key={s}
                  className="border border-gray-200 text-gray-500 text-xs px-4 py-2 rounded-full hover:border-black hover:text-black cursor-pointer transition">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center border border-gray-100 rounded-3xl p-16">
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thanks for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-gray-100 rounded-3xl p-10 flex flex-col gap-6">
                <h3 className="text-xl font-bold">Send us a message</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">First Name</label>
                    <input type="text" required placeholder="John"
                      className="w-full border-b border-gray-200 focus:border-black outline-none py-3 text-sm bg-transparent transition placeholder-gray-300" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Last Name</label>
                    <input type="text" required placeholder="Doe"
                      className="w-full border-b border-gray-200 focus:border-black outline-none py-3 text-sm bg-transparent transition placeholder-gray-300" />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Email</label>
                  <input type="email" required placeholder="john@company.com"
                    className="w-full border-b border-gray-200 focus:border-black outline-none py-3 text-sm bg-transparent transition placeholder-gray-300" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Company</label>
                  <input type="text" placeholder="Your company name"
                    className="w-full border-b border-gray-200 focus:border-black outline-none py-3 text-sm bg-transparent transition placeholder-gray-300" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Message</label>
                  <textarea required rows={4} placeholder="Tell us about your project..."
                    className="w-full border-b border-gray-200 focus:border-black outline-none py-3 text-sm bg-transparent transition placeholder-gray-300 resize-none" />
                </div>
                <button type="submit"
                  className="bg-black text-white font-semibold py-4 px-8 rounded-full hover:bg-gray-800 transition text-sm self-start">
                  SEND MESSAGE →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}