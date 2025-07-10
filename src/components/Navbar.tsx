import React from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => (
  <nav className="w-full bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
      <Link href="/" className="text-2xl font-bold tracking-tight text-blue-800">
        ArcVantage<span className="text-gray-700">DesignStudios</span>
      </Link>
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="text-gray-700 hover:text-blue-700 font-medium transition">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar; 