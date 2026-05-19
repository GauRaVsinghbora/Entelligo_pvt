export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-500 text-lg mb-12">Learn who we are and what drives us.</p>

      <div className="bg-white rounded-2xl shadow p-10 mb-10">
        <h2 className="text-2xl font-bold text-indigo-600 mb-3">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          MyBrand was founded with a simple mission: make the web better for everyone.
          We are a passionate team of designers and developers who love creating beautiful,
          functional websites that leave a lasting impression.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        {[
          { value: '5+', label: 'Years Experience' },
          { value: '200+', label: 'Projects Delivered' },
          { value: '50+', label: 'Happy Clients' },
        ].map((s) => (
          <div key={s.label} className="bg-indigo-600 text-white rounded-2xl p-8">
            <div className="text-4xl font-extrabold mb-2">{s.value}</div>
            <div className="text-indigo-100">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
