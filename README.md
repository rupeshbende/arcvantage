# ArcVantageDesignStudios Website

A professional, modern, and fully responsive website for ArcVantageDesignStudios, an architecture design studio.

## Features
- Clean, sophisticated design reflecting architectural excellence
- Homepage with hero, featured projects, testimonials, and blog highlights
- Portfolio with detailed project pages
- Services, About, Contact, Blog, and Testimonials sections
- Fully responsive and accessible
- Easy content management via `/src/data/` files

## Getting Started

### Prerequisites
- Node.js v18+ (recommended: v24)
- npm v9+

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production
```bash
npm run build
npm start
```

## Content Management
- **Projects:** Edit `src/data/projects.ts`
- **Team:** Edit `src/data/team.ts`
- **Services:** Edit `src/data/services.ts`
- **Testimonials:** Edit `src/data/testimonials.ts`
- **Blog Posts:** Edit `src/data/blogPosts.ts`
- **Images:** Place in `public/` and reference by path

## Customization
- Update colors, fonts, and images in components and CSS as needed
- Add real project images and team headshots to `public/`
- Connect the contact form to your preferred email service

## Deployment
- Easily deploy to Vercel, Netlify, or any Node.js hosting

---

© {new Date().getFullYear()} ArcVantageDesignStudios. All rights reserved.
