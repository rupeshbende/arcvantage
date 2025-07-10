import React from 'react';

const posts = [
  {
    title: 'Sustainable Materials in Modern Architecture',
    excerpt: 'Discover how eco-friendly materials are transforming the way we design and build.',
    link: '#',
  },
  {
    title: 'The Future of Urban Spaces',
    excerpt: 'Exploring innovative solutions for tomorrow’s cities and communities.',
    link: '#',
  },
  {
    title: 'Designing for Well-being',
    excerpt: 'How thoughtful architecture can enhance quality of life and productivity.',
    link: '#',
  },
];

const BlogHighlights = () => (
  <section className="max-w-5xl mx-auto px-4 py-12 animate-fade-in">
    <h2 className="text-2xl font-bold mb-8">From Our Blog</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {posts.map((post, idx) => (
        <a key={idx} href={post.link} className="card hover:scale-[1.03] transition-transform duration-300 p-6 block">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <span className="text-blue-600 font-medium">Read more →</span>
        </a>
      ))}
    </div>
  </section>
);

export default BlogHighlights; 