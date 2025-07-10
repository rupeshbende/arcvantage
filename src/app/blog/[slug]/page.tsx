import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../../../data/blogPosts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({ params }: any) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
      </main>
    );
  }
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-gray-500 text-sm mb-6">{post.date}</div>
      <div className="text-lg text-gray-700">{post.content}</div>
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
} 