import React from 'react';

const testimonials = [
  {
    quote: 'ArcVantageDesignStudios exceeded our expectations with their innovative approach and attention to detail.',
    name: 'Sarah Thompson',
    role: 'Homeowner',
  },
  {
    quote: 'Their team delivered a stunning office space that inspires creativity every day.',
    name: 'James Lee',
    role: 'CEO, LeeTech Solutions',
  },
  {
    quote: 'Professional, creative, and reliable. Highly recommended for any architectural project.',
    name: 'Priya Patel',
    role: 'Urban Planner',
  },
];

const Testimonials = () => (
  <section className="bg-gray-50 py-12 animate-fade-in">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <blockquote key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center" aria-label={`Testimonial from ${t.name}`}>
            <p className="text-lg italic mb-4 text-gray-700">“{t.quote}”</p>
            <footer>
              <div className="font-semibold text-gray-900">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 