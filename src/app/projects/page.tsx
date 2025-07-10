import React from 'react';
import Link from 'next/link';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Projects</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <span className="text-blue-600 font-medium">View Project →</span>
          </Link>
        ))}
      </div>
    </main>
  );
} 