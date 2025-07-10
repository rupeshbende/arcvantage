import React from 'react';

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/arcvantagedesignstudios?igsh=c2RtZTd0ZDNjaHho', icon: '📸' },
  { name: 'LinkedIn', href: '#', icon: '🔗' },
  { name: 'Twitter', href: '#', icon: '🐦' },
];

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 mt-12">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-lg font-semibold">ArcVantageDesignStudios</div>
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-blue-300 text-2xl" aria-label={`Follow us on ${link.name}`} target="_blank" rel="noopener noreferrer">
            <span>{link.icon}</span>
          </a>
        ))}
      </div>
      <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ArcVantageDesignStudios. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer; 