import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <span className="text-blue-600 font-medium">Read more →</span>
          </Link>
        ))}
      </div>
    </main>
  );
} 