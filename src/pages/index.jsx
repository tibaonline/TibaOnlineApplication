Fix logo path and remove broken import

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
<img src="/logo.png" alt="TibaOnline Logo" className="h-10 w-auto" />
            <h1 className="text-2xl font-bold text-teal-600">TibaOnline</h1>
          </div>
          <nav className="space-x-6 text-sm">
            <a href="#services" className="hover:text-teal-500">Services</a>
            <a href="#how" className="hover:text-teal-500">How It Works</a>
            <a href="#about" className="hover:text-teal-500">About</a>
            <a href="#contact" className="hover:text-teal-500">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-teal-600 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Tiba Bila Kusafiri – Healthcare at Your Fingertips</h2>
        <p className="text-lg mb-6">Consult licensed doctors and get prescriptions delivered to your phone.</p>
        <a href="https://wa.me/254705575068" target="_blank" rel="noopener noreferrer" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">Chat on WhatsApp</a>
      </section>
    </div>
  );
}
