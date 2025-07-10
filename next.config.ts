/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/arcvantage',
  assetPrefix: '/arcvantage/',
};

export default nextConfig;
