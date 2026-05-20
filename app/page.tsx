import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-32 max-w-6xl mx-auto">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-6 block">
          Built For Ambitious Teams
        </span>
        <h1 className="text-6xl md:text-8xl font-extrabold leading-none tracking-tight mb-8 text-black">
          Financial-grade<br />
          software<br />
          <span className="text-gray-300">engineering.</span>
        </h1>
        <p className="text-gray-500 text-xl max-w-xl leading-relaxed mb-10">
          Entelligo helps teams launch secure products, automate complex workflows, and scale confidently across web, cloud, and AI.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/contact"
            className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition text-sm">
            Schedule a Strategy Call →
          </Link>
          <Link href="/about"
            className="border border-gray-300 text-black px-8 py-4 rounded-full font-medium hover:border-black transition text-sm">
            Learn About Us
          </Link>
        </div>
        <p className="mt-10 text-sm text-gray-400">160+ founders and operators trust Entelligo</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-100">
          {[
            { value: '99.95%', label: 'Uptime across launches' },
            { value: '160+', label: 'Founders who trust us' },
            { value: '200+', label: 'Projects delivered' },
            { value: '25+', label: 'Certified developers' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-black mb-1">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">Core Capabilities</p>
          <h2 className="text-4xl font-bold mb-16 leading-tight">Build once. Scale everywhere.</h2>
          <div className="grid md:grid-cols-3 divide-x divide-gray-200 border border-gray-200">
            {[
              { num: '01', tag: 'E-Commerce', title: 'Headless storefronts that convert faster', desc: 'Lightning-fast commerce with composable architecture, modern checkout flows, and seamless integrations.', pills: ['Shopify Plus', 'Custom Design', 'Sub-second load'] },
              { num: '02', tag: 'Web Development', title: 'Custom web platforms built for scale', desc: 'Secure and responsive apps in Next.js and cloud-native stacks optimized for growth and maintainability.', pills: ['SEO Optimized', 'Mobile-first', 'CMS Integration'] },
              { num: '03', tag: 'Mobile Apps', title: 'High-performance apps for iOS & Android', desc: 'Cross-platform mobile products with native-grade interactions and smooth release pipelines.', pills: ['Cross-platform', 'Native Performance', 'App Store Ready'] },
            ].map((s) => (
              <div key={s.num} className="p-10 bg-white hover:bg-gray-50 transition group">
                <div className="flex justify-between mb-8">
                  <span className="text-4xl font-bold text-gray-100 group-hover:text-gray-200 transition">{s.num}</span>
                  <span className="text-xs tracking-widest uppercase text-gray-400">{s.tag}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 leading-snug">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.pills.map((p) => (
                    <span key={p} className="border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full">{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-semibold mb-4">Why Entelligo</p>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              High-conviction execution, from strategy to launch.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              A senior team, transparent process, and production-ready quality at every milestone.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {  title: 'Expert Team', desc: '25+ certified developers with 10+ years average experience.' },
              { title: 'Agile Process', desc: 'Transparent development with regular updates and feedback loops.' },
              { title: 'Quality Assurance', desc: 'Rigorous testing and code review processes at every stage.' },
              { title: '24/7 Support', desc: 'Ongoing maintenance and support after your product launches.' },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 border border-gray-100 rounded-2xl p-6 hover:border-black transition group">
                
                <div>
                  <h3 className="font-semibold mb-1 text-sm">{f.title}</h3>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-28 px-6 md:px-20 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-6">Ready to start?</p>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 max-w-2xl mx-auto leading-tight">
          Ready to launch your next product?
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Partner with Entelligo to design, build, and scale resilient software systems.
        </p>
        <Link href="/contact"
          className="bg-white text-black font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition text-sm inline-block">
          Schedule a Consultation →
        </Link>
      </section>

    </main>
  );
}