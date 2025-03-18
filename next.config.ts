import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during the build
  },
  images: {
    domains: ["assets.aceternity.com",'images.unsplash.com', 'res.cloudinary.com'], 
  },
};

export default nextConfig;
