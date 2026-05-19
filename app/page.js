import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to MyBrand</h1>
        <p className="text-xl text-indigo-100 mb-8 max-w-xl mx-auto">
          We build beautiful, fast, and modern web experiences for everyone.
        </p>
        <Link href="/contact"
          className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition">
          Get In Touch
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {[
          { icon: '⚡', title: 'Fast', desc: 'Blazing fast performance with Next.js.' },
          { icon: '🎨', title: 'Beautiful', desc: 'Styled with Tailwind CSS for clean UI.' },
          { icon: '📱', title: 'Responsive', desc: 'Looks great on all devices and screens.' },
        ].map((f) => (
          <div key={f.title} className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{f.title}</h3>
            <p className="text-gray-500">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}