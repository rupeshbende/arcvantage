import React from 'react';

const Hero = () => (
  <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-100 overflow-hidden rounded-b-3xl shadow-lg animate-fade-in">
    {/* Placeholder for background image or animation */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-white to-gray-300 opacity-80 z-0" />
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 drop-shadow-lg">ArcVantageDesignStudios</h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-6">Innovative. Sustainable. Elegant. Shaping the future of architecture with creativity and expertise.</p>
    </div>
  </section>
);

export default Hero; 