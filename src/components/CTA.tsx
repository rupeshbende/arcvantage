import React from 'react';

const CTA = () => (
  <section className="py-12 bg-gradient-to-r from-blue-100 to-blue-300 flex justify-center">
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your next project?</h2>
      <p className="mb-6 text-lg text-gray-700">Contact ArcVantageDesignStudios today to discuss your vision or explore our range of services.</p>
      <div className="flex gap-4 justify-center">
        <a href="/services" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition">View Services</a>
        <a href="/contact" className="px-6 py-3 bg-white text-blue-700 border border-blue-700 rounded-lg font-semibold shadow hover:bg-blue-50 transition">Contact Us</a>
      </div>
    </div>
  </section>
);

export default CTA; 