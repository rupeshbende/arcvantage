import React from 'react';

const projects = [
  {
    title: 'Modern Urban Residence',
    description: 'A sustainable home blending modern aesthetics with eco-friendly materials.',
    image: '/file.svg',
    link: '#',
  },
  {
    title: 'Downtown Office Tower',
    description: 'A commercial high-rise designed for maximum daylight and energy efficiency.',
    image: '/window.svg',
    link: '#',
  },
  {
    title: 'Riverside Cultural Center',
    description: 'A vibrant community hub celebrating local art and architecture.',
    image: '/globe.svg',
    link: '#',
  },
];

const FeaturedProjects = () => (
  <section className="max-w-6xl mx-auto px-4 py-12">
    <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <a key={idx} href={project.link} className="card group overflow-hidden">
          <img src={project.image} alt={project.title + ' thumbnail'} className="w-full h-48 object-cover bg-gray-200 group-hover:scale-105 transition-transform duration-300" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default FeaturedProjects; 