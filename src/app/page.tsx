import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import BlogHighlights from '../components/BlogHighlights';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">About ArcVantageDesignStudios</h2>
        <p className="text-lg text-gray-700 mb-8">
          ArcVantageDesignStudios is a forward-thinking architecture studio dedicated to innovative, sustainable, and elegant design solutions. Our philosophy blends creativity, functionality, and environmental responsibility to create spaces that inspire.
        </p>
      </section>
      <FeaturedProjects />
      <Testimonials />
      <BlogHighlights />
      <CTA />
    </main>
  );
}
