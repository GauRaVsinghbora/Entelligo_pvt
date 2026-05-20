'use client';
export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-400 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="text-white text-xl font-bold mb-4">Entelligo</div>
          <p className="text-sm leading-relaxed">
            Builds secure, scalable software products that help modern teams launch faster and grow with confidence.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Navigation</h4>
          <div className="flex flex-col gap-3 text-sm">
            <button onClick={() => scrollTo('home')} className="text-left hover:text-white transition">Home</button>
            <button onClick={() => scrollTo('about')} className="text-left hover:text-white transition">About Us</button>
            <button onClick={() => scrollTo('contact')} className="text-left hover:text-white transition">Contact</button>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Contact</h4>
          <div className="text-sm space-y-2">
            <p>sujeetmishra@entelligo.com</p>
            <p>+91 81309 83929</p>
            <p>Bangalore, India</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
        © 2026 Entelligo Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}