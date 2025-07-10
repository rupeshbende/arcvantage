import React from 'react';
import { team } from '../../data/team';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About ArcVantageDesignStudios</h1>
      <p className="mb-6 text-lg text-gray-700">ArcVantageDesignStudios was founded with a vision to create inspiring, sustainable spaces that enrich lives and communities. Our mission is to blend creativity, functionality, and environmental responsibility in every project. We value innovation, collaboration, and integrity.</p>
      <h2 className="text-2xl font-bold mt-12 mb-6">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {team.map((member, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 bg-gray-200 object-cover" />
            <div className="font-semibold text-lg mb-1">{member.name}</div>
            <div className="text-blue-700 font-medium mb-2">{member.role}</div>
            <div className="text-gray-600 text-sm">{member.bio}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-lg">
        <span>Follow us on</span>
        <a href="https://www.instagram.com/arcvantagedesignstudios?igsh=c2RtZTd0ZDNjaHho" target="_blank" rel="noopener noreferrer" aria-label="ArcVantageDesignStudios Instagram" className="hover:text-pink-600 text-2xl">📸</a>
        <a href="https://www.instagram.com/arcvantagedesignstudios?igsh=c2RtZTd0ZDNjaHho" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline ml-1">Instagram</a>
      </div>
    </main>
  );
} 