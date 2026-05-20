import Link from 'next/link';

export default function About() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="px-6 md:px-20 py-32 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-6">About Us</p>
        <h1 className="text-6xl md:text-7xl font-extrabold leading-none tracking-tight mb-8">
          Built by engineers,<br />
          <span className="text-gray-300">driven by outcomes.</span>
        </h1>
        <p className="text-gray-500 text-xl leading-relaxed max-w-xl">
          Entelligo is a software development company that builds scalable, secure, and innovative solutions that drive business growth.
        </p>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '5+', label: 'Years in Business' },
            { value: '160+', label: 'Clients Served' },
            { value: '200+', label: 'Projects Delivered' },
            { value: '25+', label: 'Expert Engineers' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-5xl font-bold text-black mb-1">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">Our Story</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              From a bold idea to<br />160+ teams served.
            </h2>
          </div>
          <div>
            <p className="text-gray-500 leading-relaxed mb-4">
              Entelligo was founded with a single conviction: that great software engineering should be accessible to every ambitious team — not just enterprises with massive budgets.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Starting with a small team of senior engineers, we've grown into a full-stack software partner trusted by founders, operators, and enterprises across e-commerce, fintech, healthcare, and SaaS.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">What Drives Us</p>
          <h2 className="text-4xl font-bold mb-16">Our core values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Outcome-first Thinking', desc: 'Every line of code is written with the business goal in mind, not just technical completeness.' },
              { icon: '🔒', title: 'Security by Default', desc: 'Financial-grade security practices baked into every project from architecture to deployment.' },
              { icon: '📈', title: 'Built to Scale', desc: "We architect systems that grow with your business — no painful rewrites at 10x traffic." },
              { icon: '🤝', title: 'Transparent Partnership', desc: "No black boxes. You always know what we're building, why, and what's next." },
              { icon: '⚡', title: 'Speed with Quality', desc: 'Agile sprints and CI/CD pipelines mean faster delivery without sacrificing reliability.' },
              { icon: '🌍', title: 'Global Reach', desc: 'Serving clients across India, North America, and Europe with a remote-first culture.' },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-black transition group">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold mb-2 text-sm">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-28 px-6 md:px-20 text-center">
        <h2 className="text-5xl font-extrabold mb-6">Want to work with us?</h2>
        <p className="text-gray-400 text-lg mb-10">Let's talk about your next big project.</p>
        <Link href="/contact"
          className="bg-white text-black font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition text-sm inline-block">
          Get in Touch →
        </Link>
      </section>

    </main>
  );
}