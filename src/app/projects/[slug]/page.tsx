import React from 'react';
import Link from 'next/link';
import { projects } from '../../../data/projects';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-blue-600 hover:underline">← Back to Projects</Link>
      </main>
    );
  }
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/projects" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Projects</Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="flex gap-4 mb-6">
        {project.images.map((img, idx) => (
          <img key={idx} src={img} alt="Project visual" className="w-1/2 h-48 object-cover rounded-lg bg-gray-200" />
        ))}
      </div>
      <p className="mb-6 text-gray-700">{project.description}</p>
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div><strong>Type:</strong> {project.type}</div>
        <div><strong>Location:</strong> {project.location}</div>
        <div><strong>Key Materials:</strong> {project.materials}</div>
      </div>
      <div className="mb-2"><strong>Client Brief:</strong> {project.clientBrief}</div>
      <div className="mb-2"><strong>Design Challenges:</strong> {project.challenges}</div>
      <div className="mb-2"><strong>Innovative Solutions:</strong> {project.solutions}</div>
      <div className="mb-2"><strong>Final Outcome:</strong> {project.outcome}</div>
    </main>
  );
} 