import React from "react";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="TibaOnline Logo" className="h-10" />
            <span className="text-xl font-bold text-teal-600">TibaOnline</span>
          </div>
          <nav className="space-x-4">
            <a href="#services" className="text-gray-600 hover:text-teal-600">Services</a>
            <a href="#how" className="text-gray-600 hover:text-teal-600">How It Works</a>
            <a href="#about" className="text-gray-600 hover:text-teal-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-teal-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Tiba Bila Kusafiri – Healthcare at Your Fingertips</h2>
        <p className="text-lg mb-6">Consult licensed doctors and get prescriptions delivered to your phone.</p>
        <a href="https://wa.me/254705575068" target="_blank" rel="noopener noreferrer" className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
          Chat on WhatsApp
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50 text-center">
        <h3 className="text-3xl font-semibold text-teal-600 mb-6">Our Services</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">Pediatric Care</h4>
            <p>Consult certified child health professionals online.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">Maternal Health</h4>
            <p>Access antenatal, postnatal and family planning support.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">Mental Health</h4>
            <p>Speak to licensed therapists and counselors confidentially.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-16 text-center">
        <h3 className="text-3xl font-semibold text-teal-600 mb-6">How It Works</h3>
        <div className="max-w-4xl mx-auto px-4 grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-xl font-bold mb-2">Step 1</h4>
            <p>Click WhatsApp to connect with a doctor.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Step 2</h4>
            <p>Discuss your symptoms and get a diagnosis.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Step 3</h4>
            <p>Receive your prescription instantly to your phone.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16 text-center">
        <h3 className="text-3xl font-semibold text-teal-600 mb-4">About TibaOnline</h3>
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg">TibaOnline is a Kenyan-based telemedicine platform created to connect you with trusted healthcare professionals remotely. We simplify access to prescriptions, health advice, and follow-ups — all from your mobile device.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 text-center">
        <h3 className="text-3xl font-semibold text-teal-600 mb-4">Contact Us</h3>
        <p className="text-lg mb-6">Have questions? Reach us directly via WhatsApp or email.</p>
        <a href="https://wa.me/254705575068" className="text-white bg-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-700">WhatsApp Us</a>
        <p className="mt-4 text-gray-700">Email: support@tibaonline.co.ke</p>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TibaOnline. All rights reserved.
      </footer>
    </div>
  );
}
