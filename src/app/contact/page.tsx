import React from 'react';

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="mb-8">
        <div className="mb-2"><strong>Address:</strong> 123 Studio Lane, City, Country</div>
        <div className="mb-2"><strong>Phone:</strong> (123) 456-7890</div>
        <div className="mb-2"><strong>Email:</strong> info@arcvantagedesignstudios.com</div>
      </div>
      <form className="bg-white rounded-xl shadow p-6 mb-8 grid gap-4">
        <input type="text" placeholder="Your Name" className="border rounded p-2" required />
        <input type="email" placeholder="Your Email" className="border rounded p-2" required />
        <textarea placeholder="Your Message" className="border rounded p-2" rows={4} required />
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800 transition">Send Message</button>
      </form>
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-8">Google Maps Embed Placeholder</div>
      <div className="flex items-center gap-2 text-lg">
        <span>Follow us on</span>
        <a href="https://www.instagram.com/arcvantagedesignstudios?igsh=c2RtZTd0ZDNjaHho" target="_blank" rel="noopener noreferrer" aria-label="ArcVantageDesignStudios Instagram" className="hover:text-pink-600 text-2xl">📸</a>
        <a href="https://www.instagram.com/arcvantagedesignstudios?igsh=c2RtZTd0ZDNjaHho" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline ml-1">Instagram</a>
      </div>
    </main>
  );
} 