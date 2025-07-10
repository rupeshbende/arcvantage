import React from 'react';
import { services } from '../../data/services';

export default function ServicesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 