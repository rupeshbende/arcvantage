import React from 'react';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Testimonials</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <p className="text-lg italic mb-4 text-gray-700">“{t.quote}”</p>
            <div className="font-semibold text-gray-900">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role}</div>
          </div>
        ))}
      </div>
    </main>
  );
} 